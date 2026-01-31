import { AuthContext } from "../context/AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";


const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        });
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth,email)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = {
        createUser,
        profileUpdate,
        login,
        passwordReset,
        googleLogin,
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