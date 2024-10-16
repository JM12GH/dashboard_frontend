import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const EditUser = () => {

  const { empid } = useParams();
  //const [empdata, empdatachange] = useState({});

  useEffect(() => {
      fetch("http://localhost:8000/employee/" + empid).then((res) => {
          return res.json();
      }).then((resp) => {
          idchange(resp.id);
          namechange(resp.name);
          positionchange(resp.position)
          emailchange(resp.email);
          phonechange(resp.phone);
          projectschange(resp.projects)
          }).catch((err) => {
          console.log(err.message);
      })
  }, []);

  const[id,idchange]=useState("");
  const[name,namechange]=useState("");
  const[email,emailchange]=useState("");
  const[phone,phonechange]=useState("");
  const[projects,projectschange]=useState("");
  const[position,positionchange]=useState(true);
  const navigate=useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    const empdata={id,name,position,email,phone,projects};
    

    fetch("http://localhost:8000/employee/"+empid,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(empdata)
    }).then((res)=>{
      alert('Saved successfully.')
      navigate('/');
    }).catch((err)=>{
      console.log(err.message)
    })

  }
  
  return( 
    <>
    <Container maxWidth="sm" style={{ textAlign:"center"}} onSubmit={handlesubmit}>
      <br/><br/><br/>
    <h2> Edit Employee</h2>
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
    <Button variant="outlined"  type="submit" >Submit</Button>
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



export default EditUser