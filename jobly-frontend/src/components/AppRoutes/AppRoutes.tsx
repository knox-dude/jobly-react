import { Routes, Route, Navigate } from "react-router-dom";
import Placeholder from "@/components/Placeholder/Placeholder";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Placeholder />} />
      <Route path="/companies" element={<Placeholder />} />
      <Route path="/companies/:handle" element={<Placeholder />} />
      <Route path="/jobs" element={<Placeholder />} />
      <Route path="/login" element={<Placeholder />} />
      <Route path="/signup" element={<Placeholder />} />
      <Route path="/profile" element={<Placeholder />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
