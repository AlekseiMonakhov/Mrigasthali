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
    const response = await fetch(addCacheBuster(`${MEDIA_SERVER_URL}/api/books`), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: BooksResponse = await response.json();
    
    // Проверяем наличие данных
    if (!data || !data.items) {
      console.error('Invalid response format:', data);
      return [];
    }

    // Обрабатываем каждую книгу
    return data.items.map(book => {
      try {
        return {
          ...book,
          path: `${MEDIA_SERVER_URL}${book.path}`,
          // Проверяем, что thumbnail это строка и начинается с "data:image"
          thumbnail: book.thumbnail && typeof book.thumbnail === 'string' && 
                    book.thumbnail.startsWith('data:image') ? book.thumbnail : null
        };
      } catch (err) {
        console.error('Error processing book:', book.name, err);
        return {
          name: book.name,
          path: `${MEDIA_SERVER_URL}${book.path}`,
          thumbnail: null,
          error: 'Failed to process book data'
        };
      }
    });
    
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return [];
  }
}
