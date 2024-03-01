import React from "react";
import LoginImg from "../../assets/images/login.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const submitForm = () => {
    console.log(formik.values);
  };

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
      <div className="lg:px-12 md:px-10 px-10 grid grid-cols-12 my-16 items-center gap-5">
        <div className="lg:col-span-6 hidden bg-[#CBE4E8] lg:flex  justify-center rounded-sm overflow-hidden">
          <img src={LoginImg} alt="" />
        </div>
        <div className="lg:col-span-6 col-span-12 flex-col flex justify-between items-center">
          <div className="head w-full flex my-8 justify-center flex-col px-8">
            <h2 className="text-lg font-bold mt-2">Login to your account</h2>
            <p className="text-sm my-1 text-gray-500">Enter your account details</p>
          </div>
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
            <button type="submit" className="p-2 rounded-sm bg-[#DB4444] text-white">
              Login now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
