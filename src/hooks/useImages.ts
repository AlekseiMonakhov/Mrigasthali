import { useState, useEffect } from 'react';

interface ImageItem {
  src: string;
  alt: string;
  title: string;
}

export function useImages(folder: string) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/get-images?folder=${folder}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        return response.json();
      })
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [folder]);

  return { images, loading, error };
}
