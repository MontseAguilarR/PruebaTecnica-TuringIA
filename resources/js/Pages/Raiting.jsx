
import React, { useState } from 'react';
import Stars from './Stars';

const Rating = () => {
    const [rating, setRating] = useState(0); // Estado para la puntuación

    const handleRate = (value) => {
        setRating(value); // Actualiza la puntuación al valor seleccionado
    };

    return (
        <div className="flex space-x-1 mt-2">
            {[1, 2, 3, 4, 5].map((stars) => (
                <Stars 
                    key={stars} 
                    filled={stars <= rating} 
                    onClick={() => handleRate(stars)} 
                />
            ))}
        </div>
    );
};

export default Rating;

