import styles from "./index.module.scss";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import Select from "react-select";

const Header = ({
  options,
  selectedOptions,
  setSelectedOptions,
  pageCount,
  currentPage,
  setCurrentPage,
}) => {
  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div className={styles.headerBox}>
      <div className={styles.select}>
        <label htmlFor="fields">Select fields</label>
        <Select
          id="fields"
          isMulti
          name="fields"
          options={options}
          value={selectedOptions}
          onChange={handleChange}
        />
      </div>
      <div className={styles.pagination}>
        <ResponsivePagination
          current={currentPage}
          total={pageCount}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Header;
