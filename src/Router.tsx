import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/coffee-delivery" element={<DefaultLayout />}>
        <Route path="/coffee-delivery" element={<Home />} />
        <Route path="/coffee-delivery/checkout" element={<Checkout />} />
        <Route path="/coffee-delivery/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
