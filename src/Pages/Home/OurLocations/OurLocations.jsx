import image1 from '../../../assets/Frame.png'
import image2 from '../../../assets/Frame (1).png'
import image3 from '../../../assets/Frame (2).png'

const OurLocations = () => {
    return (
        <div className="my-5 space-y-5 lg:my-10 flex flex-col lg:flex-row items-center lg:items-end justify-evenly">
            <div className="flex items-center justify-center rounded-md text-white gap-3 w-[350px] h-[200px] md:w-[400px] md:h-[250px] ] lg:w-[300px] lg:h-[150px] bg-[#07332F]">
                <img className='w-[50px] h-[50px]' src={image1} alt="" />
                <div>
                    <h1 className='text-2xl mb-2'>Opening Hours</h1>
                    <p>Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>
            </div>
            <div className="flex items-center justify-center rounded-md text-white gap-3 w-[350px] h-[200px] md:w-[400px] md:h-[250px] ] lg:w-[300px] lg:h-[150px] bg-[#F7A582]">
                <img className='w-[50px] h-[50px]' src={image2} alt="" />
                <div>
                    <h1 className='text-2xl mb-2'>Our Locations</h1>
                    <p>Dhanmondi 17, Dhaka -1200, <br /> Bangladesh</p>
                </div>
            </div>
            <div className="flex items-center justify-center rounded-md text-white gap-3 w-[350px] h-[200px] md:w-[400px] md:h-[250px] ] lg:w-[300px] lg:h-[150px] bg-[#07332F]">
                <img className='w-[50px] h-[50px]' src={image3} alt="" />
                <div>
                    <h1 className='text-2xl mb-2'>Contact Us</h1>
                    <p>+88 01750 00 00 00 <br /> +88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    );
};

export default OurLocations;