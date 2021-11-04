import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
export default function StaticCart({ title }) {
  return (
    <div>
      <Card sx={{ height: 200, borderRadius: 6 }}>
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <Box>
              <AspectRatioOutlinedIcon sx={{ width: 150 }} />
            </Box>
            <Box>
              <p>{title}</p>
              <p style={{ paddingTop: 60 }}>12%</p>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
