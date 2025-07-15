import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const [input,chngInput]=useState(
        {name:"",roll_number:"",admission_number:"",college:""}
    )
    const inputHandler =(event)=>{
        chngInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(input)
        axios.post("http://18.144.111.41/student_api.php",input).then(
            (response)=>{
                alert("Added Successfully")
            }
        ).catch()
    }
  return (
    <div  style={{
    backgroundImage: "url('https://i.pinimg.com/1200x/7d/2a/68/7d2a68406b519c97d9beeadc420ce13d.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "550px", // adjust as needed
    width: "100%",
  }}>
        <Navbar /><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="card text-center bg-success">
  <div class="card-body">
    <h5 class="card-title">Add all Details Here.....!</h5>
    <p class="card-text">make sure to enter All the details .</p></div>
</div><br></br>
<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
        <input type="text" className="form-control" name='name' placeholder='Enter Name' value={input.name} onChange={inputHandler}/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
        <input type="text" className="form-control"  name='roll_number' placeholder='Enter RollNo.' value={input.roll_number} onChange={inputHandler}/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
        <input type="text" className="form-control" name='admission_number' placeholder='Enter Admission No.' value={input.admission_number} onChange={inputHandler}/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
        <input type="text" className="form-control" name='college' placeholder='Enter College Name' value={input.college} onChange={inputHandler}/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
        <button className="btn btn-success" onClick={readValue}>
            Submit
        </button>
    </div>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add