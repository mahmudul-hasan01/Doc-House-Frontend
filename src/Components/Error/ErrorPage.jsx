import { Link } from 'react-router-dom';
import image from '../../../public/404-Page-Blog-Cover.png'
const ErrorPage = () => {
    return (
        <div>
            <img className='w-full h-screen' src={image} alt="" />
            <Link className='absolute top-0 lg:top-[20%] left-[38%] md:left-[42%] lg:left-[45%] bg-yellow-500 py-2 2 px-5 rounded-lg text-white text-xl' to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;