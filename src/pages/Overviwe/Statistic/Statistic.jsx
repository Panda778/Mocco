import * as React from "react";
import Box from "@mui/material/Box";
import statistic from "../statistic.json";
import StaticCard from "../StaticCard/StaticCard";
import PieChart from "../../../components/Charts/Pie";

export default function Statistic() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      {statistic.map((item, index) => (
        <StaticCard title={item.title} />
        
      ))}
     
    </Box>
  );
}
