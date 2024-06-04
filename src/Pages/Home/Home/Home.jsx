import Banner from "../Banner/Banner";
import OurLocations from "../OurLocations/OurLocations";
import OurService from "../OurService/OurService";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <OurLocations></OurLocations>
        </div>
    );
};

export default Home;