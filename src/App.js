import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Signup from "./Pages/Login/Signup/Signup";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddReview from "./Pages/Dashboard/AddReview";
import AllUser from "./Pages/Dashboard/AllUser";
import EditProfile from "./Pages/Dashboard/EditProfile";
import RequireAdmin from "./Pages/Login/RequireAuth/RequireAdmin";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import AddProducts from "./Pages/Dashboard/AddProducts";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="manageallorder" element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path="addproduct" element={<AddProducts></AddProducts>}></Route>
          <Route path="manageproduct" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="alluser" element={<RequireAdmin><AllUser></AllUser></RequireAdmin>}></Route>
        </Route>
        <Route path="/editprofile" element={<EditProfile></EditProfile>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
