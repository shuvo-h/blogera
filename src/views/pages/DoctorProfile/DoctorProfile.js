import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const DoctorProfile = () => {
    const {id} = useParams();
    const [doctor,setDoctor] = useState({});
    console.log(doctor);
    useEffect(()=>{
        fetch(`https://enigmatic-cliffs-44375.herokuapp.com/hospital/doctors/${id}`)
        .then(res=>res.json())
        .then(data=>setDoctor(data))
    },[id])
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto my-12'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div>
                        <img src={doctor.img} alt="" />
                    </div>
                    <div>
                        <div className='grid sm:grid-cols-2 gap-4 shadow p-4'>
                            <div>
                                <h2 className='font-bold text-2xl'>{doctor.name}</h2>
                                <p>{doctor.college}</p>
                                <p>{doctor.designation} in {doctor.dept}</p>
                                <p>Fees: ${doctor.fees}</p>
                            </div>
                            <div className='grid justify-center items-center'>
                                    <button className='border px-2 bg-sky-100 hover:bg-sky-200 rounded'><Link to={`/appointment`}>Appointment Now</Link></button>
                            </div>
                        </div>
                        <p className='shadow p-4'>{doctor.text}</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DoctorProfile;