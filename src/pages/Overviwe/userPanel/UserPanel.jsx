import Box from "@mui/material/Box";
import { Avatar, Paper } from "@mui/material";
import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserPanelCard from "../UserPanelCard/UserPanelCard";

const UserPanel = () => {
  return (
    <div>
      <Box sx={{ borderRadius: 8, marginTop: 10 }}>
      <Typography
          variant={"h5"}
          sx={{ fontFamily: "Montserrat", paddingY:4}}
        >
         New Users
        </Typography>
       <UserPanelCard/>
      </Box>
    </div>
  );
};

export default UserPanel;
