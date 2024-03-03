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

function CheckOut() {
  const { cart, getCart } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <SectionHead title={"Billing details"}>
        <div className="grid grid-cols-12 min-h-[80vh] my-8">
          <div className="lg:col-span-8 md:col-span-6 lg:block flex justify-center col-span-12">
            <form className="lg:w-5/6 w-[90%]">
              <div className="group gap-y-8 grid grid-cols-12 gap-4 ms-4">
                <Input
                  className="bg-[#F5F5F5] col-span-6 border-0 focus-visible:ring-0 h-[50px]"
                  placeholder="First Name*"
                  type="text"
                />
                <Input
                  className="bg-[#F5F5F5] col-span-6 border-0 focus-visible:ring-0 h-[50px]"
                  placeholder="Last Name*"
                  type="text"
                />
                <div className="group gap-y-8 col-span-12">
                  <Input
                    className="bg-[#F5F5F5] col-span-12 border-0 focus-visible:ring-0 h-[50px]"
                    placeholder="Street Address*"
                    type="text"
                  />
                </div>
                <div className="group gap-y-8 col-span-12">
                  <Input
                    className="bg-[#F5F5F5] col-span-6 border-0 focus-visible:ring-0 h-[50px]"
                    placeholder="City*"
                    type="text"
                  />
                </div>
                <div className="group gap-y-8 grid grid-cols-12 gap-4 col-span-12">
                  <Input
                    className="bg-[#F5F5F5] col-span-6 border-0 focus-visible:ring-0 h-[50px]"
                    placeholder="Email Address*"
                    type="text"
                  />
                  <Input
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
            </form>
          </div>
          <div className="lg:col-span-4 flex flex-col lg:my-0 md:my-8 my-16 px-5 md:col-span-6 col-span-12">
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
                  <RadioGroupItem className="mr-2" id="cash" value="cash" />
                  <Label htmlFor="cash">Cash on delivery</Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              disabled={cart.numOfCartItems == 0}
              className="w-full bg-[#DB4444] hover:bg-[#eb4848]"
              type="submit"
            >
              Place Order
            </Button>
          </div>
        </div>
      </SectionHead>
    </>
  );
}

export default CheckOut;
