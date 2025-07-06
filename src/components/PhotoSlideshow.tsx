
import { useState } from "react";
import { Heart, ArrowRight } from "lucide-react";
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
    "/lovable-uploads/4b898d71-38da-4351-ba63-ee6e43378c9b.png",
    "/lovable-uploads/69746e03-e206-4ac3-9ba2-99bf124ee510.png",
    "/lovable-uploads/2ae2e1d1-71e5-4df5-9973-64cc77081057.png",
    "/lovable-uploads/d8758008-62d7-45e1-8781-31b3b6b7c085.png",
    "/lovable-uploads/9acc6418-f749-43ed-a63a-d4cceb68a058.png",
    "/lovable-uploads/6c60bc33-f108-43f4-9c67-5107565c9345.png",
    "/lovable-uploads/2ef39d8f-d02e-4c7e-bb3c-db88a2d21168.png"
  ];

  const handlePhotoClick = () => {
    console.log("Photo clicked, current index:", currentIndex);
    if (currentIndex < photos.length) {
      console.log("Moving to next photo:", currentIndex + 1);
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("Already at final slide");
    }
  };

  const handleNextClick = (e) => {
    e.stopPropagation();
    console.log("Next button clicked, current index:", currentIndex);
    if (currentIndex < photos.length) {
      console.log("Moving to next photo:", currentIndex + 1);
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("Already at final slide");
    }
  };

  const handleHeartClick = () => {
    console.log("Heart button clicked");
    setShowHeartExplosion(true);
  };

  const isLastPhoto = currentIndex === photos.length - 1;
  const isFinalSlide = currentIndex === photos.length;
  const isFirstPhoto = currentIndex === 0;

  console.log("Rendering slideshow - currentIndex:", currentIndex, "isLastPhoto:", isLastPhoto, "isFinalSlide:", isFinalSlide);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {showHeartExplosion && <HeartExplosion />}
      
      <div className="max-w-4xl w-full">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Photo Display or Final Slide */}
          {!isFinalSlide ? (
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3] bg-gray-100">
              <img
                src={photos[currentIndex]}
                alt={`Memory ${currentIndex + 1}`}
                className={`w-full h-full object-contain cursor-pointer transition-all duration-500 ${
                  !isLastPhoto ? 'hover:scale-105' : ''
                }`}
                onClick={!isLastPhoto ? handlePhotoClick : undefined}
              />
              
              {/* Birthday Message on First Photo */}
              {isFirstPhoto && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h1 className="text-6xl md:text-8xl font-bold text-white text-center drop-shadow-2xl animate-pulse">
                    Happy Birthday<br />
                    <span className="text-pink-300">Meher</span>
                  </h1>
                </div>
              )}
              
              {/* Next Button - show on all photos except last */}
              {!isLastPhoto && (
                <button
                  onClick={handleNextClick}
                  className="absolute bottom-6 right-6 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
                >
                  <ArrowRight size={24} className="text-gray-800" />
                </button>
              )}
              
              {/* Click indicator for non-last photos */}
              {!isLastPhoto && (
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-80 rounded-full px-6 py-3 text-gray-800 font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Click to continue →
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Final Contact Slide */
            <div className="p-12 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 min-h-[600px] flex flex-col items-center justify-center text-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  Let's Stay Connected!
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <p className="text-2xl font-bold text-gray-800 mb-2">
                      Email
                    </p>
                    <p className="text-xl text-pink-600">
                      itsmeherday@gmail.com
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <p className="text-2xl font-bold text-gray-800 mb-2">
                      Discord
                    </p>
                    <p className="text-xl text-purple-600">
                      Meherisdramaqueen#1
                    </p>
                  </div>
                </div>

                <a
                  href="https://gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  To Gmail →
                </a>
              </div>
            </div>
          )}

          {/* Heart Button Section for Last Photo */}
          {isLastPhoto && (
            <div className="p-8 bg-gradient-to-r from-pink-50 to-rose-50 text-center">
              <button
                onClick={handleHeartClick}
                className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-pink-300/50 animate-pulse"
              >
                <Heart 
                  size={64} 
                  className="text-white fill-white drop-shadow-lg" 
                />
              </button>
              
              <button
                onClick={handleNextClick}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Continue to Final Message →
              </button>
            </div>
          )}

          {/* Photo counter */}
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {isFinalSlide ? 'Final' : `${currentIndex + 1} / ${photos.length}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlideshow;
