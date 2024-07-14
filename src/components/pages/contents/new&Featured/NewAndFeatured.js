import React from "react";
import Navbar from "../../navbar/Navbar";
import { IoFilter } from "react-icons/io5";
import Button from "../../../reusable-ui/Button";
import { products } from "./Product";
import Footer from "../../home/Footer";
import { Carousel } from "flowbite-react";

export default function NewAndFeatured() {
  return (
    <div className="font-Montserrat">
      <Navbar />
      <div className=" bg-white pt-14"></div>
      <div className="h-20 w-full bg-zinc-100 text-xs font-semibold">
        <Carousel
          indicators={false}
          pauseOnHover
          leftControl="&nbsp;"
          rightControl="&nbsp;"
        >
          <div className="flex h-full items-center justify-center underline">
            <span>Members: Free Shipping on Orders $50+</span>
          </div>
          <div className="flex h-full items-center justify-center underline ">
            <span>Gear Up Mid-Season: Use EXTRA25</span>
          </div>
          <div className="flex h-full items-center justify-center underline ">
            <span>Look For Store Pickup at Checkout</span>
          </div>
        </Carousel>
      </div>

      <div className="pb-28">
        <h2 className=" py-8 px-7 text-xl font-semibold">New Releases</h2>
        <div className="">
          <ul className=" flex gap-8 text-base font-semibold text-nowrap overflow-x-auto no-scrollbar py-4">
            <li>Shoes</li>
            <li>Tops & T-Shirts</li>
            <li>Shorts</li>
            <li>Hoodies & Pullovers</li>
            <li>Jackets & Vests</li>
            <li>Pants & Tights</li>
            <li>Swimming</li>
            <li>Socks</li>
            <li>Accessories & Equipment</li>
          </ul>
        </div>
        <div className="px-6 py-5 border-[0.5px] border-y-black flex items-center justify-between">
          <span className=" font-medium">Pick Up Today</span>
          <div className=" h-10 w-16 p-[2px] bg-paragraph_color/50 rounded-full flex items-center overflow-hidden shadow-sm">
            <span className=" size-9 rounded-full bg-white shadow-sm"></span>
          </div>
        </div>
        <div>
          <div className="px-6 py-4 flex items-center justify-between">
            <span className=" text-secondary">
              {products.length === 0 || products.length === 1
                ? `${products.length} Result`
                : `${products.length} Results`}
            </span>
            <Button className=" py-0 px-5 bg-white font-semibold flex items-center justify-between gap-2 rounded-full border border-secondary/50">
              <span>Filter</span>
              <IoFilter />
            </Button>
          </div>
          <div className=" grid grid-cols-2 gap-y-4 w-full">
            {products.map((product) => (
              <div key={products.id}>
                <div className=" bg-img size-48">
                  <img
                    className=" h-full w-full object-cover object-center"
                    src={product.imageUrl}
                    alt={product.title}
                  />
                </div>
                <div className="px-3 py-2 text-[13px]">
                  <span className=" text-pub font-semibold">
                    {product.justIn ? "Just In" : ""}
                  </span>
                  <h4 className=" font-semibold">{product.title}</h4>
                  <p>{product.category}</p>
                  <div className="flex flex-col text-secondary">
                    <span>
                      {product.colors === 0 || product.colors === 1
                        ? `${product.colors} Color`
                        : `${product.colors} Colors`}
                    </span>
                    <span className=" font-medium text-black text-base pt-2">
                      $ {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className=" border-backgroundHr border-[0.5px]" />
      <div className="pt-20">
        <h3 className=" text-xl font-medium px-6">Related Categories</h3>
        <div className=" pt-6 pb-10 w-full text-xs font-semibold flex gap-2 text-nowrap overflow-x-auto no-scrollbar bg-white">
          <div className="flex h-full items-center justify-center">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              Best Selling Products
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              Best Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              New Basketball Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              New Soccer Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              New Men's Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              New Running Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              Best Men's Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              New Jordan Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              Best Women's Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              Best Training & Gym
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
