import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";

const ManageAppointment = () => {

    const axiosPublic = useAxiosPublic()

    const { data, refetch } = useQuery({
        queryKey: ['manageAppointment'],
        queryFn: async () => {
            const info = await axiosPublic.get('/appointments')
            return info?.data
        }
    })

    const handleDelete =async (id) => {
        await axiosPublic.delete(`/appointment/${id}`)
        toast.success('Delete Successfully')
        refetch()
    }

    return (
        <div className="overflow-x-auto ">
        <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
            <thead>
                <tr className="bg-[#333333] text-white">
                    <th className="py-3 px-6 text-left border-b">Photo</th>
                    <th className="py-3 px-6 text-left border-b">Name</th>
                    <th className="py-3 px-6 text-left border-b">Email</th>
                    <th className="py-3 px-6 text-left border-b">Status</th>
                    <th className="py-3 px-6 text-left border-b">Price</th>
                    <th className="py-3 px-6 text-left border-b">Time</th>
                    <th className="py-3 px-6  border-b text-end">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map(info => <tr key={info?._id} className="hover:bg-gray-50 transition duration-300">
                        <td className="py-4 px-6 border-b"><img className="w-10 h-10 rounded-full" src={info?.image} alt="" /></td>
                        <td className="py-4 px-6 border-b">{info?.doctorName} </td>
                        <td className="py-4 px-6 border-b">{info?.email}</td>
                        <td className="py-4 px-6 border-b">{info?.status}</td>
                        <td className="py-4 px-3 border-b">{info?.price} BDT</td>
                        <td className="py-4 px-2 border-b">
                            <div className="flex items-center gap-2">
                                <p>{info?.startDate}</p>
                                {/* <FaArrowsAltH /> */} -
                                <p>{info?.endDate}</p>
                            </div>
                        </td>
                        <td className="py-4 px-6 border-b text-3xl hover:text-red-600 duration-500"><MdDeleteForever onClick={() => handleDelete(info?._id)} /></td>
                    </tr>)
                }

            </tbody>
        </table>
    </div>
    );
};

export default ManageAppointment;