import React from 'react'
import CourseProviderCard from '../CoursesProviderCard/CoursesProviderCard'
import { Typography } from '@mui/material'
export default function CoursesProviderPanel() {
    return (
        <div>
             <Typography
          variant={"h5"}
          sx={{ fontFamily: "Montserrat", paddingY:4}}
        >
          Course Provider
        </Typography>
            <CourseProviderCard/>
        </div>
    )
}
