import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";

const Profile = () => {

    const { user, logout } = useAuth()
    const [openModal, setOpenModal] = useState(false);
    const axiosPublic = useAxiosPublic()

    const { data } = useQuery({
        queryKey: [`user,${user?.email}`],
        queryFn: async () => {
            const info = await axiosPublic.get(`/users/${user?.email}`)
            return info?.data
        }
    })

    const handleSubmit =async (e) => {
        e.preventDefault()
        const status = e.target.updateRole.value
        const info = await axiosPublic.patch(`/requestRole/${user?.email}`, {status})
        console.log(info);
    }

    return (
        <div className="pt-32 mb-12">
            <div className=" mx-auto flex flex-col items-center justify-center md:flex-row">
                <div className="group relative  sm:w-[350px]">
                    <img className="h-[350px] w-[350px] scale-105 transform rounded-lg bg-black/70" src={user?.photoURL} alt="card navigate ui" />
                    <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]"><svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="style=linear"><g id="add"><path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path><path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path></g></g></g></svg></span>
                    <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
                    <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
                </div>
                <div className="min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                    <div className="space-y-1">
                        <h2 className="text-center font-sans text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-3xl">{data?.name}</h2>
                        <p className="font-sans text-gray-500 dark:text-white/70 font-semibold"> {data?.email}</p>
                        <p className="font-sans text-gray-500 dark:text-white/70 font-semibold">Role: {data?.role ? data?.role : '.......'}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 items-center justify-between">
                        {/* <div className="space-y-1">
                            <button className="py-2 px-4 rounded-md bg-[#07332F] text-white">Make Doctor</button>
                        </div> */}
                        {/* update profile */}
                        <div className="mx-auto w-fit">
                            <button onClick={() => setOpenModal(true)} className="py-2 px-4 rounded-md bg-[#07332F] text-white">
                                Make Doctor
                            </button>
                            <div
                                onClick={() => setOpenModal(false)}
                                className={`fixed z-[100] flex items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
                            >
                                <div onClick={(e_) => e_.stopPropagation()} className={`text- absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-gray-800 dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
                                    <h1 className="mb-2 text-2xl font-semibold">Make Doctor/Admin</h1>
                                    <form onSubmit={handleSubmit}>
                                        <select name="updateRole" defaultValue={'default'} className="rounded-lg border border-[#07332fce] w-full mb-5 bg-transparent px-4 py-2 ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2">
                                            <option disabled value={'default'}>Select a category</option>
                                            <option value="R-Doctor">Request For Doctor</option>
                                            <option value="R-Admin">Request For Admin</option>
                                        </select>
                                        <button className="py-2 px-4 mb-3 rounded-md bg-[#07332F] text-white">Requested</button>
                                    </form>
                                    {/* <p className="mb-5 text-sm opacity-80">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p> */}
                                    <div className="flex justify-end">
                                        {/* <button onClick={() => setOpenModal(false)} className="me-2 rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-[6px] text-white">
                                            Ok
                                        </button> */}
                                        <button onClick={() => setOpenModal(false)} className="rounded-md border border-[red] px-6 py-[6px] text-[red] duration-150 hover:bg-[red] hover:text-white">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <button className="py-2 px-4 rounded-md bg-[#07332F] text-white">Update Profile</button>
                        </div>
                    </div>
                    <button onClick={logout} className="rounded-full border border-[red] px-4 py-2 text-sm text-[red] hover:bg-[red] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[red] dark:hover:drop-shadow-[0px_0px_2px_red]">Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;