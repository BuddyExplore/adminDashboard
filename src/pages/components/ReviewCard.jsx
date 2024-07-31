import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import { Star } from "@mui/icons-material";

const ReviewCard = () => {
  const ratings = [
    { star: 5, count: 4 },
    { star: 4, count: 3 },
    { star: 3, count: 0 },
    { star: 2, count: 0 },
    { star: 1, count: 0 },
  ];

  const totalReviews = ratings.reduce((acc, rating) => acc + rating.count, 0);
  const averageRating =
    ratings.reduce((acc, rating) => acc + rating.star * rating.count, 0) /
    totalReviews;

  return (
    <div className="card border-1 bg-white p-4 rounded-lg shadow-md flex flex-row items-center space-x-4">
      <Box display="flex" alignItems="center">
        <Star fontSize="large" className="text-black-500" />
      <Typography variant="h4" className="font-bold ml-2">
          {averageRating.toFixed(2)}
        </Typography> 
         {/*<Typography variant="body1" className="ml-10  0 text-gray-500">
          &mdash; of {totalReviews} reviews
        </Typography>*/} 
      </Box>

      <div className="flex flex-col space-y-1 w-full p-2">
        {ratings.map((rating) => (
          <Box key={rating.star} display="flex" alignItems="center">
            <Typography variant="body2" className="w-16">
              {rating.star} star
            </Typography>
            <Box className="flex-grow mx-4">
              <LinearProgress
                variant="determinate"
                value={(rating.count / totalReviews) * 100}
                className="w-full"
              />
            </Box>
            <Typography variant="body2">{rating.count}</Typography>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
