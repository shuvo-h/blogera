import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const Department = () => {
    const {id} = useParams();
    const [department,setDepartment] = useState({});
    console.log(department);
    useEffect(()=>{
        fetch(`https://enigmatic-cliffs-44375.herokuapp.com/hospital/department/${id}`)
        .then(res=>res.json())
        .then(data=>setDepartment(data))
    },[id])
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto mb-3'>
                <h1 className='font-bold text-3xl text-center my-5 py-2 bg-gray-200'>{department.name}</h1>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div className='md:shadow-lg shadow-cyan-500/50 p-3 mt-2'>
                        <h1 className='font-bold text-3xl text-center my-5'>Welcome To {department.name}</h1>
                        <img className='p-2' src={department.img} alt="" />
                    </div>
                    <div className='md:shadow-lg shadow-cyan-500/50 p-3 mt-2'>
                        <h2 className='font-bold text-3xl my-5'>About the Department:</h2>
                        <p>{department.text}</p>
                    </div>
                </div>
                <div>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className='md:shadow-lg shadow-cyan-500/50 p-3 mt-2'>
                            <h2 className='font-bold text-2xl text-center my-5 py-2 bg-gray-200'>Investigation</h2>
                            {
                                department?.budget?.investigation?.map(budget=><div>
                                    <p className='border-y text-center px-2'>{budget?.name} ------ ${budget?.price}</p>
                                </div>)
                            }
                        </div>
                        <div className='md:shadow-lg shadow-cyan-500/50 p-3 mt-2'>
                            <h2 className='font-bold text-2xl text-center my-5 py-2 bg-gray-200'>Treatment</h2>
                            {
                                department?.budget?.treatment?.map(budget=><div>
                                    <p  className='border-y text-center px-2'>{budget?.name} ------ ${budget?.price}</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Department;