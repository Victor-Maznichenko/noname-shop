import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@components/App";

import "@styles/global.scss";
import { ModalProvider } from "./contexts/isModalOpen";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ModalProvider>
      <App />
    </ModalProvider>
  </BrowserRouter>
);
