import React from "react";
import Layout from "../../components/Layout/Layout";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import statistic from "./statistic.json";
import Box from "@mui/material/Box";
import Statistic from "./Statistic/Statistic";
import UserPanel from "./userPanel/UserPanel";
console.log(statistic);

const Overview = () => {
  return (
    <Layout>
      <Box sx={{ fontFamily: "Montserrat" }}>
        <Typography variant={"h6"} sx={{ fontWeight: "italic" }}>
          Admin System Management Overview
        </Typography>
      </Box>
      <Box>
        <Typography variant={"h5"} sx={{ mt: 10 }}>
          Overview
        </Typography>
        <Box>
          <Statistic />

          <UserPanel />
        </Box>
      </Box>
    </Layout>
  );
};

export default Overview;
