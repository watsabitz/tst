import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const StandardDeviation = ({ fetchedData = {} }) => {
  const [tableData, setTableData] = useState({});
  useEffect(() => {
    const tmp1 = {};
    for (const [key, value] of Object.entries(fetchedData)) {
      const sum = value.reduce((acc, currentValue) => acc + currentValue, 0);
      const mean = sum / value.length;
      tmp1[key] = mean;
    }

    const tmp2 = {};

    for (const [key, value] of Object.entries(fetchedData)) {
      const mean = tmp1[key];
      const deviationsSquare = [];
      value.forEach((val) => {
        const deviation = val - mean;
        const deviationSquare = Math.pow(deviation, 2);
        deviationsSquare.push(deviationSquare);
      });

      const sum2 = deviationsSquare.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );
      const variance = sum2 / deviationsSquare.length;
      const standardDeviation = Math.sqrt(variance);
      tmp2[key] = [key, mean, standardDeviation];
    }
    setTableData(tmp2);
  }, [fetchedData]);
  return (
    <div className={styles.tableBox}>
      <table>
        <thead>
          <tr>
            <th colSpan="3">STD Table</th>
          </tr>
          <tr>
            <th>Character</th>
            <th>Mean</th>
            <th>STD</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(tableData).map(([key, mean, standardDeviation]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{mean.toFixed(2)}</td>
              <td>{standardDeviation.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandardDeviation;
