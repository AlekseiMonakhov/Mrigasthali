import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  file: string;
  name: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file, name }) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  function onDocumentLoadSuccess() {
    setLoading(false);
  }

  function onDocumentLoadError(err: Error) {
    console.error('Error loading PDF:', err);
    setError(err);
    setLoading(false);
  }

  const displayName = name.replace('.pdf', '');

  const Fallback = () => (
    <div style={{ width: 150, height: 200, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc' }}>
      <span style={{ textAlign: 'center', wordBreak: 'break-word', padding: '10px' }}>{displayName}</span>
    </div>
  );

  if (error || loading) {
    return <Fallback />;
  }

  return (
    <div style={{ width: 150, height: 200 }}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<Fallback />}
      >
        <Page pageNumber={1} width={150} height={200} />
      </Document>
    </div>
  );
};

export default PDFViewer;
