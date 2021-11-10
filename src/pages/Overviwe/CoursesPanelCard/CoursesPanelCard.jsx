import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import courses from "../courses.json";
import CourseRating from "../CoursesRating/CoursesRating";
import "./CoursesPanelCard.css";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
const rows = courses;

export default function CoursesPanelCard() {
  return (
    <Box component={Paper}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell align="center">Registered Students</TableCell>
              <TableCell align="left">Course Provider</TableCell>
              <TableCell align="center">Rating</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow
                key={row.index}
                
              >
                <TableCell width="260" component="td" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">{row.register}</TableCell>
                <TableCell align="left">{row.CourseProvider}</TableCell>
                <TableCell>
                  <CourseRating rating={row.Rating} />
                </TableCell>
                <TableCell align="center">{row.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 4,
          paddingBottom: 3,
        }}
      >
        <Button color="primary" variant="contained" sx={{ borderRadius: 5 , paddingX: 5,paddingY: 1, textTransform: 'capitalize'}}>
          View more
        </Button>
      </Box>
    </Box>
  );
}
