import { AuthContext } from "../context/AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { log } from "firebase/firestore/pipelines";


const FirebaseProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email,password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        createUser,
        login,
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseProvider;