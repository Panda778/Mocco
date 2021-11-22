import { Grid, Paper,Box,Button } from "@mui/material";
import React from "react";
import courses from '../courses.json'
import CourseRating from "../CoursesRating/CoursesRating";

const CoursesPanelCard = () => {
  return (
    <Paper  sx={{borderRadius:3}}>
      <Box sx={{paddingTop:5,paddingLeft:5,paddingRight:5,paddingBottom:5, fontFamily: 'Montserrat'}}>
      <Grid  container>
      <Grid xs={4} paddingLeft={3} item>Course name</Grid>
      <Grid xs={2} item>Registered Students</Grid>
      <Grid xs={2} item>Course Provider</Grid>
      <Grid xs={2} item paddingLeft={12}>Rating</Grid>
      <Grid xs={2} item paddingLeft={10}>Action</Grid>
        </Grid>
        

        {courses.map(function (item, index) {
          return (
            <Grid container sx={{  border: 1, borderColor: '#D1E1FE', marginTop: 3, borderRadius:12 , padding:1, paddingLeft:1, alignItems:'center'}}>
              <Grid item xs={4} sx={{paddingLeft:2}}>{ item.title}</Grid>
              <Grid item xs={2} paddingLeft={6}>{ item.register}</Grid>
              <Grid  item xs={2}>{ item.CourseProvider}</Grid>
              <Grid item xs={2} paddingLeft={10}><CourseRating rating={ item.Rating}/></Grid>
              <Grid item xs={2} paddingLeft={13}>{ item.action}</Grid>
            </Grid>
          )
        })}
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 4,
          paddingBottom: 3,
        }}
      >
        <Button color="primary" variant="contained" sx={{ borderRadius: 5 , paddingX: 5,paddingY: 1, textTransform: 'capitalize'}}>
          View more
        </Button>
      </Box>
      </Box>
   </Paper>
  )
}

export default CoursesPanelCard