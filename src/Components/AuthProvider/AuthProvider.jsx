/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/Firebase.comfig';
import { createContext, useState } from 'react';


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    // start
    const [loading, setLoading] = useState(true)

    // signUp
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { signUp, signIn, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};




export default AuthProvider;