import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import styled from "styled-components";

const Title = styled.h4 `
color : #97a6c4
 `
const ViewUser = () => {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/employee/"+ empid).then((res) => {
        return res.json();
    }).then((resp) => {
        empdatachange(resp);
    }).catch((err) => {
        console.log(err.message);
    })
}, []);
  return(
    <div>
    <br/><br/><br/>
     <div className="container">
            <div className="card row" style={{ "textAlign": "center" }}>
            <div className="card-body"></div>
             {empdata &&
                <div textAlign="center">
                    <h2 style={{color:"#97a6c4"}}>Employee Card </h2>
                    <h4 style={{color:"#375980"}}> {empdata.id}.{empdata.name}</h4>
                    <Title>Position:</Title>
                    <h5>{empdata.position}</h5>
                    <Title>Contact Details</Title>
                    <h5>Email : {empdata.email}</h5>
                    <h5>Phone Number : {empdata.phone}</h5>
                    <div>
                    <Button variant="outlined" onClick={() => 
                      {
                         navigate('/') 
                         }}>Turn Back
                    </Button>
                    <br/><br/>
                    </div>
                </div>
            }
        </div>
        </div>
        
    </div >
);
}

export default ViewUser;