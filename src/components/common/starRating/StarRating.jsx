import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";

import { useMatchMedia } from "helpers/mediaQuery";

const BookRating = ({ readOnly, stars = 0, setBookRating = () => {} }) => {
  const [rating, setRating] = useState(stars);
  const { isDesktop, isTablet } = useMatchMedia();

  const starSize = isDesktop || isTablet ? "1.25rem" : "";

  useEffect(() => {
    setBookRating(rating);
  }, [rating, setBookRating, stars]);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {!readOnly && (
        <Rating
          size={"small"}
          name="simple-controlled"
          value={rating}
          sx={{
            fontSize: starSize,
          }}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      )}
      {readOnly && (
        <Rating
          name="read-only"
          value={stars}
          readOnly
          size={"small"}
          sx={{
            fontSize: starSize,
          }}
        />
      )}
    </Box>
  );
};

BookRating.propTypes = {
  readOnly: PropTypes.bool,
  stars: PropTypes.number,
  setBookRating: PropTypes.func,
};

export default BookRating;
