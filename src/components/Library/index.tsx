'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { BookInfo } from '@/utils/getBooks';
import PDFViewer from '../PDFViewer';

interface LibraryComponentProps {
  initialBooks: BookInfo[];
}

const LibraryComponent: React.FC<LibraryComponentProps> = ({ initialBooks }) => {
  const [books, setBooks] = useState<BookInfo[]>([]);

  useEffect(() => {
    setBooks(initialBooks);
  }, [initialBooks]);

  const handleDownload = (path: string) => {
    if (path) {
      window.open(path, '_blank', 'noopener,noreferrer');
    }
  };

  if (!books.length) {
    return <div className={styles.libraryContainer}>Loading...</div>;
  }

  return (
    <div className={styles.libraryContainer}>
      <h1>Library</h1>
      <div className={styles.booksGrid}>
        {books.map((book) => book && (
          <div key={book.name} className={styles.bookItem}>
            {book.error ? (
              <div>Error loading book: {book.error}</div>
            ) : (
              <>
                <PDFViewer 
                  file={book.path} 
                  name={book.name} 
                  thumbnail={book.thumbnail} 
                />
                <p>{book.name.replace('.pdf', '')}</p>
                <button 
                  onClick={() => handleDownload(book.path)}
                  disabled={!book.path}
                >
                  Download
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryComponent;
