import { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";

const PieChart = ({ fetchedData = {}, currentPage, pageSize }) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const config = {
      title: {
        text: "Percentage Of Characters",
      },
      data: [],
      series: [
        {
          type: "pie",
          angleKey: "amount",
          legendItemKey: "character",
        },
      ],
    };

    const startIndex = (currentPage - 1) * pageSize;

    config.data = [];

    let totalSum = 0;
    const tmpObj = {};
    for (const [key, value] of Object.entries(fetchedData)) {
      const slicedValues = [...value].splice(startIndex, pageSize);
      const sum = slicedValues.reduce(
        (prevValue, currentValue) => prevValue + currentValue,
        0
      );
      totalSum = totalSum + sum;
      tmpObj[key] = sum;
    }

    for (const [key, value] of Object.entries(tmpObj)) {
      config.data.push({
        character: key,
        amount: Number(((value * 100) / totalSum).toFixed(2)),
      });
    }

    setChartOptions(config);
  }, [fetchedData, currentPage, pageSize]);

  return <AgCharts options={chartOptions} />;
};

export default PieChart;
