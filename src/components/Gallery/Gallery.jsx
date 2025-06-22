import { useEffect, useState } from "react";
import { GetHomeImagesAPI } from "../../http/server-apis";

const Gallery = () => {
  const [galleryApiResponse, setGalleryApiResponse] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const schoolId = 60;

  useEffect(() => {
    GetHomeImagesAPI("galary", schoolId)
      .then((res) => {
        const data = res.data?.data || [];
        setGalleryApiResponse(data);
      })
      .catch((err) => {
        console.error("Failed to fetch gallery data:", err);
      });
  }, []);

  const flattenedGalleryImages = galleryApiResponse.flatMap((category) =>
    category.imageList.map((imageUrl, index) => ({
      id: `${category.tag}-${index}`,
      url: imageUrl,
      tag: category.tag,
    }))
  );

  const filteredImages = activeCategory === "all"
    ? flattenedGalleryImages
    : flattenedGalleryImages.filter(image => image.tag === activeCategory);

  const handleImageClick = (image) => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  const navigateLightboxImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredImages.length
        : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxImage(filteredImages[nextIndex]);
  };

  return (
    <div className="bg-white py-16 px-6">
      <section className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
        <p className="text-gray-600 mb-8">Click a category below to filter images by tag.</p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={`px-4 py-2 rounded-full font-medium border transition ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {galleryApiResponse.map((item, idx) => (
            <button
              key={idx}
              className={`capitalize px-4 py-2 rounded-full font-medium border transition ${activeCategory === item.tag ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
              onClick={() => setActiveCategory(item.tag)}
            >
              {item.tag}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.url}
                alt={image.tag}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <h4 className="text-lg font-semibold capitalize">{image.tag}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeLightbox}>
          <div className="relative bg-white rounded-lg overflow-hidden max-w-3xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white text-3xl font-bold z-10" onClick={closeLightbox}>
              &times;
            </button>
            <img
              src={lightboxImage.url}
              alt={lightboxImage.tag}
              className="w-full max-h-[70vh] object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold capitalize">{lightboxImage.tag}</h3>
            </div>
            <button
             className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl" 
             onClick={() => navigateLightboxImage("prev")}>&#10094;</button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl" onClick={() => navigateLightboxImage("next")}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
