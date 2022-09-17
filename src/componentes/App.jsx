import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cards } from "../pages/Cards";
import { Home } from "../pages/Home";
import { ToastContainer } from "react-toastify";
import '../../node_modules/react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
