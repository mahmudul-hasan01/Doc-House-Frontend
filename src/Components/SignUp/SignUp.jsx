import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import loginImage from '../../../public/loginImage.json'
import Lottie from "lottie-react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form"


const SignUp = () => {

    const { signUp, loading } = useAuth()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        await signUp(data?.email, data?.password)
        navigate('/')
    }



    return (
        <div className="w-80 md:w-96 lg:w-[900px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">

            <div className="flex-1 h-screen bg-[#07332F]">
                <Lottie className="pt-40" animationData={loginImage} />
            </div>

            {/* login form */}
            <div className={`px-8 flex-1 w-full mr-0 ml-auto duration-500 `}>
                <h1 className="backdrop-blur-sm text-2xl lg:text-4xl text-center font-semibold">SignUp</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    <label htmlFor="_name" className="block">Name</label>
                    <input id="_name" type="text" {...register("name")} placeholder="Name" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />

                    <label htmlFor="_email" className="block">Email</label>
                    <input id="_email" type="email" {...register("email")} placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />

                    <label htmlFor="_password" className="block">Password</label>
                    <input id="_password" type="password" {...register("password")} placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <input type="file" {...register("image")} />
                    <button type="submit" className="py-2 px-5 mx-auto mt-8 shadow-lg border rounded-md border-black block hover:bg-[#07332F] hover:text-white duration-500">
                        {
                            loading ?
                            <div className="w-10 h-5 flex gap-2 items-center justify-center"><div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-[#07332F]"></div><div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-[#07332F]"></div><div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-[#07332F]"></div></div>
                            :
                            'SingUp'
                        }
                    </button>
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