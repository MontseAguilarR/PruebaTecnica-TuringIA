import React from 'react'
import { PrincipalButton } from './PrincipalButton';

export const InfoSection = () => {
    const handleClick = () => {
        console.log("Botón clicado!");
    };

  return (
    <div className='bg-[#0f2d3c] w-full h-[300px] flex flex-col justify-center items-center'>
        <h1 className="text-[#69d7b9] text-xl font-bold">¡Bienvenido a BeatConnect!</h1>
        <p className="text-white mt-2 w-[300px] text-center">¡Explora, música, eventos, crea tus propias playlist y crea tus propias reseñas de las canciones disponibles!. Ve nuestras canciones recientes</p>
    </div>

  )
}
