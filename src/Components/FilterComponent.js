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
      <DropDown label="Roles" selectWidth={250} values={[ "frontend", "ios", "android", "tech lead","backend"]}/>
      <DropDown label="Experience" selectWidth={250} values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
      <DropDown label="Minimum Base Pay Salary" selectWidth={250} values={["10-20", "20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90", "90-100", "100+"]}/>
      <TextField id="outlined-basic" label="Search Company Name" variant="outlined" onKeyDown={handleEnter} size="small" sx={{width: 250, m:1}}/>
    </div>
  )
}
