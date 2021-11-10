import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import user from "../users-data.json";
import { Button, Typography } from "@mui/material";
import { border, Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import "../../../App.css";
const rows = user;

export default function BasicTable() {
  return (
    <Box component={Paper}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} border="0" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Account Status</TableCell>
              <TableCell align="center">User name</TableCell>
              <TableCell align="center">Email address</TableCell>
              <TableCell align="center">Country</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.country}>
                <TableCell align="center">
                  <Typography
                    variant="button"
                    sx={
                      row.active
                        ? {
                            backgroundColor: "#5DF888",
                            border: 1,
                            borderRadius: 4,
                            borderColor: "#5DF888",
                            paddingX: 5,
                            paddingY: 1,
                            cursor: "pointer",
                            textTransform: "capitalize",
                          }
                        : {
                            backgroundColor: "#FF4949",
                            border: 1,
                            borderRadius: 4,
                            borderColor: "red",
                            paddingX: 4,
                            paddingY: 1,
                            cursor: "pointer",
                            textTransform: "capitalize",
                          }
                    }
                    color={row.active ? "black" : "white"}
                  >
                    {row.active ? "active" : "Inactive"}
                  </Typography>
                </TableCell>

                <TableCell component="td" align="center">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Avatar />
                    {row.name}
                  </Box>
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.country}</TableCell>
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
