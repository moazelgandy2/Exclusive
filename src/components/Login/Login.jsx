import React, { useEffect, useState } from "react";
import LoginImg from "../../assets/images/login.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { redirect, useNavigate } from "react-router";
import { TokenContext } from "../Contexts/Token";
import { Helmet } from "react-helmet";
import { jwtDecode } from "jwt-decode";

function Login() {
  const { token, setToken } = React.useContext(TokenContext);
  let user = {};
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"));
      navigate("/");
    }
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function submitForm() {
    const options = { ...formik.values };
    setIsLoading(true);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", formik.values)
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
        setIsLoading(false);
      });
    if (data.message === "success") {
      localStorage.setItem("userToken", data.token);
      user = { email: data.user.email, ...jwtDecode(data.token) };
      localStorage.setItem("user", JSON.stringify(user));

      window.location.href = "/";
    }
    setIsLoading(false);
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Valid email address is required")
      .required("Email field is required"),
    password: Yup.string()
      .min(5, "Password is too short min length is 5")
      .required("Password filed is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitForm,
    validationSchema: LoginSchema,
  });

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="lg:px-12 md:px-10 px-10 grid grid-cols-12 my-16 items-center gap-5">
        <div className="lg:col-span-6 hidden bg-[#CBE4E8] lg:flex  justify-center rounded-sm overflow-hidden">
          <img src={LoginImg} alt="" />
        </div>
        <div className="lg:col-span-6 col-span-12 flex-col flex justify-between items-center">
          <div className="head w-full flex my-8 justify-center flex-col px-8">
            <h2 className="text-lg font-bold mt-2">Login to your account</h2>
            <p className="text-sm my-1 text-gray-500">Enter your account details</p>
          </div>
          <span className="text-red-500 font-semibold my-5">{error}</span>
          <form
            className="w-full relative flex flex-col justify-between items-center gap-5"
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
            <div className="relative w-full lg:w-4/5 md:w-4/5">
              <p className="text-[12px] absolute bottom-9 left-2 z-20 text-red-600 font-semibold">
                {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-b outline-none w-full p-2 border-[#7F7F7F]"
                placeholder="Password"
                value={formik.values.password}
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="p-2 disabled:cursor-not-allowed rounded-sm bg-[#DB4444] text-white"
            >
              {isLoading ? "Logging you in securely..." : "Login now"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
