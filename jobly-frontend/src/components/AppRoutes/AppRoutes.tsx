import { Routes, Route, Navigate } from "react-router-dom";
import Placeholder from "@/components/Placeholder/Placeholder";
import CompanyList from "@/components/CompanyList/CompanyList";
import CompanyDetail from "@/components/CompanyDetail/CompanyDetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Placeholder />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<Placeholder />} />
      <Route path="/login" element={<Placeholder />} />
      <Route path="/signup" element={<Placeholder />} />
      <Route path="/profile" element={<Placeholder />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
