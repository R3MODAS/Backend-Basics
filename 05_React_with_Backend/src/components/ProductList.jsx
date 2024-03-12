import { useEffect, useState } from "react"
import Product from "./Product"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../utils/constants"

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [Loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getProducts()
  }, [Loading])

  const getProducts = async () => {
    try{
      const response = await axios.get(`${BASE_URL}/products`)
      setProducts(response.data)
      setLoading(!Loading)
    }catch(err){
      console.log(err)
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/product/${id}`)
      console.log(response.data)
      setLoading(!Loading)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <button className="mx-auto d-block p-2" onClick={() => navigate("/add")}>Add Product</button>
      <div className="d-flex justify-content-center align-items-center flex-wrap container gap-5 mt-5">
        {products.map((product) => (
          <Product {...product} key={product?._id} handleDeleteProduct={handleDeleteProduct}  />
        ))}
      </div>
    </>
  )
}

export default ProductList