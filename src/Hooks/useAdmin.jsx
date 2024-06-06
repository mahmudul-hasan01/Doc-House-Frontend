import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { data: isAdmin = [] } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const info = await axiosPublic.get(`/users/admin/${user?.email}`)
            return info?.data?.admin
        }
    })
    return { isAdmin }
};

export default useAdmin;