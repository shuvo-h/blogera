import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../firebase/firebase.init";

firebaseInitialization();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isAdmin,setIsAdmin] = useState("");
    const [error,setError] = useState("");
    const [isLoading,setIsloading]= useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerNewUser = (newEmail,newPassword, newName, newPhoneNumber,navigate,userFullObjInfo,e) =>{
        setIsloading(true);
        setError("")
        createUserWithEmailAndPassword(auth, newEmail, newPassword,newName, newPhoneNumber,navigate,userFullObjInfo)
            .then((userCredential)=>{
                setUser(userCredential.user);

                updateProfile(auth.currentUser,{
                    displayName: newName,
                    phoneNumber: newPhoneNumber
                })
                    .then(()=>{
                        sendEmailVerification(auth.currentUser)
                        .then(() => {
                            saveRegData(userFullObjInfo,e);
                            navigate("/");
                            // Email verification sent!
                            // ...
                        });
                    })
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsloading(false))
    }

    const loginExistUser = (existEmail,existPassword,navigate,locationFrom) =>{
        setIsloading(true);
        setError("");
        signInWithEmailAndPassword(auth,existEmail,existPassword)
            .then(userCrediential =>{
                if (userCrediential.user) {
                    setUser(userCrediential.user)
                    navigate(locationFrom, {replace: true})
                }
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsloading(false))
            
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if (user) {
                setUser(user)
            }else{
                setUser({})
            }
            setIsloading(false)
        })
    },[auth])

    const signInWithGoogle = (navigate,locationFrom) =>{
        setError("")
        setIsloading(true);
        signInWithPopup(auth,googleProvider)
            .then(result =>{
                fetch(`https://enigmatic-cliffs-44375.herokuapp.com/hospital/users?existEmail=${result.user.email}`)
                    .then(res=>res.json())
                    .then(data=>{
                        navigate(locationFrom, {replace: true})
                        if (data?.email !== result.user.email) {
                            saveRegData( result.user)
                        }
                    })
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsloading(false))
    }

    const logOut = () =>{
        setIsloading(true);
        setError("");
        signOut(auth)
            .then(()=>{
                setUser({});
                setIsAdmin("");
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsloading(false))
    }

    // save new registration data to database 
    const saveRegData = (userFullObjInfo,e) =>{
        console.log(userFullObjInfo,"going to save");
        fetch('https://enigmatic-cliffs-44375.herokuapp.com/hospital/registration',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(userFullObjInfo)
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    alert("Registration Successful!");
                    e?.target?.reset();
                }
            })
        return;
    }

    return {
        user,
        error,
        isAdmin,
        isLoading,
        logOut,
        setError,
        loginExistUser,
        registerNewUser,
        signInWithGoogle,
    }
};

export default useFirebase;