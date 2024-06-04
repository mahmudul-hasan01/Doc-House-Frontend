import image from '../../../assets/Rectangle 10.png'
import image1 from '../../../assets/Rectangle 20078.png'

const OurService = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 justify-center space-y-4 items-center mt-5 lg:mt-10 p-7 lg:px-20'>
            <div className='flex-1'>
                <img className='h-[750px] w-full lg:w-11/12 ' src={image1} alt="" />
            </div>
            <div className='flex-1 space-y-4'>
                <h1 className='text-black text-4xl font-bold'>Our Services</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                {/* <div className='flex gap-4'>
                    <button className='bg-[#F7A582] btn'>Cavity Protection</button>
                    <button className='btn bg-[#F7A582]'>Cosmetic Dentisty</button>
                    <button className='btn bg-[#F7A582]'>Oral Surgery</button>
                </div> */}
                <img src={image} alt="" />
                <h1 className='text-black text-[30px] font-bold'>Electro  Gastrology Therapy</h1>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error
                </p>
                <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <button className='px-4 py-2 rounded-md border border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white duration-500'>More Details</button>
            </div>
        </div>
    );
};

export default OurService;