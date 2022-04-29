import React from "react";
import data from "./DataOrder.json";

export default function ManageOrders() {
  return (
    <div className=" bg-white  p-5 rounded-md">
      <div className="bg-green-needle-50 flex justify-between p-2 rounded-md leading-8  items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-coin"
          width={40}
          height={40}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#115E38"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx={12} cy={12} r={9} />
          <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
          <path d="M12 6v2m0 8v2" />
        </svg>
        <div className="inline-block align-middle ">
          <h2 className="text-2xl font-bold text-green-needle-500">{(10000).toLocaleString()}</h2>
        </div>
      </div>
      <div className="mt-5">
        {data.map((value) => (
          <div
            className="flex justify-between items-center  hover:bg-green-needle-100 cursor-pointer rounded-md px-2 py-1"
            key={value.orderID}
          >
            <div className="flex gap-2">
              <div className="bg-slate-400 h-12 w-12 rounded-md"></div>
              <div>
                <div className="text-green-needle-500 font-bold">{value.name}</div>
                <div className=" text-gray-600 font-bold">{`${value.price.toLocaleString()} x ${value.qty.toLocaleString()}`}</div>
              </div>
            </div>
            <div className="text-green-needle-500 font-bold text-xl">{(value.price * value.qty).toLocaleString()}</div>
          </div>
        ))}
      </div>
      <hr className="mt-5 mb-5" />
      <div className="flex justify-between px-2">
        <div className=" text-orange-700 font-bold">ส่วนลด (บาท)</div>
        <div className="text-orange-700  font-bold text-xl">80</div>
      </div>
      <button className="mt-10 rounded-md bg-green-needle-500 w-full p-3 text-white text-xl font-bold hover:bg-green-800">
        ชำระเงิน
      </button>
    </div>
  );
}
