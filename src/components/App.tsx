import { Route, Routes } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";

const App = () => (
   <div className="flex min-h-screen flex-col gap-y-px text-gray-main">
      <Header />
      <Routes>
         <Route index element={<Products className="grow" />} />
      </Routes>
      <Footer />
   </div>
);

export default App;
