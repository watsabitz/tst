import { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";
import Select from "react-select";

const ChartExample = ({ fetchedData = {}, selectedOptions }) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const config = {
      data: [],
      series: [],
    };
    for (const [key, value] of Object.entries(fetchedData)) {
      config.series.push({
        type: "bar",
        xKey: `sample`,
        yKey: `${key}Frequency`,
        yName: key,
      });
      value.slice(0, 20).forEach((value, i) => {
        if (!config.data[i]) {
          config.data[i] = { sample: i, [`${key}Frequency`]: value };
        } else {
          config.data[i][`${key}Frequency`] = value;
        }
      });
    }
    setChartOptions(config);
  }, [fetchedData]);

  return <AgCharts options={chartOptions} />;
};

const Dashboard = () => {
  const pageSize = 200;
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
    <div className="w-full p-4">
      <div className="w-full flex my-10 ">
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
        <label htmlFor="range">Select range</label>
        <input id="range" type="range" className="w-1/2" min="0" max="100" />
      </div>
      <div>
        <ChartExample
          fetchedData={fetchedData}
          selectedOptions={selectedOptions}
        />
      </div>
    </div>
  );
};

export default Dashboard;
