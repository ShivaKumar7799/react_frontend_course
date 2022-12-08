import React, { useState } from 'react'
import './useStateStyles.css'

function UseState4() {
  const [employeesDetails, setEmployeesDetails] = useState([])

  const [employeeDataErrors, setEmployeeDataErrors] = useState({
    nameError : "",
    idError : ""
  })

  const employeeInitalData = {
    employeeName : "",
    employeeId : '',
    employeeDesignation : ""
  }
  const [employeeData, setEmployeeData] = useState(employeeInitalData)

  const employeeDataChangeHandler = (event) => {
    // console.log(event.target.name, event.target.value,"onchange Handler");
    setEmployeeData({ ...employeeData, [event.target.name] : event.target.value })
  }

  const employeeDataSubmitHandler = (event) => {
    event.preventDefault();
    if(employeeData.employeeName === ""){
      console.log("username error");
      setEmployeeDataErrors( (employeeDataErrors) => ({...employeeDataErrors, nameError : "Please enter your name"}))
    }
    if(employeeData.employeeId === ""){
      console.log("please enter employee id");
      setEmployeeDataErrors((employeeDataErrors) => ({...employeeDataErrors, idError : "please enter your id"}))
    } 
    if(employeeData.employeeName !== "" && employeeData.employeeId !== "" ) {
      setEmployeesDetails([...employeesDetails, employeeData])
      setEmployeeData(employeeInitalData)
    }
   
  }

  return (
    <div>
      <h1>Employee Details</h1>
      <form onSubmit={employeeDataSubmitHandler} style={{width : "350px", border : "1px solid black", padding : "10px"}} >
        <div className='dataSection' >
          <label>Employee Name</label>
          <input type = "text" name = "employeeName" value={employeeData.employeeName} onChange={employeeDataChangeHandler} /> 
        </div>
        <div style={{color : 'red'}} >
        { employeeData.employeeName === "" ? employeeDataErrors.nameError : "" }
        </div>
        <div className='dataSection' >
          <label>Employee Id</label>
          <input type = "number" name = "employeeId" value={employeeData.employeeId} onChange={employeeDataChangeHandler} /> 
        </div>
        <div style={{color : "red"}} >
        { employeeData.employeeId === "" ? employeeDataErrors.idError : ""}
        </div>
        <div className='dataSection' >
          <label>Desgination</label>
          <select name = "employeeDesignation" value={employeeData.employeeDesignation} onChange={employeeDataChangeHandler} >
            <option> FrontEnd Developer </option>
            <option> Backend Developer </option>
            <option> Full Stack Developer </option>
          </select>
        </div>
        <div className='submitSection' >
          <input type="submit" value="create Employee Data" />
        </div>
      </form>
      {employeesDetails.map((item,index) => <tr> <td>{item.employeeName}: {item.employeeId} : {item.employeeDesignation}  </td> </tr> )}
    </div>
  )
}

export default UseState4