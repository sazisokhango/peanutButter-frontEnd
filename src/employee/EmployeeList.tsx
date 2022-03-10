import React, { useState } from "react";
import { Employee } from "../Domain/Employee";
import EmployeeForm from "./EmployeeForm";

const EmployeeList = (prop: any) => {
    const [employeeSelected, setEmployeeSelected] = useState<Employee>();
    const [editForm, setEditForm] = useState<boolean>(false);

    return <div>
        <table className="table table-bordered" >
            <thead>
                <tr>
                    <th scope="col">Employee #</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Salutation</th>
                    <th scope="col">Profile Colour</th>
                </tr>
            </thead>
            <tbody>
                {prop.employeeList.map((employee: Employee) =>
                    <tr key={employee.id} onClick={() => { setEmployeeSelected(employee); setEditForm(true) }}>
                        <th scope="row">{employee.id}</th>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.salutation}</td>
                        <td>{employee.profileColour}</td>
                    </tr>
                )}
            </tbody>
        </table>
        <EmployeeForm editForm={editForm} selectedEmployee={employeeSelected} addEmployee={prop.addEmployee} />
    </div>
}

export default EmployeeList