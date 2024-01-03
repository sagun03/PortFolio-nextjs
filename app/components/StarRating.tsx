import React from 'react';
import { Star, StarHalf, StarBorder } from '@mui/icons-material';

const Rating = ({ rating }: {rating: number}) => {
  const filledStars = Math.floor(rating); // Get the integer part of the rating
  const hasHalfStar = rating - filledStars >= 0.5; // Check if there is a half star

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < filledStars) {
      return <Star key={index} className="star" />;
    } else if (index === filledStars && hasHalfStar) {
      return <StarHalf key={index} className="star" />;
    } else {
      return <StarBorder key={index} className="star" />;
    }
  });

  return (
    <div className="rating">
      {stars}
    </div>
  );
};

export default Rating;