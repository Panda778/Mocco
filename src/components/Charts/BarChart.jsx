import { Paper, Typography } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/system";
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"],
  datasets: [
    {
      label: "# of Votes",
      data: [40, 25, 30, 45, 10, 60,20],
      backgroundColor: ["blue", "blue", "blue", "blue", "blue","blue"],
      borderColor: ["blue", "blue", "blue", "blue", "blue","blue"],

      borderWidth: 1,
    },
  ],
};
const options = {
  indexAxis: "x",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  scales: {
    y: {
      display: false,
    },
  },
  elements: {
    bar: {
      borderWidth: 2,
      borderRadius: 30,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      display: false,
    },
    title: {
      display: true,
    },
  },
};

const BarChart = () => {
  return (
    <Paper
      sx={{
        width: 550,
        height: "318px",
        borderRadius:5
      }}
    >
      <Box sx={{
        display: "flex",
        justifyContent: 'space-around',
        marginTop:3
      }}>
        <Typography sx={{fontSize:15, fontWeight:700,fontFamily:'Monserrat'}}>User growth (New Users)</Typography>
        <EventAvailableOutlinedIcon color='primary'></EventAvailableOutlinedIcon>
      </Box>
      <Box sx={{width:250,height:'auto',margin: '0 auto'}}>
       
        <Bar data={data} options={options} width={100} height={100} />
      </Box>
    </Paper>
  );
};

export default BarChart;
