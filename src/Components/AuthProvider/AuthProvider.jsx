/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../Firebase/Firebase.comfig';
import { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    // start
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    // signUp
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    // user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
            console.log('CurrentUser-->', currentUser)
        })
        return () => {
            return unsubscribe
        }
    }, [])

    // AuthContext.Provider
    const authInfo = { signUp, login, loading, logout }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};




export default AuthProvider;