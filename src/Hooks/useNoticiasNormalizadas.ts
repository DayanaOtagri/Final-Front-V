import {useState} from 'react';

export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: number | string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
  }

const useNoticiasNormalizadas = () => {
    const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);

    return {noticias, setNoticias};
}

export default useNoticiasNormalizadas;