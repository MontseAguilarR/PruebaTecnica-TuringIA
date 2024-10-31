import React from 'react'
import Table from './Table';

export const EventsAdmin = ({ events, onDelete }) => {
    const columns = ['id', 'title','date','location', 'Eliminar'];

    return (
        <div className='mb-5'>
            <h2 className="text-lg font-semibold text-[#005546]">Lista de Eventos</h2>
            {events.length > 0 ? (
                <Table columns={columns} data={events} onDelete={onDelete} entity="events"/>
            ) : (
                <div>No hay eventos disponibles.</div>
            )}
        </div>
    );
}