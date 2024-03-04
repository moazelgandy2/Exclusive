import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SectionHead from "../SectionHead/SectionHead";
import { CartContext } from "../Contexts/CartContext";
import { useContext, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Skeleton } from "../ui/skeleton";
import SingleProductSkelton from "./SingleProductSkelton";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { TokenContext } from "../Contexts/Token";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

function CheckOut() {
  const { cart, getCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(TokenContext);
  const rediRectTo = "https://exclusive-two.vercel.app/";

  const handleFormSubmit = (values) => {
    setIsLoading(true);
    const options = {
      details: values.streetAddress,
      phone: values.phoneNumber,
      city: values.city,
    };

    axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=${rediRectTo}`,
        { ...options },
        { headers: { token: token } }
      )
      .then((res) => {
        console.log(res.data.session);
        toast.success("Order placed successfully.Redirecting to payment gateway.");
        setTimeout(() => {
          window.location.href = res.data.session.url;
        }, 1000);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().min(4, "Min chars is 4").required("First name is required"),
    lastName: Yup.string().min(4, "Min chars is 4").required("Last name is required"),
    streetAddress: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: handleFormSubmit,
    validationSchema: validationSchema,
  });

  return (
    <>
      <SectionHead title={"Billing details"}>
        <div className="grid grid-cols-12 min-h-[80vh] my-8 relative">
          <div className="lg:col-span-8 md:col-span-6 lg:block flex justify-center col-span-12">
            <form className="lg:w-5/6 w-[90%]" onSubmit={formik.handleSubmit}>
              <div className="group gap-y-8 relative grid grid-cols-12 gap-4 ms-4">
                <p className="text-[12px] absolute -top-6 left-2 z-20 text-red-600 font-semibold">
                  {formik.touched.firstName && formik.errors.firstName
                    ? formik.errors.firstName
                    : ""}
                </p>
                <Input
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="bg-[#F5F5F5] col-span-6 border-0 focus-visible:ring-0 h-[50px]"
                  placeholder="First Name*"
                  type="text"
                />
                <p className="text-[12px] absolute -top-6 left-1/2 z-20 text-red-600 font-semibold">
                  {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ""}
                </p>
                <Input
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="bg-[#F5F5F5] col-span-6 border-0 focus-visible:ring-0 h-[50px]"
                  placeholder="Last Name*"
                  type="text"
                />
                <div className="group gap-y-8 col-span-12 relative">
                  <p className="text-[12px] absolute -top-6 left-2 z-20 text-red-600 font-semibold">
                    {formik.touched.streetAddress && formik.errors.streetAddress
                      ? formik.errors.streetAddress
                      : ""}
                  </p>
                  <Input
                    name="streetAddress"
                    value={formik.values.streetAddress}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="bg-[#F5F5F5] col-span-12 border-0 focus-visible:ring-0 h-[50px]"
                    placeholder="Street Address*"
                    type="text"
                  />
                </div>
                <div className="group gap-y-8 col-span-12 relative">
                  <p className="text-[12px] absolute -top-6 left-2 z-20 text-red-600 font-semibold">
                    {formik.touched.city && formik.errors.city ? formik.errors.city : ""}
                  </p>
                  <Input
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="bg-[#F5F5F5] col-span-6 border-0 focus-visible:ring-0 h-[50px]"
                    placeholder="City*"
                    type="text"
                  />
                </div>
                <div className="group gap-y-8 grid grid-cols-12 gap-4 col-span-12 relative">
                  <p className="text-[12px] absolute -top-6 left-2 z-20 text-red-600 font-semibold">
                    {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                  </p>
                  <Input
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="bg-[#F5F5F5] col-span-6 border-0 focus-visible:ring-0 h-[50px]"
                    placeholder="Email Address*"
                    type="text"
                  />
                  <p className="text-[12px] absolute -top-6 left-1/2 z-20 text-red-600 font-semibold">
                    {formik.touched.phoneNumber && formik.errors.phoneNumber
                      ? formik.errors.phoneNumber
                      : ""}
                  </p>
                  <Input
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="bg-[#F5F5F5] col-span-6 border-0 focus-visible:ring-0 h-[50px]"
                    placeholder="Phone Number*"
                    type="tel"
                  />
                </div>
                <div className="group  col-span-12 items-center flex">
                  <Checkbox id="save-info" />
                  <Label className="text-sm ml-2" htmlFor="save-info">
                    Save this information for next time
                  </Label>
                </div>
              </div>
              <Button
                disabled={cart.numOfCartItems == 0 || isLoading}
                className={
                  "w-4/5 bg-[#DB4444] hover:bg-[#eb4848] absolute bottom-5 left-1/2 transform -translate-x-1/2"
                }
                type="submit"
              >
                Place Order
              </Button>
            </form>
          </div>
          <div className="lg:col-span-4 flex flex-col lg:my-0 md:my-8 my-16 px-5 md:col-span-6 col-span-12">
            <ScrollArea className="h-[200px] border-0 w-full px-2 mb-2">
              {cart.numOfCartItems == 0 ? (
                <h2 className="text-2xl font-semibold mb-6">Your Cart Is Empty</h2>
              ) : (
                ""
              )}
              {cart.length != 0 ? (
                cart?.data?.products?.map((prod) => {
                  return (
                    <SingleProduct
                      key={prod.product._id}
                      title={prod.product.title}
                      price={prod.price}
                      image={prod.product.imageCover}
                    />
                  );
                })
              ) : (
                <>
                  <SingleProductSkelton />
                </>
              )}
            </ScrollArea>

            <div className="flex justify-between my-2 border-b border-[#999999] pb-2">
              <span>Subtotal:</span>
              <span>EGP {cart.length != 0 ? cart.data.totalCartPrice : "0"}</span>
            </div>
            <div className="flex justify-between my-2 border-b border-[#999999] pb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold mb-4 pb-2">
              <span>Total:</span>
              <span>EGP {cart.length != 0 ? cart.data.totalCartPrice : "0"}</span>
            </div>

            <div className="flex items-center mb-4">
              <RadioGroup defaultValue="bank">
                <div className="flex items-center">
                  <RadioGroupItem className="mr-2" id="bank" value="bank" />
                  <Label htmlFor="bank">Bank</Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem disabled className="mr-2" id="cash" value="cash" />
                  <Label htmlFor="cash">Cash on delivery</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </SectionHead>
    </>
  );
}

export default CheckOut;
