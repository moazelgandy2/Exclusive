import React from "react";
import { toast } from "sonner";

const ProtectedRoutes = () => {
  if (localStorage.getItem("userToken")) {
    return <>{children}</>;
  } else {
    toast.error("You are not authorized to view this page");
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoutes;
