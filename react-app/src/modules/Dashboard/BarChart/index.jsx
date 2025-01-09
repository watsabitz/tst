import { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";

const BarChart = ({ fetchedData = {}, currentPage, pageSize }) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const config = {
      title: {
        text: "Sum Characters In Chunk",
      },
      data: [],
      series: [
        {
          type: "bar",
          xKey: "character",
          yKey: `sum`,
        },
      ],
      axes: [
        {
          type: "category",
          position: "bottom",
          title: {
            text: "Character",
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
        const sum = slicedValues.reduce(
          (prevValue, currentValue) => prevValue + currentValue,
          0
        );
        config.data.push({ character: key, sum });
      }
    }

    setChartOptions(config);
  }, [fetchedData, currentPage, pageSize]);

  return <AgCharts options={chartOptions} />;
};

export default BarChart;
