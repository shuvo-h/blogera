import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

const doc = [
    {
        name:"Dr. David Moniky",
        img:"http://newhospitalhtml.bdtask.com/images/doctor_1.png",
        dept:"Huntington's",
        text:"I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. ",
        fees:"60",
        designation:"MBBS",
        college:"KT Medical College"
    },
    {
        name:"Dr. Naeem Khan",
        img:"http://newhospitalhtml.bdtask.com/images/doctor_2.png ",
        dept:"Huntington's",
        text:"I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. ",
        fees:"60",
        designation:"MBBS",
        college:"KT Medical College"
    },
    {
        name:"Dr. Tanjil Ahmed",
        img:"http://newhospitalhtml.bdtask.com/images/doctor_4.png",
        dept:"Huntington's",
        text:"I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. ",
        fees:"60",
        designation:"MBBS",
        college:"KT Medical College"
    },
    {
        name:"Dr. Tuhin Sorker",
        img:"http://newhospitalhtml.bdtask.com/images/doctor_3.png",
        dept:"Huntington's",
        text:"I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. I am a doctor of health guard hospital. It is a good hospital. ",
        fees:"60",
        designation:"MBBS",
        college:"KT Medical College"
    },
]

const TopDoctors = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        fetch("https://enigmatic-cliffs-44375.herokuapp.com/hospital/doctors")
        .then(res=>res.json())
        .then(data=>setDoctors(data.splice(0,4)))
    },[])
    return (
        <div className='container mx-auto bg-sky-100 p-4 rounded text-center'>
            <h1 className='text-2xl font-bold my-6 p-3 rounded bg-sky-400'>Our Top Doctors</h1>
            <div  className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {
                    doctors?.map(doctor=><DoctorCard doctor={doctor} key={doctor?.name}></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default TopDoctors;