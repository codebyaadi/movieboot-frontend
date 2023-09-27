import { useParams } from "react-router-dom";
import Movie from "../../types/Movie";
import { useEffect, useState } from "react"; // Import useState
import ReviewForm from "./ReviewForm";
import api from "../../api/config";

interface ReviewsProps {
    getMovieData: (movieId: string) => void;
    movie: Movie | null;
    reviews: string[] | undefined; // Make reviews an array of strings or undefined
    setReviews: (reviews: string[]) => void;
}

interface RouteParams {
    movieId?: string;
    [key: string]: string | undefined; // Add index signature
}

const Reviews: React.FC<ReviewsProps> = ({ getMovieData, movie, reviews, setReviews }) => {
    const params = useParams<RouteParams>();
    const movieId = params.movieId || "";

    useEffect(() => {
        getMovieData(movieId);
    }, [getMovieData, movieId]);

    // Use useState to manage the review input field's value
    const [reviewText, setReviewText] = useState("");

    const addReview = async () => {
        try {
            const response = await api.post("/api/v1/reviews", { reviewBody: reviewText, imdbId: movieId });
            const updatedReviews = [...(reviews || []), reviewText]; // Handle the case where reviews is initially undefined
            setReviews(updatedReviews);
            setReviewText("");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative w-full">
            <div className="relative overflow-hidden flex flex-row rounded-lg md:h-screen">
                <div className="w-full flex flex-row justify-start items-center">
                    <img src={movie?.poster} alt="" />
                    <div className="flex flex-col justify-start ml-28">
                    <h2 className="text-white font-syne font-semibold text-start text-3xl">{movie?.title}</h2>
                    <ReviewForm
                        handleSubmit={(review) => {
                            setReviewText(review);
                            addReview();
                        }}
                        revText="Write your review here..."
                        revLabel="Your Review"
                    />
                    </div>
                    {reviews && (
                      <ul>
                        {reviews.map((review, index) => (
                          <li key={index} className="text-white mt-2">
                            {review}
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
