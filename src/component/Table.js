import React from 'react'
import './style.css';
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs"
function Table({ tableData, deleteRow, editRow }) {
  //console.log('tableData', tableData)
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Gender</th>
          <th>Salary</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
               <td>{index + 1}</td>
              <td>{data.fullname}</td>
              <td>{data.Age}</td>
              <td>{data.Designation}</td>
              <td>{data.Gender}</td>
              <td>{data.Salary}</td>

              <td>
              <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(index)}
             />
              <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(index)}
               />

              
             </td>
            </tr>
            
          );
        })}
       
      </tbody>
    </table>


  );
}
export default Table;