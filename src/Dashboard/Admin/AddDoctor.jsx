import { useForm } from "react-hook-form";
// import { FaUtensils } from "react-icons/fa6";
import axios from 'axios'
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from 'react-hot-toast';

const AddDoctor = () => {

    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const doctorData = {
            name: data?.name,
            specialty: data?.specialty,
            education: data?.education,
            startDate: data?.startDate,
            endDate: data?.endDate,
            availableDate: data?.availableDate,
            availableTimeStart: data?.availableTimeStart,
            availableTimeEnd: data?.availableTimeEnd,
            price: data?.price,
            rating: data?.rating,
            about: data?.about,
            image: res?.data?.data?.display_url

        }
        if (res?.data?.success) {
            const doctorInfo = await axiosPublic.post('/doctors', doctorData)
            if (doctorInfo.data.insertedId) {
                toast.success(`${data.neme} add successfully`)
                reset()
            }
        }

    }


    return (
        <div>
            <p className="text-center text-4xl mb-4">Add Doctor Information</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* 11111111 */}
                <div className="flex gap-5">
                    <label className="w-full">
                        <div>
                            <span >Doctor Name*</span>
                        </div>
                        <input {...register("name")} type="text" placeholder="Name" className="rounded-lg border border-[#07332fce] w-full  bg-transparent px-4 py-2  ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2" />
                    </label>

                    <label className="form-control w-full">
                        <div>
                            <span >Specialty*</span>
                        </div>
                        <select {...register("specialty")} defaultValue={'default'} className="rounded-lg border border-[#07332fce] w-full  bg-transparent px-4 py-2 ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2">
                            <option disabled value={'default'}>Select a category</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Gastroenterologist">Gastroenterologist</option>
                            <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                            <option value="Pediatrician">Pediatrician</option>
                            <option value="Endocrinologist">Endocrinologist</option>
                            <option value="Hepatologist">Hepatologist</option>
                            <option value="Oncologist">Oncologist</option>
                        </select>
                    </label>
                </div>
                {/* 222222222 */}
                <div className="flex gap-5">
                    <label className="w-full">
                        <div>
                            <span >Education*</span>
                        </div>
                        <input {...register("education")} type="text" placeholder="Education" className="rounded-lg border border-[#07332fce] w-full  bg-transparent px-4 py-2 ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2" />
                    </label>

                    <label className="w-full">
                        <div>
                            <span >Start Date*</span>
                        </div>
                        <input {...register("startDate")} type="date" className="rounded-lg border border-[#07332fce] w-full  bg-transparent px-4 py-2  ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2" />
                    </label>
                    <label className="w-full">
                        <div>
                            <span >End Date*</span>
                        </div>
                        <input {...register("endDate")} type="date" placeholder="Education" className="rounded-lg border border-[#07332fce] w-full  bg-transparent px-4 py-2  ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2" />
                    </label>
                </div>
                {/* 33333333 */}
                <div className="flex justify-between gap-5">
                    <div className="flex-1 ">
                        {/* 111111 */}
                        <label>
                            <div>
                                <span >Available Date*</span>
                            </div>
                            <input {...register("availableDate")} type="text" placeholder="Friday-Thursday" className="rounded-lg border border-[#07332fce] w-full  bg-transparent px-4 py-2 ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2" />
                        </label>
                    </div>
                    <div>
                        {/* 111111 */}
                        <label>
                            <div>
                                <span >Available Time Start*</span>
                            </div>
                            <input {...register("availableTimeStart")} type="time" placeholder="Available Time" className="rounded-lg border border-[#07332fce] w-full  bg-transparent px-4 py-2 ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2" />
                        </label>
                    </div>
                    <div>
                        {/* 111111 */}
                        <label>
                            <div>
                                <span >Available Time End*</span>
                            </div>
                            <input {...register("availableTimeEnd")} type="time" placeholder="Available Time" className="rounded-lg border border-[#07332fce] w-full  bg-transparent px-4 py-2 ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2" />
                        </label>
                    </div>
                </div>
                {/* 444444444 */}
                <div className="flex gap-5">
                    <label className="w-full">
                        <div>
                            <span >Price*</span>
                        </div>
                        <input {...register("price")} type="number" placeholder="Price" className="rounded-lg border border-[#07332fce] w-full  bg-transparent px-4 py-2 ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2" />
                    </label>

                    <label className="w-full">
                        <div>
                            <span >Rating*</span>
                        </div>
                        <input {...register("rating")} type="text" placeholder="Rating" className="rounded-lg border border-[#07332fce] w-full  bg-transparent px-4 py-2  ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2" />
                    </label>
                </div>
                {/* 55555555 */}
                <div>
                    <label className="w-full">
                        <div>
                            <span >About*</span>
                        </div>
                        <input {...register("about")} type="text" placeholder="About" className="rounded-lg border border-[#07332fce] w-full  bg-transparent px-4 py-10  ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-2 mb-5" />
                    </label>
                    <input className="border border-[#07332f] rounded-md" type="file" {...register("image")} />
                </div>
                <div className="flex justify-center">
                    <button className="py-3 px-5 bg-[#07332f] text-white rounded-md">Add Doctor</button>
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;