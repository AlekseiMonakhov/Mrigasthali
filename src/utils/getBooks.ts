import fs from 'fs';
import path from 'path';

export interface BookInfo {
  name: string;
  path: string;
}

const MEDIA_SERVER_URL = 'http://87.228.27.211:3001';

const addCacheBuster = (url: string) => {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}t=${new Date().getTime()}`;
};

export async function getBooks(): Promise<BookInfo[]> {
  try {
    const response = await fetch(addCacheBuster(`${MEDIA_SERVER_URL}/api/books`), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      },
      mode: 'cors',
      credentials: 'same-origin'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const books: BookInfo[] = await response.json();
    
    return books.map(book => ({
      name: book.name,
      path: `${MEDIA_SERVER_URL}${book.path}`
    }));
  } catch (error) {
    console.error('Failed to fetch books:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    return [];
  }
}
