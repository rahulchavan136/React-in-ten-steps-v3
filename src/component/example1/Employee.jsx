import { useState } from "react";
import CardComponent from "./Card";
import EmpFormComponent from "./EmpForm";
import EmployeeTableComponent from "./EmpTable";

let EmployeeComponent = () => {
    const [emps, setEmps] = useState([]);

    let departments = [
        { id: 1, dept: "Development" },
        { id: 2, dept: "Testing" },
    ];

    let technologies = [
        { id: 1, domain: "Java Spring Boot" },
        { id: 2, domain: "Python Django" },
        { id: 3, domain: "Express Js" },
        { id: 4, domain: "Asp.Net MVC" },
    ];

    const [selectedEmp, setSelectedEmp] = useState(null);

    const updateEmpList = (updatedEmp) => {
        const existingEmp = emps.find(emp => emp.id === updatedEmp.id);
        if (existingEmp) {
            const updatedEmps = emps.map(emp =>
                emp.id === updatedEmp.id ? updatedEmp : emp
            );
            setEmps(updatedEmps);
        } else {
            setEmps([...emps, updatedEmp]);
        }
        clearSelectedEmp();
    };

    const populateForm = (emp) => {
        setSelectedEmp(emp);
    };

    const clearSelectedEmp = () => {
        setSelectedEmp(null);
    };

    return (
        <div className="p-1">
            <h1 style={{ color: "darkblue", textAlign: "center" }}>
                Nested Components
            </h1>

            <div className="my-2">
                <CardComponent emps={emps} dept={departments} tech={technologies} />
            </div>

            <div className="row g-1">
                <div className="col-md-6">
                    <EmpFormComponent
                        dept={departments}
                        tech={technologies}
                        updateEmpList={updateEmpList}
                        selectedEmp={selectedEmp}
                    />
                </div>

                <div className="col-md-6">
                    <EmployeeTableComponent
                        emps={emps}
                        populateForm={populateForm}
                    />
                </div>
            </div>

            <div className="row g-1 my-2">
                <div className="justify-content-center d-grid">
                    <img src="./images/ex1.png" style={{ width: "500px" }} />
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;
