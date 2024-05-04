import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { height } from '@mui/system';
import Button from '@mui/material/Button';

export default function JobCard(props){
  return(
    <>
        <Card sx={{ width: 340, m:0.5, borderRadius: "20px", border: "1px", borderColor: "grey"}} className='Card'>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe"> <img src="https://cdn.pixabay.com/photo/2024/03/20/06/18/ai-generated-8644732_1280.jpg" style={{width: "100%", height:"100%"}} alt="Re"/> </Avatar>
                }
                title={
                    <div style={{color:"grey",fontSize:"16px", fontWeight:700}}>
                        DropBox
                    </div>
                }
                subheader={
                    <>
                    <span style={{fontSize:"14px"}}>Backend</span>
                    </>
                }
            />
            <CardContent className='JobcardContentBody'>
                <div className="EstimatedSalary SubheadingText">Estimated Salary: &#8377;</div>
                <h4>About Company:</h4>
                <div className='AboutCompany'>
                    This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.
                </div>
                <div className='AboutCompanyInnerDiv'>
                    <p className='SubheadingText'> Experience: 2-3 Years</p>
                    <Button variant="contained">Easy Apply</Button>
                </div>
            </CardContent>
        </Card>
    </>
  )
}
