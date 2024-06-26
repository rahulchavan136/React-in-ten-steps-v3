import { useState } from "react";

let EmployeeTableComponent = ({ emps, populateForm }) => {
    const handlePopulateForm = (emp) => {
        populateForm(emp); // Call the function passed from parent component
    };

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Employee</th>
                    <th>Join Date</th>
                    <th>Projects</th>
                    <th>#</th>
                </tr>
            </thead>

            <tbody>
                {emps.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstname} {item.lastname}</td>
                        <td>{item.joindate}</td>
                        <td>{item.projects}</td>
                        <td>
                            <button
                                className="btn btn-link"
                                onClick={() => handlePopulateForm(item)}
                            >
                                <i className="fas fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTableComponent;
