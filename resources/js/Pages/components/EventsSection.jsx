import React from 'react';

export const EventsSection = () => {
    const events = [
        {
            id: 1,
            title: "Concierto de Rock",
            date: "10 Noviembre 2024",
            backgroundImage: "url('/images/Logo.png')", // Ruta de la imagen
        },
        {
            id: 2,
            title: "Festival de Jazz",
            date: "15 Diciembre 2024",
            backgroundImage: "url('/images/jazz-festival.jpg')", // Ruta de la imagen
        },
        {
            id: 3,
            title: "Festival de Jazz",
            date: "15 Diciembre 2024",
            backgroundImage: "url('/images/jazz-festival.jpg')", // Ruta de la imagen
        }
    ];

    return (
     <div>
        <div className='mt-10 my-5'>
          <h1 className='text-center text-4xl font-bold text-[#005546]'>Eventos próximos</h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mx-10 mb-0 ">
            {events.map((event) => (
                <div 
                    key={event.id} 
                    className="relative rounded-lg bg-cover bg-center w-[200px] h-[130px] flex items-center justify-center text-white group overflow-hidden" 
                    style={{ backgroundImage: event.backgroundImage }}
                >
                    {/* Capa verde que aparece al hacer hover */}
                    <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 bg-[#0f2d3c] bg-opacity-50 p-4 text-center rounded-lg">
                        <h2 className="text-2xl font-bold">{event.title}</h2>
                        <p className="text-lg mt-2">{event.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};
