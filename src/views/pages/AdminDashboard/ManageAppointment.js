import React, { useEffect, useState } from 'react';

const ManageAppointment = () => {
    const [allAppointment,setAllAppointment] = useState([]);
    useEffect(()=>{
        fetch('https://enigmatic-cliffs-44375.herokuapp.com/hospital/appointments')
            .then(res=>res.json())
            .then(data=>{
                setAllAppointment(data);
                console.log(data);
            })
    },[])

    const handleDelete = id =>{
        console.log(id);
            fetch(`https://enigmatic-cliffs-44375.herokuapp.com/hospital/appointments/${id}`,{method:"DELETE"})
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount > 0) {
                    setAllAppointment(prevS=>{
                        const copyAppointments = [...prevS];
                        const newAppoints = copyAppointments.filter(appointment => appointment._id !== id);
                        return newAppoints;
                    })
                    alert("Appointment deleted successfully")
                }
            })
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-center my-6'>Manage Appointments</h1>
            <div className='flex justify-center'>
                <table className='border-double border-4 border-indigo-600'>
                    <thead className='border-y'>
                        <tr>
                            <th className='border-r border-dashed px-2 py-1'>Name</th>
                            <th className='border-r border-dashed px-2 py-1'>Email</th>
                            <th className='border-r border-dashed px-2 py-1'>Pay Amount</th>
                            <th className='border-r border-dashed px-2 py-1'>Phone</th>
                            <th className='border-r border-dashed px-2 py-1'>Issue</th>
                            <th className='border-r border-dashed px-2 py-1'>Schedule</th>
                            <th className='border-r border-dashed px-2 py-1'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allAppointment?.map(appointment=><tr>
                                <td className='border-r border-dashed px-2 py-1'>{appointment.fname} {appointment.lname}</td>
                                <td className='border-r border-dashed px-2 py-1'>{appointment.email}</td>
                                <td className='border-r border-dashed px-2 py-1'>{appointment.payAmount}</td>
                                <td className='border-r border-dashed px-2 py-1'>{appointment.phone}</td>
                                <td className='border-r border-dashed px-2 py-1'>{appointment.about}</td>
                                <td className='border-r border-dashed px-2 py-1'>{appointment.time}</td>
                                <td className='border-r border-dashed px-2 py-1'><button className='border bg-red-100 hover:bg-red-200 rounded px-1' onClick={()=>handleDelete(appointment._id)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAppointment;