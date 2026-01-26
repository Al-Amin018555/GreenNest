import GreenExperts from '../../components/GreenExperts/GreenExperts';
import PlantCare from '../../components/PlantCare/PlantCare';
import PlantHeroSlider from '../../components/PlantHeroSlider/PlantHeroSlider';
import TopIndoorPlants from '../../components/TopIndoorPlants/TopIndoorPlants';

const Home = () => {
    return (
        <div>
            <PlantHeroSlider></PlantHeroSlider>
            <TopIndoorPlants></TopIndoorPlants>
            <PlantCare></PlantCare>
            <GreenExperts></GreenExperts>
        </div>
    );
};

export default Home;