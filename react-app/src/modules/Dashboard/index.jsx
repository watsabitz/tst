import { useEffect, useState } from "react";
import classes from "./index.module.scss";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import StandardDeviation from "./StandardDeviation";
import Header from "./Header";

const PAGE_SIZE = 200;

const Dashboard = () => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [fetchedData, setFetchedData] = useState({});

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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
    } else {
      setFetchedData([]);
    }
  }, [selectedOptions, setFetchedData]);

  useEffect(() => {
    if (Object.values(fetchedData).length > 0) {
      const itemsLength = Object.values(fetchedData)[0].length;
      const pageCount = Math.ceil(itemsLength / PAGE_SIZE);
      setPageCount(pageCount);
    } else {
      setPageCount(1);
    }
  }, [fetchedData]);

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <Header
          options={options}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          fetchedData={fetchedData}
        />
      </div>
      <div className={classes.bar}>
        <BarChart
          fetchedData={fetchedData}
          selectedOptions={selectedOptions}
          currentPage={currentPage}
          pageSize={PAGE_SIZE}
        />
      </div>
      <div className={classes.line}>
        <LineChart
          fetchedData={fetchedData}
          selectedOptions={selectedOptions}
          currentPage={currentPage}
          pageSize={PAGE_SIZE}
        />
      </div>
      <div className={classes.pie}>
        <PieChart
          fetchedData={fetchedData}
          selectedOptions={selectedOptions}
          currentPage={currentPage}
          pageSize={PAGE_SIZE}
        />
      </div>
      <div className={classes.std}>
        <StandardDeviation fetchedData={fetchedData} />
      </div>
    </div>
  );
};

export default Dashboard;
