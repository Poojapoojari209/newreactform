import React, { useState } from 'react'
import './style.css';
import Table from './Table';
const Employee = () => {

    const [tableData, settableData] = useState([])
    const [formData, setformData] = useState({
        fullname: "",
        Age: "",
        Designation: "",
        Gender:"Male",
        Salary: "",

    });

    const [editIndex, setEditIndex] = useState(-1);

    const handleChange = (e) => {
        //e.preventDefault();
        // setformData({ ...formData, [e.target.name]: e.target.value })
        const { name, value } = e.target;
        setformData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== -1) {
            const newData = [...tableData];
            newData[editIndex] = formData;
            settableData(newData);
            
        } else {
            settableData([...tableData, formData]);
            setformData({
                fullname: "",
                Age: "",
                Designation: "",
                Gender:"",
                Salary: "",
            });
        }
        
    }

    const handleEdit = (index) => {
        setEditIndex(index);
        setformData(tableData[index]);
        
    };

    const handleDelete = (index) => {
        const newData = [...tableData];
        newData.splice(index, 1);
        settableData(newData);
        setformData({
            fullname: "",
            Age: "",
            Designation: "",
            Gender:"",
            Salary: "",
           
        });
    };

  
    return (
       <div className='form-container'>
        <>
            
            <div class="container">

               <form class="Emp-form" onSubmit={handleSubmit} >
                 {/* {submitted && valid  ? <div className="success"> Successfully Submitted</div>:null}  */}
                    <h1>Employee Details</h1>

                    <input
                    
                        id="name"
                        class="form-field"
                        type="text"
                        placeholder="Enter the Name"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange} 
                        required
                        
                    />
                    <input
                        id="age"
                        class="form-field"
                        type="number"
                        placeholder="Enter the age"
                        name="Age"
                        value={formData.Age}
                        onChange={handleChange}
                        required
                    />
                   
                  <select 
                        id="design"
                        class="form-field"
                        type="text"
                        placeholder="Enter the designation"
                        name="Designation"
                        value={formData.Designation}
                        onChange={handleChange}
                        required
                    >
                     <option hidden >Enter the designation</option>
                     <option >Product Manager</option>
                     <option >software Testing</option>
                     <option >software Engineering</option>
                    </select>
                    
                    <div >
                    <legend className='Gender'>Gender</legend>
                    <label>
                        <input
                            id="Male"
                            type="radio"
                            name="Gender"
                            value="Male"
                            checked={formData.Gender=="Male"} 
                            onChange={handleChange}
                            //onClick={handleChanges}
                            required
                        />
                        <span>Male</span>
                        </label>
                       <label>
                        <input
                            id="Female"
                            type="radio"
                            name="Gender"
                            value="Female"
                            checked={formData.Gender=="Female"}
                            onChange={handleChange}
                            //onClick={handleChanges}
                           
                        />
                        <span>Female</span>
                        </label> 
                        </div>

                    <input
                        id="sal"
                        class="form-field"
                        type="number"
                        placeholder="Enter the salary"
                        name="Salary"
                        value={formData.Salary}
                        onChange={handleChange}
             
                    />
                   

                    <button  class="form-field" type="submit"  >
                    SUBMIT
                    </button>
                </form>
            </div>
            

            {tableData.length > 0 && (
                <Table
                    tableData={tableData}
                    deleteRow={handleDelete}
                    editRow={handleEdit}
                />
            )}
            
        </>
        </div>
    )
}
export default Employee;

