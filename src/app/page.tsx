import { Customers } from "@/components/charts/customers";
import { Overview } from "@/components/charts/overview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as data from "../app/data.json";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ChevronRight, NewspaperIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-row w-full h-full bg-slate-50">
      {/* Navigation Menu */}
      <nav className="w-64 py-8 px-2 text-white h-[100vh] flex flex-col justify-between bg-blue-900">
        <div>
          <h1 className="p-2 text-xl font-bold">Dashboard</h1>
          <div className="flex flex-col space-y-2">
            {["Overview", "Sales", "Orders", "Customers", "Products"].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex p-2 flex-row w-full items-center hover:bg-slate-100 hover:bg-opacity-10 rounded-md hover:cursor-pointer"
                >
                  <NewspaperIcon size={18} />
                  <p className="px-2 text-sm flex-1">{item}</p>
                  <ChevronRight size={16} />
                </div>
              )
            )}
          </div>
        </div>
        <div className="p-2 flex flex-row space-x-4 items-center hover:bg-slate-100 hover:bg-opacity-10 rounded-md hover:cursor-pointer">
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" />
          </div>
          <div>
            <p className="text-lg font-bold">John Doe</p>
            <p className="text-sm text-gray-100 opacity-50">@johndoe</p>
          </div>
        </div>
      </nav>
      <div className="p-8 flex flex-1 flex-col space-y-4 max-h-[100vh] overflow-y-scroll">
        {/* header */}
        <div className="flex flex-row justify-between">
          <h1 className="flex-1 font-bold text-2xl">Hello Shahrukh</h1>
          <Input className="w-48" placeholder="Search" />
        </div>

        {/* quick stats */}
        <div className="flex flex-row justify-between">
          {data["stats"].map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center space-x-2 p-4 shadow-sm rounded-md border bg-white"
            >
              <div className={`rounded-full p-12 ${item.color}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400">{item.title}</p>
                <h2 className="font-bold text-xl">${item.value}</h2>
                <p className="text-xs">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* graphs */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Customers</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <Customers />
            </CardContent>
          </Card>
        </div>

        {/* table */}
        <Card>
          <CardHeader>
            <CardTitle>Product Sell</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[400px]">Product Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <div className="flex flex-row items-center space-x-4">
                        <img
                          src={product.image}
                          alt="Picture of the author"
                          className="w-20 rounded-sm"
                        />
                        <div className="flex flex-col">
                          <p className="">{product.title}</p>
                          <p className="text-sm text-gray-400">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.qty}</TableCell>
                    <TableCell className="text-right">{product.val}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
