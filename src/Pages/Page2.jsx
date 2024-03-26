import { Box, Button, Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import './styles.css'
import BasicSelect from "../Components/BasicSelect";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {Slider} from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Page2() {
    return (
        <>
            <Grid container>
                <Grid item xs={3} className="scrollbar-custom" sx={{ height: '540px', backgroundColor: 'gray', position: 'relative' }}>
                    <Typography variant="h5" sx={{ mt: '4%', textAlign: 'center' }}>Assets</Typography>
                    <div> {/* Apply custom scrollbar styles */}
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 15].map((item) => (
                            <Box key={item} sx={{ mt: '9%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>
                                <Grid item xs={5}>
                                    <Box sx={{ height: '80px', backgroundColor: 'red' }} />
                                    <Typography variant="p">vid-103.mpg</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Box sx={{ height: '80px', backgroundColor: 'yellow' }} />
                                    <Typography variant="p">vid-103.mp3</Typography>
                                </Grid>
                            </Box>
                        ))}
                    </div>
                    <Box
                        sx={{
                            backgroundColor: "yellow",
                            height: "50px",
                            position: "sticky",
                            bottom: "0",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:'space-evenly',
                            // padding: "0 10px",
                        }}
                    >
                        {/* Centered icon */}

                        {/* Spacer to push the next two icons to the right */}
                        <Grid item xs={1} />

                        <Grid item>
                            <IconButton>
                                <AddBoxSharpIcon />
                            </IconButton>
                        </Grid>

                        

                        {/* Right-aligned icons */}
                        <Box sx={{ display:'flex'}}>
                            <Grid item>
                                <IconButton>
                                    <AppsIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <ViewListIcon />
                                </IconButton>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={6} sx={{pt:'-5%', height: '540px', backgroundColor: 'blue', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'  }}>
                    
                    <Grid container sx={{ display:'flex', alignItems:'center', justifyContent:'center'}} >
                        <IconButton>
                            <ViewListIcon />
                        </IconButton>
                        <IconButton>
                            <ViewListIcon />
                        </IconButton>
                        <IconButton>
                            <ViewListIcon />
                        </IconButton>
                        <IconButton>
                            <BasicSelect />
                        </IconButton>
                    </Grid>

                    <Grid container xs={10} sx={{backgroundColor: 'gray', height:'400px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                       
                    </Grid>
                    

                </Grid>
                <Grid item xs={3} sx={{pt:'2%', height: '540px', }}>
                    <Grid container sx={{ display:'flex', alignItems:'center', justifyContent:'flex-end', borderBottom: '1px solid black',  }} >
                        <IconButton>
                            <FileUploadIcon />
                        </IconButton>
                        <Button variant="outlined" sx={{ textTransform:'none', mr:'5%'}}>Export</Button>
                    </Grid>
                    <Grid container sx={{ display:'flex', alignItems:'center', justifyContent:'center'  }} >
                        <Typography variant="h6">Propertise</Typography>
                    </Grid>
                    <Grid container sx={{mt:'10%', display:'flex', alignItems:'center', justifyContent:'space-evenly'  }} >
                        
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="p">Scale</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Slider />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="outlined" > 100% </Button>
                        </Grid>
                    </Grid>
                    <Grid container sx={{mt:'5%', display:'flex', alignItems:'center', justifyContent:'space-evenly'   }} >
                        
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="p">Opacity</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Slider />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="outlined" > 100% </Button>
                        </Grid>
                    </Grid>
                    <Grid container sx={{mt:'5%', display:'flex', alignItems:'center', justifyContent:'space-evenly'   }} >
                        
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="p">Rotation</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <RefreshIcon />
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="p">X</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="outlined" > 0.0 </Button>
                        </Grid>
                    </Grid>
                    <Grid container sx={{mt:'5%', display:'flex', alignItems:'center', justifyContent:'space-evenly'   }} >
                        
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={2}>
                            {/* <Typography variant="p">Opacity</Typography> */}
                        </Grid>
                        <Grid item xs={1}>
                            <RefreshIcon />
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="p">Y</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="outlined" > 0.0 </Button>
                        </Grid>
                    </Grid>
                    <Grid container sx={{mt:'5%', display:'flex', alignItems:'center', justifyContent:'space-evenly'   }} >
                        
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={2}>
                            {/* <Typography variant="p">Opacity</Typography> */}
                        </Grid>
                        <Grid item xs={1}>
                            <RefreshIcon />
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="p">Z</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="outlined" > 0.0 </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
