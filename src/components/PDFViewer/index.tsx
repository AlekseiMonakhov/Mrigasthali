import React, { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Инициализируем worker для PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  file: string;
  name: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file, name }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const displayName = name.replace('.pdf', '');

  useEffect(() => {
    const loadPdfThumbnail = async () => {
      try {
        // Загружаем PDF документ
        const loadingTask = pdfjsLib.getDocument(file);
        const pdf = await loadingTask.promise;

        // Получаем первую страницу
        const page = await pdf.getPage(1);
        
        // Устанавливаем масштаб для превью
        const viewport = page.getViewport({ scale: 0.5 });
        
        // Создаем canvas для рендеринга
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        if (!context) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Рендерим страницу в canvas
        await page.render({
          canvasContext: context,
          viewport: viewport
        }).promise;

        // Конвертируем canvas в data URL
        const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.8);
        setThumbnail(thumbnailUrl);
      } catch (error) {
        console.error('Error generating thumbnail:', error);
      }
    };

    loadPdfThumbnail();
  }, [file]);

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
          src={thumbnail}
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
