import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

import {
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  TableHead,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../Contexts/Token";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

export function Orders() {
  const { token, user } = useContext(TokenContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/orders/user/${JSON.parse(user).id}`)
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);

    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, "0")}-${date
      .getDate()
      .toString()
      .padStart(2, "0")}-${date.getFullYear().toString().padStart(4, "0")}`;

    return formattedDate;
  }

  return (
    <div className="w-full">
      <div className="flex  w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg p-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Order</TableHead>
                  <TableHead className="min-w-[150px]">Customer</TableHead>
                  <TableHead className="hidden md:table-cell">Method</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="hidden sm:table-cell">Delivered</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="relative">
                {orders == [] || orders.length == 0 ? (
                  <>
                    <Skeleton
                      className={
                        "lg:w-[1150%] lg:left-0 md:left-0 md:w-[855%] relative left-1/2 w-[350%] my-2 h-[30px]"
                      }
                    />
                  </>
                ) : (
                  ""
                )}
                {orders.length != 0
                  ? orders.map((order, i) => {
                      return (
                        <TableRow key={i}>
                          <TableCell className="font-medium"># {order.id}</TableCell>
                          <TableCell>{order.user.name}</TableCell>
                          <TableCell className="hidden md:table-cell">
                            {order.paymentMethodType}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {formatDate(order.paidAt)}
                          </TableCell>
                          <TableCell className="text-right">EGP {order.totalOrderPrice}</TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {order.isDelivered ? "Delivered" : "Pending"}
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="ghost">
                                  <MoreHorizontalIcon className="w-4 h-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View order</DropdownMenuItem>
                                <DropdownMenuItem>Customer details</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  : ""}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}

function MoreHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}
