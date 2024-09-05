import React from 'react';

interface PDFViewerProps {
  file: string;
  name: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ name }) => {
  const displayName = name.replace('.pdf', '');

  return (
    <div style={{ 
      width: 150, 
      height: 200, 
      backgroundColor: 'white', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      border: '1px solid #ccc',
      padding: '10px',
      textAlign: 'center',
      wordBreak: 'break-word'
    }}>
      {displayName}
    </div>
  );
};

export default PDFViewer;
