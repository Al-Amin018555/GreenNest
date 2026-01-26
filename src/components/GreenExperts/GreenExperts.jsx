import { useLoaderData } from "react-router";
import GreenExpert from "../GreenExpert/GreenExpert";

const GreenExperts = () => {
    const { greenExpert } = useLoaderData();

    return (
        <div className="max-w-9/12 mx-auto">
            <div>
                <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#144100]">Green experts</h2>
                <p className="text-center text-xl">Meet our experienced plant care experts dedicated to helping your plants grow healthy and thrive indoors.</p>
            </div>
            <div className="grid md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {greenExpert.map(expert => <GreenExpert expert={expert} key={expert.expertId}></GreenExpert>)}
            </div>
        </div>
    );
};

export default GreenExperts;