import React from "react";
import { useEffect, useState } from "react";
import EmployeeList from "./EmployeeList";


const Home = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const [addEmployee, setAddEmployee] = useState<boolean>(false)

    useEffect(() => {
        fetchEmployees();
    }, [])

    const fetchEmployees = () => {
        fetch("http://localhost:8080/employee")
            .then(res => res.json())
            .then(
                (result) => {
                    setEmployeeList(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    return <div className="container">
        <h5 className="text-center">Current Employees</h5>
        <div className="row">
            <div>
                <button className="btn-sm btn-primary mb-3" style={{ float: 'right' }} onClick={() => { setAddEmployee(true) }} >Add Employee</button>
            </div>
            <EmployeeList employeeList={employeeList} addEmployee={addEmployee} />
        </div>
    </div >
}

export default Home;