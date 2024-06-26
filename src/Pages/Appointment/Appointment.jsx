import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaStar } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Appointment = () => {

    const axiosPublic = useAxiosPublic()

    const { data } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const info = await axiosPublic.get('/doctors')
            return info?.data
        }
    })
    
    return (
        <div className="pt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
            {
                data?.map(item => <div key={item._id} className="mx-auto max-w-[350px] space-y-6 rounded-xl bg-white px-4 pb-8 pt-4 font-sans shadow-lg ">
                <div className="relative flex h-48 w-full justify-center lg:h-[280px]">
                    <img width={300} height={300} className="h-full w-full rounded-lg bg-black/40" src={item?.image} alt="image" />
                </div>
                <div className=" space-y-3 font-semibold">
                    <h6 className="text-sm md:text-base lg:text-lg">{item?.name} </h6>
                    <div className="flex justify-between">
                        <p className="py-2 px-4 bg-[#F7A582] text-white rounded-md">{item?.specialty}</p>
                        <p className="flex items-center gap-3 text-xl"><FaStar className="text-yellow-400" /> {item?.rating}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <p>At Mount Adora Hospital, Dhaka</p>
                    <Link to={`/appointment/details/${item?._id}`} className="rounded-lg text-5xl font-sans font-semibold duration-700 hover:scale-105 "><IoArrowForwardCircleOutline className="hover:text-[#F7A582]" /></Link>
                </div>
            </div>)
            }
            
        </div>
    );
};

export default Appointment;