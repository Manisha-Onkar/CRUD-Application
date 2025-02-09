import { IEmploye } from "./Employe.type";
import { useState } from 'react';
import "./EmployeForm.style.css";

type Props={
    data:IEmploye;
    onBackBtnClickHnd:()=>void;
    onUpdateClickHnd:(data:IEmploye)=>void;
};
const EditEmploye=(props:Props)=>{

    const {data, onBackBtnClickHnd,onUpdateClickHnd}=props;
    const [firstName,setFirstName]=useState(data.firstName);
        const [LastName,setLastName]=useState(data.lastName);
        const [Email,setEmail]=useState(data.email);

        const onFirstNameChanged=(e:any)=>{
            setFirstName(e.target.value)
        }
        const onLastNameChanged=(e:any)=>{
            setLastName(e.target.value)
        }
        const onEmailChanged=(e:any)=>{
            setEmail(e.target.value)
        };

        const onSubmitBtnClickHnd=(e:any)=>{
            e.preventDefault();
         const UpdateData:IEmploye={
            id:data.id,
            firstName : firstName,
            lastName : LastName,
            email : Email,
         }
         onUpdateClickHnd(UpdateData)
         onBackBtnClickHnd();
        };
        
    return(
        <div className="form-container">
        <div>
            <h3>Add Employe Form</h3>
        </div>
        <form onSubmit={onSubmitBtnClickHnd}>
            <div>
                <label>First Name : </label>
                <input type="text" value={firstName} onChange={onFirstNameChanged}/>
            </div>
    
            <div>
                <label>Last Name : </label>
                <input type="text" value={LastName} onChange={onLastNameChanged}/>
            </div>
    
            <div>
                <label>Email Address : </label>
                <input type="text" value={Email} onChange={onEmailChanged}/>
            </div>
    
            <div>
                <input type="button" value="Back" onClick={onBackBtnClickHnd}/>
                <input type="Submit" value="Update Employe" onClick={onSubmitBtnClickHnd}/>
            </div>
    
        </form>
        </div>
    )
}
export default EditEmploye;