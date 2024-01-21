'use client'

import { useForm } from "react-hook-form"
import PersonalInformationRegister from "./formChild/PersonalInformationRegister"
import UserInformationRegister from "./formChild/UserInformationRegister";

const RegisterForm = () => {


const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        nombre: '',
        apellido: '',
        ciudad: '',
        direccion: '',
        numero: '',
        codigoPostal: '',
    }
});

const onSubmit = (values: any) => {
    console.log('asdasd',values)
}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-[80%] mx-auto sm:mx-0 sm:w-full h-full flex flex-col '>
        {/* COL ONE */}
      <div className="flex flex-col sm:flex-row sm:justify-between ">
        <section className='flex-1 flex flex-col'>
            <h1 className="text-lg sm:text-xl font-normal mb-6 text-center font-prata">Información Personal</h1>
            <div className="grid grid-cols-1 gap-2 sm:gap-4  sm:w-[100%] h-[526px] sm:mx-auto">
                <PersonalInformationRegister register={register}/>
            </div>
        </section>
        <section className='flex-1 flex flex-col'>
            <h1 className="text-lg sm:text-xl font-normal font-prata mb-6 text-center ">Información Usuario</h1>
            <div className="grid grid-cols-1 gap-2 sm:gap-4 border border-red sm:w-[100%] sm:mx-auto">
                <UserInformationRegister />
            </div>
        </section>
      </div>
      {/* COL TWO */}
      <div>
        <button type="submit">Createee</button>
      </div>
    </form>
  )
}

export default RegisterForm