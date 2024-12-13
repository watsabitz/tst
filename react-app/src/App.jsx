import classnames from "classnames";
import classes from "./index.module.scss";

import { NavLink, Route, Routes } from "react-router";
import Search from "./modules/Search";
import Dashboard from "./modules/Dashboard";

function App() {
  return (
    <>
      <div className={classnames(classes.main, "border-zinc-300 rounded-md")}>
        <div className="flex h-20 flex-row border-fuchsia-400 p-4 my-4 rounded-md border-2 justify-around w-full mx-auto  bg-white">
          <NavLink to="/" end>
            <button className="rounded h-full w-64 bg-indigo-500 hover:bg-violet-600 text-teal-100">
              Home
            </button>
          </NavLink>
          <NavLink to="/dashboard" end>
            <button className="rounded h-full w-64 bg-indigo-500 hover:bg-violet-600 text-teal-100">
              Dashboard
            </button>
          </NavLink>
        </div>
        <div
          className={classnames(
            classes.content,
            "rounded-md border-2 border-fuchsia-400"
          )}
        >
          <Routes>
            <Route index element={<Search />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
