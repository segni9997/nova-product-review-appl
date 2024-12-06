import { Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import Products from "./pages/Products";
import {ProductDetail} from "./pages/ProductDetail";
import {Review} from "./pages/Review";
import ManageProduct from "./pages/ManageProduct";
import Login from "./components/Login";
import ProductForm from "./pages/ProductList";
import EditProduct from "./pages/EditProduct";
// import ProductList from "./pages/Trail";
// import { NavBar } from "./components/NavBar";

function App() {
  // const [opened, { open, close }] = useDisclosure(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/review/:id" element={<Review />} />
      <Route path="/manage-product" element={<ManageProduct />} />
<Route path="/edit-product/:id" element={<EditProduct />} />  
      <Route path="/login" element={<Login />} />
      <Route path="/trail" element={<ProductForm />} />

      
      {/* <Route path="/nav" element={<NavBar/>} /> */}
    </Routes>
  );
}

export default App;
