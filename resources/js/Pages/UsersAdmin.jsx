import React from 'react';
import Table from './Table';

const UsersAdmin = ({ users, onDelete }) => {
    const columns = ['ID', 'Name', 'Email', 'Eliminar'];

    return (
        <div className='mb-5'>
            <h2 className="text-lg font-semibold text-[#005546]">Lista de Usuarios</h2>
            {users.length > 0 ? (
                <Table columns={columns} data={users} onDelete={onDelete} entity="users" /> // Pasa "users"
            ) : (
                <div>No hay usuarios disponibles.</div>
            )}
        </div>
    );
};

export default UsersAdmin;


