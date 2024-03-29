"use client";
import {
  Props,
  onActiveValues,
} from "@/components/data-sources/form/dataSourceRegister";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface PersonalInformationRegisterProps {
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

const PersonalInformationRegister = ({
  register,
  error,
}: PersonalInformationRegisterProps) => {
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
      <div className="h-[86px] sm:h-[92px] flex flex-col justify-around">
        {error.username ? (
          <span className="text-[12px] text-red">{error.nombre?.message}</span>
        ) : (
          <p
            className={` text-[14px] font-nutitoSans font-bold ${
              onActiveInput.find((field) => field.nameValues === "nombre")
                ?.isActive
                ? "text-gold"
                : "text-formName"
            }`}
          >
            Nombre*
          </p>
        )}

        <input
          type="text"
          className="w-[230px] xxs:w-[300px] sm:w-[400px] h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
          {...register("nombre")}
          onFocus={() => handleFocusChange("nombre")}
          onBlur={() => handleBlurChange("nombre")}
        />
      </div>
      <div className="h-[86px] sm:h-[92px] flex flex-col justify-around">
        {error.username ? (
          <span className="text-[12px] text-red">
            {error.apellido?.message}
          </span>
        ) : (
          <p
            className={`text-[14px] font-nutitoSans font-bold ${
              onActiveInput.find((field) => field.nameValues === "apellido")
                ?.isActive
                ? "text-gold"
                : "text-formName"
            }`}
          >
            Apellido*
          </p>
        )}

        <input
          type="text"
          className="w-[230px] xxs:w-[300px] sm:w-[400px] h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
          {...register("apellido")}
          onFocus={() => handleFocusChange("apellido")}
          onBlur={() => handleBlurChange("apellido")}
        />
      </div>
      <div className="h-[86px] sm:h-[92px] flex flex-col justify-around">
        {error.username ? (
          <span className="text-[12px] text-red">{error.ciudad?.message}</span>
        ) : (
          <p
            className={`text-[14px] font-nutitoSans font-bold ${
              onActiveInput.find((field) => field.nameValues === "ciudad")
                ?.isActive
                ? "text-gold"
                : "text-formName"
            }`}
          >
            Ciudad*
          </p>
        )}

        <select
          className="w-[230px] xxs:w-[300px] sm:w-[400px] h-[50px] border  border-inputBorder outline-none focus:border-black focus:ring-0"
          {...register("ciudad")}
          onFocus={() => handleFocusChange("ciudad")}
          onBlur={() => handleBlurChange("ciudad")}
        >
          <option value="dolores">Dolores</option>
          <option value="castelli">Castelli</option>
          <option value="lezama">Lezama</option>
          <option value="chascomus">Chascomús</option>
        </select>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-[300px] h-[86px] sm:h-[92px] flex flex-col justify-around sm:pr-5 ">
          {error.username ? (
            <span className="text-[12px] text-red">
              {error.direccion?.message}
            </span>
          ) : (
            <p
              className={` text-[14px] font-nutitoSans font-bold  ${
                onActiveInput.find((field) => field.nameValues === "direccion")
                  ?.isActive
                  ? "text-gold"
                  : "text-formName"
              }`}
            >
              Direccion*
            </p>
          )}

          <input
            type="text"
            className="w-[230px] xxs:w-[300px] sm:w-full h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
            {...register("direccion")}
            onFocus={() => handleFocusChange("direccion")}
            onBlur={() => handleBlurChange("direccion")}
          />
        </div>
        <div className="sm:w-[100px] h-[86px] sm:h-[92px] flex flex-col justify-around ">
          {error.username ? (
            <span className="text-[12px] text-red">
              {error.numero?.message}
            </span>
          ) : (
            <p
              className={`text-[14px] font-nutitoSans font-bold  ${
                onActiveInput.find((field) => field.nameValues === "numero")
                  ?.isActive
                  ? "text-gold"
                  : "text-formName"
              }`}
            >
              Numero*
            </p>
          )}

          <input
            type="text"
            className="w-[230px] xxs:w-[300px] sm:w-full h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
            {...register("numero")}
            onFocus={() => handleFocusChange("numero")}
            onBlur={() => handleBlurChange("numero")}
          />
        </div>
      </div>
      <div className="h-[86px] sm:h-[92px] flex flex-col justify-around">
        {error.username ? (
          <span className="text-[12px] text-red">
            {error.codigoPostal?.message}
          </span>
        ) : (
          <p
            className={`text-[14px] font-nutitoSans font-bold  ${
              onActiveInput.find((field) => field.nameValues === "codigoPostal")
                ?.isActive
                ? "text-gold"
                : "text-formName"
            }`}
          >
            Código Postal*
          </p>
        )}

        <input
          type="text"
          className="w-[230px] xxs:w-[300px] sm:w-[400px] h-[50px] border p-2 border-inputBorder outline-none focus:border-black focus:ring-0"
          {...register("codigoPostal")}
          onFocus={() => handleFocusChange("codigoPostal")}
          onBlur={() => handleBlurChange("codigoPostal")}
        />
      </div>
    </main>
  );
};

export default PersonalInformationRegister;
