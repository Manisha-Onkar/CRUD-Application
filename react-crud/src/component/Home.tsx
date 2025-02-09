import { useEffect, useState } from "react";
import{IEmploye,PageEnum} from "./Employe.type";
import EmployeeList from "./EmployeeList"
import "./Home.style.css";
import AddEmploye from "./AddEmploye";
import EditEmploye from "./EditEmploye";


const Home=()=>{
      const [EmployeList, setEmployeList] = useState(
        [] as IEmploye[]);
        const [Showpage, setShowpage] = useState(PageEnum.list);
        const [dataToEdit,setdataToEdit] = useState({} as IEmploye);

        useEffect(()=>{
          const listInString=window.localStorage.getItem("EmployeList");
          if(listInString){
            _setEmployeList(JSON.parse(listInString));
          }
        },[]);

        const onAddEmployeeClicked=()=>{
            setShowpage(PageEnum.add);
        };
        const showListPage=()=>{
            setShowpage(PageEnum.list);
        }
        const _setEmployeList=(list:IEmploye[])=>{
          setEmployeList(list);
          window.localStorage.setItem("EmployeList",JSON.stringify(list));
        }
      
        const addEmployeHnd=(data:IEmploye)=>{
          _setEmployeList([...EmployeList,data])
        };
        const deleteEmploye=(data:IEmploye)=>{
            const indexDelete=EmployeList.indexOf(data);
            const tempList=[...EmployeList]

            tempList.splice(indexDelete,1);
            _setEmployeList(tempList);

        };
        const editEmployeList=(data:IEmploye)=>{
            setShowpage(PageEnum.edit);
            setdataToEdit(data);
        }
        const updateData=(data:IEmploye)=>{
          const filterdData=EmployeList.filter((x)=>x.id===data.id)[0];
          const indexOfRecord=EmployeList.indexOf(filterdData);
          const tempData=[...EmployeList];
          tempData[indexOfRecord]=data;
          _setEmployeList(tempData);
      };
        return (
          <>
            <article className="article-header">
              <header>
                <h1>CRUD APPLICATION</h1>
              </header>
            </article>
      
            <section className="section-content">
              {Showpage === PageEnum.list && (
                <>
                  <input
                    type="button"
                    value="Add Employe"
                    onClick={onAddEmployeeClicked}
                    className="add-employe-btn"/>
                  <EmployeeList list={EmployeList}
                  onDeleteClickHnd={deleteEmploye}
                  onEdit={editEmployeList} 
                  />
                 
                </>
              )}
      
              {Showpage === PageEnum.add && (
                <AddEmploye 
                onBackBtnClickHnd={showListPage} onSubmitClickHnd={addEmployeHnd} 
                />
            )}
            {Showpage === PageEnum.edit && <EditEmploye data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData}/>}
            </section>
          </>
         );
      };
    
export default Home;