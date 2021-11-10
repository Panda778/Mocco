import React from "react";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout/Layout";
import UsersTable from "./UsersTable/UsersTable";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { alpha, InputBase } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const User = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography
            variant={"h6"}
            sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
          >
            Admin System Management Overview
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button sx={{ borderRadius: 8, paddingY:1 , paddingX:3,textTransform:'capitalize'}} color="primary" variant="contained">
            <PersonOutlinedIcon sx={{fontSize: 25,paddingRight:1}} /> Add User
          </Button>
          <Search sx={{ border: 1, borderRadius: 7 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </Box>
      <Box sx={{ mt: 10 }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
        >
          Users
        </Typography>
      </Box>
      <Box sx={{ border: 1 }}>
        <UsersTable />
      </Box>
    </Layout>
  );
};

export default User;
