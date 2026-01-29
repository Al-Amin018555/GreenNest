import { useLoaderData } from "react-router";
import PlantDetailsCard from "../../components/PlantDetailsCard/PlantDetailsCard";

const PlantDetails = () => {
    const plants = useLoaderData();
    console.log(plants);
    return (
        <div className="max-w-9/12 mx-auto mt-4">
            <div className="grid md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                {
                    plants.map(plant => <PlantDetailsCard plant={plant} key={plant.id}></PlantDetailsCard>)
                }
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default PlantDetails;