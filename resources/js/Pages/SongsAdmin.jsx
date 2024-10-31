import React from 'react'
import Table from './Table';

export const SongsAdmin = ({ songs, onDelete }) => {
    const columns = ['id', 'title','artist','date', 'description','Eliminar'];

    return (
        <div className='mb-5'>
            <h2 className="text-lg font-semibold text-[#005546]">Lista de Canciones</h2>
            {songs.length > 0 ? (
                <Table columns={columns} data={songs} onDelete={onDelete} entity="songs"/>
            ) : (
                <div>No hay canciones disponibles.</div>
            )}
        </div>
    );
}
