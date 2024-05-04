import * as React from 'react';
import DropDown from './DropDown';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

export default function FilterComponent(props){
  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      // Prevent default form submission
      event.preventDefault();
      // Call your function here
      console.log('Enter key pressed!');
    }
  };
  return(
    <div className='FiltersParentDiv Flex-Div'>
      <DropDown label="Roles" selectWidth={250}/>
      <DropDown label="Experience" selectWidth={250}/>
      <DropDown label="Minimum Base Pay Salary" selectWidth={250}/>
      <TextField id="outlined-basic" label="Search Company Name" variant="outlined" onKeyDown={handleEnter} size="small" sx={{width: 250, m:1}}/>
    </div>
  )
}
