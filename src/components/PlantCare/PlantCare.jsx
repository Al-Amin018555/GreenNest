import { useLoaderData } from "react-router";
import PlantCareCard from "../PlantCareCard/PlantCareCard";

const PlantCare = () => {
    const { plantCare } = useLoaderData();
    return (
        <div className="max-w-9/12 mx-auto">
            <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#144100]">Plant Care Tips</h2>
            <p className="text-center text-xl">Easy plant care tips designed to help your indoor plants grow healthy, strong, and full of life.</p>

            <div className="grid md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {plantCare.map(plant => <PlantCareCard plant={plant} key={plant.tipId}></PlantCareCard>)}
            </div>

        </div>
    );
};

export default PlantCare;