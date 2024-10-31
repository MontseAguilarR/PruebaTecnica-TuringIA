import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const EventsSection = () => {
    const [events, setEvents] = useState([]); // Estado para almacenar los eventos
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/users/events'); // Cambia esta URL según sea necesario
                setEvents(response.data); // Suponiendo que la respuesta contiene un array de eventos
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return <div>Cargando eventos...</div>; // Mensaje de carga
    }

    if (error) {
        return <div>Error al cargar eventos: {error}</div>; // Mensaje de error
    }

    return (
        <div>
        <div className='mt-10 my-5'>
            <h1 className='text-center text-4xl font-bold text-[#005546]'>Eventos próximos</h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mx-10 mb-0 ">
            {events.map((event) => (
                <div 
                    key={event.id} 
                    className="relative rounded-lg bg-cover bg-center w-[200px] bg-[#005546] h-[130px] flex items-center justify-center text-white group overflow-hidden transition-transform duration-300 transform hover:scale-105" 
                    style={{ backgroundImage: `url(${event.backgroundImage})` }} 
                >
                    
    
                    <div className="relative z-10 p-4 text-center rounded-lg">
                        <h2 className="text-2xl font-bold">{event.title}</h2>
                        <p className="text-lg">{event.location}</p>
                        <p className="text-lg mt-1">{event.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    );
};

