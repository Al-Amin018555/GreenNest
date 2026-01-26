import { useLoaderData } from "react-router";

const GreenExperts = () => {
    const { greenExpert } = useLoaderData();
    return (
        <div>
            <h2>green experts</h2>
        </div>
    );
};

export default GreenExperts;