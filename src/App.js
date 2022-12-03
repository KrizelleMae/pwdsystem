import React, { useState } from "react";
import {
  BrowserRouter as Router,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import "./css/app.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Admin from "./adminpages/Admin";
import AdminPwd from "./adminpages/AdminPwd";
import AdminCompany from "./adminpages/AdminCompany";
import AdminDashboard from "./adminpages/AdminDashboard";
import AdminSettings from "./adminpages/AdminSettings";
import AdminReports from "./adminpages/AdminReports";

import Body_Jobpost from "./components/Body_Jobpost";
import PwdProfile from "./components/PwdProfile";
import AddJobPost from "./components/AddJobPost";
import AdminPwdComponents from "./components/AdminPwdComponents";
import CompanyProfile from "./components/CompanyProfile";
import WatchVideo from "./components/WatchVideo";
import Glogin from "./components/Glogin";
import PopLogin from "./components/PopLogin";
import ProfilePWD from "./components/ProfilePWD";
import Contactform from "./components/Contactform";
import SendMessage from "./components/SendMessage";
import Apply from "./components/Apply";
import Navigation from "./components/Navigation";
import Top_Navigation from "./components/Top_Navigation";
import CompanySignup from "./components/CompanySignup";
import SignupAs from "./components/SignupAs";
import { BrowserRouter } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Sample from "./pages/Sample";
import NewLogin from "./components/NewLogin";
import Features from "./components/Features";
import ViewApplicants from "./components/ViewApplicants";
import Checkbox from "./components/Checkbox";
import Uploadfile from "./components/Uploadfile";
function App() {
  // const commands = [
  //   {
  //     command: ["Go to *", "Open *"],
  //     callback: (redirectPage) => setRedirectUrl(redirectPage),
  //   },
  // ];
  // const { transcript } = useSpeechRecognition({ commands });

  // const [redirectUrl, setRedirectUrl] = useState("");

  // const pages = ["home", "contact"];
  // const urls = {
  //   home: "/",
  //   contact: "/contact",
  // };
  // if (!SpeechRecognition.browserSupportsSpeechRecognition) {
  //   return null;
  // }
  // let redirect = "";
  // if (redirect) {
  //   if (pages.includes(redirectUrl)) {
  //     redirect = <Router to={urls[redirect]} />;
  //   } else {
  //     redirect = <p>Could not find pages {redirectUrl}</p>;
  //   }
  // }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/companysignup" element={<CompanySignup />} />

          <Route path="/body_jobpost" element={<Body_Jobpost />} />
          <Route path="/pwdprofile" element={<PwdProfile />} />
          <Route path="/companyprofile" element={<CompanyProfile />} />
          <Route path="/addjobpost" element={<AddJobPost />} />
          <Route path="/adminpwdcomponets" element={<AdminPwdComponents />} />
          <Route path="/glogin" element={<Glogin />} />
          <Route path="/poplogin" element={<PopLogin />} />
          <Route path="/nav" element={<Navigation />} />
          <Route path="/Top_navigation" element={<Top_Navigation />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admincompany" element={<AdminCompany />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminpwd" element={<AdminPwd />} />
          <Route path="/adminsettings" element={<AdminSettings />} />
          <Route path="/adminReports" element={<AdminReports />} />
          <Route path="/watchVideo" element={<WatchVideo />} />
          <Route path="/profilePWD" element={<ProfilePWD />} />
          <Route path="/contactform" element={<Contactform />} />
          <Route path="/sendmessage" element={<SendMessage />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/signupas" element={<SignupAs />} />
          <Route path="/newlogin" element={<NewLogin />} />
          <Route path="/features" element={<Features />} />
          <Route path="/viewapplicants" element={<ViewApplicants />} />
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/uploadfile" element={<Uploadfile />} />

          {/* {redirect} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
