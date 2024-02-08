import Footer from "./Footer";
import Header from "./Header";

const App = () => (
   <div className="flex min-h-screen flex-col text-gray-main">
      <Header />
      {/* <Routes>
         <Route index element={<Products />} />
      </Routes> */}
      <div className="grow" />
      <Footer />
   </div>
);

export default App;
