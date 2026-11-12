import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-danger mb-1 sticky-top">
  <div class="container-fluid">
    <Link class="navbar-brand img " href="/">
    <img src="/images/Mzee wa Juice_ Freshness in Every Sip.png" alt=""  height={200} width={200}/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link text-warning  active" aria-current="page" href="/">Getproducts</Link>
        <Link class="nav-link text-white" href="/addproducts">Addproducts</Link>
        <Link class="nav-link text-success" href="/signin">Signin</Link>
        <Link class="nav-link text-info" href="/signup">Signup</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar