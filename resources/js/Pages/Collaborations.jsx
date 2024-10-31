import React from 'react'
import  Rating from './Raiting';

export const Collaborations = () => {
    const collaborations = [
        {
            id: 1,
            title: "Colaboración Épica",
            artists: "Artista A, Artista B",
            date: "30 de Octubre, 2024",
            rating: 4.5,
            image: "/images/collab1.jpg",
            userRating: 0, // Estado inicial de la puntuación del usuario
        },{
            id: 1,
            title: "Colaboración Épica",
            artists: "Artista A, Artista B",
            date: "30 de Octubre, 2024",
            rating: 4.5,
            image: "/images/collab1.jpg",
            userRating: 0, // Estado inicial de la puntuación del usuario
        },
        {
            id: 1,
            title: "Colaboración Épica",
            artists: "Artista A, Artista B",
            date: "30 de Octubre, 2024",
            rating: 4.5,
            image: "/images/collab1.jpg",
            userRating: 0, // Estado inicial de la puntuación del usuario
        },
    ];

    const handleRating = (id, rating) => {
        setCollaborations(prev =>
            prev.map(collab => 
                collab.id === id ? { ...collab, userRating: rating } : collab
            )
        );
    };

  return (
    <div className="mt-10">
            <h1 className="text-center text-4xl font-bold text-[#005546]">Colaboraciones Musicales</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-10">
                {collaborations.map((collab) => (
                    <div key={collab.id} className="bg-[#c8d2d7] p-4 rounded-lg shadow-md flex flex-col items-center">
                        {/* Imagen circular */}
                        <img 
                            src={collab.image} 
                            alt={`Imagen de ${collab.title}`} 
                            className="w-24 h-24 object-cover rounded-full border-4 border-[#1ebe91]" 
                        />
                        {/* Información de la colaboración */}
                        <h2 className="text-xl font-bold mt-2">{collab.title}</h2>
                        <p className="text-sm mt-1">{collab.artists}</p>
                        <p className="text-sm mt-1">{collab.date}</p>
                        <p className="text-lg font-bold mt-1">Rating: {collab.rating}</p>
                        
                        {/* Componente de calificación */}
                        <Rating 
                            rating={collab.userRating} 
                            onRate={(rating) => handleRating(collab.id, rating)} 
                        />
                    </div>
                ))}
            </div>
        </div>
  );
}
