import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

function Barchart() {
  const [employeeId, setEmployeeId]= useState([]);
  const [employeeProject, setEmployeeProject]= useState([]);

  useEffect( ()=>{

    const Employeeid=[];
    const Employeeproject=[];

    const getPerfomancerecord= async()=>{
      const dataReq= await fetch("http://localhost:8000/employee");
      const dataRes= await dataReq.json();
      //console.log(dataRes);
       for(let i=0; i<dataRes.length; i++)
      {
        Employeeid.push(dataRes[i].id);
        Employeeproject.push(dataRes[i].projects);

      }
      setEmployeeId(Employeeid);
      setEmployeeProject(Employeeproject);
 }
  getPerfomancerecord();

  },[]);
  
  return (
    <>
      <div className="container-fluid mb-5">
      <h3 style={{ fontSize: 18,textAlign:"center",color:"#437694"}}>Performance  Barchart</h3>
        <Chart
          type="bar"
          width={450}
          height={450}
          float="right"
          series={[
            {
              name: "...",
              data: employeeProject,
            },
          ]}
          options={{
            colors: ["#437694"],
            theme: { mode: "light" },
            xaxis: {
              tickPlacement: "on",
              categories: employeeId,
              title: {
                text: "Employee Id",
                style: { color:"#437694", fontSize: 14 },
              },
            },

            yaxis: {
                labels: {
                  formatter: (val) => {
                  return `${val}`;
                  },
                style: { fontSize: "10", colors: ["#437694"] },
              },
                 title: {
                 text: "Number of Projects",
                 style: { color: "#437694", fontSize: 10 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 10,
              },
            },
          }}
        ></Chart>
      </div>
    </>
  );
}

export default Barchart;