import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const regInputFieldStyle = 'border-2 border-yellow-400 md:w-72 lg:w-96 p-1 rounded';
const regBtnStyle = "bg-blue-200 px-4 py-2 rounded font-bold text-blue-700 hover:bg-blue-300"

const Appointment = () => {
    // const {registerNewUser} = useAuth()
    const [patientInfo,setPatientInfo] = useState();
    const [discountPercent,setDiscountPercent] = useState(0);
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...patientInfo}
        if (field === "fees") {
            const pay = value - (value * (discountPercent/100));
            newInfo.payAmount = pay;
        }
        newInfo[field] = value;
        setPatientInfo(newInfo);
    }
    const handleAppointment = (e) =>{
        e.preventDefault();
        
        fetch("http://localhost:5000/hospital/appointments",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(patientInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                alert("Your appointment is successfull!");
                e.target.value = "";
            }
        })
        
    }
    useEffect(()=>{
        fetch('http://localhost:5000/hospital/user/discount')
            .then(res=>res.json())
            .then(data=>{
                setDiscountPercent(data.discount);
                console.log(data);
            })
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto my-6'>
                <h2 className='text-center font-bold text-2xl'>Book a appointment with {discountPercent}% discount</h2>
                <div className='w-fit mx-auto mt-6'>
                    <p className='text-center my-2'>Fill up the form below</p>
                    <form className='flex flex-col' onSubmit={handleAppointment}> 
                        <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="text" id="fname" name="fname" placeholder='First Name'/></div>
                        <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="text" id="lname" name="lname" placeholder='Last Name' /></div>
                        <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="email" id="email" name="email" placeholder='Email' /></div>
                        <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="number" id="phone-number" name="phone" placeholder="Phone Number"  /></div>
                        <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="date" id="date" name="time" placeholder="Date"  /></div>
                        <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="number" id="fees" name="fees" placeholder="Fees"  /></div>
                        {
                            patientInfo?.payAmount && <h2 className='bg-blue-200 w-fit px-1 rounded'>Pay Ampunt: <span className='font-semibold'>${patientInfo.payAmount}</span></h2>
                        }
                        <div className='my-1'><textarea className={regInputFieldStyle} onBlur={handleOnBlur} type="text" id="about" name="about" placeholder="Write about your diseases"  /></div>
                        <div className='my-1 mx-auto'><button className={regBtnStyle} type="submit">Submit</button></div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;