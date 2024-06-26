

let DepartmentComponent = ({dept ,changeDept , isReset}) => {

    const onDeptChange = (event) => {
        changeDept(event);
    };

    return (
        <select className="form-select" name="department" onChange={onDeptChange}>
            <option key="-1" selected={isReset}>Select Department</option>
            {dept.map(item=>
                <option key={item.id}>{item.dept}</option>
            )}
        </select>
    )
}

export default DepartmentComponent;