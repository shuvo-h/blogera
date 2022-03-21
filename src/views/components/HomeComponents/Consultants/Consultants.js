import React, { useEffect, useState } from 'react';
/*
const consultantData = [
    {
        name: "Marc Parcival",
        address:"New york",
        phone: "+321 567 89 0123",
        email: "bailey@health-guard.com",
        img: "http://st.ourhtmldemo.com/new/Hospitals/images/team/1.jpg"
    },
    {
        name: "Alen Bailey",
        address:"New york",
        phone: "+321 567 89 0123",
        email: "bailey@health-guard.com",
        img: "http://st.ourhtmldemo.com/new/Hospitals/images/team/2.jpg"
    },
    {
        name: "Basil Andrew",
        address:"New york",
        phone: "+321 567 89 0123",
        email: "bailey@health-guard.com",
        img: "http://st.ourhtmldemo.com/new/Hospitals/images/team/3.jpg"
    },
    {
        name: "Edgar Denzil",
        address:"New york",
        phone: "+321 567 89 0123",
        email: "bailey@health-guard.com",
        img: "http://st.ourhtmldemo.com/new/Hospitals/images/team/4.jpg"
    },
]
*/
const Consultants = () => {
    const [consultantData,setConsultantData] = useState([])
    useEffect(()=>{
        try {
            fetch("http://localhost:5000/hospital/consultant")
                .then(res=>res.json())
                .then(data=>setConsultantData(data))
        } catch (error) {
            console.log(error);
        }
    },[])

    return (
        <div className='container mx-auto my-12'>
            <div className='flex justify-between items-center bg-gray-200 my-6 '>
                <h1 className='text-2xl my-2 p-3  font-bold'>Team Of Consultants</h1>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    consultantData.map(consult=> <div className='mx-auto'>
                        <div className='drop-shadow-md m-2 border p-2 rounded'>
                            <img className="rounded" src={consult?.img} alt="imgAlt"/>
                            <div className="mt-2">
                                <div>
                                    <div className="text-lg text-slate-800 uppercase font-bold tracking-wider">{consult?.name}</div>
                                    <div>
                                        <p>{consult.address}</p>
                                        <p>{consult.email}</p>
                                        <p>{consult.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Consultants;