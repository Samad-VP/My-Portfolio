import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { X, Menu } from "lucide-react";
import { Navbar } from "./components/Navbar";

BrowserRouter;
function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
