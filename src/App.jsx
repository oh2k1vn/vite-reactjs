import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/layouts/Navbar";
import User from "./pages/User";
import Category from "./pages/Category";
import Loader from "./components/common/loader";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="flex dark:bg-slate-600 min-h-screen">
        <NavBar open={open} setOpen={setOpen} />
        <div
          className={` flex-1 mr-4 mt-4 ${open ? "ml-24" : "ml-[19rem]"} ${
            open && "duration-300"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/category" element={<Category />} />
            <Route path="/loader" element={<Loader />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
