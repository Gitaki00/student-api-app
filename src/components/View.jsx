import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [studentData,changeStudData]=useState (
        [
    {
        "SI no.": 1,
        "Name": "Alice Johnson",
        "Roll no.": "R001",
        "Adm no.": "A001",
        "College Name": "Springfield University"
    },
    {
        "SI no.": 2,
        "Name": "Bob Smith",
        "Roll no.": "R002",
        "Adm no.": "A002",
        "College Name": "Riverdale College"
    },
    {
        "SI no.": 3,
        "Name": "Charlie Brown",
        "Roll no.": "R003",
        "Adm no.": "A003",
        "College Name": "Hilltop Institute"
    },
    {
        "SI no.": 4,
        "Name": "Diana Prince",
        "Roll no.": "R004",
        "Adm no.": "A004",
        "College Name": "Metropolis Academy"
    },
    {
        "SI no.": 5,
        "Name": "Ethan Hunt",
        "Roll no.": "R005",
        "Adm no.": "A005",
        "College Name": "Gotham University"
    },
    {
        "SI no.": 6,
        "Name": "Fiona Gallagher",
        "Roll no.": "R006",
        "Adm no.": "A006",
        "College Name": "Star City College"
    },
    {
        "SI no.": 7,
        "Name": "George Costanza",
        "Roll no.": "R007",
        "Adm no.": "A007",
        "College Name": "Central Perk University"
    },
    {
        "SI no.": 8,
        "Name": "Hannah Baker",
        "Roll no.": "R008",
        "Adm no.": "A008",
        "College Name": "Sunnydale High"
    },
    {
        "SI no.": 9,
        "Name": "Ian Malcolm",
        "Roll no.": "R009",
        "Adm no.": "A009",
        "College Name": "Jurassic Park Institute"
    },
    {
        "SI no.": 10,
        "Name": "Jessica Jones",
        "Roll no.": "R010",
        "Adm no.": "A010",
        "College Name": "Defenders Academy"
    },
    {
        "SI no.": 11,
        "Name": "Kevin Hart",
        "Roll no.": "R011",
        "Adm no.": "A011",
        "College Name": "Comedy Central College"
    },
    {
        "SI no.": 12,
        "Name": "Laura Croft",
        "Roll no.": "R012",
        "Adm no.": "A012",
        "College Name": "Adventure University"
    },
    {
        "SI no.": 13,
        "Name": "Michael Scott",
        "Roll no.": "R013",
        "Adm no.": "A013",
        "College Name": "Dunder Mifflin College"
    },
    {
        "SI no.": 14,
        "Name": "Nina Simone",
        "Roll no.": "R014",
        "Adm no.": "A014",
        "College Name": "Music Academy"
    },
    {
        "SI no.": 15,
        "Name": "Oscar Isaac",
        "Roll no.": "R015",
        "Adm no.": "A015",
        "College Name": "Film School"
    }
]

    )
  return (
    <div  style={{
    backgroundImage: "url('https://i.pinimg.com/736x/1a/a7/aa/1aa7aa6197da469e6e49322103d53863.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "860px", // adjust as needed
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
                  {studentData.map(
                    (value,index)=>{
                        return (
                            
                             <tr>
      <th scope="row">{value['SI no.']}</th>
      <td>{value.Name}</td>
      <td>{value['Roll no.']}</td>
      <td>{value['Adm no.']}</td>
      <td>{value['College Name']}</td>
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