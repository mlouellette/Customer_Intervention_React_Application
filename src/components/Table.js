import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const token =localStorage.getItem("email");

const GET_COSTUMER_URL = "https://java-api.codeboxxtest.xyz/customers/current";

const requestHeader = {
    headers: {
        Authorization:  `Bearer ${token}`,
    },
};

// Get request
const getUser = async (setUser) => {
    try {
        const res = await axios.get(GET_COSTUMER_URL, requestHeader);

        setUser(res.data);
    } catch (error) {
        console.warn("[getUser] Error: ", error);
    }
};

// Render Data to my home page table 
const Table = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUser(setUser);
    }, []);

    const render = () => {
        return user.interventions.map((user, index) => {
            const { id, status, result, building, battery, column, elevator } = user;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{status}</td>
                    <td>{result}</td>
                    <td>{ building.id ? building.id : building }</td>
                    <td>{ battery != null && battery.id ? battery.id : battery }</td>
                    <td>{ column != null && column.id ? column.id : column }</td>
                    <td>{ elevator != null && elevator.id ? elevator.id : elevator }</td>
                </tr>
            );
        });
    };

    return (
        <div>
            
            <table className="table table-striped table-dark table-hover" id="customer">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Result</th>
                        <th>Building</th>
                        <th>Battery</th>
                        <th>Column</th>
                        <th>Elevator</th>
                    </tr>
                </thead>
                <tbody>
                    {user.length !== 0 && user.interventions.length !== 0 && render()}
                </tbody>
            </table>
        </div>
    );
};

export default Table;


