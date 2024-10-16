import React from 'react';
import {  useNavigate } from "react-router-dom";
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const AddUser = () => {
  const[id,idchange]=useState("");
  const[name,namechange]=useState("");
  const[position,positionchange]=useState("");
  const[email,emailchange]=useState("");
  const[phone,phonechange]=useState("");
  const[projects,projectschange]=useState("");  
  const navigate = useNavigate();
  
  const handlesubmit=(e)=>{
    e.preventDefault();
    const empdata={name,position,email,phone,projects};
    

    fetch("http://localhost:8000/employee",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(empdata)
    }).then((res)=>{
      alert('Saved successfully.')
      navigate('/');
    }).catch((err)=>{
      console.log(err.message)
    })

  }
  return (
    <>
    <Container maxWidth="sm" style={{ textAlign:"center"}} onSubmit={handlesubmit} >
    <h2> Add Employee</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch',textAlign:"center"},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
       id="outlined-basic" 
       label="ID" 
       variant="outlined" 
       disabled="disabled"
       value={id}/>
     <TextField 
      id="outlined-basic" 
      label="Name" 
      variant="outlined" 
      type="text" 
      required value={name} 
      onChange={e=>namechange(e.target.value)}/>
     
     <TextField 
      id="outlined-basic" 
      label="Position" 
      variant="outlined" 
      type="text"
      value={position} onChange={e=>positionchange(e.target.value)}/>
      <br/>
      <TextField 
      id="outlined-basic" 
      label="E-mail" 
      variant="outlined" 
      type="text" 
      value={email} onChange={e=>emailchange(e.target.value)}/>
      <br/>
      <TextField 
      id="outlined-basic" 
      label="Phone" 
      variant="outlined" 
      type="text" 
      value={phone} onChange={e=>phonechange(e.target.value)}/>
      <br/>
      <TextField 
      id="outlined-basic" 
      label="Nr-Projects" 
      variant="outlined" 
      type="text" 
      value={projects} onChange={e=>projectschange(e.target.value)}/>
      <br/>
     <Stack direction="row" spacing={2}  
      display="flex"
      justifyContent="flex-end"
      alignItems="flex-end">
    <Button variant="outlined"  type="submit"  >Submit</Button>
    <Button variant="outlined" color="error" onClick={() => 
     {
      navigate('/') 
      }}>Turn back</Button>
    </Stack>
   </Box>
   </Container>
</>
  )
}

export default AddUser;