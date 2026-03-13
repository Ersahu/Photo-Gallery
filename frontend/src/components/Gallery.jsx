import { useState, useMemo, useCallback, useReducer, useEffect } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import PhotoCard from './PhotoCard';
import { favouritesReducer } from '../reducers/favouritesReducer';

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();
  const [favourites, dispatch] = useReducer(favouritesReducer, []);
  const [searchTerm, setSearchTerm] = useState('');

  // Load favourites from localStorage on mount
  useEffect(() => {
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      try {
        const parsed = JSON.parse(storedFavourites);
        dispatch({ type: 'LOAD_FAVOURITES', payload: parsed });
      } catch (e) {
        console.error('Failed to parse favourites from localStorage:', e);
      }
    }
  }, []);

  // Save favourites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: photoId });
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // Filter photos by author name using useMemo for performance
  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) {
      return photos;
    }
    
    const lowerCaseSearch = searchTerm.toLowerCase();
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(lowerCaseSearch)
    );
  }, [photos, searchTerm]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Error Loading Photos</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Photo Gallery
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Explore beautiful photos from Picsum
          </p>
        </div>

        {/* Modern Search Bar - Reduced Width */}
        <div className="max-w-[560px] mx-auto mt-8 mb-12">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search photos by author..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 shadow-lg shadow-gray-200/50 transition-all duration-200 hover:shadow-xl"
            />
          </div>
        </div>

        {/* Photo Grid with Rounded Images */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <p className="text-xl">No photos found matching "{searchTerm}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
            {filteredPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                isFavourite={favourites.includes(photo.id)}
                onToggleFavourite={handleToggleFavourite}
              />
            ))}
          </div>
        )}

        {/* Results count */}
        <div className="mt-8 text-center text-gray-600">
          <p>
            Showing {filteredPhotos.length} of {photos.length} photos
            {favourites.length > 0 && ` • ${favourites.length} favourited`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
