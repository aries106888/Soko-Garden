import axios from "axios"
import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel"

const Getproducts = () =>{
// define 3 states for getting products
const [loading, setLoading] = useState("")
const [products, setProducts] = useState([])
const [error, setError] = useState("")

// state for the text typed in the search box 
const [search, setSearch] = useState("")

// which category button is currently selected
const [selectedCategory, setSelectedCategory] = useState("All")

let navigate = useNavigate();
// fucntion to get products
const fetchallproducts = async() =>{
setLoading("Fetching products...")
try {
const response = await axios.get("https://kevinmodcom.alwaysdata.net/getproducts")
setProducts(response.data)
setLoading("")
} catch (error) {
setError(error.message)
setLoading("")
}
}

// call the function
useEffect(()=>{
fetchallproducts()
}, [])
console.log(products)
// keep only the products that match the search text 
const filteredProducts = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === "All" || item.product_category === selectedCategory)
)
// unique list of categories, e.g. ["Shoes", "Phones", "Shirts"] 
const categories = [...new Set(products.map((item) => item.product_category))]

const imagepath= "https://kevinmodcom.alwaysdata.net/static/images/"
return(
<div className=" container-fluid height={300} width={300}">
    {/* carousel goes here  */}
    <Carousel  />
<section className="row">
<h1 className="text-center text-primary">Available products</h1>


{/* Search box */}
<div className="row justify-content-center mb-3">
  <div className="col-md-6">
    <input
      type="text"
      className="form-control"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
  </div>
</div>

{/* Category buttons */}
<div className="row justify-content-center mb-4">
  <div className="col-md-6 text-center">
    <button
     className={selectedCategory === "All" ? "btn btn-info m-1" : "btn btn-outline-info m-1"} 
      onClick={() => setSelectedCategory("All")}
    >
      All
    </button>
    {categories.map((cat) => (
      <button
        key={cat}
         className={selectedCategory === cat ? "btn btn-info m-1" : "btn btn-outline-info m-1"}
        onClick={() => setSelectedCategory(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
</div>
      {filteredProducts.map(singleproduct=>(

<div className="col-md-3 mb-2">
<div className="card shadow">
<img src={imagepath + singleproduct.product_photo} alt="" height={300}/>
<div className="card-body text-center">
<h4>{singleproduct.product_name}</h4>
<p>{singleproduct.product_description}</p>
<span className="badge bg-dark">{singleproduct.product_category}</span><br />
<b className="text-primary">Ksh {singleproduct.product_cost}</b><br />
<button className="btn btn-primary w-100" onClick={() => navigate("/mpesapayment",{state:{singleproduct}})}>Purchase Now</button>
</div>
</div>
</div>
))}

{filteredProducts.length === 0 && (
    <p className="text-center text-danger">No products found</p>
    )}
</section>
</div>
)
}
export default Getproducts
