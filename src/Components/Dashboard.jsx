import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Link, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchBar from './SearchBar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import VideoCallIcon from '@mui/icons-material/VideoCall';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '& .MuiButton-root': {
        marginTop: theme.spacing(1),
        textTransform: 'none',
    },
}));

export default function Dashboard() {
    const projectNames = ["Project Name - 1", "Project Name - 2", "Project Name - 3"];
    return (
        <Box style={{ position: 'relative', minHeight: '95vh' }}>
            <Box style={{ paddingBottom: '50px' }}>
                <Grid container>
                    <Grid item xs={2}>
                        <Item sx={{ height: '95vh' }}>
                            <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Logo</Typography>
                            <Box className='button' sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Button variant="outlined" endIcon={<AddIcon />} className='button-style'>New Video</Button>
                                <Button variant="outlined" className='button-style'>Home</Button>
                                <Button variant="outlined" className='button-style'>Template</Button>
                                <Button variant="outlined" className='button-style'>All Videos</Button>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={10}>
                        <Box>
                            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Grid item xs={11}>
                                    <SearchBar />
                                </Grid>
                                <Grid item xs={1}>
                                    <Avatar sx={{ float: 'center' }}>
                                        <PersonIcon />
                                    </Avatar>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', ml:'2%' }}>
                                <Grid item>
                                    <Button variant="outlined" startIcon={<ContentCutIcon />} className='button-style-2' sx={{ textTransform: 'none' }} >Create Project</Button>
                                    <Button variant="outlined" startIcon={<VideoCallIcon />} className='button-style-2' sx={{ textTransform: 'none', ml: '10px' }} >Record Video</Button>
                                </Grid>
                                <Grid item>
                                    <Link variant="outlined" className='button-style-2' sx={{ textTransform: 'none', mr: '5rem' }} >All Videos {'>'}</Link>
                                </Grid>
                            </Grid>
                            <Box sx={{ mt: '2%', fontWeight: "bold" }}>
                                <Typography variant='p' sx={{ml:'2%'}} >Recent Videos</Typography>
                                <Grid container sx={{ mt: '30px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-evenly'}}>
                                    {projectNames.map((project, index) => (
                                        <Grid item xs={3.7} key={index} sx={{ mt:'15px', height: '200px', marginBottom: '10px'}}>
                                                <Box sx={{ width: '100%', height: '100%', border: '1px solid black', backgroundColor: '#f0f0f0' }} />
                                                <Typography variant='p'>{project}</Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Bottom content */}
            <Box style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'gray', height: '50px' }}>
                {/* Content */}
            </Box>
        </Box>
    )
}
