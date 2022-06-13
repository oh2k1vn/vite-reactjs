import React from "react";
import { NavLink } from "react-router-dom";
import Toggle from "../../Toggle";
import data from "./data";

export default function NavBar(props) {
  const { open, setOpen } = props;

  return (
    <div
      className={`ring-1 ring-slate-900/5 shadow-xl flex flex-col dark:text-slate-400 dark:bg-slate-800  min-h-screen  mr-4 fixed top-0 left-0  ${
        open ? "w-20" : "w-72"
      } ${open && "duration-300"}`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`text-center bg-sky-200 py-4 cursor-pointer font-bold`}
      >
        {!open ? "VanLangGO" : "VLGO"}
      </div>

      <div className="flex-1 flex flex-col">
        {data?.map((item) => (
          <ItemMenu
            open={open}
            setOpen={setOpen}
            key={item?.id}
            title={item?.title}
            path={item?.path}
            active={item?.active}
          />
        ))}
      </div>
      <Toggle open={open} setOpen={setOpen} />
    </div>
  );
}

const ItemMenu = (props) => {
  const { id, title, path, active, setOpen, open } = props;
  let activeStyle = {
    backgroundColor: "#0ea5e9",
    color: "#fff",
  };
  return (
    <NavLink
      to={path}
      key={id}
      className={`${
        !active && "hidden"
      } p-4 hover:bg-sky-200 hover:text-white duration-150 font-semibold text-slate-500 `}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      <span className={`${open && "hidden"}`}>{title}</span>
    </NavLink>
  );
};
