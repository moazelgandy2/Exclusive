import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      return <>{children}</>;
    } else {
      toast.error("You are not authorized to view this page please login first.");
      return navigate("/login");
    }
  }, []);
};

export default ProtectedRoutes;
