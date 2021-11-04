import * as React from "react";
import Box from "@mui/material/Box";
import statistic from "../statistic.json";
import StaticCart from "../StaticCart/StaticCart";

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
        <StaticCart title={item.title} />
      ))}
    </Box>
  );
}
