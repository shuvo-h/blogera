import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import DepartmentCard from '../../components/HomeComponents/medicalDepartment/DepartmentCard';
import Navbar from '../../components/navbar/Navbar';

const Departments = () => {
    const [allDepartments,setAllDepartments] = useState([]);
    useEffect(()=>{
        try {
            fetch("http://localhost:5000/hospital/departments")
                .then(res=>res.json())
                .then(data=>setAllDepartments(data))
        } catch (error) {
            console.log(error);
        }
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                <h1 className='text-2xl my-4 p-3 bg-gray-200 font-bold'>Our All Departments</h1>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    {
                        allDepartments.map(department=><DepartmentCard department={department}></DepartmentCard>)
                    }
                </div>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Departments;