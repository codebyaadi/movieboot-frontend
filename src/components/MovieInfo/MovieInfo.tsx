import { useParams } from "react-router-dom";
import Movie from "../../types/Movie";
import { useEffect } from "react"; // Import useState

interface MovieInfoProps {
    getMovieData: (movieId: string) => void;
    movie: Movie | null;
}

interface RouteParams {
    movieId?: string;
    [key: string]: string | undefined; // Add index signature
}

const MovieInfo: React.FC<MovieInfoProps> = ({ getMovieData, movie }) => {
    const params = useParams<RouteParams>();
    const movieId = params.movieId || "";

    useEffect(() => {
        getMovieData(movieId);
    }, [getMovieData, movieId]);

    return (
        <div className="relative w-full">
            <div className="relative overflow-hidden flex flex-row rounded-lg md:h-screen">
                <div className="w-full flex flex-row justify-start items-center">
                    <img src={movie?.poster} alt="" />
                    <div className="flex flex-col justify-start mx-28 w-1/2">
                        <h2 className="text-white font-syne font-semibold text-start text-3xl">{movie?.title}</h2>
                        <p className=" text-white/70 w-auto font-opensans text-sm font-normal overflow-hidden whitespace-nowrap text-ellipsis max-h-28">{movie?.description}</p>
                        <span className="text-white/75 font-syne text-sm mt-2">Genres: - {movie?.genres.join(', ')}</span>
                        <span className="w-32 flex justify-center items-center text-white/75 font-syne text-sm mt-2 border border-gray-300 rounded-sm p-2">{movie?.releaseDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
