




const NavBar = () => {
  return (
    <nav className="w-full h-full absolute">
      <section className="max-w-screen-lg mx-auto h-[50%] flex flex-grow ">
        <div className="w-[23%] sm:w-[7%]"></div>
        <div className="w-[54%] sm:w-[86%]  flex flex-col justify-start items-center">
          <div className="w-[150px] sm:w-[200px] flex justify-center items-center h-[65%] pt-4">
            <h1 className="text-white text-center text-[0.9em] sm:text-4xl leading-none  font-bold">
              TERESA BARBERENA
            </h1>
          </div>
          <div className="sm:flex justify-center w-full h-[35%]">
            <ul
              className={`w-[45%] hidden sm:flex text-[14px] justify-around text-white `}
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
        <div className="w-[23%]  sm:w-[7%] "></div>
      </section>
    </nav>
  );
};

export default NavBar;
