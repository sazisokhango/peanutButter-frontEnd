import React, { useEffect } from 'react';
import { useState } from 'react';
import { Employee } from '../Domain/Employee';


const EmployeeForm = (prop: any) => {
    const [employee, setEmployee] = useState<Employee>();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [salutation, setSalutation] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [employeeNo, setEmployeeNo] = useState<number>(0);
    const [grossSalary, setGrossSalary] = useState<number>(0);
    const [profileColour, setProfileColour] = useState<string>('');

    const AddNewEmployee = () => {
        fetch('http://localhost:8080/employee', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: employeeNo,
                firstName: firstName,
                lastName: lastName,
                salutation: salutation,
                profileColour: profileColour,
                gender: gender,
                grossSalary: grossSalary
            })
        });
    }

    const editExistingEmployee = () => {
        fetch('http://localhost:8080/employee', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: employeeNo,
                firstName: firstName,
                lastName: lastName,
                salutation: salutation,
                profileColour: profileColour,
                gender: gender,
                grossSalary: grossSalary
            })
        });
    }

    useEffect(() => {
        setEmployee(prop.selectedEmployee);
        if (employee !== undefined) {
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setSalutation(employee.salutation);
            setGender(employee.gender);
            setProfileColour(employee.profileColour);
            setEmployeeNo(employee.id);
            setGrossSalary(employee.grossSalary)
        }

    }, [employee, prop.selectedEmployee])

    useEffect(() => {
        if (prop.addEmployee) {
            AddNewEmployee()
        }

    }, [prop.addEmployee])

    const handleOnSubmit = () => {
        if (prop.editForm) {
            editExistingEmployee()
        } else {
            AddNewEmployee();
        }
    }



    const handleFirstNameOnChange = (event: any) => {
        setFirstName(event.target.value);
    }
    const handleLastNameOnChange = (event: any) => {
        setLastName(event.target.value);
    }
    const handleSalutationOnChange = (event: any) => {
        setSalutation(event.target.value);
    }
    const handleGenderOnChange = (event: any) => {
        setGender(event.target.value);
    }
    const handleGrossSalaryOnChange = (event: any) => {
        setGrossSalary(event.target.value);
    }
    const handleProfileColourOnChange = (event: any) => {
        setProfileColour(event.target.value);
    }
    const handleEmployeeNonChange = (event: any) => {
        setEmployeeNo(event.target.value);
    }

    return <form onSubmit={handleOnSubmit}>
        <div className="row">
            <h5 className="text-center">Current Employees</h5>
            <div className="col">
                <div className="row">
                    <div className="col-4">
                        <label className="sr-only" htmlFor="firstName">First Name(s) *</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control-sm m-2" id="firstName" placeholder="First name" onChange={handleFirstNameOnChange} value={firstName} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label className="sr-only" htmlFor="lastName">Last Name *</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control-sm m-2" id="lastName" placeholder="Last name" onChange={handleLastNameOnChange} value={lastName} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label className="sr-only" htmlFor="salutation">Salutation *</label>
                    </div>
                    <div className="col-8">
                        <select className="custom-select custom-select-lg mb-3" onChange={handleSalutationOnChange} value={salutation}>
                            <option value="Dr.">Dr.</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Mx.">Mx.</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label className="sr-only" htmlFor="gender">Gender *</label>
                    </div>
                    <div className="col-8">
                        <div className="custom-control custom-control-inline">
                            <input type="radio" onChange={handleGenderOnChange} id="customRadioInline1" name="Male" checked={gender === 'Male'} className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
                        </div>
                        <div className="custom-control custom-control-inline">
                            <input type="radio" onChange={handleGenderOnChange} id="customRadioInline2" name="Female" checked={gender === 'Female'} className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
                        </div>
                        <div className="custom-control custom-control-inline">
                            <input type="radio" onChange={handleGenderOnChange} id="customRadioInline2" name="Unspecified" checked={gender === 'Unspecified'} className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadioInline2">Unspecified</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label className="custom-control-label" htmlFor="EmployeeNo">Employee #</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control-sm m-2" id="EmployeeNo" placeholder="empoyee Number" onChange={handleEmployeeNonChange} value={employeeNo} />
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="col-auto">
                    <button className="btn btn-secondary ">Cancel</button>
                    <input className="btn btn-primary m-2" value="save" type="submit" onClick={handleOnSubmit} />
                </div>
                <div className="row">
                    <div className="col-4">
                        <label className="sr-only" htmlFor="fullName">Full Name </label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control-sm m-2" id="fullName" placeholder="Full name" value={firstName + ' ' + lastName} disabled />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label className="sr-only" htmlFor="gross">Gross Salary $ PY</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control-sm m-2" id="gross" placeholder="Gross Salary" onChange={handleGrossSalaryOnChange} value={grossSalary} />
                    </div>
                </div>
                <div className="row">

                    <div className="col-4">
                        <label className="sr-only" htmlFor="Profile Colour">Profile Colour</label>
                    </div>
                    <div className="col-8">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="Green" value="Green" checked={profileColour === 'Green'} onChange={handleProfileColourOnChange} />
                            <label className="form-check-label" htmlFor="Green">Green</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Blue" checked={profileColour === 'Blue'} onChange={handleProfileColourOnChange} />
                            <label className="form-check-label" htmlFor="Blue">Blue</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="Red" value="Red" checked={profileColour === 'Red'} onChange={handleProfileColourOnChange} />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Red</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="default" value="Default" checked={profileColour === 'Default'} onChange={handleProfileColourOnChange} />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Default</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>

}

export default EmployeeForm;