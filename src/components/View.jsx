import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [studentData,changeStudData]=useState (
        {"status":"success","data":[]}

    )

    const fetchData=()=>{
        axios.get("http://18.144.111.41/view_all_students.php").then(
            (response)=>{
              changeStudData(response.data)
            }
        ).catch()
    }

    useEffect(()=>{fetchData()},[])

  return (
    <div  style={{
    backgroundImage: "url('https://i.pinimg.com/736x/1a/a7/aa/1aa7aa6197da469e6e49322103d53863.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "900px", // adjust as needed
    width: "100%",
  }}>
        <Navbar /><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="card text-center bg-warning">
  <div class="card-body">
    <h5 class="card-title">View all Details Here.....!</h5>
    <p class="card-text">All the details are given in a tabular form.</p></div>
</div><br></br>
                <div className='table-responsive'>
                    <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">SI no</th>
      <th scope="col">Name</th>
      <th scope="col">RollNo</th>
      <th scope="col">Admission No</th>
      <th scope="col">College</th>
    </tr>
  </thead>
  <tbody>
                  {studentData.data.map(
                    (value,index)=>{
                        return (
                            
                             <tr>
      <th scope="row">{value.id}</th>
      <td>{value.name}</td>
      <td>{value.roll_number}</td>
      <td>{value.admission_number}</td>
      <td>{value.college}</td>
    </tr>
                        )
                    }
                  )}
   
   
  </tbody>
</table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View