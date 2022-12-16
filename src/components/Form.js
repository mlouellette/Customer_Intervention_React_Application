import React, { Component }  from 'react';
import { useState } from "react";



const token =localStorage.getItem("email");

const requestHeader = {
    headers: {
        Authorization:  `Bearer ${token}`,
    },
};

function Form() {
  const [customerID, setCustomer] = useState("");
  const [columnID, setColumn] = useState("");
  const [buildingID, setBuilding] = useState("");
  const [batteryID, setBattery] = useState("");
  const [elevatorID, setElevator] = useState("");
  const [message, setMessage] = useState("");
  console.log(customerID)


  let handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const test = JSON.stringify({
            "customerID": +customerID,
            "buildingID": +buildingID,
            "batteryID": +batteryID,
            "columnID": +columnID,
            "elevatorID": +elevatorID,
            "report": "string"
            
          })
       console.log(test)
       console.log("************")   
        
     const test2 = JSON.stringify ({
            "customerID": +customerID,
            "buildingID": +buildingID,
            "batteryID": +batteryID,
            "columnID": +columnID,
            "elevatorID": +elevatorID,
            "report": "string"
            
          })   
          console.log(test2)
          console.log("--------------")    
          
      let res = await fetch("https://java-api.codeboxxtest.xyz/interventions/new", requestHeader, {
        method: "POST",
        body: test2,

      });
      let resJson = await res.json();
      console.log("#############")
      console.log(resJson)
      if (res.status === 200) {
        setMessage("Form created successfully");
        
        
      } else {
        setMessage("Some error occured");
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <div className="bg-dark text-white p-3">
      <form onSubmit={handleSubmit}>
      <label for="exampleInputEmail1">CUSTOMER ID</label>
        <div class="form-group">
            <input
            type="text"
            class="form-control"
            value={customerID}
            placeholder="Customer"
            onChange={(e) => setCustomer(e.target.value)}
            />
        </div>
        <label for="exampleInputEmail1">COLUMN</label>
        <div class="form-group">
            <input
            type="text"
            class="form-control"
            value={columnID}
            placeholder="Column"
            onChange={(e) => setColumn(e.target.value)}
            />
        </div>
        <label for="exampleInputEmail1">BUILDING</label>
        <div class="form-group">
            <input
            type="text"
            class="form-control"
            value={buildingID}
            placeholder="Building"
            onChange={(e) => setBuilding(e.target.value)}
            />
        </div>
        <label for="exampleInputEmail1">BATTERY</label>
        <div class="form-group">
            <input
            type="text"
            class="form-control"
            value={batteryID}
            placeholder="Battery"
            onChange={(e) => setBattery(e.target.value)}
            />
        </div>
        <label for="Elevator">ELEVATOR</label>
        <div class="form-group mb-5">
            <input
            type="text"
            class="form-control"
            value={elevatorID}
            placeholder="Elevator"
            onChange={(e) => setElevator(e.target.value)}
            />
        </div>



        <button type="submit" class="btn btn-danger">Submit</button>
        <div class="pb-4"></div>
  
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Form;

                {/* <div class="form-group">
                    <div class="form-group">
                    <label for="inputID">CUSTOMER ID</label>
                    <input type="text" class="form-control" id="inputID" placeholder="Customer ID" />
                    </div>
                    <div class="form-group">
                    <label for="inputColumn">COLUMN</label>
                    <input type="text" class="form-control" id="inputColumn" placeholder="Column" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputBuilding">BUILDING</label>
                    <input type="text" class="form-control" id="inputBuilding" placeholder="Building" />
                </div>
                <div class="form-group">
                    <label for="inputBattery">BATTERY</label>
                    <input type="text" class="form-control" id="inputBattery" placeholder="Battery" />
                </div>
                <div class="form-group">
                    <label for="inputElevator">ELEVATOR</label>
                    <input type="text" class="form-control" id="inputElevator" placeholder="Elevator" />
                </div>
                <br></br>
               
                <button type="submit" class="btn btn-danger">Submit</button>
                <div class="pb-4"></div>
                </form> */}