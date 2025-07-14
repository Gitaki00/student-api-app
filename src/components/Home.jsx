import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/1200x/65/2a/75/652a75f2f15af37a7a13dc57ded22239.jpg" class="d-block w-100" height={550}></img>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/88/e6/a0/88e6a0fa61230c357ff3207294f526e1.jpg" class="d-block w-100" height={550}></img>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/c7/7b/13/c77b1328aceaa85f5e75c45e850c6f30.jpg" class="d-block w-100" height={550}></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home