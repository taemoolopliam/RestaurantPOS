import React from "react";
import foods from "../../assets/imgs/foods.jpg";
import { v4 as uuidv4 } from "uuid";

export default function ProductList() {
  return (
    <div className=" bg-white p-5 rounded-md">
      <div className="grid lg:grid-cols-8 gap-1 xl:gap-4 grid-cols-1">
        <div className=" md:col-span-4">
          <h3 className="font-bold text-2xl text-green-needle-500">รายการอาหาร</h3>
        </div>
        <div className=" md:col-span-2">
          <select name="category" id="category" className=" outline-none">
            <option value="all">ประเภทอาหารทั้งหมด</option>
          </select>
        </div>
        <div className="flex bg-gray-100 p-2 w-full space-x-4 rounded-lg lg:col-span-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-100 outline-none w-full text-green-needle-500 placeholder-green-needle-500 font-medium"
            type="text"
            placeholder="ค้นหารายการอาหาร"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 mt-5 gap-4">
        {Array.apply(null, Array(24)).map((v) => (
          <div
            key={uuidv4()}
            className="bg-green-needle-100 w-full px-2 border-green-needle-100 rounded-md  py-2 hover:border-green-needle-500 border-solid cursor-pointer border-2"
          >
            <div className=" justify-center flex ">
              <img src={foods} alt="foods" width={150} height={300} className="rounded-full mx-32 bg-green-400 h-24 w-24" />
            </div>
            <h6 className="text-center mt-2 font-bold text-green-needle-500">ผัดกระเพราเนื้อวัว</h6>
            <h6 className="text-right text-orange-600 font-bold text-xl -mb-2">60 ฿</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
