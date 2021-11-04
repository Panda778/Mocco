import Box from "@mui/material/Box";
import { Avatar, Paper } from "@mui/material";
import React from "react";

import Button from "@mui/material/Button";
import userData from "../users-data.json"

export default function UserPanelCard() {
    return (
        <div>
            
            {userData.map(function (user, index) {
                            return (
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    borderRadius: 9,
                                    border: 1,
                                    borderColor: 'primary.main',
                                    marginTop: 3
                                }}>
                                    <Button variant="contained" color={user.active? 'success': 'error'} sx={{ outline: 3,borderRadius: 3, width: 125}}>Active</Button>
                                    <Box sx={{ display: "flex", alignItems: 'center' }}>
                                        <Avatar width={80} height={100} sx={{ marginRight: 4 }}
                                            src={'../img/Rectangle18.svg'} alt="" />
                                        <p>{user.name}</p>
                                    </Box>
                                    <Box>{user.email}</Box>
                                    <Box>{user.country}</Box>
                                    <Box>{user.action}</Box>
                                </Box>
                            )
                        })}


                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5, paddingBottom: 5 }}>
                            <Button color={'primary'} variant={'contained'} sx={{ borderRadius: 4, width: '15%' }}>View more</Button>
                        </Box>
        </div>
    )
}
