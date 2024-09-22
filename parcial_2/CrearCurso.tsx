import React, { useState } from 'react';
import axios from 'axios';

interface Curso {
  nombre: string;
  creditos: number;
  descripcion: string;
}

const CrearCurso: React.FC = () => {
  const [nombre, setNombre] = useState<string>('');
  const [creditos, setCreditos] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');

  const handleGuardar = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const curso: Curso = {
      nombre,
      creditos: parseInt(creditos),
      descripcion: `Carnet: 5390-21-6912, Nombre: David Morales, Sección: A - ${descripcion}`
    };

    try {
      await axios.post('https://test-deploy-12.onrender.com/cursos', curso);
      alert('Curso guardado exitosamente');
      limpiarFormulario();
    } catch (error) {
      alert('Error al guardar el curso');
      console.error(error);
    }
  };

  const limpiarFormulario = () => {
    setNombre('');
    setCreditos('');
    setDescripcion('');
  };

  return (
    <div>
      <h2>Crear Curso</h2>
      <form onSubmit={handleGuardar}>
        <div>
          <label>Nombre del curso:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Créditos:</label>
          <input
            type="number"
            value={creditos}
            onChange={(e) => setCreditos(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Guardar</button>
          <button type="button" onClick={limpiarFormulario}>Limpiar</button>
        </div>
      </form>
    </div>
  );
};

export default CrearCurso;

//