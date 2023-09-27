import React, { useState } from 'react';
import Movie from '../../types/Movie';
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom';

interface HeroProps {
  movies: Movie[];
}

const Hero: React.FC<HeroProps> = ({ movies }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: any) => {
    setActiveSlide(index);
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative overflow-hidden rounded-lg md:h-screen">
        {movies.map((item, index) => (
          <div key={index} className={`duration-700 ease-in-out h-full ${activeSlide === index ? 'block' : 'hidden'}`} data-carousel-item>
            <div className="relative h-full">
              <ReactPlayer controls={false} playing={true} loop volume={0} muted url={item.trailerLink} width={"150%"} height={"150%"} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              {/* <img src={item.backdrops[0]} alt={item.poster} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" /> */}
              <div className="absolute top-0 left-0 w-full h-56 md:h-96 bg-gradient-to-b from-black to-transparent"></div>
              <div className="w-full px-20 flex flex-row justify-center items-center  gap-28 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <Link to={`/movie/${item.imdbId}`} className="text-4xl text-start uppercase font-semibold font-syne overflow-hidden">{item.title}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {Array.from({ length: 10 }, (_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-white/60' : 'bg-white/10'}`}
            aria-current={activeSlide === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() => handleSlideChange(activeSlide - 1 >= 0 ? activeSlide - 1 : 9)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => handleSlideChange(activeSlide + 1 <= 9 ? activeSlide + 1 : 0)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Hero;
