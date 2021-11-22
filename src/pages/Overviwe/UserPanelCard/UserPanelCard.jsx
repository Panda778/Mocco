import React from "react";
import { Paper, Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import userData from "../users-data.json";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const UserPanelCard = () => {
  return (
    <Paper sx={{borderRadius:3}}>
      <Box sx={{paddingTop:5,paddingLeft:5,paddingRight:5,paddingBottom:5,textAlign:'center', fontFamily: 'Montserrat'}}>
        <Grid sx={{textTransform:'capitalize'}} container justifyContent={'space-between'} >
          <Grid item xs={2}>
            Account status
          </Grid>
          <Grid item xs={1} >
            user name
          </Grid>
          <Grid item xs={3} paddingLeft={18}>
            email address
          </Grid>
          <Grid item xs={3} paddingLeft={29}>
            country
          </Grid>
          <Grid item xs={3} paddingLeft={15}>
            Action
          </Grid>
        </Grid>
   
    
        {userData.map(function (item, index) {
          return (
            <Grid  container sx={{  border: 1, borderColor: '#D1E1FE', marginTop: 3, borderRadius:12 , padding:2, paddingLeft:1}}>
              {" "}
              <Grid  item xs={2}>
              <Typography
                    variant="button"
                    sx={
                      item.active
                        ? {
                            backgroundColor: "#5DF888",
                            border: 1,
                            borderRadius: 4,
                            borderColor: "#5DF888",
                            paddingX: 5,
                            paddingY: 0.8,
                            cursor: "pointer",
                            textTransform: "capitalize",
                          }
                        : {
                            backgroundColor: "#FF4949",
                            border: 1,
                            borderRadius: 4,
                            borderColor: "red",
                            paddingX: 4,
                            paddingY: 0.8,
                            cursor: "pointer",
                            textTransform: "capitalize",
                          }
                    }
                    color={item.active ? "black" : "white"}
                  >
                    {item.active ? "active" : "Inactive"}
                  </Typography>
              </Grid>
              <Grid item xs={2} alignItems={'center'} display={"flex"}><AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>{item.name}</Grid>
              <Grid item xs={4}>{item.email}</Grid>
              <Grid item xs={2} paddingLeft={1}>{item.country}</Grid>
              <Grid item xs={2} paddingLeft={8}>{ item.action}</Grid>
            </Grid>
          );
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

export default UserPanelCard;
