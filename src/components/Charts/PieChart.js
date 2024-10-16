import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
const Piechart=()=>
{
    const [employeeName, setEmployeeName]= useState([]);
    const [employeeProject, setEmployeeProject]= useState([]);

   useEffect( ()=>{
    const Employeename=[];
    const Employeeproject=[];
       const getPerfomancerecord= async()=>{
       const reqData= await fetch("http://localhost:8000/employee");
       const resData= await reqData.json();       
       for(let i=0; i< resData.length; i++)
       {
        Employeename.push(resData[i].name);
        Employeeproject.push( parseInt(resData[i].projects));
       }
       setEmployeeName(Employeename);
       setEmployeeProject(Employeeproject);
     }
      getPerfomancerecord();

    },[]);

    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
            <h3 style={{ fontSize: 18 ,textAlign:"center",color:"#437694"}}>Performance PieChart </h3>
            <br/><br/><br/>
            <Chart 
                 type="pie"
                 width= '500'
                 height= '500'
                 float="left"
                 series= {employeeProject}             

                options={{
                       noData:{text:"Empty Data"},                        
                       labels:employeeName                
                    }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default Piechart;