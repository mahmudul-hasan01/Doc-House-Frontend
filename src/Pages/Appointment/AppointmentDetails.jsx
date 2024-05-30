import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaArrowsAltH } from "react-icons/fa";

const AppointmentDetails = () => {

    const axiosPublic = useAxiosPublic()
    const { id } = useParams()

    const { data } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const info = await axiosPublic.get(`/doctor/${id}`)
            return info?.data
        }
    })
    console.log(data);


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
                    <Tabs>
                        <TabList>
                            <Tab>About</Tab>
                            <Tab>Feedback</Tab>
                        </TabList>

                        <TabPanel>
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
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDetails;