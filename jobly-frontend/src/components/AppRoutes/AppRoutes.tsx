import { Routes, Route, Navigate } from "react-router-dom";
import Placeholder from "@/components/Placeholder/Placeholder";
import SignupForm from "../SignupForm/SignupForm";
import LoginForm from "../LoginForm/LoginForm";
import CompanyList from "@/components/CompanyList/CompanyList";
import CompanyDetail from "@/components/CompanyDetail/CompanyDetail";
import JobList from "../JobList/JobList";
import JobDetail from "../JobDetail/JobDetail";
import Logout from "../Logout/Logout";

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Placeholder />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/jobs/:id" element={<JobDetail />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/profile" element={<Placeholder />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
