import fs from 'fs';
import path from 'path';

export interface BookInfo {
  name: string;
  path: string;
  thumbnail: string | null;
  error: string | null;
}

interface BooksResponse {
  items: BookInfo[];
  totalPages: number;
  currentPage: number;
}

const MEDIA_SERVER_URL = 'http://87.228.27.211:3001';

const addCacheBuster = (url: string) => {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}t=${new Date().getTime()}`;
};

// Добавим функцию для проверки доступности изображения
const checkImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

export async function getBooks(): Promise<BookInfo[]> {
  try {
    const response = await fetch(addCacheBuster(`${MEDIA_SERVER_URL}/api/books`));
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: BooksResponse = await response.json();
    
    return data.items.map(book => ({
      ...book,
      path: `${MEDIA_SERVER_URL}${book.path}`,
      thumbnail: book.thumbnail ? book.thumbnail : null
    }));
    
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return [];
  }
}
