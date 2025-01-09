import { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";

const LineChart = ({ fetchedData = {}, currentPage, pageSize }) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const config = {
      title: {
        text: "Character frequency per 1000 Characters",
      },
      data: [],
      series: [],
      axes: [
        {
          type: "category",
          position: "bottom",
          title: {
            text: "Index",
          },
        },
        {
          type: "number",
          position: "left",
          title: {
            text: "Amount",
          },
        },
      ],
    };

    const startIndex = (currentPage - 1) * pageSize;

    if (Object.keys(fetchedData).length === 0) {
      config.data = [];
    } else {
      for (const [key, value] of Object.entries(fetchedData)) {
        const slicedValues = value.splice(startIndex, pageSize);
        slicedValues.forEach((value, index) => {
          if (!config.data[index]) {
            config.data.push({ index: index.toString() });
          }
          config.data[index][key] = value;
        });

        config.series.push({
          type: "line",
          xKey: "index",
          yKey: key,
          yName: key,
        });
      }
    }

    setChartOptions(config);
  }, [fetchedData, currentPage, pageSize]);

  return <AgCharts options={chartOptions} />;
};

export default LineChart;
