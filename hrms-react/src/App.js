import "semantic-ui-css/semantic.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import JobAdvertisementDetail from "./components/JobAdvertisementDetail";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import JobAdvertisementAddPage from "./pages/JobAdvertisementAddPage";
import JobSeekerProfileDetailPage from "./pages/JobSeekerProfileDetailPage";
import EmployerProfileDetailPage from "./pages/EmployerProfileDetailPage";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id"   element={<JobAdvertisementDetail />} />
        <Route path="/login"  element={<LoginPage />} />
        <Route path="/register"  element={<RegisterPage />} />
        <Route path="/employers/:userId"  element={<EmployerProfileDetailPage />} />
        <Route path="/jobseekers/:userId"  element={<JobSeekerProfileDetailPage />} />
        <Route path="/jobadvertisementadd"  element={<JobAdvertisementAddPage />} />
        <Route path="/*"  element={<ErrorPage />} />
      </Routes>  

      
      
  );
}


export default App;
 