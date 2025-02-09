import "./EmployeeList.style.css"
import { IEmploye } from "./Employe.type"
import EmployeModal from "./EmployeModal";
import { useState } from "react";

type props={
    list:IEmploye[];
    onDeleteClickHnd:(data:IEmploye)=>void
    onEdit:(data:IEmploye)=>void
}
const EmployeeList =(props:props)=>{
    const {list,onDeleteClickHnd,onEdit}=props;
    const [showModal,setshowModal]=useState(false);
    const [dataToshow,setdataToshow]=useState(null as IEmploye |null);


    const viewEmploye=(data:IEmploye)=>{
      setdataToshow(data);
      setshowModal(true);
    }
    const onCloseModal=()=>{
      setshowModal(false);
    }
    return (
      <div>
        <article>
          <h3 className="list-header">Employe List</h3>
        </article>
<table>
  <tr>
    <th>Name </th>
    <th>Email </th>
    <th>Action </th>
  </tr>
  {list.map((employee)=> {
    console.log(employee)
  return(
    <tr key={employee.id}>
    <td>{`${employee.firstName} ${employee.lastName}`}</td>
    <td>{employee.email}</td>
    <td>
        <div>
        <input type="button" value="View" onClick={()=>viewEmploye(employee)}/>
        <input type="button" value="Edit" onClick={()=>onEdit(employee)}/>
        <input type="button" value="Delete" onClick={()=>onDeleteClickHnd(employee)}/>
        </div>
        
    </td>
  </tr>
  );
})}
  </table>
  {
  showModal && dataToshow !== null && 
  <EmployeModal onClose={onCloseModal} 
  data={dataToshow}/>
  }
 
  </div>
    );
};
export default EmployeeList;