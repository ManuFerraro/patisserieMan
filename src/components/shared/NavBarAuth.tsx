'use client'
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const NavBarAuth = () => {
 


  return (
    <nav className='w-full h-[180px] sm:bg-white'>
      <section className="max-w-screen-lg mx-auto h-[100%] flex flex-grow ">
        <div className="w-[23%] sm:w-[7%] h-[65%] sm:pt-5  flex justify-start sm:justify-aroundd items-center">
          <div className="hidden">
            <button
              className={`text-xl opacity-90 border border-gold ${
                false ? "text-black" : "text-white"
              }`}
            >
              <FaUser />
            </button>
          </div>
          <div className="pt-5 pl-3 sm:pt-0 sm:pl-10">
            <button
              className={`text-3xl  opacity-90 sm:pt-[2px] sm:pl-3 ${
                true ? "text-menuRes" : "text-white"
              }`}
            >
              <IoMenu />
            </button>
          </div>
        </div>
        <div className="w-[54%] sm:w-[86%]  flex flex-col justify-start items-center">
          <div className="w-[150px] sm:w-[200px] flex justify-center items-center h-[65%] pt-4">
            <h1 className={`text-center text-[0.9em] sm:text-4xl leading-none font-bold ${true ? 'text-gold' : 'text-white'}`}>
              TERESA BARBERENA
            </h1>
          </div>
          <div className="sm:flex justify-center w-full h-[35%]">
            <ul
              className={`w-[45%] hidden sm:flex text-[14px] justify-around  ${true ? 'text-black' : 'text-white'}`}
            >
              <li className="cursor-pointer opacity-80 transition-opacity duration-400 hover:opacity-100">
                Tienda
              </li>
              <li className="cursor-pointer opacity-80 hover:opacity-100">
                Quiénes somos
              </li>
              <li className="cursor-pointer opacity-80 hover:opacity-100">
                Contacto
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[23%] sm:w-[7%] h-[65%] sm:pt-5  flex justify-end sm:justify-around items-center">
          <div className="hidden sm:block">
            <button
              className={`text-xl opacity-90  ${
                true ? "text-menuRes" : "text-white"
              }`}
            >
              <FaUser />
            </button>
          </div>
          <div className="pt-5 pr-3 sm:pt-0 ">
            <button
              className={`text-xl  opacity-90 sm:pt-[2px] sm:pr-0 ${
                true ? "text-menuRes" : "text-white"
              }`}
            >
              <IoBag />
            </button>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default NavBarAuth
