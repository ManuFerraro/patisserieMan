"use client";
import { PiEyeThin } from "react-icons/pi";

const Login = () => {
  return (
    <>
      <div
        className={`fixed w-screen  inset-y-0  left-0  bg-black bg-opacity-40 blur-sm   z-80 transform ${
          true ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>

      <main className="fixed top-0 right-0 bg-white w-full lg:w-[650px] h-full z-100">
      <div className="w-full h-[5px] xxs:h-[40px] lg:h-[68px] flex justify-end items-start xxs:items-center lg:items-center pr-5 lg:pr-10 cursor-pointer">
            x
          </div>
        <form className="w-[85%] lg:w-[62%] h-full mx-auto flex flex-col">
          <div className="h-[120px] w-full  flex justify-center items-end ">
            <h1 className="w-[200px] text-center p-10 font-prata">TERESA BARBERENA</h1>
          </div>
          <div className="h-[80px] w-full  flex justify-center items-center">
            <h2 className="text-[30px] font-prata">LOG IN</h2>
          </div>
          <div className="flex flex-col sm:justify-center sm:items-center">
            <div className="h-[86px] sm:h-[92px] flex flex-col justify-around ">
              <p className={` text-[14px] font-nutitoSans font-bold text-formName`}>Email*</p>
              <input
                type="text"
                className="w-full  sm:w-[400px] h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
              />
            </div>
            <div className="h-[86px] sm:h-[92px] flex flex-col justify-around">
              <p className={` text-[14px] font-nutitoSans font-bold text-formName`}>Contraseña*</p>
              <div className='relative'>
              <input
                type="text"
                className="w-full sm:w-[400px] h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
              />
              <div className="absolute inset-y-0 right-3 flex items-center pr-2">
              <PiEyeThin className='w-5 h-5 text-black cursor-pointer '/> 
              </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-end items-center">
            <p className="font-nunitoSans text-sm pt-1 text-formName font-semibold">¿Olvidaste tu contraseña?</p>
          </div>
          <div className="w-full h-[150px] sm:h-[130px] flex justify-center items-center ">
            <button className="w-full sm:w-[400px] h-[50px] bg-BgTop text-white font-nunitoSans">LOG IN</button>
          </div>
          <div className="w-full h-[250px] sm:h-[260px] flex flex-col sm:justify-center items-center">
                <p className="font-nunitoSans text-[15px] font-semibold text-black  p-5">NO TIENES CUENTA TODAVÍA?</p>
                <button className="w-[120px] sm:w-[180px] h-[50px] bg-buttonLogin text-black border border-black">REGISTRATE</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
