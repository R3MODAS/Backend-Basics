import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => { 
    setProduct({...product, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
    try{
      const response = await axios.post(`${BASE_URL}/product`, product)
      console.log(response.data)
      navigate("/")
    }catch(err){
      console.log(err)
    }
   }

  return (
    <>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          {/* Form Name */}
          <legend> Add Product</legend>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="title">
              Title
            </label>
            <div className="col-md-4">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="title"
                className="form-control input-md"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="thumbnail">
              Thumbnail
            </label>
            <div className="col-md-4">
              <input
                id="thumbnail"
                name="thumbnail"
                type="text"
                placeholder="thumbnail"
                className="form-control input-md"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="price">
              Price
            </label>
            <div className="col-md-4">
              <input
                id="price"
                name="price"
                type="number"
                placeholder="price"
                className="form-control input-md"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="discountPercentage">
              Discount
            </label>
            <div className="col-md-4">
              <input
                id="discountPercentage"
                name="discountPercentage"
                type="number"
                placeholder="discountPercentage"
                className="form-control input-md"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="rating">
              Rating
            </label>
            <div className="col-md-4">
              <input
                id="rating"
                name="rating"
                type="number"
                placeholder="Rating"
                className="form-control input-md"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Button */}
          <div className="form-group">
            <div className="col-md-4">
              <button
                id="singlebutton"
                name="singlebutton"
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AddProduct;