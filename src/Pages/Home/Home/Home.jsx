import Banner from "../Banner/Banner";
import OurLocations from "../OurLocations/OurLocations";
import OurService from "../OurService/OurService";
import PatientsReview from "../PatientsReview/PatientsReview";
import PatientsSays from "../PatientsSays/PatientsSays";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <OurLocations></OurLocations>
            <PatientsSays></PatientsSays>
            <PatientsReview></PatientsReview>
        </div>
    );
};

export default Home;