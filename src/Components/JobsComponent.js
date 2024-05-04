import * as React from 'react';
import JobCard from './JobCard';
export default function JobsComponent(props){
  return(
    <div className='Flex-Div JobCardParentDiv'>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
    </div>
  )
}
