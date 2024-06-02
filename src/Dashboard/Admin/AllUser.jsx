import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { MdDeleteForever, MdBrowserUpdated } from "react-icons/md";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import {Link} from 'react-router-dom'
import toast from "react-hot-toast";


const AllUser = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const [openModal, setOpenModal] = useState(false);

    const { data, refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const info = await axiosPublic.get('/users')
            return info?.data
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const role = e.target.updateRole.value
        await axiosPublic.patch(`/updateRole/${user?.email}`, { status: 'Verified', role })
        toast.success('Update Role Successfully')
        refetch()
    }

    const handleDelete =async (id) => {
        await axiosPublic.delete(`/users/${id}`)
        toast.success('Delete Successfully')
        refetch()
    }

    return (
        <div>

            <div className="overflow-x-auto ">
                <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
                    <thead>
                        <tr className="bg-[#333333] text-white">
                            <th className="py-3 px-6 text-left border-b">Name</th>
                            <th className="py-3 px-6 text-left border-b">Email</th>
                            <th className="py-3 px-6 text-left border-b">Status</th>
                            <th className="py-3 px-6  border-b text-end">Role</th>
                            <th className="py-3 px-6  border-b text-end">Update Role</th>
                            <th className="py-3 px-6  border-b text-end">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(user => <tr key={user?._id} className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border-b">{user?.name} </td>
                                <td className="py-4 px-6 border-b">{user?.email}</td>
                                <td className="py-4 px-2 border-b">{user?.status}</td>
                                <td className="py-4 px-6 border-b">{user?.role}</td>

                                <td className="py-4 px-6 border-b">
                                    <div className="mx-auto w-fit">
                                        <button onClick={() => setOpenModal(true)} className="py-2 px-2 rounded-md bg-[#07332F] text-white">
                                            Update Role
                                        </button>
                                        <div
                                            onClick={() => setOpenModal(false)}
                                            className={`fixed z-[100] flex items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 `}
                                        >
                                            <div onClick={(e_) => e_.stopPropagation()} className={`text- absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-gray-800 dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
                                                <h1 className="mb-2 text-2xl font-semibold">Make Doctor/Admin</h1>
                                                <form onSubmit={handleSubmit}>
                                                    <select name="updateRole" defaultValue={'default'} className="rounded-lg border border-[#07332fce] w-full mb-5 bg-transparent px-4 py-2 ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2">
                                                        <option disabled value={'default'}>Select a category</option>
                                                        <option value="Doctor">Doctor</option>
                                                        <option value="Admin">Admin</option>
                                                    </select>
                                                    <div className="flex justify-center mb-4">
                                                        <button className="py-2 px-4 rounded-md bg-[#07332F] text-white">Update Role</button>
                                                    </div>
                                                </form>
                                                <div className="flex justify-end">
                                                    <button onClick={() => setOpenModal(false)} className="rounded-md border border-[red] px-6 py-[6px] text-[red] duration-150 hover:bg-[red] hover:text-white">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td className="py-4 px-6 border-b text-3xl hover:text-red-600 duration-500"><MdDeleteForever onClick={() => handleDelete(user?._id)} /></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUser;