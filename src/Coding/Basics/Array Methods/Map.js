import React from 'react'
import './ArrayStyles.css'
function Map() {
  // const fruits = ["Apple", "Banana", "Papaya", "straw Berry", "Mango", "Guava"];

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
    //   result : "Fail"
    // },
    // {
    //   studentName : "Madhu Sudhan",
    //   age : 20,
    //   rollNo : 666556,
    //   favouriteSubjects : ["telugu", "English", "science"],
    //   result : "pass"
    // },
  ]

  return (
    <div>
      {/* { fruits.map((item, index) => <h2 key={index}> {index + 1 }. {item} </h2>) } */}
      <h1> Student Details </h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Student Name</th>
            <th>Age</th>
            <th> Roll No</th>
            <th> Result </th>
            <th> Favourite Subjects</th>
          </tr>
        </thead>
      { studentDetails.map( (item, index) => <tr key={index} > 
        <td> {index + 1} </td>
        <td> {item.studentName} </td>
        <td> {item.age} </td>
        <td> {item.rollNo} </td>
        <td> {item.result} </td>
        <td> {item.favouriteSubjects.map((item, index) => <span key={index} >{item}, </span> )} </td>
       </tr> ) }
       {studentDetails.length === 0 && <tr > <td colSpan={6} > No Records Found </td> </tr>}
      </table>
      
    </div>
  )
}

export default Map