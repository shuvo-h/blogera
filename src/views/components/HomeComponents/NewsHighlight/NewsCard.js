import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    return (
        <div className='drop-shadow-md m-2 border p-2 rounded'>
            <img className="rounded" src={news?.img} alt="imgAlt"/>
            <div className="mt-2">
                <div>
                    <div className="text-lg text-slate-600 uppercase font-bold tracking-wider">{news?.title}</div>
                    <div className="font-bold text-slate-700 leading-snug">
                    </div>
                    <p>{news?.text?.slice(0,150)} <Link className='underline text-blue-600/100' to={`/news/${news?._id}`}>Read More</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;