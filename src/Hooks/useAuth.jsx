import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const useAuth = () => {
    const authInfo = useContext(AuthContext)
    return authInfo
};

export default useAuth;