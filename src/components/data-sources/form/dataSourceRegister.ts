
type FormField = {
    isActive: boolean;
    nameValues: string;
  };
  
export type Props = FormField[];
  

export const onActiveValues: Props = [
    {
        isActive: false,
        nameValues: 'nombre'
    },
    {
        isActive: false,
        nameValues: 'apellido'
    },
    {
        isActive: false,
        nameValues: 'ciudad'
    },
    {
        isActive: false,
        nameValues: 'direccion'
    },
    {
        isActive: false,
        nameValues: 'numero'
    },
    {
        isActive: false,
        nameValues: 'codigoPostal'
    },
]