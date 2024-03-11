import ProductList from "./components/ProductList"
import AddProduct from "./components/AddProduct"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct/>} />
      </Routes>
    </Router>
  )
}

export default App
