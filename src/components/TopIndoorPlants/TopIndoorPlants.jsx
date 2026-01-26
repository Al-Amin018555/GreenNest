
import { useLoaderData } from "react-router";
import TopIndoorPlant from "../TopIndoorPlant/TopIndoorPlant";


const TopIndoorPlants = () => {
    const { topRated } = useLoaderData();
    return (
        <div className="max-w-9/12 mx-auto">
            <div>
                <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#144100]">Top Rated Indoor Plants</h2>
                <p className="text-center text-xl">Discover our top rated indoor plants, handpicked for their beauty, quality, and easy care—perfect for enhancing any indoor space.</p>
            </div>
            <div className="grid md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {topRated.map(plant => <TopIndoorPlant plant={plant} key={plant.plantId}></TopIndoorPlant>)}
            </div>
        </div>
    );
};

export default TopIndoorPlants;