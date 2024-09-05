import React from 'react';

interface PDFViewerProps {
  file: string;
  name: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ name }) => {
  const displayName = name.replace('.pdf', '');

  return (
    <div style={{ width: 150, height: 200, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc' }}>
      <span style={{ textAlign: 'center', wordBreak: 'break-word', padding: '10px' }}>{displayName}</span>
    </div>
  );
};

export default PDFViewer;
