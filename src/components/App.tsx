import { Route, Routes } from "react-router-dom";

import ModalCart from "@components/Cart/ModalCart";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Products from "@components/Products";

const App = () => (
   <div className="flex min-h-screen flex-col gap-y-px text-gray-main">
      <Header />
      <ModalCart />
      <Routes>
         <Route index element={<Products className="grow" />} />
      </Routes>
      <Footer />
   </div>
);

export default App;
