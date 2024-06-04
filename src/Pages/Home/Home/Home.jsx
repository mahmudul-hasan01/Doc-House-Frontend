import Banner from "../Banner/Banner";
import ContactWithUs from "../ContactWithUs/ContactWithUs";
import OurLocations from "../OurLocations/OurLocations";
import OurService from "../OurService/OurService";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <OurLocations></OurLocations>
            <ContactWithUs></ContactWithUs>
        </div>
    );
};

export default Home;