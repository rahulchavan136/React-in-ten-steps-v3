import { useEffect, useState } from "react";


let TechnologyComponent = ({tech , changeTech , isReset}) => {
   
    const [allchecked, setAllChecked] = useState([]);
    const handleChange =(e,item) =>{
       if (e.target.checked) {
          setAllChecked([...allchecked, {"id": item.id ,"domain": e.target.value}]);
       } else {
          setAllChecked(allchecked.filter((item) => item.domain !== e.target.value));
       }
    }

    const isChecked =(id)=>{
        return allchecked.find(item => item.id === id) ? true : false;
    }

    useEffect( () => {
        if(isReset){
            setAllChecked([]);
        }
        changeTech(allchecked)
    },[allchecked,isReset])
    return (
        <div className="my-1">
            {tech.map(item=>
            <span key={item.id}>
                <input value={item.domain} type="checkbox" className="form-check-input mx-2" id={item.id} name="technologies" onChange = {(e) => handleChange(e,item)} checked={isChecked(item.id)}/>
                <label htmlFor={item.id} className="mx-1">{item.domain}</label>
            </span>
            )}
        </div>
    )
}

export default TechnologyComponent;