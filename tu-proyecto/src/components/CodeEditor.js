import React, { useState } from 'react';
import ReactDataGrid from 'react-data-grid';

const CodeEditor = () => {
  <h1>Hola</h1>
 /* const [codeLines, setCodeLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');

  const handleAddLine = () => {
    if (currentLine.trim() !== '') {
      setCodeLines([...codeLines, currentLine]);
      setCurrentLine('');
    }
  };

  const handleSave = () => {
    // Aquí puedes enviar codeLines al servidor o hacer cualquier otra acción necesaria.
    console.log('Código guardado:', codeLines);
  };

  const columns = [
    { key: 'line', name: 'Línea' },
    { key: 'code', name: 'Código' },
  ];

  const rows = codeLines.map((line, index) => ({
    line: index + 1,
    code: line,
  }));

  return (
    <div>
      <h1>Editor de Código</h1>
      <div>
        <textarea
          rows="4"
          cols="50"
          value={currentLine}
          onChange={(e) => setCurrentLine(e.target.value)}
        />
        <button onClick={handleAddLine}>Agregar Línea</button>
        <button onClick={handleSave}>Guardar</button>
      </div>
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={(i) => rows[i]}
          rowsCount={rows.length}
          minHeight={300}
        />
      </div>
    </div>
  );*/
};

export default CodeEditor;
