import React, { useState, useEffect } from 'react';

function CodeEditorSin() {
    const [formData, setFormData] = useState({
        codigo: ''
    });

    const [tableData, setTableData] = useState([]); // Estado para almacenar los datos de la tabla

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Realiza la validación de los campos aquí
        const { codigo } = formData;

        // Ejemplo de validación simple
        if (!codigo) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        // Si todos los campos están completos, puedes enviar los datos al servidor o realizar cualquier otra acción necesaria aquí
        // Ejemplo de envío de datos a un servidor (usando fetch, axios u otra biblioteca)
        try {
            const response = await fetch('http://localhost:8080/api/codigo/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Aquí debes enviar los datos del formulario en el formato adecuado
            });

            if (response.ok) {
                // La solicitud fue exitosa, puedes mostrar un mensaje de éxito o redirigir a otra página
                alert('El formulario se ha enviado con éxito.');
                // Redirigir al usuario a otra página
                window.location.href = '/CodeEditorSin';
            } else {
                // La solicitud falló, puedes manejar el error de acuerdo a tus necesidades
                alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
            }
        } catch (error) {
            // Manejo de errores en caso de que ocurra una excepción
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    useEffect(() => {
        // Realiza una solicitud al servidor para obtener los datos de la tabla cuando el componente se monta
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8080/api/codigo/');
                if (response.ok) {
                    const data = await response.json();
                    setTableData(data); // Actualiza el estado con los datos de la tabla
                } else {
                    console.error('Error al obtener los datos de la tabla.');
                }
            } catch (error) {
                console.error('Error al obtener los datos de la tabla:', error);
            }
        }

        fetchData();
    }, []); // El segundo argumento [] asegura que se realice la solicitud solo una vez al montar el componente

    return (
        <div>
            <h1>Introduce una línea de código Java</h1>
            <div style={{ width: '75%', float: 'left', marginRight: '10px' }}>
                <input
                    type="text"
                    placeholder="Introduce una línea de código Java"
                    name="codigo" // Asigna el nombre del campo
                    value={formData.codigo} // Utiliza el valor del estado formData
                    onChange={handleChange} // Utiliza la función handleChange
                    style={{ width: '100%' }}
                />
            </div>
            <div style={{ width: '25%', float: 'left' }}>
                <button onClick={handleSubmit} style={{ width: '100%' }}>
                    Guardar
                </button>
            </div>
            <div style={{ clear: 'both' }}></div>

            <h1>Listado de preguntas</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>
                            Línea
                        </th>
                        <th>
                            Código
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.codigo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CodeEditorSin;
