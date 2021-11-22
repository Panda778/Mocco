import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import BarChart from "../../../components/Charts/BarChart";
import PieChart from "../../../components/Charts/Pie";
import { Paper } from "@mui/material";
export default function UserStatisticCard() {
  return (
      <Paper sx={{width:550,height:318}}>
          <Box sx={{width:450,height:'auto', margin: '0 auto'}}>
              <BarChart/>
          </Box>
   </Paper>
  );
}
