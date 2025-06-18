import React, { useState } from 'react'
import images from '../../Common/BindImages/BindImages';

const Gallery = () => {
  const galleryPhotos = [
    // Event Photos
    { id: 1, src: images.sports_day, alt: 'Annual Sports Day', category: 'events', title: 'Annual Sports Day 2024' },
    { id: 2, src: images.science_exhibition, alt: 'Science Exhibition', category: 'events', title: 'Science Exhibition Extravaganza' },
    { id: 3, src: images.cultural_fest, alt: 'Cultural Fest', category: 'events', title: 'Vibrant Cultural Fest' },
    { id: 4, src: images.farewell_party, alt: 'Farewell Party', category: 'events', title: 'Farewell to Seniors' },
    { id: 5, src: images.annual_day, alt: 'Annual Day', category: 'events', title: 'Grand Annual Day Celebration' },
    { id: 6, src: images.republic_day, alt: 'Republic Day', category: 'events', title: 'Republic Day Parade' },

    // Campus Life Photos
    { id: 7, src: images.library, alt: 'Library Session', category: 'campus-life', title: 'Quiet Moments in Library' },
    { id: 8, src: images.classroom, alt: 'Classroom Learning', category: 'campus-life', title: 'Engaging Classroom Learning' },
    { id: 9, src: images.playground, alt: 'Playground Fun', category: 'campus-life', title: 'Fun Time on Playground' },
    { id: 10, src: images.labs, alt: 'Lab Experiment', category: 'campus-life', title: 'Hands-on Lab Experiments' },
    { id: 11, src: images.school_garden, alt: 'School Garden', category: 'campus-life', title: 'Green Campus Spaces' },
    { id: 12, src: images.student_interaction, alt: 'Student Interaction', category: 'campus-life', title: 'Student Collaborations' },
  ];

  const [filter, setFilter] = useState('all'); // State for category filtering
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State for lightbox

  const filteredPhotos = galleryPhotos.filter(photo => {
    if (filter === 'all') {
      return true;
    }
    return photo.category === filter;
  });

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigateLightbox = (direction) => {
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto.id);
    let nextIndex;

    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % filteredPhotos.length;
    } else {
      nextIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    }
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  return (
    <div className="bg-blue-100 py-16 px-6">
      <section className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our School in Pictures</h2>
        <p className="text-gray-600 mb-8">
          A glimpse into the joyous celebrations, focused learning, and enriching experiences that define our school journey.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={`px-4 py-2 rounded-full font-medium border transition ${filter === 'all'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
              }`}
            onClick={() => setFilter('all')}
          >
            All Photos
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium border transition ${filter === 'events'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
              }`}
            onClick={() => setFilter('events')}
          >
            Events & Celebrations
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium border transition ${filter === 'campus-life'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
              }`}
            onClick={() => setFilter('campus-life')}
          >
            Campus Life
          </button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPhotos.length > 0 ? (
            filteredPhotos.map(photo => (
              <div
                key={photo.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                onClick={() => openLightbox(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <h4 className="text-lg font-semibold">{photo.title}</h4>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No photos available for this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{selectedPhoto.title}</h3>
              <p className="text-gray-600">{selectedPhoto.alt}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl font-bold"
              onClick={() => navigateLightbox('prev')}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl font-bold"
              onClick={() => navigateLightbox('next')}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>

  );
};

export default Gallery;