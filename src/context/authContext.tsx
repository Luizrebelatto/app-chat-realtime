import { onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, database } from "../config/firebase";
import { addDoc, doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [userAuthenticated, setUserAuthenticated] = useState(undefined)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user){
                setUserAuthenticated(true)
                setUser(user)
                updateUserData(user.uid)
            } else {
                setUserAuthenticated(false)
                setUser(null)
            }
        })
        return unsub
    },[])

    const updateUserData = async (userId) => {
        const docRef = doc(database, 'users', userId);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            let data = docSnap.data()
            setUser({ ...user, name: data.name, userId: data.userid })
        }
    }

    const loginUser = async (email: string, password: string) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            return { success: true, data: response?.user }
        } catch (error) {
          return { success: false, data: error.message }
        }
    }

    const createNewUser = async (email: string, password: string, name: string) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(database, 'users', response?.user?.uid), {
                name,
                userId: response?.user.uid
            })
            return { success: true, data: response?.user }
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    const logoutUser = async () => {
        try {
            await signOut(auth)
            return { success: true,  }
        } catch (error) {
            return { success: false }
        }
    }

    return (
        <AuthContext.Provider value={{ user, userAuthenticated, loginUser, createNewUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext)

    if(!value) {
        throw new Error('useAuth must be wrapped inside AuthContextProvider');
        
    }
    return value
}