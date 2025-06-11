import React from 'react';
import jsPDF from 'jspdf';

const NotesDisplay = ({ notes }) => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(notes, 180);
    doc.text(lines, 10, 10);
    doc.save('generated-notes.pdf');
  };

  return (
    <div>
      <h2>Generated Notes</h2>
      <pre style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '10px' }}>{notes}</pre>
      {notes && (
        <button onClick={downloadPDF} style={{ marginTop: '10px' }}>
          Download PDF
        </button>
      )}
    </div>
  );
};

export default NotesDisplay;
