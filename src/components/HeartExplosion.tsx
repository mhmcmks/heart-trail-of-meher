
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const HeartExplosion = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];
      
      for (let i = 0; i < 50; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 40 + 20,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2
        });
      }
      
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-bounce"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            animationIterationCount: 'infinite'
          }}
        >
          <Heart
            size={heart.size}
            className="text-pink-500 fill-pink-400 opacity-80 animate-pulse"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(236, 72, 153, 0.3))'
            }}
          />
        </div>
      ))}
      
      {/* Additional floating hearts with different animations */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`extra-${i}`}
          className="absolute animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 2 + 1}s`,
            animationDelay: `${Math.random() * 3}s`,
            animationIterationCount: 'infinite'
          }}
        >
          <Heart
            size={Math.random() * 30 + 15}
            className="text-red-400 fill-red-300 opacity-60"
          />
        </div>
      ))}
    </div>
  );
};

export default HeartExplosion;
