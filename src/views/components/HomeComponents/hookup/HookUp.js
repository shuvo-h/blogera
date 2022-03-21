import React from 'react';
import { IconContext } from "react-icons";
import { GiGiftOfKnowledge,GiHeartOrgan } from 'react-icons/gi';
import { FaRegSmile,FaAward } from 'react-icons/fa';


const HookUp = () => {
    return (
        <div className='bg-sky-500 text-center text-white py-24'>
            <h1 className='text-3xl font-bold mb-3'>Keep Your Headup & Be Patient</h1>
            <p className='text-xl'>How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of thesystem and expound the actual teachings of the great.</p>
            <p>It is your right to keep your health well and it is our duty to take care of your health.</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-12">
                <div className="grid justify-center">
                    <div>
                        <IconContext.Provider value={{ size:60, color: "green", className: "global-class-name block mx-auto mb-3" }}><GiGiftOfKnowledge /></IconContext.Provider>
                    </div>
                    <h1 className='font-bold text-4xl'>25</h1>
                    <h4 className='font-bold text-xl'>Years of Experience</h4>
                </div>
                <div  className="grid justify-center">
                    <div>
                        <IconContext.Provider value={{ size:60, color: "yellow", className: "global-class-name block mx-auto mb-3" }}><FaRegSmile /></IconContext.Provider>
                    </div>
                    <h1 className='font-bold text-4xl'>236</h1>
                    <h4 className='font-bold text-xl'>Well Smiley Faces</h4>
                </div>
                <div  className="grid justify-center">
                    <div>
                        <IconContext.Provider value={{ size:60, color: "Salmon", className: "global-class-name block mx-auto mb-3" }}><GiHeartOrgan /></IconContext.Provider>
                    </div>
                    <h1 className='font-bold text-4xl'>364</h1>
                    <h4 className='font-bold text-xl'>Heart Transplant</h4>
                </div>
                <div  className="grid justify-center">
                    <div>
                        <IconContext.Provider value={{ size:60, color: "blue", className: "global-class-name block mx-auto mb-3" }}><FaAward /></IconContext.Provider>
                    </div>
                    <h1 className='font-bold text-4xl'>45</h1>
                    <h4 className='font-bold text-xl'>Awards Holded</h4>
                </div>
            </div>
        </div>
    );
};

export default HookUp;