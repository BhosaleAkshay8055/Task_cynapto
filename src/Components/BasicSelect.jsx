import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box >
      <FormControl>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select sx={{ height: '30px' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          //   label="Age"
          onChange={handleChange}
        >
          <MenuItem value={25}>25%</MenuItem>
          <MenuItem value={50}>50%</MenuItem>
          <MenuItem value={75}>75%</MenuItem>
          <MenuItem value={100}>100%</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}