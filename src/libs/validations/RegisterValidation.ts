import * as z from "zod";

export const registerValidation = z.object({
  nombre: z 
  .string()
  .min(1, { message: '(*) Este campo es requerido'}),
  apellido: z 
  .string()
  .min(1, { message: '(*) Este campo es requerido'}),
  ciudad: z 
  .string()
  .min(1, { message: '(*) Este campo es requerido'}),
  direccion: z 
  .string()
  .min(1, { message: '(*) Este campo es requerido'}),
  numero: z 
  .string()
  .min(1, { message: '(*) Este campo es requerido'}),
  codigoPostal: z 
  .string()
  .min(1, { message: '(*) Este campo es requeridoo'}),
  username: z
   .string()
   .min(1, { message: "(*) Este campo es requerido" }),
  email: z
   .string()
   .min(1, { message: "(*) Este campo es requerido" })
   .email({
    message: "Debe ser un email válido",
  }),
    password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 carácteres" }),
    confirmpassword: z
      .string()
      .min(1, { message: "(*) Este campo es requerido" }),
     
})


  
.refine(data => data.password === data.confirmpassword, {
  path: ["confirmpassword"],
  message: "Las contraseñas no coinciden",
});
