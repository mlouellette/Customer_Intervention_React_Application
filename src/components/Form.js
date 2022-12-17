import React, { Component }  from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

// Token bearer to have access permission for my api calls
const token = localStorage.getItem("email");
const requestHeader = {
    headers: {
        Authorization:  `Bearer ${token}`,
        'Content-Type': 'application/json',

    },
};

function Form() {
  const [customers, setCustomers] = useState("");

  const [columns, setColumns] = useState("");
  const [selectedColumnID, setSelectedColumnID] = useState("");
  
  const [buildings, setBuildings] = useState("");
  const [selectedBuildingID, setSelectedBuildingID] = useState("");

  const [batteries, setBatteries] = useState("");
  const [selectedBatteryID, setSelectedBatteryID] = useState("");

  const [elevators, setElevators] = useState("");
  const [selectedElevatorID, setSelectedElevatorID] = useState("");

  const [message, setMessage] = useState(null);

  // POST request and handle submit for the form
  let handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        
     const test = JSON.stringify ({
            "customerID": +customers,
            "buildingID": +selectedBuildingID,
            "batteryID": +selectedBatteryID,
            "columnID": +selectedColumnID,
            "elevatorID": +selectedElevatorID,
            "report": "string"
            
          })   
          
      let res = await fetch("https://java-api.codeboxxtest.xyz/interventions/new", { 
        ...requestHeader, 
        method: "POST",
        body: test,

      });

      

      if (res.status === 200) {
        setMessage("Form created successfully");
        window.location.href = "/Home";
        
      } else {
        setMessage("Some error occured");
        
      }
    } catch (err) {
      console.log(err);
    }
  };

 
  // GET request using axios inside useEffect React hook
  useEffect(() => {
      
      axios.get('https://java-api.codeboxxtest.xyz/customers/current', requestHeader).then(response => setCustomers(response.data.id));
 
      axios.get('https://java-api.codeboxxtest.xyz/buildings/current', requestHeader).then(response => setBuildings(response.data));
    }, []);
  useEffect(() => {
      axios.get('https://java-api.codeboxxtest.xyz/batteries', requestHeader).then(response => setBatteries(response.data));
    }, []); 
  useEffect(() => {
      axios.get('https://java-api.codeboxxtest.xyz/columns', requestHeader).then(response => setColumns(response.data));
    }, []);
  useEffect(() => {
      axios.get('https://java-api.codeboxxtest.xyz/elevators', requestHeader).then(response => setElevators(response.data));
    }, []);
    

    useEffect(() => {
        console.log("[useEffect] buildings changed:", buildings);
      }, [buildings])

  
  return (
    <div className="bg-dark text-white p-3">
      <form onSubmit={handleSubmit}>
      <label for="exampleInputEmail1">CUSTOMER</label>
        <div class="form-group">
            <input
            type="text"
            class="form-control"
            value={customers}
            placeholder={customers}
            onChange={(e) => setCustomers(e.target.value)}
            readOnly />
        </div>

        <label for="exampleInputEmail2">BUILDING</label>
        <div class="form-group">
            <select
            type="text"
            class="form-control"
            value={selectedBuildingID}
            onChange={(e) => setSelectedBuildingID(e.target.value)}
             >
            <option> select building </option>
            {buildings.length !== 0 && buildings.map((buildings) => (
            <option  key={buildings.id} value={buildings.id}> {buildings.id} </option>))}
            </select>              
        </div>

        <label for="exampleInputEmail3">BATTERY</label>
        <div class="form-group">
            <select
            type="text"
            class="form-control"
            value={selectedBatteryID}
            onChange={(e) => setSelectedBatteryID(e.target.value)}
            >
            <option> select battery </option>
            {batteries.length !== 0 && batteries.map((batteries) => (
            <option  key={batteries.id} value={batteries.id}>{batteries.id}</option>))}
            </select>    
        </div>

        <label for="exampleInputEmail4">COLUMN</label>
        <div class="form-group">
            <select
            type="text"
            class="form-control"
            value={selectedColumnID}
            onChange={(e) => setSelectedColumnID(e.target.value)}
            >
            <option> select column </option>
            {columns.length !== 0 && columns.map((columns) => (
            <option  key={columns.id} value={columns.id}>{columns.id}</option>))}
            </select>     
        </div>

        <label for="Elevator">ELEVATOR</label>
        <div class="form-group mb-5">
            <select
            type="text"
            class="form-control"
            value={selectedElevatorID}
            onChange={(e) => setSelectedElevatorID(e.target.value)}
            >
            <option> select elevator </option>
            {elevators.length !== 0 && elevators.map((elevators) => (
            <option  key={elevators.id} value={elevators.id}>{elevators.id}</option>))}
            </select> 
        </div>

        <button type="submit" class="btn btn-danger">Submit</button>
        <div class="pb-4"></div>
  
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Form;
