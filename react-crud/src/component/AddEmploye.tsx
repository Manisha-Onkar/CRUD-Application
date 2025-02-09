import { useState } from "react"
import "./EmployeForm.style.css"
import { IEmploye } from "./Employe.type"
type Props={
    onBackBtnClickHnd:()=>void
 onSubmitClickHnd:(data:IEmploye)=>void
}


const AddEmploye=(props:Props)=>{
    const [firstName,setFirstName]=useState("");
    const [LastName,setLastName]=useState("");
    const [Email,setEmail]=useState("");

    const {onBackBtnClickHnd,onSubmitClickHnd}=props;

    const onFirstNameChanged=(e:any)=>{
        setFirstName(e.target.value)
    }
    const onLastNameChanged=(e:any)=>{
        setLastName(e.target.value)
    }
    const onEmailChanged=(e:any)=>{
        setEmail(e.target.value)
    }
    const onSubmitBtnClickHnd=(e:any)=>{
        e.preventDefault();
     const data:IEmploye={
        id:new Date().toJSON.toString(),
        firstName : firstName,
        lastName : LastName,
        email : Email,
     }
     onSubmitClickHnd(data)
     onBackBtnClickHnd();
    };
    return (
    <div className="form-container">
    <div>
        <h3>Add Employe Form</h3>
    </div>
    <form onSubmit={onSubmitBtnClickHnd}>
        <div>
            <label>First Name :</label>
            <input type="text" value={firstName} onChange={onFirstNameChanged}/>
        </div>

        <div>
            <label>Last Name :</label>
            <input type="text" value={LastName} onChange={onLastNameChanged}/>
        </div>

        <div>
            <label>Email Address :</label>
            <input type="text" value={Email} onChange={onEmailChanged}/>
        </div>

        <div>
            <input type="button" value="Back" onClick={onBackBtnClickHnd}/>
            <input type="Submit" value="Add Employe" onClick={onSubmitBtnClickHnd}/>
        </div>

    </form>
    </div>
)}
export default AddEmploye;