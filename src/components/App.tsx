import { Footer, Header, ModalCart } from "./modules";
import { Products } from "./pages";

export const App = () => (
  <div className="flex min-h-screen flex-col gap-y-px text-gray-main">
    <Header />
    <Products className="grow" />
    <ModalCart />
    <Footer />
  </div>
);
