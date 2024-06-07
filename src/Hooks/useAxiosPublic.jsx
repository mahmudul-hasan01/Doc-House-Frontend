import axios from "axios";

const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        // baseURL: 'http://localhost:5000'
        baseURL: 'https://back-end-seven-ruddy.vercel.app'
    })
    return axiosPublic
};

export default useAxiosPublic;