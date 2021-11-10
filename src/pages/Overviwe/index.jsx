import React from "react";
import Layout from "../../components/Layout/Layout";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import statistic from "./statistic.json";
import Box from "@mui/material/Box";
import Statistic from "./Statistic/Statistic";
import UserPanel from "./UserPanel/UserPanel";
import CoursesPanel from "./CoursesPanel/CoursesPanel";
import CoursesProviderPanel from "./CoursesProviderPanel/CoursesProviderPanel";
console.log(statistic);

const Overview = () => {
  return (
    <Layout>
      <Box>
        <Typography
          variant={"h6"}
          sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
        >
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
        <Box sx={{ mt: 10 }}>
          <CoursesPanel />
        </Box>
        <Box sx={{ mt: 10 }}>
          <CoursesProviderPanel />
        </Box>
        <Box sx={{ mt: 10 }}>
          <Statistic />
        </Box>
      </Box>
    </Layout>
  );
};

export default Overview;
