import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-danger mb-1 sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand img " href="/">
    <img src="/images/Mzee wa Juice_ Freshness in Every Sip.png" alt=""  height={200} width={200}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link text-warning  active" aria-current="page" href="/">Getproducts</a>
        <a class="nav-link text-white" href="/addproducts">Addproducts</a>
        <a class="nav-link text-success" href="/signin">Signin</a>
        <a class="nav-link text-info" href="/signup">Signup</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar