import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cards } from "../pages/Cards";
import { Home } from "../pages/Home";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
