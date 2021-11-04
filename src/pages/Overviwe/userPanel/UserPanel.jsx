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
        <Typography variant={"h5"} sx={{ marginBottom: 4, paddingLeft: 3 }}>
          New Users
        </Typography>
        <Paper>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "baseline",
            }}
          >
            <Box sx={{ display: "flex", paddingRight: 6 }}>
              <p>Account Status</p>
              <Box sx={{ paddingLeft: 23 }}>
                <p>User Name</p>
              </Box>
            </Box>
            <Box sx={{ paddingLeft: 9 }}>Email Address</Box>
            <Box sx={{ paddingLeft: 12 }}>Country</Box>
            <Box>Action</Box>
          </Box>

          <Box>
            <UserPanelCard />
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default UserPanel;
