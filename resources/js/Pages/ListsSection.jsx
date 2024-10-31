import React from 'react'

export const ListsSection = () => {

// Simulación de listas de canciones
const playlists = [
    {
        id: 1,
        title: "Mi Playlist de Rock",
    },
    {
        id: 2,
        title: "Éxitos de Pop",
    },
    {
        id: 3,
        title: "Música para Relajarse",
    },
    {
        id: 4,
        title: "Clásicos del Jazz",
    },
];
  return (
    <div className="mt-10">
        <h1 className="text-center text-4xl font-bold text-[#005546]">Tus Listas de Canciones</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-10">
            {playlists.map((playlist) => (
                <div 
                    key={playlist.id} 
                    className="bg-[#69d7b9] p-4 rounded-lg shadow-md flex items-center justify-center transition duration-300 ease-in-out transform hover:bg-[#1ebe91] hover:opacity-90"
                >
                    <h2 className="text-xl font-bold text-center text-[#005546]">{playlist.title}</h2>
                </div>
            ))}
        </div>
    </div>
);
}
