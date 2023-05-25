import { createBrowserRouter, RouterProvider, Outlet, Routes, BrowserRouter, Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./app.scss"
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Registration from "./components/Registration/Registration";
import { Container } from "reactstrap";
import { Protector } from "./helpers";
import { ToastContainer } from "react-toastify";

const Layout = ()=>{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/products/:id",
        element: <Products/>
      },
      {
        path:"/product/:id",
        element: <Product/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/logout",
        element: <Logout/>
      },
      {
        path:"/registration",
        element: <Registration/>
      },
    ]
  },
 
])

function App() {
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  //   <Container>
  //   <BrowserRouter>
  //     <Routes>
  //       <Router path="/" element={<Protector Component={Home} />} />
  //       <Router path="/login" element={<Login />} />
  //       <Router path="/logout" element={<Logout />} />
  //       <Router path="/registration" element={<Registration />} />
  //     </Routes>
  //     <ToastContainer />
  //   </BrowserRouter>
  // </Container>
  );
}

export default App;
