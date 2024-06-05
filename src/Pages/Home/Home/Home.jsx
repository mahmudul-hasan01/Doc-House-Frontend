import Banner from "../Banner/Banner";
import OurLocations from "../OurLocations/OurLocations";
import OurService from "../OurService/OurService";
import PatientsReview from "../PatientsReview/PatientsReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <OurLocations></OurLocations>
            <PatientsReview></PatientsReview>
        </div>
    );
};

export default Home;