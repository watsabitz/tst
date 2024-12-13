import { useState } from "react";
import classes from "./index.module.scss";
import classnames from "classnames";

const Search = () => {
  const [searchedText, setSearchedText] = useState("");
  const [result, setResults] = useState(["romania"]);

  const fetchData = async (value) => {
    const baseUrl = "http://localhost:8080";
    const endpoint = "/slow-search";
    const searchParams = new URLSearchParams([["search", value]]).toString();

    const url = new URL(`${endpoint}?${searchParams}`, baseUrl);

    const rsp = await fetch(url);
    const data = await rsp.json();
    setResults(data);
  };

  const handlesearchInput = (e) => {
    const value = e.target.value;
    setSearchedText(value);
    fetchData(value);
  };
  return (
    <div className={classnames(classes.search)}>
      <div className={classnames(classes.searchBox)}>
        <label htmlFor="search">
          <h3 className="text-indigo-500 text-lg font-bold">Search country</h3>
        </label>
        <input
          type="text"
          className={classnames(
            classes.searchInput,
            "border-2 border-indigo-500/100 rounded-md w-5/6 my-4 h-10"
          )}
          id="search"
          value={searchedText}
          onChange={handlesearchInput}
        />
      </div>
      <div>
        {result.map((result, i) => {
          return <div key={`$result + ${i}`}>{result}</div>;
        })}
      </div>
    </div>
  );
};

export default Search;
