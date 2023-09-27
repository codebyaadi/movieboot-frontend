import { useEffect, useState } from 'react'
import './App.css'
import api from './api/config';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Movie from './types/Movie';
import MovieInfo from './components/MovieInfo/MovieInfo';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie | null>(null);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data)
      setMovies(response.data)
    } catch (error) {
      console.log("APP.tsx - ", error)
    }
  }

  const getMovieData = async (imdbId: any) => {
    const response = await api.get(`/api/v1/movies/${imdbId}`)
    const singleMovie = response.data;
    setMovie(singleMovie);
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      <div className="main-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home movies={movies} />}></Route>
              <Route path="/movie/:movieId" element={<MovieInfo getMovieData={getMovieData} movie={movie} />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
