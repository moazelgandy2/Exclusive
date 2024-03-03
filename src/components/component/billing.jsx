import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function billing() {
  return (
    <div className="bg-white p-8 pr-8">
      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <Input className="col-span-1" placeholder="First Name*" type="text" />
              <Input className="col-span-1" placeholder="Company Name" type="text" />
              <Input className="col-span-2" placeholder="Street Address*" type="text" />
              <Input
                className="col-span-2"
                placeholder="Apartment, floor, etc. (optional)"
                type="text"
              />
              <Input className="col-span-1" placeholder="Town/City*" type="text" />
              <Input className="col-span-1" placeholder="Phone Number*" type="text" />
              <Input className="col-span-2" placeholder="Email Address*" type="email" />
            </div>
            <div className="flex items-center mt-4">
              <Checkbox id="save-info" />
              <label className="text-sm ml-2" htmlFor="save-info">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <img
              alt="LCD Monitor"
              className="text-red-500 mr-2"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
            <span className="font-medium">LCD Monitor</span>
            <span className="ml-auto">$650</span>
          </div>
          <div className="flex items-center mb-4">
            <img
              alt="H1 Gamepad"
              className="text-red-500 mr-2"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
            <span className="font-medium">H1 Gamepad</span>
            <span className="ml-auto">$110</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$760</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold mb-4">
            <span>Total:</span>
            <span>$760</span>
          </div>
          <div className="flex items-center mb-4">
            <RadioGroup className="space-x-4" defaultValue="bank">
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
          <div className="flex mb-4">
            <Input className="flex-1 mr-2" placeholder="Coupon Code" />
            <Button className="bg-red-500 text-white">Apply Coupon</Button>
          </div>
          <Button className="w-full bg-red-500 text-white">Place Order</Button>
        </div>
      </div>
    </div>
  );
}
