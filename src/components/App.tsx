import { Route, Routes } from "react-router-dom";

import ModalCartPortal from "@/components/Cart/ModalCartPortal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";

const App = () => (
  <div className="flex min-h-screen flex-col gap-y-px text-gray-main">
    <Header />
    <ModalCartPortal />
    <Routes>
      <Route index element={<Products className="grow" />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
