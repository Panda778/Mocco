import Box from "@mui/material/Box";
import {Avatar, Paper} from "@mui/material";
import React from "react";
import userData from '../users-data.json'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const UserPanel = () => {
    return (
        <div>
            <Box sx={{borderRadius: 8, marginTop: 10}}>
                <Typography variant={'h5'} sx={{marginBottom: 4, paddingLeft: 3}}>New Users</Typography>
                <Paper>

                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'baseline'}}>
                        <Box sx={{display: "flex", paddingRight: 6}}>
                            <p>
                                Account Status
                            </p>
                            <Box sx={{paddingLeft: 23}}>
                                <p>
                                    User Name
                                </p>
                            </Box>
                        </Box>
                        <Box sx={{paddingLeft: 9}}>
                            Email Address
                        </Box>
                        <Box sx={{paddingLeft: 12}}>
                            Country
                        </Box>
                        <Box>
                            Action
                        </Box>
                    </Box>

                    <Box>

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
                                    <Button sx={{outline: 3, paddingLeft: 3}}>Active</Button>
                                    <Box sx={{display: "flex", alignItems: 'center'}}>
                                        <Avatar width={80} height={100} sx={{marginRight: 4}}
                                                src={'../img/Rectangle18.svg'} alt=""/>
                                        <p>{user.name}</p>
                                    </Box>
                                    <Box>{user.email}</Box>
                                    <Box>{user.country}</Box>
                                    <Box>{user.action}</Box>
                                </Box>
                            )
                        })}


                        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 5, paddingBottom: 5}}>
                            <Button variant={'contained'} sx={{borderRadius: 4, width: '15%'}}>View more</Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}

export default UserPanel