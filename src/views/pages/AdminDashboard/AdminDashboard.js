import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const AdminDashboard = () => {
    const {user} = useAuth();

    const [currentDiscount,setCurrentDiscount] = useState(0);
    const [newDiscount,setNewDiscount] = useState(0);

    useEffect(()=>{
        fetch(`http://localhost:5000/hospital/users?existEmail=${user.email}`)
        .then(res=>res.json())
        .then(data=>setCurrentDiscount(data?.discount?.toString()))
    },[user.email])

    const handleDiscount = () =>{
        fetch('http://localhost:5000/hospital/user/discount',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({newDiscount:newDiscount})
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.modifiedCount) {
                    setCurrentDiscount(newDiscount);
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                <div className='w-fit mx-auto my-6 text-center'>
                    <h3 className='font-bold text-xl'>Current Discount ({currentDiscount}%)</h3>
                    <input className='border p-1 rounded' style={{width:"250px"}} onBlur={(e)=>setNewDiscount(e.target.value)} type="number" placeholder='Change discount amount'/>
                    <button className='bg-sky-100 hover:bg-sky-200 border rounded px-1 ml-1' onClick={handleDiscount}>Update</button>
                </div>
                <div className="border" style={{height:"calc(100vh - 622px)"}}>
                    <div className='border pl-12'>
                        <nav>
                            <Link className='mx-1 bg-sky-200 hover:bg-sky-300 rounded px-2 font-semibold' to="/dashboard/appointment">Appointments</Link>
                            <Link className='mx-1 bg-sky-200 hover:bg-sky-300 rounded px-2 font-semibold' to="/dashboard/reviews">Reviews</Link>
                        </nav>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AdminDashboard;