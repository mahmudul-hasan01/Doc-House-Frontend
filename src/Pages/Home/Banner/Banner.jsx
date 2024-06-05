import img1 from '../../../assets/BannerDoctro/beautiful-young-female-doctor-looking-camera-office.jpg'
import img2 from '../../../assets/BannerDoctro/doctor-with-his-arms-crossed-white-background.jpg'
import img3 from '../../../assets/BannerDoctro/general-practitioner-with-stethoscope-shoulders-holding-digital-tab-looking-camera.jpg'

const Banner = () => {
    return (
        <div className="h-[670px] md:h-[780px] lg:h-screen relative w-full bg-[#07332F] text-white flex px-10 lg:items-center">
            {/* Text */}
            <div className='md:w-4/5 mx-auto lg:mx-0 lg:w-1/2 space-y-6 pt-28 text-center lg:text-start'>
                <h1 className='text-3xl lg:text-6xl'>Your Best Medical <br /> Help Center</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsum ad earum eligendi eum necessitatibus.</p>
                <button className='px-4 py-2 rounded-lg bg-[#F7A582]'>All Service</button>
            </div>
            {/* Image */}
            <div>

                <img className='w-32 h-40 md:w-44 md:h-60 xl:w-56 xl:h-72 absolute top-[400px] right-56 md:top-[400px] md:right-[420px] lg:top-28 lg:right-80 xl:top-40 xl:right-96 z-20 rounded-lg border-4 border-[#F7A582]' src={img2} alt="" />

                <img className='w-32 h-40 md:w-44 md:h-60 xl:w-56 xl:h-72 absolute top-[480px] right-36 md:top-[510px] md:right-[320px] lg:top-44 lg:right-52 xl:top-64 xl:right-60 z-30 rounded-lg border-4 border-[#F7A582]' src={img1} alt="" />

                <img className='w-32 h-40 md:w-44 md:h-60 xl:w-56 xl:h-72 absolute top-[380px] right-16 md:right-[190px] lg:top-24 lg:right-20 xl:top-32 xl:right-20 z-40 rounded-lg border-4 border-[#F7A582]' src={img3} alt="" />

            </div>

        </div>
    );
};

export default Banner;