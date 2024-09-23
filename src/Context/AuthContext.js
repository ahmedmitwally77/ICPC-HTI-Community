import { auth, db } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, {  createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [currentUser , setCurrentUser] = useState({});
    const [flagAdmin, setFlagAdmin] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
        })

        return ()=>{
            unsub();
        }
    },[])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              setUserData({ uid: user.uid, ...docSnap.data() });
            }
          } else {
            setUserData(null);
          }
          setLoading(false);
        });
    
        return () => unsubscribe();
      }, []);

    
    return(
        <AuthContext.Provider value={{currentUser ,flagAdmin ,setFlagAdmin ,userData, loading }} >
            {children}
        </AuthContext.Provider>
    )

}