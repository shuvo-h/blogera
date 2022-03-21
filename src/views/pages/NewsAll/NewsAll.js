import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import NewsCard from '../../components/HomeComponents/NewsHighlight/NewsCard';
import Navbar from '../../components/navbar/Navbar';

const NewsAll = () => {
    const [allNews,setAllNews] = useState([]);
    useEffect(()=>{
        try {
            fetch("https://enigmatic-cliffs-44375.herokuapp.com/hospital/news")
                .then(res=>res.json())
                .then(data=>setAllNews(data))
        } catch (error) {
            console.log(error);
        }
    },[])
    console.log(allNews);
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                <h1 className='text-2xl my-4 p-3 bg-gray-200 font-bold'>Our All Departments</h1>
                <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-6">
                    <div className='grid md:col-span-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                        {
                            allNews?.map(news=><NewsCard news={news}></NewsCard>)
                        }
                    </div>
                    <div className='shadow-md p-3'>
                        <h2>Latest News</h2>
                        {
                            allNews?.map(news=><div className='my-2 border-b'>
                                    <Link className='font-bold hover:bg-slate-200' to={`/news/${news?._id}`} >{news.title}</Link>
                                    <div className='grid  grid-cols-4 gap-2'>
                                        <div className='grid items-center'>
                                            <img  src={news.img} alt="" />
                                            <p className='italic text-xs'>{news.date}</p>
                                        </div>
                                        <div className='col-span-3'>
                                            <p>{news.text.slice(0,120)}</p>
                                        </div>
                                    </div>
                            </div>)
                        }
                    </div>
                </div>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default NewsAll;