import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainOrder from "./pages/orderFoods/MainOrder";
import PublicLayout from "./layouts/PublicLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Routes>
          <Route path="/" element={<MainOrder />} />
          <Route path="/MainOrder" element={<MainOrder />} />
        </Routes>
      </PublicLayout>
    </BrowserRouter>
  );
}
