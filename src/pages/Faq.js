import React from 'react';
import Box from '@mui/material/Box';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState,useEffect } from 'react';

const Faq = () => {

  const[faq,setFaq]=useState(null);
  
  useEffect(()=>{
    fetch("http://localhost:8000/faq").then((res)=>{
     return res.json();
    }).then((resp)=>{
      setFaq(resp);
    }).catch((err)=>{
     console.log(err.message);
    })
   },[])
 
 
  return (

 <Box m="20px"  height={100} >
  <hr/><hr/>
     <h1 style={{textAlign:"center" ,color:"#375980"}}>Frequently Asked Questions Page </h1>
      <hr/>
      { faq &&
         faq.map((item) => (
        <Accordion  key={item.question}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography  style={{color:"#437694"}} variant="h5">
          {item.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {item.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
        ))}
         
    </Box>
    
  );
};



export default Faq;