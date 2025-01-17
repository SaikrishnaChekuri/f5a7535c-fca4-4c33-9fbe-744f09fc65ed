import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';

function Homepage(){
    return(
        <div class=" text-center " >
<nav class="navbar navbar-expand-lg navbar-dark bg-primary text-light">
  <div class="container-fluid  text-center">
    <a class="navbar-brand text-center"  href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <Link to ="/Placeorder" class="nav-link active" aria-current="page" >My orders</Link>
        <Link to="/Signup" class="nav-link">Logout</Link>
      </div>
    </div>
  </div>
</nav>
<div class="h1">Welcome</div>

<div class="container-fluid " >
  <div class="row mb-5">
<div class="col-4">
<div class="card" id="grid1" style={{width: "18rem;"}}>
  <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."></img>
  <div class="card-body d-flex justify-content-between">
    <div><p class="card-text  text-start">Light Welcome</p></div>
    <div><p class="card-text  text-end">Rs.200</p></div>
  </div>
</div>
</div>


<div class="col-4">
<div class="card mb-3" id="grid2" style={{width: "18rem;"}}>
  <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."></img>
  <div class="card-body d-flex justify-content-between">
    <p class="card-text text-start">Acrylic Dark</p>
    <p class="card-text ">Rs.200</p>
  </div>
</div>
</div>


<div class="col-4">
<div class="card" id="grid3" style={{width: "18rem;"}}>
  <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."></img>
  <div class="card-body d-flex justify-content-between">
    <p class="card-text text-start"> Fairy Board</p>
    <div><p class="card-text  text-end">Rs.200</p></div>
  </div>
</div>
</div>

<div class="col-4">
<div class="card" id="grid4" style={{width: "18rem;"}}>
  <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."></img>
  <div class="card-body d-flex justify-content-between">
    <p class="card-text text-start">Merry Christmas</p>
    <div><p class="card-text  text-end">Rs.200</p></div>
  </div>
</div>
</div>

<div class="col-4">
<div class="card" id="grid5" style={{width: "18rem;"}}>
  <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."></img>
  <div class="card-body d-flex justify-content-between">
    <p class="card-text text-start">Happy Birthday</p>
    <div><p class="card-text  text-end">Rs.200</p></div>
  </div>
</div>
</div>

<div class="col-4">
<div class="card" id="grid6" style={{width: "18rem;"}}>
  <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."></img>
  <div class="card-body d-flex justify-content-between">
    <p class="card-text text-start">Hearty Wishes</p>
    <div><p class="card-text  text-end">Rs.200</p></div>
  </div>
</div>
</div>



</div>
</div>
</div>

    );
}
export default Homepage;