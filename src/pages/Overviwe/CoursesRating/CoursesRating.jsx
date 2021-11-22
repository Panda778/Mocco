import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
export default function CourseRating({ rating }) {
  return (
   
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-around"
      spacing={6}
      
      >
        <Rating sx={{color:'#3374ED'}} name="half-rating" defaultValue={rating} precision={0.5} />
      </Stack>
   
  );
}
