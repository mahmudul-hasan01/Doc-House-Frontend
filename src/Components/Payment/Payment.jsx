/* eslint-disable react/prop-types */
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Payment = ({price}) => {

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;