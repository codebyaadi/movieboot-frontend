import React from 'react';
import Hero from './Hero'; // Import the Hero component
import Movie from '../../types/Movie';

interface HomeProps {
  movies: Movie[]; // Define the type of the 'movies' prop
}

const Home: React.FC<HomeProps> = ({ movies }) => {
  return (
    <Hero movies={movies} />
  );
};

export default Home;
