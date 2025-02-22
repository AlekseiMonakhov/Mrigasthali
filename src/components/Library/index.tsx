'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import dynamic from 'next/dynamic';
import { BookInfo } from '@/utils/getBooks';

const PDFViewer = dynamic(() => import('../PDFViewer'), { ssr: false });

interface LibraryComponentProps {
  initialBooks: BookInfo[];
}

const LibraryComponent: React.FC<LibraryComponentProps> = ({ initialBooks }) => {
  const [books, setBooks] = useState<BookInfo[]>([]);

  useEffect(() => {
    setBooks(initialBooks);
  }, [initialBooks]);

  const handleDownload = (path: string) => {
    window.open(path, '_blank');
  };

  if (!books || books.length === 0) {
    return <div>Loading books...</div>;
  }

  return (
    <div className={styles.libraryContainer}>
      <h1>Library</h1>
      <div className={styles.booksGrid}>
        {books.map((book, index) => (
          <div key={index} className={styles.bookItem}>
            <PDFViewer 
              file={book.path} 
              name={book.name} 
              thumbnail={book.thumbnail} 
            />
            <p>{book.name}</p>
            <button onClick={() => handleDownload(book.path)}>Download</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryComponent;
