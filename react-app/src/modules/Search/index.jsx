import { useMemo, useState } from "react";
import classes from "./index.module.scss";
import classnames from "classnames";
import { debounce } from "lodash";
import Loading from "/src/components/Loading";
import { toast } from "react-toastify";

const Search = () => {
  const [searchedText, setSearchedText] = useState("");
  const [results, setResults] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const debouncedLoadPlaces = useMemo(() => {
    const loadPlaces = async ({ query }) => {
      try {
        const baseUrl = "http://localhost:8080";
        const endpoint = "/slow-search";
        const searchParams = new URLSearchParams([
          ["search", query],
        ]).toString();

        const url = new URL(`${endpoint}?${searchParams}`, baseUrl);

        const rsp = await fetch(url);
        const data = await rsp.json();

        setResults(data);
        setLoadingSearch(false);
      } catch (error) {
        console.error(error);
        setResults([]);
        setLoadingSearch(false);
        toast.error("Something when wrong, please try again", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };

    return debounce(loadPlaces, 600);
  }, []);

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchedText(query);
    setLoadingSearch(true);
    setResults([]);

    if (query.length > 0) {
      debouncedLoadPlaces({ query });
    } else {
      debouncedLoadPlaces.cancel();
      setResults([]);
      setLoadingSearch(false);
    }
  };
  return (
    <div className={classnames(classes.search)}>
      <div className={classnames(classes.searchBox)}>
        <label htmlFor="search">
          <h3 className="text-indigo-500 text-lg font-bold">Search country</h3>
        </label>
        <input
          placeholder="Type to search ..."
          type="text"
          className={classnames(
            classes.searchInput,
            "border-2 border-indigo-100 rounded-md w-full my-2 p-2 h-12"
          )}
          id="search"
          value={searchedText}
          onChange={handleSearchInput}
        />
        {loadingSearch && (
          <div className={classes.loading}>
            <Loading size="3rem" stroke="#76f" />
          </div>
        )}
      </div>

      {results.length > 0 && (
        <div
          className={classnames(
            classes.searchResults,
            "rounded-md border-2 border-slate-100"
          )}
        >
          {results.map((result, i) => {
            return (
              <div
                className={classnames(classes.searchItem, "p-4")}
                key={`$result + ${i}`}
              >
                {result}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
