import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const MyReview = () => {

    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()

    const { data, refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const info = await axiosPublic.get(`/review/${user?.email}`)
            return info?.data
        }
    })

    const handleDelete = async (id) => {
        await axiosPublic.delete(`/review/${id}`)
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
                        <th className="py-3 px-6 text-left border-b">Rating</th>
                        <th className="py-3  border-b ">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(info => <tr key={info?._id} className="hover:bg-gray-50 transition duration-300">
                            <td className="py-4 px-6 border-b"><img className="w-10 h-10 rounded-full" src={info?.photo} alt="" /></td>
                            <td className="py-4 px-6 border-b">{info?.name} </td>
                            <td className="py-4 px-6 border-b">{info?.email} </td>
                            <td className="py-4 px-6 border-b">{info?.rating} </td>
                            <td className="py-4 px-6 border-b text-3xl hover:text-red-600 duration-500"><MdDeleteForever onClick={() => handleDelete(info?._id)} /></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyReview;