/* eslint-disable react/prop-types */
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../Firebase/Firebase.comfig';
import { createContext } from 'react';


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
  
   // start
   const signUp = (email, password) => {
     return createUserWithEmailAndPassword(auth ,email, password)
   }
   
   const authInfo = {signUp}
   return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
   )
};




export default AuthProvider;