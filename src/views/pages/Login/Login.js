import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { GrFacebook } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { IconContext } from "react-icons";
<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}><GrFacebook /></IconContext.Provider>

const Login = () => {
    const {loginExistUser, signInWithGoogle, error,user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    let locationFrom = location.state?.from?.pathname || "/";
    const [existUser,setExistUser] = useState({}); 
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const existUserInfo = {...existUser}
        existUserInfo[field] = value;
        setExistUser(existUserInfo);
    }
console.log(user);
    const handleLogin = e =>{
        loginExistUser(existUser.email,existUser.password,navigate,locationFrom);
        e.preventDefault();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto my-12'>
                <h2 className='font-bold text-center text-3xl'>Welcome Back </h2>
                <p className='text-center text-xl my-2'>To keep connected with us please login with your email/username and password</p>
                <div>
                    <div className='flex justify-center'>
                        <form onSubmit={handleLogin}> 
                            <div><input className='border my-1 rounded p-1' onBlur={handleOnBlur} name="email" type="email" id="standard-basic1"  placeholder='Email address' required/></div>
                            <div><input className='border my-1 rounded p-1' onBlur={handleOnBlur} name="password" type="password" id="standard-basic" placeholder='password' required /></div>
                            <p color="red">{error}</p>
                            <button className='border px-2 rounded block mx-auto my-2 bg-sky-100 hover:bg-sky-200 font-semibold' type="submit" >Login</button>
                        </form>
                    </div>
                </div>
                <div className='text-center my-4'>
                    <p>Don't have an account?</p>
                    <NavLink className="border bg-sky-100 hover:bg-sky-200 rounded px-1 my-1 font-semibold " to="/registration">Register here</NavLink>
                </div>
                <div className='text-center my-4'>
                    <p>OR</p>
                    <p>You can join with</p>
                    <div className='my-2'>
                        <button className='mx-1 hover:border border-white border hover:border-inherit' onClick={()=>signInWithGoogle(navigate,locationFrom)}><IconContext.Provider value={{ size:32,color: "blue", className: "global-class-name" }}><FcGoogle /></IconContext.Provider></button>
                        <button className='mx-1 hover:border border-white border hover:border-inherit' ><IconContext.Provider value={{ size:30,color: "blue", className: "global-class-name" }}><GrFacebook /></IconContext.Provider></button>
                        <button className='mx-1 hover:border border-white border hover:border-inherit'><IconContext.Provider value={{ size:30,color: "blue", className: "global-class-name" }}><BsTwitter /></IconContext.Provider></button>
                        <button className='mx-1 hover:border border-white border hover:border-inherit'><IconContext.Provider value={{ size:30,color: "blue", className: "global-class-name" }}><FaInstagramSquare /></IconContext.Provider></button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;