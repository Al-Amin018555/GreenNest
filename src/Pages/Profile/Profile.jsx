import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (!user) {
        return <Navigate to='/login' state={location.pathname}></Navigate>;
    }


    return (
        <div className="min-h-[calc(100vh-288px)] flex justify-center items-center max-w-9/12 md:max-w-8/12 lg:max-w-4/12 mx-auto mt-2 md:mt-6 lg:mt-20">
            <div className="card w-full my-4 bg-base-100 shadow-sm">
                <div className="">
                    <figure>
                        {
                            // user && <img
                            //     src={user.photoURL}
                            //     alt={user.displayName} />
                            user && <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                        }

                    </figure>
                    <div className="card-body text-center ">
                        <h2 className="card-title">
                            {user && <p>{user.displayName}</p>}

                        </h2>
                        <p>{user.email}</p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;