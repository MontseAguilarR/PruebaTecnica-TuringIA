// GenericForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const GenericForm = ({ entity }) => {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newData = { ...prevData, [name]: value };
            console.log('FormData actualizada:', newData); // Verifica que se actualiza correctamente
            return newData;
        });
    };
    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => {
            const newData = { ...prevData, image: file }; // Guardar el archivo en formData
            console.log('Imagen actualizada en FormData:', newData);
            return newData;
        });
    };
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });
    
        let url = entity === 'songs' ? '/admin/store/song' : '/admin/store/event';
    
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
            });
    
            // Revisa el estado de la respuesta antes de intentar procesarla como JSON
            const contentType = response.headers.get("content-type");
    
            // Si el servidor devuelve JSON, intenta procesarlo
            if (contentType && contentType.includes("application/json")) {
                const responseData = await response.json(); // Solo llamas a json() una vez
                if (response.ok) {
                    console.log(responseData.message);
                    setFormData({}); // Limpia el formulario
                } else {
                    console.error('Error al guardar los datos:', responseData.message);
                }
            } else {
                // Si no es JSON, simplemente muestra la respuesta en texto
                const textResponse = await response.text(); // Solo si no es JSON, usa text()
                console.error('Respuesta no JSON recibida:', textResponse);
            }
    
        } catch (error) {
            console.error('Error de red:', error);
        }
    };
    
    
    
    

    return (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-4 mb-3">
    <input type="hidden" name="entity" value={entity} /> {/* Campo oculto para la entidad */}

    {entity === 'songs' && (
        <>
            <input
                type="text"
                name="title"
                placeholder="Título"
                value={formData.title || ''}
                onChange={handleChange}
                required
                className="border rounded p-2 mb-2"
            />
            <input
                type="text"
                name="artist"
                placeholder="Artista"
                value={formData.artist || ''}
                onChange={handleChange}
                required
                className="border rounded p-2 mb-2"
            />
            <input
                type="date"
                name="date"
                value={formData.date || ''}
                onChange={handleChange}
                required
                className="border rounded p-2 mb-2"
            />
            <input
                type="text"
                name="description"
                placeholder="Descripción"
                value={formData.description || ''}
                onChange={handleChange}
                className="border rounded p-2 mb-2"
            />
            
        </>
    )}

    {entity === 'events' && (
        <>
            <input
                type="text"
                name="title"
                placeholder="Nombre del Evento"
                value={formData.title|| ''}
                onChange={handleChange}
                required
                className="border rounded p-2 mb-2"
            />
            <input
                type="date"
                name="date"
                value={formData.date || ''}
                onChange={handleChange}
                required
                className="border rounded p-2 mb-2"
            />
            <input
                type="text"
                name="location"
                placeholder="Ubicación"
                value={formData.location || ''}
                onChange={handleChange}
                required
                className="border rounded p-2 mb-2"
            />
            
        </>
    )}

    <button type="submit" className="bg-[#69d7b9] p-2 rounded text-white">
        Agregar {entity}
    </button>
</form>

    );
};

export default GenericForm;
