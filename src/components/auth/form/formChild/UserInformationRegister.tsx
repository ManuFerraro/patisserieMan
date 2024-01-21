import React from 'react'

const UserInformationRegister = () => {
  return (
    <>
    <div className="h-[86px] sm:h-[92px] flex flex-col justify-around ">
        <p className={` text-[14px] font-nutitoSans font-bold text-formName`}>Nombre*</p>
        <input type="text" className="sm:w-[400px] h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
        />
    </div>
    </>
  )
}

export default UserInformationRegister