import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { CardContent } from '@mui/material';
import Button from '@mui/material/Button';

export default function JobCard(props){
  return(
    <>
    {
        props.job && <Card sx={{ width: 340, m:0.5, borderRadius: "20px", border: "1px", borderColor: "grey"}} className='Card'>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe"> <img src={props.job.logoUrl} style={{width: "100%", height:"100%"}} alt={props.job.companyName}/> </Avatar>
                            }
                            title={
                                <div style={{color:"grey",fontSize:"16px", fontWeight:700}}>
                                    {props.job.companyName}
                                </div>
                            }
                            subheader={
                                <>
                                <span style={{fontSize:"14px"}}>{props.job.jobRole}</span>
                                </>
                            }
                        />
                        <CardContent className='JobcardContentBody'>
                            <div className="EstimatedSalary SubheadingText" style={{margin: "-10px 0px"}}>Estimated Salary: {props.job.miJdSalary != null ? props.job.minJdSalary+"-"+props.job.maxJdSalary: props.job.maxJdSalary}</div>
                            <h4>About Company:</h4>
                            <div className='AboutCompany'>
                                {props.job.jobDetailsFromCompany}
                            </div>
                            <div className='AboutCompanyInnerDiv'>
                                <a href={props.job.jdLink}>View Job</a>
                                <p className='SubheadingText'> Minimum Experience: 
                                {props.job.minExp!=null? props.job.minExp+" - "+props.job.maxExp : props.job.maxExp} Years</p>
                                <p className='SubheadingText' style={{marginTop:"-5px"}}>Location: {props.job.location}</p>
                                <Button variant="contained">Easy Apply</Button>
                            </div>
                        </CardContent>
                    </Card>
    }
    </>
  )
}
