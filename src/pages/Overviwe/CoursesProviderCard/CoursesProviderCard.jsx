import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import coursesProvider from "../courseProvider.json";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
const rows = coursesProvider;

export default function CourseProviderCard() {
  return (
    <Box component={Paper}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course Provider</TableCell>
              <TableCell align="left">Number on Courses</TableCell>
              <TableCell align="left">Registered Students</TableCell>

              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow key={index}>
                <TableCell component="td" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="left">{row.number_of_courses}</TableCell>
                <TableCell align="left">{row.registered}</TableCell>
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
        <Button color={'primary'} variant="contained" sx={{ borderRadius: 5 , paddingX: 5,paddingY: 1, textTransform: 'capitalize'}}>
          View more
        </Button>
      </Box>
    </Box>
  );
}
