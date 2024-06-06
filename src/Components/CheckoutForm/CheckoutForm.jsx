import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ price, doctorName, image, startDate, endDate }) => {

    const { user } = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const [clientSecret, setClientSecret] = useState()

    useEffect(() => {
        if (price > 0) {
            axiosPublic.post(`/payment-intent`, { price: price })
                .then(res => {
                    setClientSecret(res?.data?.clientSecret)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            toast.error(error.message)
            console.log(error.message);

        } else {
            // toast.success("Payment Done", paymentMethod?.id)
            console.log(paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError);
        } else {
            if (paymentIntent.status === 'succeeded') {
                toast.success(paymentIntent?.id)
                const payment = {
                    email: user?.email,
                    price: price,
                    transactionId: paymentIntent.id,
                    doctorName: doctorName,
                    image: image,
                    startDate: startDate,
                    endDate: endDate,
                    status: 'Appointment'
                }
                const res = await axiosPublic.post('/payment', payment)
                console.log(res?.data);
                if (res?.data?.insertedId) {
                    toast.success('Payment Successfully')
                    // navigate('/dashboard/paymentHistory')
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="flex justify-center">
                <button className="py-2 px-4 bg-[#07332F] rounded-md text-white mt-8" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;