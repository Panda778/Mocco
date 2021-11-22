import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import Typography from "@mui/material/Typography";
import { Box, flexbox } from "@mui/system";
import BarChart from "../../../components/Charts/BarChart";
import PieChart from "../../../components/Charts/Pie";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';

export default function StaticCard({ title }) {
  return (
    <div>
      <Card sx={{ width:360,height:180, borderRadius: 6 }}>
     
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <Box sx={{
              width: 110,
              height: 110
            }}>
              <PieChart/>
            </Box>
            <Box sx={{
              width: 150,
              height: 150,
              paddingY: 2,
              paddingLeft: 5
            }}>
              <Typography variant={"h3"} style={{fontFamily:'Montserrat', fontWeight: 600,fontSize: '16px'}}>{title}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'baseline'}}>
                <Box sx={ {display:'flex', alignItems: 'baseline'}}>
                  <Typography style={{ marginTop: 30 }}>12%</Typography>
                 
              
                  <ArrowDropUpIcon fontSize={'large'}  color='success'/>
             
               </Box>
                <Box>
                <EqualizerOutlinedIcon sx={{fontSize:30}}/>
                </Box>
             </Box>
            </Box>
          </Box>
        </CardContent>
       
      </Card>
      
    </div>
  );
}
