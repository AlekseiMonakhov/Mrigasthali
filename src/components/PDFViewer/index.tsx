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
      overflow: 'hidden',
      position: 'relative'
    }}>
      {thumbnail ? (
        <img 
          src={thumbnail}
          alt={displayName}
          onError={(e) => {
            console.error('Error loading thumbnail for:', displayName);
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement?.querySelector('.fallback')?.classList.remove('hidden');
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      ) : null}
      <div 
        className="fallback"
        style={{
          width: '100%',
          height: '100%',
          display: thumbnail ? 'none' : 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          textAlign: 'center',
          wordBreak: 'break-word',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'white'
        }}
      >
        {displayName}
      </div>
    </div>
  );
};

export default PDFViewer;
