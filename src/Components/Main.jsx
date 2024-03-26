import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Main() {

    return (
        <>
            <Grid
                container
                sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', // Center items vertically
                    textAlign: 'center', // Center text horizontally
                    mt: '10%'
                }}
            >
                <Grid item xs={12}>
                    <Typography variant="h1">Dashboard</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: '10%' }}>
                    <Box mt={0}>
                        <Link to="/page-1" style={{ textDecoration: 'none' }}>
                            <Button variant="contained">Page 1</Button>
                        </Link>
                        <Link to="/page-2" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ ml: '10%' }}>Page 2</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
