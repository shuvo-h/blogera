import React, { Component, useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

const CarouselData = [
    {
      image:
        "https://thumbs.dreamstime.com/b/medicine-doctor-touching-electronic-medical-record-tablet-dna-digital-healthcare-network-connection-hologram-modern-virtual-154742526.jpg",
    },
    {
      image:
        "https://hgh-therapy-rx.com/wp-content/uploads/2019/05/about-us.jpg",
    },
    {
      image:
        "https://blog.healthec.com/hubfs/Stock%20images/Doctors%20using%20computer%20whiles%20theirs%20colleagues%20looking%20at%20Xray%20in%20medical%20office.jpeg",
    }
  ];
  const carText = [
      {head:"WELCOME TO HEALTH GUARD HOSPITAL", sub:"BE CALM QUITE COOL."},
      {head:"TRY TO BE HEALTHY", sub:"AIN'T THAT NICE?"},
      {head:"BE AWESOME", sub:"IN A SMOOTH WAY."},
    ]
const HomeCarosoul = () => {
    const [currentSlide,setcurrentSlide] = useState(0);
    const [paused,setpaused] = useState(false);

        const carosoulInterval = setInterval(() => {
          if (paused === false) {
            let newSlide = currentSlide === CarouselData.length - 1
                ? 0
                : currentSlide + 1;
                setcurrentSlide(newSlide);
          }
          clearInterval(carosoulInterval)
        }, 3000);
    
      const nextSlide = () => {
        let newSlide = currentSlide === CarouselData.length - 1
            ? 0
            : currentSlide + 1;
            setcurrentSlide(newSlide);
      };
    
      const prevSlide = () => {
        let newSlide = currentSlide === 0
            ? CarouselData.length - 1
            : currentSlide - 1;
            setcurrentSlide(newSlide);
      };
    
      const handleCurrentSlide = (index) => {
        setcurrentSlide(index);
      };

      
    return (
        <div>
        <div className=" h-1/3 flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

          <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === currentSlide
                      ? "block w-screen h-96 object-cover"
                      : "hidden"
                  }
                  onMouseEnter={() => setpaused(true)}
                  onMouseLeave={() => setpaused(false)}
                />
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    handleCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
          <div className="px-6 py-3 rounded-lg text-green absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
          {carText.map((text, index) => {
              return (
                  <div className={
                      index === currentSlide
                      ? ""
                      : "hidden"
                  } key={index}>
                      <h1 className="text-3xl text-center font-bold text-emerald-700">{text.head}</h1>
                      <h2 className="text-xl text-center">{text.sub}</h2>
                  </div>
              );
            })}
            </div>
        </div>
      </div>
    );
};

export default HomeCarosoul;