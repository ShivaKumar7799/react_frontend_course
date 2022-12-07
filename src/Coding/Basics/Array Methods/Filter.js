import React from 'react'
import {useState} from 'react'

function Filter() {
  const [result, setResult] = useState("all")
  const studentDetails = [
    // {
    //   studentName : "shiva kumar",
    //   age : 16,
    //   rollNo : 423434,
    //   favouriteSubjects : ["Maths", "science", "programming Languages"],
    //   result : "pass"
    // },
    // {
    //   studentName : "Vishnu Vardhan",
    //   age : 18,
    //   rollNo : 1231313,
    //   favouriteSubjects : ["History","Maths", "Hindi", "Environmental Science"],
    //   result : "fail"
    // },
    // {
    //   studentName : "Madhu Sudhan",
    //   age : 20,
    //   rollNo : 666556,
    //   favouriteSubjects : ["telugu", "English", "science"],
    //   result : "pass"
    // },
  ]

  const filteredData = studentDetails.filter( (student, index) => student.age <= 18 )
  const passFunction = () => {
    console.log("pass function");
    setResult("pass")
  }
  const failFunction = () => {
    console.log("Fail function")
    setResult("fail")
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Student Name</th>
            <th>Age</th>
            <th>Roll No</th>
            <th>Result</th>
            <th>Favourite Subjects</th>
          </tr>
        </thead>
        <tbody>
          { filteredData.map( (item, index) => <tr key={index} > 
          <td>{index + 1}</td>
          <td>{item.studentName}</td>
          <td>{item.age}</td>
          <td>{item.rollNo}</td>
          <td>{item.result}</td>
          <td>{item.favouriteSubjects.map((item, index) => <span key={index} >{item}, </span> )}</td>
        </tr> ) }
        </tbody>
       {studentDetails.length === 0 && <tbody> <tr > <td colSpan={6} > No Records Found </td> </tr></tbody>}
      </table>
      <button onClick={passFunction} >Pass</button>  <button onClick={failFunction} >Fail</button>
    </div>
  )
}

export default Filter