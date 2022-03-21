import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { IconContext } from "react-icons";
import { FcSearch } from 'react-icons/fc';


const News = () => {
    const {id} = useParams();
    const [news,setNews] = useState({});
    const [popularNews,setPopularNews] = useState([]);
    useEffect(()=>{
        try {
            fetch("http://localhost:5000/hospital/news")
                .then(res=>res.json())
                .then(data=>setPopularNews(data))
        } catch (error) {
            console.log(error);
        }
    },[])
    
    useEffect(()=>{
        fetch(`http://localhost:5000/hospital/news/${id}`)
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[id])
console.log(news);
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto mb-3'>
                <div className='grid  md:grid-cols-6 gap-2 mt-5'>
                    <div className='md:col-span-4'>
                        <h1 className='font-bold text-xl my-5'>{news.title}</h1>
                        <img className='mx-auto' src={news.img} alt="" />
                        <p>{news.text}</p>
                        <div>
                            <div className='flex my-4 shadow-md w-fit px-3 py-2'>
                                <div className='mr-4'>
                                    <img style={{width:"150px"}} src={news?.author?.img} alt="" />
                                </div>
                                <div className=''>
                                    <h3>Written By, <span className='font-bold'>{news?.author?.name}</span></h3>
                                    <p className='italic'>{news?.date}</p>
                                    <p className='italic'>{news?.author?.bio}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl mb-2 mt-5'>Top Comments</h1>
                            <hr />
                            <div>
                                {
                                    news?.comments?.map(comment=><div className='grid  md:grid-cols-6 gap-2 mt-5 mr-2'>
                                        <div className='mr-4 grid justify-center'>
                                            <img style={{width:"80px"}} src={comment?.img} alt="" />
                                        </div>
                                        <div className='col-span-5'>
                                            <h3 className='font-bold'>{comment?.name}</h3>
                                            <p className='italic text-sm'>{comment?.date}</p>
                                            <p className='shadow p-2'>{comment?.str}</p>
                                        </div>
                                    </div>)
                                }
                                {/* <div className='flex my-4 shadow-md w-fit px-3 py-2'>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='md:block sm:hidden'>
                        <div className='relative'>
                            <input className='border w-full py-1 px-2 rounded' type="text" placeholder='Search...'/>
                            <button className='absolute right-2 top-2'><IconContext.Provider value={{ size:20,color: "blue", className: "global-class-name" }}><FcSearch /></IconContext.Provider></button>
                        </div>
                        <div>
                            <h2 className='font-bold text-xl my-3 underline'>Popular News</h2>
                            {
                            popularNews?.map(news=><div className='my-2 border-b'>
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
            </div>
            <Footer></Footer>
        </div>
    );
};

export default News;