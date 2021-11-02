import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import statistic from "../statistic.json"
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';



export default function Statistic() {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between' , mt:5}}>
            {statistic.map(function (item, index) {
                return (
                    <Card sx={{height:200, borderRadius:6}}>
                        <CardContent>
                            <Box sx={{display: 'flex'}}>
                                <Box>
                                  <AspectRatioOutlinedIcon sx={{width:150}}/>
                                </Box>
                                <Box>
                                    <p>
                                        {item.title}
                                    </p>
                                    <p style={{paddingTop:60}}>
                                        12%
                                    </p>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>

                )
            })}
        </Box>


    );
}
