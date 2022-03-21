import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({doctor}) => {
    console.log(doctor);
    return (
        <div>
            <div>
                <img src={doctor.img} alt="" />
            </div>
            <div>
                <h4 className='font-bold '>{doctor.name}</h4>
                <p>{doctor.name}</p>
                <p>{doctor.designation}</p>
                <p>{doctor.college}</p>
            </div>
            <button className='border bg-green-200 hover:bg-green-300 px-2 rounded font-semibold'><Link to={`/doctors/doctor/${doctor._id}`}>Profile</Link></button>
        </div>
    );
};

export default DoctorCard;