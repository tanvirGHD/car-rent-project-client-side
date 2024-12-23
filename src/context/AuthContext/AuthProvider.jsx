
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import auth from '../../firebase/firebase.init';


const googleProvider =  new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google login
    const LogInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    
    //Logout
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    // 
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('state captured', currentUser);
            setLoading(false);
        })

        return () =>{
            unsubscribe();
        }

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        LogInWithGoogle

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;