import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      toast.error("You are not authorized to view this page. Please login first.");
      navigate("/login");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedRoutes;
