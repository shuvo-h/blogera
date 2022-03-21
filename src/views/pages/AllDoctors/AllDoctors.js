import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import DoctorCard from '../../components/HomeComponents/TopDoctors/DoctorCard';
import Navbar from '../../components/navbar/Navbar';

const AllDoctors = () => {
    const [allDoctors,setAllDoctors] = useState([]);
    useEffect(()=>{
        try {
            fetch("http://localhost:5000/hospital/doctors")
                .then(res=>res.json())
                .then(data=>setAllDoctors(data))
        } catch (error) {
            console.log(error);
        }
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto my-6'>
                <h1 className='text-2xl my-4 p-3 bg-gray-200 font-bold'>Our All Doctors</h1>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    {
                        allDoctors.map(doctor=><DoctorCard doctor={doctor}></DoctorCard>)
                    }
                </div>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default AllDoctors;