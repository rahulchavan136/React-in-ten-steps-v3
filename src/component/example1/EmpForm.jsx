import { useState, useEffect } from "react";
import DepartmentComponent from "./Department";
import TechnologyComponent from "./Technology";

let EmpFormComponent = ({ dept, tech, updateEmpList, selectedEmp }) => {
    const [emp, setEmp] = useState({
        id: '',
        firstname: "",
        lastname: "",
        joindate: "",
        department: "",
        technologies: [],
        projects: ''
    });

    useEffect(() => {
        if (selectedEmp) {
            setEmp(selectedEmp); // Populate form fields with selected employee data
        } else {
            clearForm();
        }
    }, [selectedEmp]);

    const changeEmp = (e) => {
        setEmp({ ...emp, [e.target.name]: e.target.value });
    };

    const changeTech = (tech) => {
        setEmp({ ...emp, ["technologies"]: tech });
    };

    const clearForm = () => {
        setEmp({
            id: '',
            firstname: "",
            lastname: "",
            joindate: "",
            department: "",
            technologies: [],
            projects: ''
        });
    };

    const handleSubmit = () => {
        if (emp.id) {
            updateEmpList(emp); // Update existing employee
        } else {
             const newId = Math.floor(Math.random() * 1000);
            const newEmp = { ...emp, id: newId.toString() };
            updateEmpList(newEmp); // Add new employee
        }
        clearForm();
    };

    return (
        <div className="card ms-2">
            <div className="card-header">
                <h3>Employee Form</h3>
            </div>

            <div className="card-body">
                <div className="row g-1 my-1">
                    <div className="col-md-2">
                        <input type="text" className="form-control text-center" placeholder="id" name="id" value={emp.id} onChange={changeEmp} />
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control text-center" placeholder="first name" name="firstname" value={emp.firstname} onChange={changeEmp} />
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control text-center" placeholder="last name" name="lastname" value={emp.lastname} onChange={changeEmp} />
                    </div>
                </div>

                <div className="row g-1 my-1">
                    <div className="col-md-6">
                        <input type="date" className="form-control" name="joindate" value={emp.joindate} onChange={changeEmp} />
                    </div>

                    <div className="col-md-6">
                        <DepartmentComponent dept={dept} changeDept={changeEmp} />
                    </div>
                </div>

                <div className="row g-1 my-1">
                    <div className="col-md-12">
                        <p className="my-1 text-center">Select Technology</p>
                        <TechnologyComponent tech={tech} changeTech={changeTech} />
                    </div>
                </div>

                <div className="row g-1 my-1">
                    <div className="col-md-6">
                        <p className="my-1 ms-1">Count of Completed Projects</p>
                    </div>

                    <div className="col-md-6">
                        <input type="text" className="form-control text-center" placeholder="count" name="projects" value={emp.projects} onChange={changeEmp} />
                    </div>
                </div>

                <div className="row g-1 my-1">
                    <div className="col-md-12">
                        <button className="btn btn-outline-primary float-end" onClick={handleSubmit}>
                            {emp.id ? "Update" : "Add"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EmpFormComponent;
