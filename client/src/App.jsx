import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Announcement from "./components/announcement/Announcement";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import { Login } from "./pages/auth/Login";
import PrivateRoute from "./components/routes/PrivateRoute";
import Dashboard from "./pages/user/Dashboard";
import ErrorPage from "./pages/auth/PageNotFound";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { ProSidebarProvider } from "react-pro-sidebar";
import AdminRoute from "./components/routes/AdminRoute";
import AdminCategory from "./pages/admin/AdminCategory";
import AdminSubCategory from "./pages/admin/AdminSubCategory";
import AdminLayout from "./components/admin/AdminLayout";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCreateProduct from "./pages/admin/AdminCreateProduct";

import "antd/dist/reset.css";
import AdminUpdateProduct from "./pages/admin/AdminProductUpdate";
import AdminBrands from "./pages/admin/AdminBrands";
import Faqs from "./pages/user/Faqs";
import SearchResult from "./pages/user/SearchResult";
import ShopLayout from "./pages/user/ShopLayout";
import Cart from "./pages/user/Cart";
import SingleProductView from "./pages/user/SingleProductView";
import UserProfile from "./pages/user/Profile";
import UserOrders from "./pages/user/Orders";
import Customize from "./pages/user/Customize";
import AdminOrders from "./pages/admin/AdminOrders";

function App() {
  return (
    <ProSidebarProvider>
      <BrowserRouter>
        {/* <Announcement /> */}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopLayout />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/product/:slug" element={<SingleProductView />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
            <Route path="user/profile" element={<UserProfile />} />
            <Route path="user/orders" element={<UserOrders />} />
          </Route>

          <Route path="/" element={<AdminLayout />}>
            <Route path="/dashboard" element={<AdminRoute />}>
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="admin/category" element={<AdminCategory />} />
              <Route path="admin/subcategory" element={<AdminSubCategory />} />
              <Route path="admin/brand" element={<AdminBrands />} />
              <Route path="admin/products" element={<AdminProducts />} />
              <Route path="admin/orders" element={<AdminOrders />} />
              <Route
                path="admin/products/create"
                element={<AdminCreateProduct />}
              />
              <Route
                path="admin/product/update/:slug"
                element={<AdminUpdateProduct />}
              />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} replace />
        </Routes>
      </BrowserRouter>
    </ProSidebarProvider>
  );
}

export default App;
