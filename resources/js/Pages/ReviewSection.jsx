import React from 'react'
import { Title } from './Title';
import { Description } from './Description';
import { Date } from './Date';

export const ReviewSection = () => {

    const reviews = [
        {
            id: 1,
            image: "/images/Logo.png",
            author: "Juan Pérez",
            date: "30 Octubre 2024",
            title: "Reseña increíble",
            description: "Esta canción fue una experiencia única, me encantó el ritmo y la letra. ¡Recomendada!",
        },
        {
            id: 2,
            image: "/images/review2.jpg",
            author: "María López",
            date: "28 Octubre 2024",
            title: "Una obra maestra",
            description: "La producción musical es de otro nivel, un sonido que me acompañará por mucho tiempo.",
        },
        {
            id: 3,
            image: "/images/review1.jpg",
            author: "Juan Pérez",
            date: "30 Octubre 2024",
            title: "Reseña increíble",
            description: "Esta canción fue una experiencia única, me encantó el ritmo y la letra. ¡Recomendada!",
        },
        {
            id: 4,
            image: "/images/review2.jpg",
            author: "María López",
            date: "28 Octubre 2024",
            title: "Una obra maestra",
            description: "La producción musical es de otro nivel, un sonido que me acompañará por mucho tiempo.",
        },
    ];

    return (
        <div className="mt-10">
    <h1 className="text-center text-4xl font-bold text-[#005546]">Reseñas</h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 mx-10">
        {reviews.map((review) => (
            <div key={review.id} className="bg-[#c8d2d7] p-4 rounded-lg shadow-md w-[300px] h-[300px] flex flex-col justify-between ring-1 ring-[#005546]"> {/* Ajustar padding y usar flexbox */}
                
                <img src={review.image} alt={`Imagen de ${review.title}`} className="w-full h-32 object-cover rounded-lg" /> {/* Ajustar altura de la imagen */}
                
                <div className="flex justify-between text-sm mt-2"> 
                    <p className="text-[#1ebe91] font-semibold">{review.author}</p>    
                    <Date date={review.date}></Date>
                </div>

                <Title title={review.title} className="text-[#0f2d3c] font-semibold"></Title>
                
                <Description description={review.description} className="text-[#0f2d3c] font-light"></Description>

                <div className="mt-2 flex justify-end items-end m-3">
                    <div className="text-center text-white font-bold text-lg bg-[#005546] rounded-lg w-8 h-7">7.0</div>
                </div>

                <div className="flex justify-between items-end">
                 <div>
                     <div className='bg-[#1ebe91] rounded-lg w-8 h-3'></div>
                 </div>
                 <div className="flex gap-1">
                     <div className='bg-[#1ebe91] rounded-lg w-3 h-3'></div>
                     <div className='bg-[#1ebe91] rounded-lg w-3 h-3'></div>
                     <div className='bg-[#1ebe91] rounded-lg w-3 h-3'></div>
                 </div>
                </div>
            </div>
        ))}
    </div>
</div>

    );
};

