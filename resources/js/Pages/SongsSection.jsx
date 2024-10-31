import React, { useEffect, useState } from 'react';
import { Title } from './Title';
import { Artist } from './Artist';
import { Description } from './Description';
import { PrincipalButton } from './PrincipalButton';
import { Date } from './Date';

export const SongsSection = () => {
        
    const [songs, setSongs] = useState([]); // Estado para almacenar los eventos
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores
    
        useEffect(() => {
            const fetchSongs = async () => {
                try {
                    const response = await axios.get('/users/songs'); 
                    setSongs(response.data); 
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchSongs();
        }, []);
    
        if (loading) {
            return <div>Cargando canciones...</div>; // Mensaje de carga
        }
    
        if (error) {
            return <div>Error al cargar canciones: {error}</div>; // Mensaje de error
        }


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
                             <Title title={song.title}className="text-white font-bold" />
                             <Artist artist={song.artist} className="text-[#c8d2d7] font-semibold "/>
                              <Description description={song.description} className="text-[#c8d2d7] font-light"/>
                             <Date date={song.date} />
                             <div className="mt-2 flex space-x-2">
                                 <PrincipalButton className="mx-5 bg-[#1ebe91] text-[#e7e7e7] px-4 py-2 rounded my-5 hover:bg-[#e7e7e7] hover:text-[#005546] transition-colors duration-300 ease-in-out" text="Me gusta" onClick={() => handleListenClick(song.title)} />
                                 <PrincipalButton text="Agregar a Playlist" onClick={() => handleAddToFavorites(song.title) }className="bg-[#1ebe91] text-[#ffffff] px-4 py-2 rounded my-5 hover:bg-white hover:text-[#005546] transition-colors duration-300 ease-in-out" />
                             </div>
                         </div>
                     </div>
                 ))}
            </div>
        </div>
         

    );
};

