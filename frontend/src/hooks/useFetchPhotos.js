import { useState, useEffect } from 'react';

const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://picsum.photos/v2/list?limit=30');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched photos:', data); // Debug log
        setPhotos(data);
      } catch (err) {
        console.error('Error fetching photos:', err);
        setError(err.message || 'Failed to fetch photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};

export default useFetchPhotos;
