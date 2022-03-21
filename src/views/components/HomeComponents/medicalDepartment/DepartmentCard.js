import React from 'react';
import { Link } from 'react-router-dom';

const DepartmentCard = ({department}) => {
    // console.log(department);
    return (
            <div className='drop-shadow-md m-2 border p-2 rounded'>
                <img className="rounded" src={department.img} alt="imgAlt"/>
                <div className="mt-2">
                    <div>
                        <div className="text-lg text-slate-600 uppercase font-bold tracking-wider">{department.name}</div>
                        <div className="font-bold text-slate-700 leading-snug">
                        </div>
                        <p>{department.text.slice(0,150)}</p>
                    </div>
                </div>
                <button className='bg-sky-200 px-3 rounded hover:bg-sky-300 font-semibold m-auto block'><Link to={`/department/${department._id}`}>Read More</Link></button>
            </div>
    );
};

export default DepartmentCard;