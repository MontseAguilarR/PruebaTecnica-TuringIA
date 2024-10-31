import React, { useState } from 'react';
import { PrincipalButton } from './PrincipalButton';
import UsersAdmin from './UsersAdmin';
import axios from 'axios';
import { SongsAdmin } from './SongsAdmin';
import { EventsAdmin } from './EventsAdmin';
import { ReviewsAdmin } from './ReviewsAdmin';
import GenericForm from './GenericForm';

export const TaskSection = () => {
    const [showUsers, setShowUsers] = useState(false);
    const [users, setUsers] = useState([]);
    const [showSongs, setShowSongs] = useState(false);
    const [songs, setSongs] = useState([]);
    const [showEvents, setShowEvents] = useState(false);
    const [events, setEvents] = useState([]);
    const [showReviews, setShowReviews] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [showAddSongForm, setShowAddSongForm] = useState(false);
    const [showAddEventForm, setShowAddEventForm] = useState(false);

    // Funciones para obtener datos
    const fetchUsers = async () => {
        try {
            const response = await axios.get('/admin/users'); 
            setUsers(response.data);
            setShowUsers(true);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const fetchSongs = async () => {
        try {
            const response = await axios.get('/admin/songs'); 
            setSongs(response.data); 
            setShowSongs(true); 
        } catch (error) {
            console.error('Error al obtener canciones:', error);
        }
    };

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/admin/events');
            setEvents(response.data); 
            setShowEvents(true);
        } catch (error) {
            console.error('Error al obtener eventos:', error);
        }
    };

    const fetchReviews = async () => {
        try {
            const response = await axios.get('/admin/reviews'); 
            setReviews(response.data); 
            setShowReviews(true); 
        } catch (error) {
            console.error('Error al obtener reseñas', error);
        }
    };

    // Funciones para manejar la visualización
    const handleShowUsers = () => {
        setShowUsers((prev) => !prev); 
        if (!showUsers) fetchUsers(); 
    };

    const handleShowSongs = () => {
        setShowSongs((prev) => !prev);
        if (!showSongs) fetchSongs();
    };

    const handleShowEvents = () => {
        setShowEvents((prev) => !prev);
        if (!showEvents) fetchEvents();
    };

    const handleShowReviews = () => {
        setShowReviews((prev) => !prev);
        if (!showReviews) fetchReviews();
    };

    const handleEventAdded = (newEvent) => {
        setEvents((prevEvents) => [...prevEvents, newEvent]); // Agrega el nuevo evento al estado
        setShowAddEventForm(false); // Cierra el formulario (opcional)
    };

    const handleSongAdded = (newSong) => {
        // Agrega la nueva canción al estado actual de canciones
        setSongs((prevSongs) => [...prevSongs, newSong]);
        setShowAddSongForm(false); // Opcional: cerrar el formulario al agregar
    };

    // Funciones para manejar la eliminación
    const handleDelete = async (id, entity) => {
        console.log(entity)
        const confirmMessage = `¿Estás seguro de que deseas eliminar este ${entity}?`;
        if (window.confirm(confirmMessage)) {
            try {
                // Cambia la URL según la entidad
                await axios.delete(`/admin/${entity}/${id}`);
                // Actualiza el estado según la entidad
                if (entity === 'users') {
                    setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
                } else if (entity === 'songs') {
                    setSongs((prevSongs) => prevSongs.filter(song => song.id !== id));
                } else if (entity === 'events') {
                    setEvents((prevEvents) => prevEvents.filter(event => event.id !== id));
                }
            } catch (error) {
                console.error(`Error al eliminar ${entity}:`, error);
            }
        }
    };

    return (
        <div className="mt-10">
            <h1 className="text-center text-4xl font-bold text-[#005546]">Sección de Administración</h1>
            <div className="flex flex-col items-center mt-8">
                <PrincipalButton text="Usuarios" onClick={handleShowUsers} className='bg-[#69d7b9] p-4 rounded-lg shadow-md w-56 mb-4 hover:bg-[#1ebe91] transition-opacity duration-300' />
                {showUsers && <UsersAdmin users={users} onDelete={handleDelete} />}
                
                <PrincipalButton text="Canciones" onClick={handleShowSongs} className='bg-[#69d7b9] p-4 rounded-lg shadow-md w-56 mb-4 hover:bg-[#1ebe91] transition-opacity duration-300' />
                {showSongs && <SongsAdmin songs={songs} onDelete={handleDelete} />}
                
                {showSongs && (
                    <>
                        <PrincipalButton text="Agregar Canción" onClick={() => setShowAddSongForm(!showAddSongForm)} className='bg-[#69d7b9] p-2 rounded-lg mb-2' />
                        {showAddSongForm && <GenericForm entity="songs" onEntityAdded={handleSongAdded} />}
                    </>
                )}

                <PrincipalButton text="Eventos" onClick={handleShowEvents} className='bg-[#69d7b9] p-4 rounded-lg shadow-md w-56 mb-4 hover:bg-[#1ebe91] transition-opacity duration-300' />
                {showEvents && <EventsAdmin events={events} onDelete={handleDelete} />}
                
                {showEvents && (
                    <>
                        <PrincipalButton text="Agregar Evento" onClick={() => setShowAddEventForm(!showAddEventForm)} className='bg-[#69d7b9] p-2 rounded-lg mb-2' />
                        {showAddEventForm && <GenericForm entity="events" onEntityAdded={handleEventAdded} />}
                    </>
                )}

                <PrincipalButton text="Reseñas" onClick={handleShowReviews} className='bg-[#69d7b9] p-4 rounded-lg shadow-md w-56 mb-4 hover:bg-[#1ebe91] transition-opacity duration-300' />
                {showReviews && <ReviewsAdmin reviews={reviews} onDelete={handleDelete} />}
            </div>
        </div>
    );
};
