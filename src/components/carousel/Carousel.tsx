"use client";

import Image from "next/image";
import { dataSourceCarousel } from "../data-sources/dataSources";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const previousSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + dataSourceCarousel.length) % dataSourceCarousel.length
    );
    setIsVisible(false);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % dataSourceCarousel.length);
    setIsVisible(false);
  };

  useEffect(() => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  }, [current, setIsVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-[100%] h-[100%] border border-black overflow-hidden">
      <section className="w-[100%] h-full flex relative z-10">
        {dataSourceCarousel.map((slides, i) => (
          <div
            className="w-full h-full flex-shrink-0 relative"
            key={slides.title}
            style={{
              transform: `translateX(-${current * 100}%)`,
              transition: "transform 0s ease-out",
            }}
          >
            <Image
              src={slides.image}
              alt={slides.title}
              style={{ objectFit: "cover" }}
              fill
              className="w-full h-full"
            />
          </div>
        ))}

        <div className="w-full h-full absolute flex flex-col justify-center items-center bg-black bg-opacity-40">
          {dataSourceCarousel.map((slides, i) => (
            <div key={slides.title}>
              {current === i && (
                <div
                  className={`flex flex-col justify-center items-center sm:mb-10
                  sm:transform ${
                    isVisible
                      ? "sm:-translate-y-0"
                      : "-translate-y-[-10px] sm:-translate-y-[-30px]"
                  }
                  transition-transform duration-1000 linear 
                  `}
                >
                  <h1 className="w-[97%] sm:w-full  text-center text-[2.4rem] sm:text-[3rem] text-white font-semibold leading-none sm:leading-normal pb-2 sm:pb-0 ">
                    {slides.title}
                  </h1>
                  <p className="text-center text-white text-[1rem] sm:text-[1.1rem] sm:p-4 sm:pt-0">
                    {slides.subTitle}
                  </p>
                  <button className="z-10 w-20 h-8 sm:w-[6.8rem] sm:h-[2.5rem] bg-BgTop rounded-3xl text-sm sm:text-lg text-center text-white mt-4 sm:mt-0">
                    VER MÁS
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <section className="w-full h-full hidden absolute sm:flex justify-between items-center">
          <button
            onClick={previousSlide}
            className="w-10 h-10 bg-gold rounded-full flex justify-center items-center opacity-45 hover:opacity-60 ml-7"
          >
            <FaArrowLeft className="bg-gold text-white rounded-full w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-gold rounded-full flex justify-center items-center opacity-45 hover:opacity-60 mr-7"
          >
            <FaArrowRight className="bg-gold text-white rounded-full w-6 h-6" />
          </button>
        </section>

        <section className="w-full absolute bottom-0 hidden sm:flex justify-center items-center py-8 gap-3">
          {dataSourceCarousel.map((slides, i) => (
            <div
              className={`w-[14px] h-[14px] rounded-full border-[3px] border-white border-opacity-30 flex justify-center items-center overflow-hidden cursor-pointer ${
                i === current ? "bg-white" : "bg-transparent"
              }`}
              key={"circle" + i}
              onClick={() => setCurrent(i)}
            ></div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Carousel;
