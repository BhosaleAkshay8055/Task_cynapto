import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import { Search } from 'lucide-react';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
});

const SearchBar = () => {
    return (
        <StyledBox>
            <TextField
                fullWidth
                placeholder="search"
                sx={{
                    '& .MuiInputBase-root': {
                      borderRadius: '50px', // Set border radius here
                    },
                  }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}
            />
        </StyledBox>
    );
};

export default SearchBar;