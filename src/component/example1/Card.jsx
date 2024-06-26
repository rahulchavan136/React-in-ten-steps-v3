

let CardComponent = ({emps,dept,tech}) => {

    const getProjectsCount = () =>{
        return emps.reduce((curr,prj) => curr+=parseInt(prj.projects), 0);
    }
    return (
        <div className="row g-2">
            <div className="col-md-3">
                <div className="card m-2 p-2 shadow">
                    <p className="fw-bold text-center">Total Employees</p>
                    <h2 className="text-center">{emps.length}</h2>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card m-2 p-2 shadow">
                    <p className="fw-bold text-center">Departments</p>
                    <h2 className="text-center">{dept.length}</h2>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card m-2 p-2 shadow">
                    <p className="fw-bold text-center">Technologies</p>
                    <h2 className="text-center">{tech.length}</h2>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card m-2 p-2 shadow">
                    <p className="fw-bold text-center">Projects</p>
                    <h2 className="text-center">{getProjectsCount()}</h2>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;