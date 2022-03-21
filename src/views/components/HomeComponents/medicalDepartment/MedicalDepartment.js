import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DepartmentCard from './DepartmentCard';

// const departments = [
//     {
//         name:"Pulmonology",
//         img:"http://st.ourhtmldemo.com/new/Hospitals/images/department/tab-content-2.jpg",
//         text:"Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally. Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally.", 
//         budget:{
//             investigation:[
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Colonoscopy ",price:145},
//                 {name:"Bronshoscopy ",price:270},
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//             ],
//             treatment:[
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//                 {name:"Colonoscopy",price:145},
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Bronshoscopy ",price:270},
//             ],
//         }
//     },
//     {
//         name:"Gynecology",
//         img:"http://st.ourhtmldemo.com/new/Hospitals/images/department/tab-content-2.jpg",
//         text:"Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally. Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally.",
//         budget:{
//             investigation:[
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Colonoscopy ",price:145},
//                 {name:"Bronshoscopy ",price:270},
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//             ],
//             treatment:[
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//                 {name:"Colonoscopy",price:145},
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Bronshoscopy ",price:270},
//             ],
//         }
//     },
//     {
//         name:"Neurology",
//         img:"http://st.ourhtmldemo.com/new/Hospitals/images/department/tab-content-2.jpg",
//         text:"Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally. Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally.",
//         budget:{
//             investigation:[
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Colonoscopy ",price:145},
//                 {name:"Bronshoscopy ",price:270},
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//             ],
//             treatment:[
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//                 {name:"Colonoscopy",price:145},
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Bronshoscopy ",price:270},
//             ],
//         }
//     },
//     {
//         name:"Urology",
//         img:"http://st.ourhtmldemo.com/new/Hospitals/images/department/tab-content-2.jpg",
//         text:"Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally. Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally.",
//         budget:{
//             investigation:[
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Colonoscopy ",price:145},
//                 {name:"Bronshoscopy ",price:270},
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//             ],
//             treatment:[
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//                 {name:"Colonoscopy",price:145},
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Bronshoscopy ",price:270},
//             ],
//         }
//     },
//     {
//         name:"Gastrology",
//         img:"http://st.ourhtmldemo.com/new/Hospitals/images/department/tab-content-2.jpg",
//         text:"Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally. Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally.",
//         budget:{
//             investigation:[
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Colonoscopy ",price:145},
//                 {name:"Bronshoscopy ",price:270},
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//             ],
//             treatment:[
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//                 {name:"Colonoscopy",price:145},
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Bronshoscopy ",price:270},
//             ],
//         }
//     },
//     {
//         name:"Pediatrician",
//         img:"http://st.ourhtmldemo.com/new/Hospitals/images/department/tab-content-2.jpg",
//         text:"Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally. Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally.",
//         budget:{
//             investigation:[
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Colonoscopy ",price:145},
//                 {name:"Bronshoscopy ",price:270},
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//             ],
//             treatment:[
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//                 {name:"Colonoscopy",price:145},
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Bronshoscopy ",price:270},
//             ],
//         }
//     },
//     {
//         name:"Laborotory",
//         img:"http://st.ourhtmldemo.com/new/Hospitals/images/department/tab-content-2.jpg",
//         text:"Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally. Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful. Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally.",
//         budget:{
//             investigation:[
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Colonoscopy ",price:145},
//                 {name:"Bronshoscopy ",price:270},
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//             ],
//             treatment:[
//                 {name:"Paratyroid Scan",price:80},
//                 {name:"Allergy Testing",price:385},
//                 {name:"Colonoscopy",price:145},
//                 {name:"Gastroscopy ",price:320},
//                 {name:"Bronshoscopy ",price:270},
//             ],
//         }
//     },
// ]

const MedicalDepartment = () => {
    const [departments,setDepartments] = useState([]);
    const [displayDeparments,setDisplayDIpartments] = useState([]);
    const [totalPageNumberDepartment,setTotalPageNumberDepartment] = useState(0);
    const [currentPage,setCurrentPage] = useState(0);
    const cardPerPage = 4;

    // calculate the number of pages require to display the new Keys
    useEffect(()=>{
        const totalDepartment = departments.length;
        const TotalPageNumber = Math.ceil(totalDepartment / cardPerPage);
        setTotalPageNumberDepartment(TotalPageNumber)
    },[departments.length])

    // create a new array of new keywords of current page to display on UI 
    useEffect(()=>{
        const tempAllNewKeys = [...departments]
        const tempDisplayNewWords = tempAllNewKeys.slice(currentPage*cardPerPage,currentPage*cardPerPage + cardPerPage);
        setDisplayDIpartments(tempDisplayNewWords);
    },[departments,currentPage])

    useEffect(()=>{
        try {
            fetch("http://localhost:5000/hospital/departments")
                .then(res=>res.json())
                .then(data=>setDepartments(data))
        } catch (error) {
            console.log(error);
        }
    },[])
    // console.log(departments);
    return (
        <div className='container mx-auto my-12'>
            <div className='flex justify-between items-center bg-gray-200 my-6'>
                <h2 className='text-2xl my-2 p-3  font-bold'>Medical Departments</h2>
                <Link className='bg-sky-200 px-4 mr-3 rounded font-bold text-blue-700 hover:bg-sky-300 hover:text-blue-900' to="/allnews">All Departments</Link>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {
                    displayDeparments.map((department,index)=><DepartmentCard department={department} key={index}></DepartmentCard>)
                }
            </div>
            <div className='flex justify-center my-2'>
                {
                    [...Array(totalPageNumberDepartment).keys()].map(pageNumber=><button className={(pageNumber) === currentPage ? "px-1 mx-1 rounded bg-sky-300" :"bg-gray-200 px-1 mx-1 rounded"} onClick={e=>setCurrentPage(pageNumber)} key={pageNumber+"pagenumber"}>{pageNumber + 1}</button>)
                }
                </div>
        </div>
    );
};

export default MedicalDepartment;