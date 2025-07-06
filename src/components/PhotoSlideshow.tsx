
import { useState } from "react";
import { Heart } from "lucide-react";
import HeartExplosion from "./HeartExplosion";

const PhotoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHeartExplosion, setShowHeartExplosion] = useState(false);
  
  const photos = [
    "/lovable-uploads/f2a676ff-c073-4e3e-8240-c24e0a7c3487.png",
    "/lovable-uploads/873344a0-6075-49aa-8d56-9cae3a35a454.png",
    "/lovable-uploads/ad6ff44d-ded5-4c0d-880c-c6d2bdad929a.png",
    "/lovable-uploads/705009ce-b006-43bd-9497-143fde0991aa.png",
    "/lovable-uploads/ad71ba7e-e095-443a-8ccd-1e0b54387ef1.png",
    "/lovable-uploads/6ba6a732-f12f-4b4c-8dce-830bfd5d5b37.png",
    "/lovable-uploads/0cc72fe1-e517-482b-a491-25dc4e5f67c6.png",
    "/lovable-uploads/7ba01dae-30a6-40cc-8115-a09338bffd1d.png",
    "/lovable-uploads/4b898d71-38da-4351-ba63-ee6e43378c9b.png"
  ];

  const handlePhotoClick = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleHeartClick = () => {
    setShowHeartExplosion(true);
  };

  const isLastPhoto = currentIndex === photos.length - 1;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {showHeartExplosion && <HeartExplosion />}
      
      <div className="max-w-4xl w-full">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Photo Display */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3]">
            <img
              src={photos[currentIndex]}
              alt={`Memory ${currentIndex + 1}`}
              className={`w-full h-full object-cover cursor-pointer transition-all duration-500 ${
                !isLastPhoto ? 'hover:scale-105' : ''
              }`}
              onClick={!isLastPhoto ? handlePhotoClick : undefined}
            />
            
            {/* Click indicator for non-last photos */}
            {!isLastPhoto && (
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 rounded-full px-6 py-3 text-gray-800 font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
                  Click to continue →
                </div>
              </div>
            )}
          </div>

          {/* Bottom section for last photo */}
          {isLastPhoto && (
            <div className="p-8 bg-gradient-to-r from-pink-50 to-rose-50 text-center">
              {/* Giant Heart Button */}
              <button
                onClick={handleHeartClick}
                className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-pink-300/50 animate-pulse"
              >
                <Heart 
                  size={64} 
                  className="text-white fill-white drop-shadow-lg" 
                />
              </button>

              {/* Contact Information */}
              <div className="space-y-3">
                <p className="text-2xl font-bold text-gray-800 tracking-wide">
                  itsmeherday@gmail.com
                </p>
                <p className="text-xl font-semibold text-pink-600">
                  Meherisdramaqueen#1
                </p>
              </div>
            </div>
          )}

          {/* Photo counter */}
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlideshow;
