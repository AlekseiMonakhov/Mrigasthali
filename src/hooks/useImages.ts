import { useState, useEffect } from 'react';

interface ImageItem {
  src: string;
  alt: string;
  title: string;
}

interface ImageResponse {
  items: ImageItem[];
  totalPages: number;
  currentPage: number;
}

export function useImages(folder: string) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/get-images?folder=${folder}&page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data: ImageResponse = await response.json();
        setImages(prevImages => [...prevImages, ...data.items]);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, [folder, currentPage]);

  // const loadMore = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(prevPage => prevPage + 1);
  //   }
  // };

  return { images, loading, error };
}
