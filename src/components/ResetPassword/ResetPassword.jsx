import React, { useContext, useEffect, useState } from "react";
import Image from "../../assets/images/resetPass.svg";
import { TokenContext } from "../Contexts/Token";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "sonner";

function ResetPassword() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState("reset");
  const { setToken } = React.useContext(TokenContext);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"));
      navigate("/");
    }
  }, []);

  async function submitForm() {
    setEmail(formik.values.email);
    setIsLoading(true);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", formik.values)
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
        setIsLoading(false);
      });
    toast.success(data.message);
    setPage("otp");
    setIsLoading(false);
  }

  const handleOtp = async () => {
    setError("");
    setIsLoading(true);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
        resetCode: otpFormik.values.resetCode,
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        toast.success("Otp verified successfully");
        setPage("password");
      })
      .catch((err) => {
        setError(err.response.data.message);
        setIsLoading(false);
      });
  };

  const handleReset = async () => {
    setIsLoading(true);
    axios
      .put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
        email: email,
        newPassword: passwordFormik.values.password,
      })
      .then((res) => {
        toast.success("Password reset successfully. Please login to continue");
        setIsLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Valid email address is required")
      .required("Email field is required"),
  });
  const OtpSchema = Yup.object().shape({
    resetCode: Yup.string()
      .min(6, "Otp must be 6 digits")
      .max(6, "OTP must be 6 digits")
      .required("OTP field is required"),
  });

  const PasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(10, "Password max characters is 10")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: submitForm,
    validationSchema: LoginSchema,
  });

  const otpFormik = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: handleOtp,
    validationSchema: OtpSchema,
  });

  const passwordFormik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: handleReset,
    validationSchema: PasswordSchema,
  });

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className={`lg:px-12 md:px-10 px-10 grid grid-cols-12 my-16 items-center gap-5`}>
        <div className="lg:col-span-6 hidden bg-[#CBE4E8] lg:flex  justify-center rounded-sm overflow-hidden">
          <img src={Image} alt="Reset password svg" className="w-4/5" />
        </div>
        {page === "otp" ? (
          <div className="lg:col-span-6 col-span-12 flex-col flex justify-between items-center">
            <div className="head w-full flex my-8 justify-center flex-col px-8">
              <h2 className="text-lg font-bold mt-2">Otp verification</h2>
              <p className="text-sm my-1 text-gray-500">Enter the code you received</p>
            </div>
            <span className="text-red-500 font-semibold my-5">{error}</span>
            <form
              className={` w-full relative flex flex-col justify-between items-center gap-5`}
              onSubmit={otpFormik.handleSubmit}
            >
              <div className="relative w-full lg:w-4/5 md:w-4/5">
                <p className="text-[12px] absolute bottom-10 left-2 z-20 text-red-600 font-semibold">
                  {otpFormik.touched.resetCode && otpFormik.errors.resetCode
                    ? otpFormik.errors.resetCode
                    : ""}
                </p>
                <input
                  onChange={otpFormik.handleChange}
                  onBlur={otpFormik.handleBlur}
                  className="border-b relative w-full outline-none p-2 border-[#7F7F7F]"
                  placeholder="otp"
                  value={otpFormik.values.resetCode}
                  type="tel"
                  name="resetCode"
                  id="otp"
                />
              </div>
              <div className="grid lg:grid-cols-12 grid-cols-8 items-center gap-12">
                <div className="px-5 div lg:col-span-6 col-span-4">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="p-2 disabled:cursor-not-allowed disabled:bg-gray-400 rounded-sm hover:bg-[#e74545] bg-[#DB4444] text-white"
                  >
                    {isLoading ? "Verifying..." : "Verify"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {page === "reset" ? (
          <div className="lg:col-span-6 col-span-12 flex-col flex justify-between items-center">
            <div className="head w-full flex my-8 justify-center flex-col px-8">
              <h2 className="text-lg font-bold mt-2">Reset Password</h2>
              <p className="text-sm my-1 text-gray-500">Enter your account details</p>
            </div>
            <span className="text-red-500 font-semibold my-5">{error}</span>
            <form
              className={` w-full relative flex flex-col justify-between items-center gap-5`}
              onSubmit={formik.handleSubmit}
            >
              <div className="relative w-full lg:w-4/5 md:w-4/5">
                <p className="text-[12px] absolute bottom-10 left-2 z-20 text-red-600 font-semibold">
                  {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                </p>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border-b relative w-full outline-none p-2 border-[#7F7F7F]"
                  placeholder="Email"
                  value={formik.values.email}
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="grid lg:grid-cols-12 grid-cols-8 items-center gap-12">
                <div className="px-5 div lg:col-span-6 col-span-4">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="p-2 disabled:cursor-not-allowed rounded-sm hover:bg-[#e74545] bg-[#DB4444] text-white"
                  >
                    {isLoading ? "Hold on please..." : "Reset now"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {page === "password" ? (
          <div className="lg:col-span-6 col-span-12 flex-col flex justify-between items-center">
            <div className="head w-full flex my-8 justify-center flex-col px-8">
              <h2 className="text-lg font-bold mt-2">Reset TT</h2>
              <p className="text-sm my-1 text-gray-500">Enter your account details</p>
            </div>
            <span className="text-red-500 font-semibold my-5">{error}</span>
            <form
              className={` w-full relative flex flex-col justify-between items-center gap-5`}
              onSubmit={passwordFormik.handleSubmit}
            >
              <div className="relative w-full lg:w-4/5 md:w-4/5">
                <p className="text-[12px] absolute bottom-10 left-2 z-20 text-red-600 font-semibold">
                  {passwordFormik.touched.password && passwordFormik.errors.password
                    ? passwordFormik.errors.password
                    : ""}
                </p>
                <input
                  onChange={passwordFormik.handleChange}
                  onBlur={passwordFormik.handleBlur}
                  className="border-b relative w-full outline-none p-2 border-[#7F7F7F]"
                  placeholder="Password"
                  value={passwordFormik.values.password}
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <div className="grid lg:grid-cols-12 grid-cols-8 items-center gap-12">
                <div className="px-5 div lg:col-span-6 col-span-4">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="p-2 disabled:cursor-not-allowed rounded-sm hover:bg-[#e74545] bg-[#DB4444] text-white"
                  >
                    {isLoading ? "Hold on please..." : "Reset now"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ResetPassword;
