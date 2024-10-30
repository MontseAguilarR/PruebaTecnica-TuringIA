import React from 'react';
import { Title } from './Title';
import { Artist } from './Artist';
import { Description } from './Description';
import { PrincipalButton } from './PrincipalButton';
import { Date } from './Date';

export const SongsSection = () => {
    const songs = [
        {
            id: 1,
            title: "Canción 1",
            artist: "Artista 1",
            description: "Descripción breve de la canción 1.",
            date: "10 Noviembre 2024", 
            albumCover: "/images/Logo.png", 
        },
        {
            id: 2,
            title: "Canción 2",
            artist: "Artista 2",
            description: "Descripción breve de la canción 2.",
            date: "15 Diciembre 2024", 
            albumCover: "/images/album2.jpg",
        },
        {
            id: 3,
            title: "Canción 3",
            artist: "Artista 3",
            description: "Descripción breve de la canción 3.",
            date: "22 Enero 2025", 
            albumCover: "/images/album3.jpg",
        },
    ];

    return (
        <div className="mt-10">
             <h1 className='text-center text-4xl font-bold text-[#005546]'>Canciones del momento</h1>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mx-10">
                 {songs.map((song) => (
                     <div key={song.id} className="flex items-center bg-[#0f2d3c] p-4 rounded-lg shadow-md h-50">
                        <div className='w-[200px]'>
                            <img src={song.albumCover} alt={`Portada de ${song.title}`} className="w-auto h-auto object-cover rounded-lg" />
                        </div>
                         
                         <div className="ml-4">
                             <Title title={song.title} />
                             <Artist artist={song.artist}/>
                              <Description description={song.description} />
                             <Date date={song.date} />
                             <div className="mt-2 flex space-x-2">
                                 <PrincipalButton className="mx-5" text="Me gusta" onClick={() => handleListenClick(song.title)} />
                                 <PrincipalButton text="Agregar a Playlist" onClick={() => handleAddToFavorites(song.title)} />
                             </div>
                         </div>
                     </div>
                 ))}
            </div>
        </div>
         

    );
};

