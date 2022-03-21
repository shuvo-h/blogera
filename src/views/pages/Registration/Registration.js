import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const Registration = () => {
    const {registerNewUser, setError, error} = useAuth();
    const [newUser,setNewUser] = useState({});
    const navigate = useNavigate();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = {...newUser}
        newUserInfo[field] = value;
        setNewUser(newUserInfo);
    }
    
    const handleRegistration = e =>{
        setError("")
        if (newUser.password === newUser.confirmPassword) {
            registerNewUser(newUser.email, newUser.password, newUser.name, newUser.phoneNumber,navigate,newUser,e)
        }else if (newUser.password !== newUser.confirmPassword) {
            setError("Password didn,t match.")
        }
        e.preventDefault();
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto my-12'>
                <h3 className='font-bold text-center text-2xl'>Create an Account</h3>
                <div className='flex justify-center'>
                    <form onSubmit={handleRegistration}> 
                        <label htmlFor="">Name:</label>
                        <input style={{width:"400px"}} className='border flex my-1 p-1 rounded' onBlur={handleOnBlur} placeholder="Write your name" name="name" type="text" id="name" ></input>
                        <label htmlFor="">Email:</label>
                        <input style={{width:"400px"}} className='border flex my-1 p-1 rounded' onBlur={handleOnBlur} placeholder="Write your email" name="email" type="text" id="email"  ></input>
                        <label htmlFor="">Password:</label>
                        <input style={{width:"400px"}} className='border flex my-1 p-1 rounded' onBlur={handleOnBlur} placeholder="Write your password" name="password"  type="password" id="password"></input>
                        <label htmlFor="">Confirm Password:</label>
                        <input style={{width:"400px"}} className='border flex my-1 p-1 rounded' onBlur={handleOnBlur} placeholder="Write your confirm password" name="confirmPassword" type="password" id="confirm-password" ></input>
                        <label htmlFor="">Phone Number:</label>
                        <input style={{width:"400px"}} className='border flex my-1 p-1 rounded' onBlur={handleOnBlur} placeholder="Write your phone number" name="phoneNumber" type="number" id="phone-number"  ></input>
                        <button className='border my-4 bg-sky-100 hover:bg-sky-200 px-1 rounded mx-auto block font-semibold' type="submit" >Create an account</button>
                    </form>
                </div>
                    { error && <p style={{color:"red",textAlign:"center"}}>{error}</p> }
                    <p className='text-center'>Already have an account? <NavLink className="underline text-blue-700" to="/Login">Login here</NavLink></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;