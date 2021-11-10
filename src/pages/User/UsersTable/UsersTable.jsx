import { Paper } from '@mui/material';
import * as React from 'react';
import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';
import { Avatar } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell,TableBody } from '@mui/material';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function UsersTable() {
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
