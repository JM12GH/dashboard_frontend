import React from 'react';
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
import {  useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const User = () => {
  const [empdata,empdatachange]=useState(null); 
  useEffect(()=>{
   fetch("http://localhost:8000/employee").then((res)=>{
    return res.json();
   }).then((resp)=>{
     empdatachange(resp);
   }).catch((err)=>{
    console.log(err.message);
   })
  },[])
  const navigate = useNavigate();
  
    const LoadDetail = (id) => {
      navigate("/employee/detail/" + id);
       }
    const LoadEdit = (id) => {
      navigate("/employee/edit/" + id);
       }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
          fetch("http://localhost:8000/employee/" + id, {
            method: "DELETE"
          }).then((res) => {
            alert('Removed successfully.')
            window.location.reload();
            }).catch((err) => {
            console.log(err.message)
           })
         }
       }
  return (
    <>
    <Box height={100}/>
    <Button variant="outlined" onClick={() => 
              {
                navigate('/adduser') 
                }}>
              Add Employee
    </Button>
    <hr></hr>
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Position</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="center">Nr-Projects</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
       <TableBody>
         { empdata &&
         empdata.map((item) => (
            <StyledTableRow key={item.id}>

              <StyledTableCell align="center">{item.id}</StyledTableCell>
              <StyledTableCell align="center">{item.name}</StyledTableCell>
              <StyledTableCell align="center">{item.position}</StyledTableCell>
              <StyledTableCell align="center">{item.email}</StyledTableCell>
              <StyledTableCell align="center">{item.phone}</StyledTableCell>
              <StyledTableCell align="center">{item.projects}</StyledTableCell>
              <StyledTableCell align="center"> 
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '& > *': {
                   m: 1,
                   },
                  }} >

                <ButtonGroup variant="text" aria-label="text button group">
                  <Button onClick={() => { LoadEdit(item.id) }}>Edit</Button>
                  <Button onClick={() => { Removefunction(item.id) }}>Remove</Button>
                  <Button onClick={() => { LoadDetail(item.id) }} >View</Button>
                 </ButtonGroup>
                 </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
          </TableBody>  
      </Table>
      </TableContainer>
    </>
  );
}
export default User;

