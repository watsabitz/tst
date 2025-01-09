import { useEffect, useState } from "react";
import Select from "react-select";
import classes from "./index.module.scss";
import classnames from "classnames";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const Dashboard = () => {
  const pageSize = 200;
  const currentPage = 2;

  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  useEffect(() => {
    const fetchOptions = async () => {
      const rsp = await fetch("http://localhost:8080/big-data/fields");
      const data = await rsp.json();
      const selectOptions = data.map((value) => ({ label: value, value }));
      setOptions(selectOptions);
    };

    fetchOptions();
  }, []);

  useEffect(() => {
    const fields = selectedOptions.map(({ value }) => value);
    const fetchData = async () => {
      const rsp = await fetch("http://localhost:8080/big-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields,
        }),
      });
      const data = await rsp.json();
      setFetchedData(data);
    };

    if (selectedOptions.length > 0) {
      fetchData();
    }
  }, [selectedOptions, setFetchedData]);

  return (
    <div className={classnames(classes.main, "w-full p-4")}>
      <div className={classnames(classes.leftSide)}>
        <div className={classnames(classes.header, "w-full flex my-10 gap-4")}>
          <label htmlFor="fields">Select fields</label>
          <Select
            id="fields"
            isMulti
            name="fields"
            options={options}
            className="w-1/2"
            value={selectedOptions}
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2">
          <BarChart
            fetchedData={fetchedData}
            selectedOptions={selectedOptions}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        </div>
        <div className="w-1/2">
          <LineChart
            fetchedData={fetchedData}
            selectedOptions={selectedOptions}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        </div>
      </div>
      <div className={classnames(classes.leftSide)}>right side</div>
    </div>
  );
};

export default Dashboard;
