import { useLoaderData } from "react-router";
import PlantDetailsCard from "../../components/PlantDetailsCard/PlantDetailsCard";
import { useForm } from "react-hook-form";
import consultationImg from "../../assets/consultation.jpg"

const PlantDetails = () => {
    const plants = useLoaderData();
    console.log(plants);

    const { register, handleSubmit, formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);

    };
    return (
        <div className="mt-4">
            <div className="grid max-w-9/12 mx-auto md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                {
                    plants.map(plant => <PlantDetailsCard plant={plant} key={plant.id}></PlantDetailsCard>)
                }
            </div>
            <div className="bg-[#6f9349] text-white font-semibold">
                <div className="my-2 md:my-6 lg:my-10 flex flex-col lg:flex-row items-center gap-3 lg:gap-6 p-4 lg:p-10">
                    <div className="lg:w-[50%] hidden lg:flex">
                        <img src={consultationImg} className="rounded-lg" alt="consultation image" />
                    </div>
                    <div className="lg:w-[50%]">
                        <h2 className="text-3xl text-center">Book Consultation</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card w-full shrink-0">
                            <div className="card-body">
                                <fieldset className="fieldset">

                                    <label className="label text-white">Name</label>
                                    <input
                                        type="text"
                                        className="input w-full outline-0 placeholder:text-black bg-[#E7F0DF]"
                                        placeholder="Please enter your name here.."
                                        name="name"
                                        {...register("name", { required: true })}
                                    />

                                    {errors.name && <span className="text-red-600">This field is required</span>}

                                    <label className="label text-white">Email</label>

                                    <input
                                        type="email"
                                        className="input outline-0  bg-[#E7F0DF] placeholder:text-black w-full"
                                        placeholder="Please enter your email here.."
                                        name="email"
                                        {...register("email", { required: true })}
                                    />

                                    {errors.email && <span className="text-red-600">This field is required</span>}

                                    <button className="btn btn-soft text-black  btn-success mt-4">Book Now</button>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlantDetails;