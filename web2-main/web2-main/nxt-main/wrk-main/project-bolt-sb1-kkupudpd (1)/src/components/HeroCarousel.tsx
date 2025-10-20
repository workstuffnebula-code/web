import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import blackFridayImg from '../assets/carousel-images/1000031937.png';
import package1Img from '../assets/carousel-images/1000031934.png';
import streamingImg from '../assets/carousel-images/1000031935.png';
import socialImg from '../assets/carousel-images/1000031936.png';

const slides = [
  {
    id: 1,
    image: blackFridayImg,
    alt: 'Black Friday Special',
  },
  {
    id: 2,
    image: package1Img,
    alt: '$1 Package - 3 Days Plan',
  },
  {
    id: 3,
    image: streamingImg,
    alt: 'Watch Now - Streaming Services',
  },
  {
    id: 4,
    image: socialImg,
    alt: 'More For Less - Social Media',
  },
];

export const HeroCarousel: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <div className="relative w-full">
        <div className="relative aspect-[21/9] sm:aspect-[16/6] md:aspect-[21/7] lg:aspect-[21/6] w-full">
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 transition-all text-white backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
          />

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 transition-all text-white backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-6 sm:w-8' : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
