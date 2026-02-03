import { useLoaderData } from "react-router";
import PlantCard from "../../components/PlantCard/PlantCard";

const Plants = () => {
    const plants = useLoaderData();

    return (
        <div className="max-w-9/12 mx-auto my-6">
            <div className="grid md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    plants.map(plant => <PlantCard key={plant.plantId} plant={plant}>

                    </PlantCard>)
                }
            </div>
        </div>
    );
};

export default Plants;