import React from "react";
import { Grid, Box, Paper,Button } from "@mui/material";
import courseProvider from "../courseProvider.json";

const CoursesProviderCard = () => {
  return (
    <Paper sx={{borderRadius:3}}>
      <Box
        sx={{
          paddingTop: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingBottom: 5,
          fontFamily: "Montserrat",
        }}
      >
       
        <Grid container >
          <Grid xs={4} paddingLeft={2} item>Course Provider</Grid>
          <Grid xs={2} item>Number of Courses</Grid>
          <Grid xs={2} item>Registered Students</Grid>
          <Grid xs={4}  item paddingLeft={33}>Action</Grid>
        </Grid>

        {courseProvider.map(function (item, index) {
          return (
            <Grid sx={{  border: 1, borderColor: '#D1E1FE', marginTop: 3, borderRadius:12 , padding:2, paddingLeft:2, alignItems:'center'}} container>
              <Grid item xs={4}>{item.title}</Grid>
              <Grid item xs={2}>{ item.number_of_courses}</Grid>
              <Grid item xs={2}>{ item.registered}</Grid>
              <Grid item xs={4} paddingLeft={35}>{ item.action}</Grid>
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
  );
};

export default CoursesProviderCard;
