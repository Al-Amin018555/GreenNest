import { AuthContext } from "../context/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";


const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = {
        createUser,
        login,
        logOut,
        user,
        setUser,
    };

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                // console.log(currentUser)
                setUser(currentUser)
            }
        })
    }, [user])
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseProvider;