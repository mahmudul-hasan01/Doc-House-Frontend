import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import loginImage from '../../../public/loginImage.json'
import Lottie from "lottie-react";
import useAuth from "../../Hooks/useAuth";


const SignUp = () => {

    const [register, setRegister] = useState(false);
    const {signUp} = useAuth()

    

    return (
        <div className="w-80 md:w-96 lg:w-[900px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">

            <div className="flex-1 h-screen bg-[#07332F]">
                <Lottie className="pt-40" animationData={loginImage} />
            </div>

            {/* login form */}
            <div className={`px-8 flex-1 w-full mr-0 ml-auto duration-500 ${register ? 'lg:translate-x-full hidden lg:block' : ''}`}>
                <h1 className="backdrop-blur-sm text-2xl lg:text-4xl text-center font-semibold">SignUp</h1>
                <form className="space-y-5">

                    <label htmlFor="_name" className="block">Name</label>
                    <input id="_name" type="text" placeholder="Name" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />

                    <label htmlFor="_email" className="block">Email</label>
                    <input id="_email" type="email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />

                    <label htmlFor="_password" className="block">Password</label>
                    <input id="_password" type="password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <input type="file"  />
                    <button type="button" className="py-2 px-5 mx-auto mt-8 shadow-lg border rounded-md border-black block hover:bg-[#07332F] hover:text-white duration-500">SignUp</button>
                </form>

                {/* button type will be submit for handling form submission*/}
                <p className="text-center py-2">You have an account?<Link to={'/login'} className="underline font-semibold hover:text-[#07332F]">Login</Link></p>
                <hr />
                <button type="button" className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black hover:bg-[#07332F] hover:text-white duration-500"><FcGoogle className="w-6 inline-block mr-3" /> Continue with Google</button>
            </div>

        </div>
    );
};

export default SignUp;