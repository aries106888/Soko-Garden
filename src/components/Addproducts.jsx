import { useState } from "react"
import axios from "axios"



const Addproduct = () =>{
// declare your states here
const [productname, setProductName] = useState("")
const [description, setDescription] = useState("")
const [productcategory, setProductCategory] = useState("")
const [productcost, setProductCost] = useState("")
const [productphoto, setProductPhoto] = useState("")


// declare 3 states for posting
const [loading, setLoading] = useState("")
const [success, setSuccess] = useState("")
const [error, setError] = useState("")

// function to add product
const addproductfunction = async (e) => {
e.preventDefault()
setLoading("Please wait...")

// create digital envelops
const envelop = new FormData()
envelop.append("product_name", productname)
envelop.append("product_description", description)
envelop.append("product_category", productcategory)
envelop.append("product_cost", productcost)
envelop.append("product_photo", productphoto)

try{
const response = await axios.post("https://kevinmodcom.alwaysdata.net/addproduct", envelop)
setSuccess(response.data.message)
setLoading("")

// if add product successful redirect user to homepage(get products)
if (response.data.user)
// means add product succefful
navigate("/")
}catch(error){
setError(error.message)
setLoading(" ")
}
}
return(
<div className="justify-content-center row mt-3">
<div className="col-md-6 p-4 card shadow">
<h1 className="text-center">Upload Products</h1>
{/* binding goes here */}
<h1 className='text-warning'>{loading}</h1>
<h1 className='text-success'>{success}</h1>
<h1 className='text-danger'>{error}</h1>

<form action="" onSubmit={addproductfunction}>
<input type="text" className="form-control" placeholder="Enter Product Name" onChange={(e)=>setProductName(e.target.value)}/> <br />
<textarea name="" id="" className="form-control" placeholder="Describe your product" onChange={(e)=>setDescription(e.target.value)}></textarea><br />
<input type="text" className="form-control" placeholder="Enter Product Category" onChange={(e)=>setProductCategory(e.target.value)}/><br />
<input type="text" className="form-control" placeholder="Enter product cost" onChange={(e)=>setProductCost(e.target.value)}/><br />
<b>Browse/Upload Product Image</b>
<input type="file" className="form-control" onChange={(e)=>setProductPhoto(e.target.files[0])}/><br />
<button className="btn btn-primary text-light">Upload Product</button>
</form>
</div>
</div>
)
}
export default Addproduct