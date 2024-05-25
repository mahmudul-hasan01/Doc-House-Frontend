import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import loginImage from '../../../public/loginImage.json'
import Lottie from "lottie-react";

const Login = () => {

    const [register, setRegister] = useState(false);

    return (
        <div className="w-80 md:w-96 lg:w-[900px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">

            <div className="flex-1 hidden lg:block h-screen bg-[#07332F]">
                <Lottie className="pt-40" animationData={loginImage} />
            </div>

            {/* login form */}
            <form className={`p-8 flex-1 w-full mr-0 ml-auto duration-500 ${register ? 'lg:translate-x-full hidden lg:block' : ''}`}>
                <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4 text-center font-semibold">Login</h1>
                <div className="space-y-5">
                    <label htmlFor="_email" className="block">Email</label>
                    <input id="_email" type="email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <label htmlFor="_password" className="block">Password</label>
                    <input id="_password" type="password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                </div>
                {/* button type will be submit for handling form submission*/}
                <button type="button" className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block hover:bg-[#07332F] hover:text-white duration-500">Login</button>
                <p className="mb-3 text-center">Don&apos;t have an account?<Link to={'/signUp'} className="underline font-semibold hover:text-[#07332F]">SignUp</Link></p>
                <hr />
                <button type="button" className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black hover:bg-[#07332F] hover:text-white duration-500"><FcGoogle className="w-6 inline-block mr-3" /> Continue with Google</button>
            </form>

        </div>
    );
};

export default Login;