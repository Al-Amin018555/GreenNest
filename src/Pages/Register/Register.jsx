import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Register = () => {

    const { createUser,profileUpdate } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        const { email, password,name,photo } = data;
        createUser(email, password)
        .then( () => {
            console.log("user successfully created");
            profileUpdate(name,photo)
        })
      

    };
    return (
        <div className="min-h-screen">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">

                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Name"
                                    name="name"
                                    {...register("name", { required: true })}
                                />

                                {errors.name && <span className="text-red-600">This field is required</span>}

                                <label className="label">Email</label>

                                <input
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    name="email"
                                    {...register("email", { required: true })}
                                />

                                {errors.email && <span className="text-red-600">This field is required</span>}

                                <label className="label">Photo URL</label>

                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Photo"
                                    name="photo"
                                    {...register("photo")}
                                />

                                {errors.photo && <span className="text-red-600">This field is required</span>}


                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    name="password"
                                    {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-600">This field is required</span>}

                                <div className="flex">
                                    <p>Alread have an account?</p>
                                    <Link to='/login' className="link text-blue-500 link-hover">Login</Link>
                                </div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;