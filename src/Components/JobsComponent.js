import * as React from 'react';
import JobCard from './JobCard';
export default function JobsComponent(props){
    console.log(props.jobs);
  return(
    <div className='Flex-Div JobCardParentDiv'>
        {
            props.jobs &&
                (props.jobs).map(job=>{
                    return(
                        <JobCard key={job.jdUid} job={job}/>
                    )
                })
        }
        
        {/* <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/> */}
    </div>
  )
}
