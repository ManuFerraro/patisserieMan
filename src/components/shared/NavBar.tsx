




const NavBar = () => {
  return (
    <nav className="w-full h-full absolute">
      <section className="max-w-screen-lg mx-auto h-[50%] flex flex-grow border border-black">
        <div className="w-[23%] sm:w-[7%] border border-gold"></div>
        <div className="w-[54%] sm:w-[86%] border border-gold flex flex-col justify-start items-center">
          <div>
            <h1>TERESA BARBERENA</h1>
          </div>
          <div className="sm:flex justify-center">
          <ul className={`w-full flex text-sm justify-around text-black `}>
                <li className="cursor-pointer">Tienda</li>
                <li className="cursor-pointer">Quiénes somos</li>
                <li className="cursor-pointer">Contacto</li>
              </ul>
          </div>
        </div>
        <div className="w-[23%]  sm:w-[7%] border border-gold"></div>
      </section>
    </nav>
  );
};

export default NavBar;
