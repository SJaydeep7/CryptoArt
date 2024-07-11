import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import { ForgotPassword } from "./Registration/ForgotPassword";
import Wallpapers from "./HomePage/Wallpapers";
import SubscriptionCards from "./Purchase/SubscriptionCards";
import BlogPage from "./Blogs/BlogPage.jsx";
import Navbar from "./Components/Nav/Navbar";
import AboutUs from "./AboutUs/AboutUs";
import TermsCondition from "./AboutUs/TermsCondition";
import Contactus from "./AboutUs/Contactus";
import FAQ from "./AboutUs/FAQ";
import UserSignup from './Registration/user/userSignup'
import Login from './Registration/Login'
import ResetPassword from "./Registration/ResetPassword";
import ImageFetchForm from "./redirection/admin/ImageFetchForm";
import ImageDisplay from "./redirection/user/ImageDisplay";

import CheckingRoute from './ProtectedRoutes/CheckingRoute'
import LoginRoute from "./ProtectedRoutes/LoginRoute";
import Create from "./redirection/admin/Create"

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/terms" element={<LoginRoute element={TermsCondition}/>}/>
        <Route path="/purchase" element={<LoginRoute element={SubscriptionCards}/>}/>
        <Route path="/blogs" element={<LoginRoute element={BlogPage}/>}/>
        <Route path="/faq" element={<LoginRoute element={FAQ}/>}/>
        <Route path="/about" element={<LoginRoute element={AboutUs}/>}/>
        <Route path="/contactus" element={<LoginRoute element={Contactus}/>}/>
        <Route path="/user/wallpapers" element={<LoginRoute element={ImageDisplay}/>}/>
        <Route path="/admin/display" element={<Wallpapers/>}/>
        <Route path="/admin/upload" element={<Create/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
