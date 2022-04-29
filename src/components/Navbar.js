import React from "react";

export default function Navbar() {
  return (
    <nav className="px-3 2xl:px-10  bg-white w-full py-2 ">
      <div className="flex gap-10  align-middle justify-between">
        <div className="flex gap-10  leading-10 align-middle">
          <div className=" text-center ">
            <h4 className="text-green-needle-500  text-sm font-bold md:text-lg ">สมปองร้านอาหาร</h4>
            <h4 className="text-orange-600 text hidden md:block  text-sm -mt-2 font-medium">Sompong Restaurant</h4>
            <h4 className="text-orange-600 text md:hidden block  text-sm -mt-2 font-medium">Sompong Res..</h4>
          </div>
          <div className=" hidden xl:block">
            <ul className=" flex gap-6 leading-10 align-middle text-green-needle-500  font-bold ">
              <li className="hover:text-orange-600 cursor-pointer">โต๊ะอาหาร</li>
              <li className="hover:text-orange-600 cursor-pointer">เมนู</li>
              <li className="hover:text-orange-600 cursor-pointer">ประเภทอาหาร</li>
              <li className="hover:text-orange-600 cursor-pointer">ตั้งค่า</li>
            </ul>
          </div>
        </div>
        <div className=" hidden xl:block">
          <div className=" flex gap-6">
            <h4 className="text-green-needle-500  leading-10   font-bold text-lg">Sorot Charoensinchai</h4>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" viewBox="0 0 20 20" fill="#115E38">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className=" xl:hidden block ">
          <div className="flex  align-middle gap-5 ">
            <button className=" p-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md">ออเดอร์</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2 h-10 w-8"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="#115E38"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1={4} y1={6} x2={20} y2={6} />
              <line x1={4} y1={12} x2={20} y2={12} />
              <line x1={4} y1={18} x2={20} y2={18} />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
