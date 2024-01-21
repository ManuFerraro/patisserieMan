'use client'

import { useForm } from "react-hook-form"
import PersonalInformationRegister from "./formChild/PersonalInformationRegister"
import UserInformationRegister from "./formChild/UserInformationRegister";
import { registerValidation } from "@/libs/validations/RegisterValidation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const RegisterForm = () => {


const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof registerValidation>>({
    resolver: zodResolver(registerValidation),
    defaultValues: {
        nombre: '',
        apellido: '',
        ciudad: '',
        direccion: '',
        numero: '',
        codigoPostal: '',
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
    }
});

const onSubmit = (values: any) => {
    console.log('asdasd',values)
}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-[80%] mx-auto sm:mx-0 sm:w-full h-full flex flex-col '>
        {/* COL ONE */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-0">
        <section className='flex-1 flex flex-col lg:border-r'>
            <h1 className="text-lg sm:text-xl font-normal mb-6 text-center font-prata">Información Personal</h1>
            <div className="grid grid-cols-1 gap-2 sm:gap-4  sm:w-[100%] h-[526px] sm:mx-auto">
                <PersonalInformationRegister register={register} error={errors}/>
            </div>
        </section>
        <section className='flex-1 flex flex-col'>
            <h1 className="text-lg sm:text-xl font-normal font-prata mb-6 sm:mb-6 text-center ">Información Usuario</h1>
            <div className="grid grid-cols-1 gap-2 sm:gap-4  sm:w-[100%] h-[350px] sm:h-[526px] sm:mx-auto">
                <UserInformationRegister register={register} error={errors}/>
            </div>
        </section>
      </div>
      {/* COL TWO */}
      <div className="w-full h-[200px] sm:h-[200px] flex flex-col sm:flex-row justify-center items-center  pt-5">
        <div className="sm:flex-1"></div>
        <div className="flex-1 flex flex-col h-full justify-around">
            <div className="w-[90%] xxs:w-[98%] sm:w-[80%] mx-auto mb-5 sm:mb-0">
              <p className='font-nutitoSans  text-[13px] sm:text-[14px] text-black font-semibold'>
                By clicking on CREATE MY ACCOUNT I accept <a href="" className="underline">the conditions of membership and application of Teresa Barberena</a> and declare that i have read <a href="" className="underline">the privacy policy</a> 
              </p>
            </div>
            <div className="w-[90%] sm:w-[80%] mx-auto  flex justify-center items-center ">
                <button
                type="submit"
                className="w-[230px] xxs:w-[300px] sm:w-[400px] h-[50px] bg-BgTop text-white"
                >CREATE MY ACCOUNT</button>
            </div>
        </div>
      </div>
    </form>
  )
}

export default RegisterForm