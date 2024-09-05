import React from 'react';
import LibraryComponent from '../../components/Library';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBooks } from '@/utils/getBooks';

const LibraryPage = async () => {
  const books = await getBooks();

  return (
    <>
      <Header />
      <LibraryComponent initialBooks={books} />
      <Footer />
    </>
  );
};

export default LibraryPage;
