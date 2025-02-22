import React from 'react';

interface PDFViewerProps {
  file: string;
  name: string;
  thumbnail: string | null;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file, name, thumbnail }) => {
  const displayName = name.replace('.pdf', '');

  return (
    <div style={{ 
      width: 150, 
      height: 200, 
      backgroundColor: 'white', 
      border: '1px solid #ccc',
      overflow: 'hidden'
    }}>
      {thumbnail ? (
        <img 
          src={`data:image/jpeg;base64,${thumbnail}`}
          alt={displayName}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      ) : (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          textAlign: 'center',
          wordBreak: 'break-word'
        }}>
          {displayName}
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
