import fs from 'fs';
import path from 'path';

export interface BookInfo {
  name: string;
  path: string;
}

export async function getBooks(): Promise<BookInfo[]> {
  const booksDirectory = path.join(process.cwd(), 'public', 'assets', 'books');
  
  try {
    const fileNames = fs.readdirSync(booksDirectory);
    const books = fileNames.filter(fileName => fileName.endsWith('.pdf')).map(fileName => ({
      name: fileName,
      path: `/assets/books/${fileName}`
    }));
    
    return books;
  } catch (error) {
    console.error('Unable to read books directory', error);
    return [];
  }
}
