'use client'
import { Props, onActiveValues } from '@/components/data-sources/form/dataSourceRegister';
import { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';


interface PropsChild {
  register: UseFormRegister<any>;
  error: FieldErrors<{
    nombre: string;
    email: string;
    password: string;
    apellido: string;
    ciudad: string;
    codigoPostal: string;
    direccion: string;
    numero: string;
    username: string;
    confirmpassword: string;
  }>;
}


const UserInformationRegister = ({ register, error }: PropsChild) => {

    const [onActiveInput, setOnActiveInput] = useState<Props>(onActiveValues);

    const handleFocusChange = (values: string) => {
        setOnActiveInput((prevSetOnActiveInput) =>
          prevSetOnActiveInput.map((field) =>
            field.nameValues === values
              ? { ...field, isActive: true }
              : { ...field, isActive: false }
          )
        );
      };
    
      const handleBlurChange = (values: string) => {
        setOnActiveInput((prevSetOnActiveInput) =>
          prevSetOnActiveInput.map((field) =>
            field.nameValues === values
              ? { ...field, isActive: false }
              : { ...field }
          )
        );
      };

  return (
    <main className="flex flex-col justify-around items-center">
        
    <div className="sm:w-[400px] h-[86px] sm:h-[92px] hidden sm:flex flex-col justify-around ">
        
        <p className={` text-[12px] font-nutitoSans text-center sm:text-start font-bold text-black`}> Create an account very quickly : consult your orders, download your invoices​, register and modify your delivery addresses and for private customers, benefit from exclusive privileges by joining «Le Club Ladurée»​. </p>
        
    </div>
    <div className="h-[86px] sm:h-[92px] flex flex-col justify-around ">
        <p className={` text-[14px] font-nutitoSans font-bold ${onActiveInput.find((field) => field.nameValues === "username")?.isActive ? "text-gold" : "text-formName"} `}>Username*</p>
        <input type="text" className="w-[230px] xxs:w-[300px] sm:w-[400px] h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
        {...register("username")}
        onFocus={() => handleFocusChange("username")}
        onBlur={() => handleBlurChange("username")}
        />
    </div>
    <div className="h-[86px] sm:h-[92px] flex flex-col justify-around ">
        <p className={` text-[14px] font-nutitoSans font-bold ${onActiveInput.find((field) => field.nameValues === "email")?.isActive ? "text-gold" : "text-formName"}`}>Email*</p>
        <input type="email" className="w-[230px] xxs:w-[300px] sm:w-[400px] h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
        {...register("email")}
        onFocus={() => handleFocusChange("email")}
        onBlur={() => handleBlurChange("email")}
        />
    </div>
    <div className="h-[86px] sm:h-[92px] flex flex-col justify-around ">
        <p className={` text-[14px] font-nutitoSans font-bold ${onActiveInput.find((field) => field.nameValues === "password")?.isActive ? "text-gold" : "text-formName"}`}>Contraseña*</p>
        <input type="password" className="w-[230px] xxs:w-[300px] sm:w-[400px] h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
        {...register("password")}
        onFocus={() => handleFocusChange("password")}
        onBlur={() => handleBlurChange("password")}
        />
    </div>
    <div className="h-[86px] sm:h-[92px] flex flex-col justify-around ">
        <p className={` text-[14px] font-nutitoSans font-bold ${onActiveInput.find((field) => field.nameValues === "confirmpassword")?.isActive ? "text-gold" : "text-formName"}`}>Confirmar contraseña*</p>
        <input type="password" className="w-[230px] xxs:w-[300px] sm:w-[400px] h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
        {...register("confirmpassword")}
        onFocus={() => handleFocusChange("confirmpassword")}
        onBlur={() => handleBlurChange("confirmpassword")}
        />
    </div>
    </main>
  )
}

 
     
     
      
  

export default UserInformationRegister