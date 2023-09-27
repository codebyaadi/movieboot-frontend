import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ReviewFormProps {
  handleSubmit: (review: string) => void;
  revText: string;
  revLabel: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ handleSubmit, revText, revLabel }) => {
  const [review, setReview] = useState('');

  const handleReviewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit(review);
    setReview('');
  };

  return (
    <form onSubmit={submitForm} className="max-w-md mx-auto mt-6">
      <div className="mb-4">
        <label htmlFor="review" className="block font-opensans text-gray-600 text-sm font-medium mb-2">
          {revLabel}
        </label>
        <textarea
          id="review"
          name="review"
          value={review}
          onChange={handleReviewChange}
          rows={4}
          className="w-full px-3 py-2 placeholder-gray-300 border focus:ring focus:ring-indigo-300 focus:border-indigo-400"
          placeholder={revText}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-3 py-2 text-center text-white font-opensans font-semibold bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
