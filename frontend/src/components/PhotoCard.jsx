const PhotoCard = ({ photo, isFavourite, onToggleFavourite }) => {
  const imageUrl = photo.download_url || `https://picsum.photos/seed/${photo.id}/800/600`;
  
  const handleToggleFavourite = (e) => {
    e.stopPropagation();
    onToggleFavourite(photo.id);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
      {/* Image Container with Zoom Effect and Rounded Corners */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={`Photo by ${photo.author}`}
          className="w-full h-72 object-cover rounded transform transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://picsum.photos/seed/${photo.id}/800/600`;
          }}
        />
        
        {/* FAVOURITE BUTTON - TOP RIGHT CORNER (Unchanged on Hover) */}
        <div 
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 100
          }}
        >
          <button
            onClick={handleToggleFavourite}
            style={{
              backgroundColor: 'white',
              border: '2px solid #e5e7eb',
              borderRadius: '9999px',
              padding: '12px',
              cursor: 'pointer',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          >
            {isFavourite ? (
              // RED FILLED HEART
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="#ef4444"
                stroke="#ef4444"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={0}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            ) : (
              // GRAY OUTLINE HEART
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none"
                stroke="#374151"
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Author Name */}
      <div className="px-6 py-4">
        <p className="text-gray-800 font-medium text-center truncate" title={photo.author}>
          {photo.author}
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;
