import classnames from "classnames";
import classes from "./index.module.scss";

import { NavLink, Route, Routes } from "react-router";
import Search from "./modules/Search";
import Dashboard from "./modules/Dashboard";

function App() {
  return (
    <>
      <div className={classnames(classes.main, "border-zinc-300 rounded-md")}>
        <div
          className={classnames(
            classes.header,
            "rounded-md border-2 border-slate-100"
          )}
        >
          <NavLink to="/" end>
            <button className="rounded h-10 w-64 bg-indigo-500 hover:bg-indigo-600 text-teal-100 ">
              Search
            </button>
          </NavLink>
          <NavLink to="/dashboard" end>
            <button className="rounded h-10  w-64 bg-indigo-500 hover:bg-indigo-600 text-teal-100">
              Dashboard
            </button>
          </NavLink>
        </div>
        <div
          className={classnames(
            classes.content,
            "rounded-md border-2 border-slate-100"
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
