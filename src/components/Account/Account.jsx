import React, { useContext, useEffect, useState } from "react";
import SectionHead from "../SectionHead/SectionHead";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TokenContext } from "../Contexts/Token";
import axios from "axios";
import { Helmet } from "react-helmet";
import { toast } from "sonner";
import { Orders } from "./Orders";

function Account() {
  const { token, setToken } = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const SubmitUpdateProile = async () => {
    setIsLoading(true);
    axios
      .put(
        "https://ecommerce.routemisr.com/api/v1/users/updateMe/",
        { name: formik.values.name },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((res) => {
        if (res.data.message === "success") {
          console.log(res.data);
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
        setIsLoading(false);
        toast.success("Profile updated successfully");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
        setIsLoading(false);
      });
  };
  const SubmitUpdatePassword = async () => {
    setIsLoading(true);
    axios
      .put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword", formikPassword.values, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        if (res.data.message === "success") {
          console.log(res.data);
          localStorage.removeItem("user");
          localStorage.removeItem("userToken");
          localStorage.setItem("userToken", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          formikPassword.resetForm();
        }
        setIsLoading(false);
        toast.success("Password updated successfully");
      })
      .catch((err) => {
        setError(err.response.data.errors.msg);
        toast.error(err.response.data.errors.msg);
        setIsLoading(false);
      });
  };

  const ProfileSchema = Yup.object().shape({
    email: Yup.string()
      .email("Valid email address is required")
      .required("Email field is required"),
    name: Yup.string()
      .min(4, "Name is too short min length is 4")
      .required("Name filed is required"),
  });

  const PasswordSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .min(6, "Password is too short min length is 6")
      .required("Password field is required"),
    password: Yup.string()
      .min(6, "Password is too short min length is 6")
      .required("Password field is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Password field is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: user?.email,
      name: user?.name,
      currentPassword: "",
    },
    onSubmit: SubmitUpdateProile,
    validationSchema: ProfileSchema,
  });

  const formikPassword = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
    onSubmit: SubmitUpdatePassword,
    validationSchema: PasswordSchema,
  });

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <SectionHead title={"My Account"}>
        <section className="lg:px-12 px-4 py-12 w-full">
          <aside className="lg:block hidden">
            <div className="sec">
              <h2 className="text-lg font-medium">Manage account</h2>
              <div className="links px-8 my-8">
                <ul className="flex flex-col text-lg justify-center items-start gap-2">
                  <li className="text-[#DB4444] cursor-pointer">Profile</li>
                  <li className="text-[#7F7F7F] cursor-pointer">Adress Book</li>
                </ul>
              </div>
            </div>
            <div className="sec">
              <h2 className="text-lg font-medium">Orders</h2>
              <div className="links px-8 my-4">
                <ul>
                  <li className="text-[#7F7F7F]">Recent orders</li>
                </ul>
              </div>
            </div>
          </aside>
          <Tabs defaultValue="account" className="w-full lg:hidden justify-center flex flex-col">
            <TabsList className="mb-8">
              <TabsTrigger value="profil">Profile</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="profil">
              <form
                className="w-full relative flex flex-col justify-between items-center gap-5"
                onSubmit={formik.handleSubmit}
              >
                <div className="relative w-full lg:w-4/5 md:w-4/5">
                  <label
                    htmlFor="name"
                    className={formik.touched.name && formik.errors.name ? "text-red-500" : ""}
                  >
                    {formik.touched.name && formik.errors.name ? (
                      <span>{formik.errors.name}</span>
                    ) : (
                      <span>Name</span>
                    )}
                  </label>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="bg-[#F5F5F5] text-[#7A7A7A] relative w-full outline-none p-2 rounded-sm mt-2"
                    value={formik.values.name}
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>

                <div className="relative w-full lg:w-4/5 md:w-4/5">
                  <label
                    htmlFor="email"
                    className={formik.touched.email && formik.errors.email ? "text-red-500" : ""}
                  >
                    {formik.touched.email && formik.errors.email ? (
                      <span>{formik.errors.email}</span>
                    ) : (
                      <span>Email</span>
                    )}
                  </label>
                  <input
                    disabled
                    className="bg-[#F5F5F5] disabled:cursor-not-allowed text-[#7A7A7A] relative w-full outline-none p-2 rounded-sm mt-2"
                    value={formik.values.email}
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="p-2 disabled:cursor-not-allowed rounded-sm bg-[#DB4444] text-white"
                >
                  {isLoading ? "Updateing info..." : "Save"}
                </button>
              </form>
            </TabsContent>
            <TabsContent value="password">
              <form
                className="w-full relative flex flex-col justify-between items-center gap-5"
                onSubmit={formikPassword.handleSubmit}
              >
                <div className="relative w-full lg:w-4/5 md:w-4/5">
                  <label
                    htmlFor="currentPassword"
                    className={
                      formikPassword.touched.currentPassword &&
                      formikPassword.errors.currentPassword
                        ? "text-red-500"
                        : ""
                    }
                  >
                    {formikPassword.touched.currentPassword &&
                    formikPassword.errors.currentPassword ? (
                      <span>{formikPassword.errors.currentPassword}</span>
                    ) : (
                      <span>Current password</span>
                    )}
                  </label>
                  <input
                    onChange={formikPassword.handleChange}
                    onBlur={formikPassword.handleBlur}
                    className="bg-[#F5F5F5] text-[#7A7A7A] relative w-full outline-none p-2 rounded-sm mt-2"
                    value={formikPassword.values.currentPassword}
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                  />
                </div>

                <div className="relative w-full lg:w-4/5 md:w-4/5">
                  <label
                    htmlFor="email"
                    className={
                      formikPassword.touched.password && formikPassword.errors.password
                        ? "text-red-500"
                        : ""
                    }
                  >
                    {formikPassword.touched.password && formikPassword.errors.password ? (
                      <span>{formikPassword.errors.password}</span>
                    ) : (
                      <span>Password</span>
                    )}
                  </label>
                  <input
                    onChange={formikPassword.handleChange}
                    onBlur={formikPassword.handleBlur}
                    className="bg-[#F5F5F5] disabled:cursor-not-allowed text-[#7A7A7A] relative w-full outline-none p-2 rounded-sm mt-2"
                    value={formikPassword.values.password}
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>

                <div className="relative w-full lg:w-4/5 md:w-4/5">
                  <label
                    htmlFor="email"
                    className={
                      formikPassword.touched.rePassword && formikPassword.errors.rePassword
                        ? "text-red-500"
                        : ""
                    }
                  >
                    {formikPassword.touched.rePassword && formikPassword.errors.rePassword ? (
                      <span>{formikPassword.errors.rePassword}</span>
                    ) : (
                      <span>Confirm password</span>
                    )}
                  </label>
                  <input
                    onChange={formikPassword.handleChange}
                    onBlur={formikPassword.handleBlur}
                    className="bg-[#F5F5F5] disabled:cursor-not-allowed text-[#7A7A7A] relative w-full outline-none p-2 rounded-sm mt-2"
                    value={formikPassword.values.rePassword}
                    type="password"
                    name="rePassword"
                    id="rePassword"
                  />
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="p-2 disabled:cursor-not-allowed rounded-sm bg-[#DB4444] text-white"
                >
                  {isLoading ? "Updateing info..." : "Save"}
                </button>
              </form>
            </TabsContent>
            <TabsContent value="orders">
              <Orders></Orders>
            </TabsContent>
          </Tabs>
        </section>
      </SectionHead>
    </>
  );
}

export default Account;
