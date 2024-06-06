import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { MdBrowserUpdated, MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllDoctor = () => {

    const axiosPublic = useAxiosPublic()

    const { data, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const info = await axiosPublic.get('/doctors')
            return info?.data
        }
    })

    const handleDelete = async (id) => {
        await axiosPublic.delete(`/doctor/${id}`)
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
                        <th className="py-3 px-6 text-left border-b">Education</th>
                        <th className="py-3 px-6 text-left border-b">Price</th>
                        <th className="py-3 px-6  border-b text-end">Update</th>
                        <th className="py-3 px-6  border-b text-end">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(doctor => <tr key={doctor?._id} className="hover:bg-gray-50 transition duration-300">
                            <td className="py-4 px-6 border-b"><img className="w-10 h-10 rounded-full" src={doctor?.image} alt="" /></td>
                            <td className="py-4 px-6 border-b">{doctor?.name} </td>
                            <td className="py-4 px-6 border-b">{doctor?.education}</td>
                            <td className="py-4 px-2 border-b">{doctor?.price} BDT</td>

                            <td className="py-4 px-6 border-b flex justify-end text-3xl hover:text-[#07332F] duration-500"><Link to={`/dashboard/updateUser/${doctor?._id}`}><MdBrowserUpdated /></Link></td>

                            <td className="py-4 pl-16 border-b  text-3xl hover:text-red-600 duration-500"><MdDeleteForever onClick={() => handleDelete(doctor?._id)} /></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllDoctor;