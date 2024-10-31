// Table.jsx
import React from 'react';

const Table = ({ columns, data, onDelete, entity }) => { 
    return (
        <div>
            <table className="min-w-full border-collapse rounded-lg overflow-hidden">
                <thead className="bg-[#005546]">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} className="border border-[#005546] p-4 text-white">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-100">
                            {columns.map((column) => (
                                <td key={column} className="border border-[#005546] p-4">
                                    {column === 'Eliminar' ? (
                                        <button 
                                        
                                            onClick={() => onDelete(item.id, entity)} 
                                            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                                        >
                                            Eliminar
                                        </button>
                                    ) : (
                                        item[column.toLowerCase()] 
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
