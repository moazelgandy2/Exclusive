import React, { useContext, useEffect, useState } from "react";
import LoginImg from "../../assets/images/register.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { TokenContext } from "../Contexts/Token";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

function Register() {
  const { token, setToken } = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [erro, setErro] = useState(null);
  const submitForm = (values) => {
    setIsLoading(true);
    const options = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
      rePassword: values.rePassword,
    };
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, options)
      .then((res) => {
        setIsLoading(false);
        localStorage.setItem("userToken", res.data.token);
        setToken(res.data.token);
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        setErro(err.response.data.message);
        console.log(err.response.data.message);
      });
  };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Name is too short, min length is 4")
      .max(15, "Max name length is 15")
      .required("Name field is required"),
    email: Yup.string()
      .email("Valid email address is required")
      .required("Email field is required"),
    phone: Yup.string()
      .matches(/^(012|011|010|015)\d{8}$/, "Valid phone number is requird")
      .min(11, "Valid phone number is required")
      .max(11, "Valid phone number is requird"),
    password: Yup.string().min(6, "Password is too short").required("Password filed is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("This field is requird"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    onSubmit: submitForm,
    validationSchema: RegisterSchema,
  });

  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register page" />
      </Helmet>

      <div className="lg:px-12 md:px-10 px-10 grid grid-cols-12 my-16 items-center gap-5">
        <div className="lg:col-span-6 hidden bg-[#CBE4E8] lg:flex items-center  justify-center rounded-sm overflow-hidden">
          <img src={LoginImg} alt="" className="w-4/5 text-center" />
        </div>
        <div className="lg:col-span-6 col-span-12 flex-col flex justify-between items-center">
          <div className="head w-full flex my-8 justify-center flex-col px-8">
            <h2 className="text-lg font-bold mt-2">Create an account</h2>
            <p className="text-sm my-1 text-gray-500">Enter your details below</p>
          </div>
          <form
            className="w-full flex flex-col justify-between items-center gap-5"
            onSubmit={formik.handleSubmit}
          >
            <span className="text-red-500">{erro}</span>
            <div className="relative w-full lg:w-4/5 md:w-4/5">
              <p className="text-[12px] absolute bottom-10 left-2 z-20 text-red-600 font-semibold">
                {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-b outline-none w-full p-2 border-[#7F7F7F]"
                placeholder="Name"
                value={formik.values.name}
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="relative w-full lg:w-4/5 md:w-4/5">
              <p className="text-[12px] absolute bottom-10 left-2 z-20 text-red-600 font-semibold">
                {formik.touched.phone && formik.errors.phone ? formik.errors.phone : ""}
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-b outline-none w-full p-2 border-[#7F7F7F]"
                placeholder="Phone"
                value={formik.values.phone}
                type="tel"
                name="phone"
                id="phone"
              />
            </div>
            <div className=" lg:w-4/5 md:w-4/5 w-full relative">
              <p className="text-[12px] absolute bottom-9 left-2 z-20 text-red-600 font-semibold">
                {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-b outline-none w-full p-2 border-[#7F7F7F]"
                placeholder="Email"
                value={formik.values.email}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="pass grid grid-cols-12 w-full lg:w-4/5 md:w-4/5 gap-4 relative">
              <div className="md:col-span-6 col-span-5 lg:col-span-6">
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
              <div className="md:col-span-6 col-span-7 lg:col-span-6 relative">
                <p className="text-[12px] absolute bottom-9 left-2 z-20 text-red-600 font-semibold">
                  {formik.touched.rePassword && formik.errors.rePassword
                    ? formik.errors.rePassword
                    : ""}
                </p>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border-b outline-none w-full p-2 border-[#7F7F7F]"
                  placeholder="Confirm password"
                  value={formik.values.rePassword}
                  type="password"
                  name="rePassword"
                  id="rePassword"
                />
              </div>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="p-2 disabled:cursor-not-allowed rounded-sm bg-[#DB4444] text-white"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
