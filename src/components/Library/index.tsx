'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';
import { BookInfo } from '@/utils/getBooks';
import PDFViewer from '../PDFViewer';

interface LibraryComponentProps {
  initialBooks: BookInfo[];
}

const LibraryComponent: React.FC<LibraryComponentProps> = ({ initialBooks }) => {
  const [books, setBooks] = useState<BookInfo[]>(initialBooks);

  const handleDownload = (path: string) => {
    window.open(path, '_blank');
  };

  return (
    <div className={styles.libraryContainer}>
      <h1>Library</h1>
      <div className={styles.booksGrid}>
        {books.map((book) => (
          <div key={book.name} className={styles.bookItem}>
            <PDFViewer 
              file={book.path} 
              name={book.name} 
              thumbnail={book.thumbnail} 
            />
            <p>{book.name.replace('.pdf', '')}</p>
            <button onClick={() => handleDownload(book.path)}>Download</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryComponent;
