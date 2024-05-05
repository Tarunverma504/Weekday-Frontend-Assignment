import * as React from 'react';
import DropDown from './DropDown';
import TextField from '@mui/material/TextField';

export default function FilterComponent(
  { selectedRole, 
    setSelectedRole,  
    selectedExperience, 
    setSelectedExperience,  
    selectedMinBasePay, 
    setSelectedMinBasePay,
    selectedLocation,
    setSelectedLoaction,
    searchCompanyName,
    setSearchCompanyName,
    search, 
    setSearch
  }
){

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      // Prevent default form submission
      event.preventDefault();
      // Call your function here
      setSearchCompanyName(search);
      return;
      
    }
  };

  const onBlurSearch = ()=>{
    setSearchCompanyName(search);
  }
  return(
    <div className='FiltersParentDiv Flex-Div'>
      <DropDown label="Roles" selectWidth={250} values={[ "frontend", "backend", "ios", "android", "tech lead"]} value={selectedRole} onChange={(event) => setSelectedRole(event.target.value)}/>
      <DropDown label="Location" selectWidth={250} values={[ "delhi ncr", "mumbai", "remote", "chennai", "bangalore"]} value={selectedLocation} onChange={(event) => setSelectedLoaction(event.target.value)}/>
      <DropDown label="Experience" selectWidth={250} values={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]} value={selectedExperience} onChange={(event) => setSelectedExperience(event.target.value)}/>
      <DropDown label="Minimum Base Pay Salary" selectWidth={250} values={["10-20k USD", "20-30k USD", "30-40k USD", "40-50k USD", "50-60k USD", "60-70k USD", "70-80k USD", "80-90k USD", "90-100k USD", "Above 100K USD"]} value={selectedMinBasePay} onChange={(event) => setSelectedMinBasePay(event.target.value)}/>
      <TextField id="outlined-basic" label="Search Company Name" variant="outlined" onKeyDown={handleEnter} size="small" sx={{width: 250, m:1}} value={search} onChange={(event) => setSearch(event.target.value)} onBlur={onBlurSearch} />
    </div>
  )
}
