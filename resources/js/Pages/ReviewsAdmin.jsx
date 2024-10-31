import React from 'react'

export const ReviewsAdmin = ({ reviews, onDelete }) => {
    const columns = ['id', 'user_id','song_id', 'title','date','raiting', 'Eliminar'];


    return (
        <div className='mb-5'>
            <h2 className="text-lg font-semibold">Lista de Reseñas</h2>
            {reviews.length > 0 ? (
                <Table columns={columns} data={reviews} onDelete={onDelete} />
            ) : (
                <div>No hay reseñas disponibles.</div>
            )}
        </div>
    );
}