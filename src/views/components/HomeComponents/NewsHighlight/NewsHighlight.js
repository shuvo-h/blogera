import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';

const newsData = [
    {
        title:"How to handle your kids’ from mystery ailments",
        img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/blog-single.jpg",
        text:"The great explorer of the truth, the master-builder of human happiness worksone rejects, dislikes, avoids pleasure itself, because it is pleasure, but because those who do know how to pursue pleasure rationally encounter consequences that are extremely seds painful the master-builder of human happiness rejects, dislikes, or avoids pleasure itself, because it is pursue pleasure. Who loves or pursues or desires to obtain pain, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage.Know how to pursue pleasure rationally encounter consequences that are extremely painful seds or again is there anyone who loves or pursues or desires to obtain pain of itself, because seds our it pain, but because occasionally circumstances occur which toil and pain can undertakes laborious physical exercise.",
        date:"February 14, 2017",
        author:{
            name:"Dohn Gaskel",
            bio:"Pathology Department",
            img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/project-manager.jpg"
        },
        comments: [
            {
                name:"Steven Rich",
                date:"Sep 17, 2016",
                img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/comment-1.jpg",
                str:"How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
            },
        ]
    },
    {
        title:"How to handle your kids’ from mystery ailments",
        img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/blog-single.jpg",
        text:"The great explorer of the truth, the master-builder of human happiness worksone rejects, dislikes, avoids pleasure itself, because it is pleasure, but because those who do know how to pursue pleasure rationally encounter consequences that are extremely seds painful the master-builder of human happiness rejects, dislikes, or avoids pleasure itself, because it is pursue pleasure. Who loves or pursues or desires to obtain pain, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage.Know how to pursue pleasure rationally encounter consequences that are extremely painful seds or again is there anyone who loves or pursues or desires to obtain pain of itself, because seds our it pain, but because occasionally circumstances occur which toil and pain can undertakes laborious physical exercise.",
        date:"February 14, 2017",
        author:{
            name:"Dohn Gaskel",
            bio:"Pathology Department",
            img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/project-manager.jpg"
        },
        comments: [
            {
                name:"Steven Rich",
                date:"Sep 17, 2016",
                img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/comment-1.jpg",
                str:"How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
            },
        ]
    },
    {
        title:"How to handle your kids’ from mystery ailments",
        img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/blog-single.jpg",
        text:"The great explorer of the truth, the master-builder of human happiness worksone rejects, dislikes, avoids pleasure itself, because it is pleasure, but because those who do know how to pursue pleasure rationally encounter consequences that are extremely seds painful the master-builder of human happiness rejects, dislikes, or avoids pleasure itself, because it is pursue pleasure. Who loves or pursues or desires to obtain pain, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage.Know how to pursue pleasure rationally encounter consequences that are extremely painful seds or again is there anyone who loves or pursues or desires to obtain pain of itself, because seds our it pain, but because occasionally circumstances occur which toil and pain can undertakes laborious physical exercise.",
        date:"February 14, 2017",
        author:{
            name:"Dohn Gaskel",
            bio:"Pathology Department",
            img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/project-manager.jpg"
        },
        comments: [
            {
                name:"Steven Rich",
                date:"Sep 17, 2016",
                img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/comment-1.jpg",
                str:"How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
            },
        ]
    },
    {
        title:"How to handle your kids’ from mystery ailments",
        img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/blog-single.jpg",
        text:"The great explorer of the truth, the master-builder of human happiness worksone rejects, dislikes, avoids pleasure itself, because it is pleasure, but because those who do know how to pursue pleasure rationally encounter consequences that are extremely seds painful the master-builder of human happiness rejects, dislikes, or avoids pleasure itself, because it is pursue pleasure. Who loves or pursues or desires to obtain pain, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage.Know how to pursue pleasure rationally encounter consequences that are extremely painful seds or again is there anyone who loves or pursues or desires to obtain pain of itself, because seds our it pain, but because occasionally circumstances occur which toil and pain can undertakes laborious physical exercise.",
        date:"February 14, 2017",
        author:{
            name:"Dohn Gaskel",
            bio:"Pathology Department",
            img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/project-manager.jpg"
        },
        comments: [
            {
                name:"Steven Rich",
                date:"Sep 17, 2016",
                img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/comment-1.jpg",
                str:"How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
            },
        ]
    },
    {
        title:"How to handle your kids’ from mystery ailments",
        img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/blog-single.jpg",
        text:"The great explorer of the truth, the master-builder of human happiness worksone rejects, dislikes, avoids pleasure itself, because it is pleasure, but because those who do know how to pursue pleasure rationally encounter consequences that are extremely seds painful the master-builder of human happiness rejects, dislikes, or avoids pleasure itself, because it is pursue pleasure. Who loves or pursues or desires to obtain pain, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage.Know how to pursue pleasure rationally encounter consequences that are extremely painful seds or again is there anyone who loves or pursues or desires to obtain pain of itself, because seds our it pain, but because occasionally circumstances occur which toil and pain can undertakes laborious physical exercise.",
        date:"February 14, 2017",
        author:{
            name:"Dohn Gaskel",
            bio:"Pathology Department",
            img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/project-manager.jpg"
        },
        comments: [
            {
                name:"Steven Rich",
                date:"Sep 17, 2016",
                img:"http://st.ourhtmldemo.com/new/Hospitals/images/blog/comment-1.jpg",
                str:"How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
            },
        ]
    },
]

const NewsHighlight = () => {
    const [news,setNews] = useState([]);
    const [displayNews,setDisplayNews] = useState([]);
    const [totalPageNumberNews,setTotalPageNumberNews] = useState(0);
    const [currentPage,setCurrentPage] = useState(0);
    const cardPerPage = 4;

    // calculate the number of pages require to display the new Keys
    useEffect(()=>{
        const totalDepartment = news.length;
        const TotalPageNumber = Math.ceil(totalDepartment / cardPerPage);
        setTotalPageNumberNews(TotalPageNumber)
    },[news.length])

    // create a new array of new keywords of current page to display on UI 
    useEffect(()=>{
        const tempAllNewKeys = [...news]
        const tempDisplayNewWords = tempAllNewKeys.slice(currentPage*cardPerPage,currentPage*cardPerPage + cardPerPage);
        setDisplayNews(tempDisplayNewWords);
    },[news,currentPage])

    useEffect(()=>{
        fetch('https://enigmatic-cliffs-44375.herokuapp.com/hospital/news')
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])

    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center bg-gray-200 my-6'>
                <h2 className='text-2xl my-2 p-3  font-bold'>News Heighlight</h2>
                <Link className='bg-sky-200 px-4 mr-3 rounded font-bold text-blue-700 hover:bg-sky-300 hover:text-blue-900' to="/allnews">All News</Link>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {
                    displayNews.map((news,index)=><NewsCard news={news} key={index}></NewsCard>)
                }
            </div>
            <div className='flex justify-center my-2'>
                {
                    [...Array(totalPageNumberNews).keys()].map(pageNumber=><button className={(pageNumber) === currentPage ? "px-1 mx-1 rounded bg-sky-300" :"bg-gray-200 px-1 mx-1 rounded"} onClick={e=>setCurrentPage(pageNumber)} key={pageNumber+"pagenumber"}>{pageNumber + 1}</button>)
                }
                </div>
        </div>
    );
};

export default NewsHighlight;