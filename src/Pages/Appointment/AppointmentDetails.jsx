import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaArrowsAltH } from "react-icons/fa";
import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const AppointmentDetails = () => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { id } = useParams()
    console.log(id);
    const [rating, setRating] = useState(0);
    const [feedbacks, setFeedback] = useState([])
    // const data = useLoaderData()
    // console.log(data);
 
    const { data } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const info = await axiosPublic.get(`/doctor/${id}`)
            return info?.data
        }
    })
    console.log(data);
    // /gadgets/category?name=${name?.name}
    axiosPublic.get(`/feedback?name=${data?.name}`)
        .then(res => setFeedback(res.data))

    const handleFeedback = async (e) => {
        e.preventDefault()
        const feedback = e.target.feedback.value
        const feedbackData = {
            doctorName: data?.name,
            name: user?.displayName,
            photo: user?.photoURL,
            feedback: feedback,
            rating: rating,
            date: new Date()
        }
        await axiosPublic.post('/feedback', feedbackData)
        toast.success('Feedback Add Successfully')
    }

    return (
        <div className="pt-32">
            <div>
                <div className="flex gap-80">
                    <div className="flex gap-4 items-center">
                        <div>
                            <img className="w-80 rounded-md" src={data?.image} alt="" />
                        </div>
                        <div className="space-y-5">
                            <p className="py-2 px-4 bg-[#5DAABE] text-white rounded-md">{data?.specialty}</p>
                            <h6 className="text-sm md:text-base lg:text-lg">{data?.name} </h6>
                            <p className="flex items-center gap-3 text-xl"><FaStar className="text-yellow-400" /> {data?.rating}</p>
                        </div>
                    </div>

                    <div className="w-72 p-6 rounded-md bg-slate-100 space-y-5">
                        <div className="flex justify-between">
                            <p>Price:-</p>
                            <p className="font-bold">{data?.price} BDT</p>
                        </div>
                        <p className="font-bold">Available Time:</p>
                        <div className="flex justify-between">
                            <p>{data?.availableDate}:</p>
                            <div className="flex items-center gap-2">
                                <p>{data?.availableTimeStart}</p>
                                {/* <FaArrowsAltH /> */} -
                                <p>{data?.availableTimeEnd}</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="py-2 px-4 bg-[#07332F] rounded-md text-white">Book Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="mt-7">
                    <Tabs className={'text-center'}>
                        <TabList>
                            <Tab>About</Tab>
                            <Tab>Feedback</Tab>
                        </TabList>

                        <TabPanel className={'text-start'}>
                            <h1 className="my-5 font-semibold">About Of <span className="text-[#30a5c2] ">{data?.name}</span></h1>
                            <p>{data?.about}</p>
                            <div className="mt-5 space-y-2">
                                <h1 className="font-bold">Education</h1>
                                <div className="flex items-center gap-2">
                                    <p>{data?.startDate}</p>
                                    <FaArrowsAltH />
                                    <p>{data?.endDate}</p>
                                </div>
                                <p className="text-[#30a5c2]">{data?.education}</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="flex">
                                <div className="flex-1 space-y-4">
                                    <h2 className="font-semibold mt-10">How would you rate the overall exprience</h2>
                                    <form onSubmit={handleFeedback}>
                                        <div className={'flex justify-center'}>
                                            <Rating
                                                style={{ maxWidth: 180 }}
                                                value={rating}
                                                onChange={setRating}
                                                isRequired
                                            />
                                        </div>
                                        <p className="font-semibold py-4">Share your feedback or suggestions</p>
                                        <input name={'feedback'} type="text" placeholder="Feedback" className="rounded-lg border border-[#07332fce] w-[400px] h-[100px] pl-4 bg-transparent ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2 mb-5" />
                                        <div className="flex justify-center">
                                            <button className="py-3 px-5 bg-[#07332f] text-white rounded-md">Submit Feedback</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex-1 text-start space-y-7 mt-10">
                                    {
                                        feedbacks?.map(feedback => <div key={feedback._id}>
                                            <div className="flex justify-between items-center">
                                                <div className="flex gap-6">
                                                    <img width={40} height={40} className="size-10 rounded-full bg-slate-500 object-cover duration-500 hover:scale-x-[98%] hover:opacity-80" src={feedback?.photo} alt="avatar drop down navigate ui" />
                                                    <div>
                                                        <h1>{feedback?.name}</h1>
                                                        <p>{feedback?.date}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Rating
                                                        style={{ maxWidth: 120 }}
                                                        value={feedback?.rating}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <p className="py-5 pl-16">{feedback?.feedback}</p>
                                            <hr />
                                        </div>)
                                    }
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDetails;