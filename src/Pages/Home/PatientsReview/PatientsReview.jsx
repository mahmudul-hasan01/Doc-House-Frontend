import logo1 from '../../../assets/Frame (2).png'
import logo2 from '../../../assets/Frame (1).png'
import { Rating } from '@smastrom/react-rating';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const PatientsReview = () => {


    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [rating, setRating] = useState(0);

    const handleReview = async (e) => {
        e.preventDefault()
        const review = e.target.review.value
        const reviewData = {
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
            review: review,
            rating: rating
        }
        await axiosPublic.post('/review', reviewData)
        toast.success('Review Add Successfully')
    }

    return (
        <div className='flex flex-col md:flex-row justify-center md:items-center rounded-lg p-20 gap-4 bg-[#07332F] h-[850px] md:h-[500px] w-[95%] mx-auto space-y-5'>
            <div className='md:flex-1 text-white space-y-3'>
                <h1 className="text-3xl text-white font-bold">Patients Review</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <div className='flex items-center gap-3'>
                    <img src={logo1} alt="" />
                    <p>+88 01750 14 14 14</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={logo2} alt="" />
                    <p>Dhanmondi, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='md:flex-1'>
                <form onSubmit={handleReview} className='space-y-5'>
                    <div className="flex-1 space-y-4">
                        <h2 className="font-semibold text-xl mt-10 text-white ">Give your valuable review about our hospital</h2>
                        <div className={'mb-4'}>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                onChange={setRating}
                                isRequired
                            />
                        </div>
                        <input name={'review'} type="text" placeholder="Review" className="rounded-lg border text-white border-[#F7A582] w-full h-[100px] pl-4 bg-transparent ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2 mb-5" />
                        <button type='submit' className='py-2 rounded-md bg-[#F7A582] w-full mt-6 text-white'>Reviews</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PatientsReview;