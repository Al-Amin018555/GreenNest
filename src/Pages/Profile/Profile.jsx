import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Profile = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    console.log(user)
    
    if(loading){
        return <LoadingSpinner></LoadingSpinner>;
    }

    if (!user) {
        return <Navigate to='/login' state={location.pathname}></Navigate>;
    }



    return (
        <div className="min-h-[calc(100vh-288px)] flex justify-center items-center max-w-9/12 md:max-w-8/12 lg:max-w-4/12 mx-auto mt-2 md:mt-6 lg:mt-20">
            <div className="card w-full p-6 my-4 bg-[#749349] text-white font-semibold shadow-sm">
                <div className="">
                    <figure>
                        {
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
                        {/* <p>{user.email}</p> */}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;