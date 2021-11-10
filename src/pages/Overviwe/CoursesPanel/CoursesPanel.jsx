import { Typography } from '@mui/material'
import React from 'react'

import CoursesPanelCard from '../CoursesPanelCard/CoursesPanelCard'

export default function CoursesPanel() {
    return (
        <div>
              <Typography
          variant={"h5"}
          sx={{ fontFamily: "Montserrat", paddingY:4}}
        >
          Courses
        </Typography>
            <CoursesPanelCard />
           
        </div>
    )
}
