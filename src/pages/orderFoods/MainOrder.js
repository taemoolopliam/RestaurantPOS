import React from "react";
import ProductList from "./ProductList";
import ManageOrders from "./ManageOrders";

export default function MainOrder() {
  return (
    <div className="grid xl:grid-cols-7 gap-5 grid-cols-1">
      <div className="col-span-5">
        <ProductList />
      </div>
      <div className="col-span-2 hidden xl:block ">
        <ManageOrders />
      </div>
    </div>
  );
}
