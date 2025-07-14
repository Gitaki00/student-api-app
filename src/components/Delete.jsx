import React from 'react'
import Navbar from './Navbar'

const Delete = () => {
  return (
    <div  style={{
    backgroundImage: "url('https://i.pinimg.com/736x/b2/b9/7f/b2b97fab420adedeb0f6c43592a6105a.jpg')",
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
                    
                    <div class="card text-center bg-danger">
  <div class="card-body">
    <h5 class="card-title">Delete Details Here.....!</h5>
    <p class="card-text">make sure to give the rollno to delete</p></div>
</div><br></br>
<div className="row">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
        <input type="text" className="form-control" placeholder='enter the rollno to delete'/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
        <button className="btn btn-danger">Delete</button>
    </div>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete