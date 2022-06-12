import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/layouts/Navbar";
import Demo from "./pages/Demo";
import User from "./pages/User";

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
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
