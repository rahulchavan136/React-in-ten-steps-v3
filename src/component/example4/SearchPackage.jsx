import { useContext } from "react";
import HolidayContext from "./HolidayContext";

let SearchPackageComponent = () => {
  let { holidayPackages, holidayPackageDispatch } = useContext(HolidayContext);
  console.log(holidayPackages, "****HOLIDAY PACKAGES");
  return (
    <div className="card shadow m-3 p-2">
      <div className="row my-2 mx-1">
        <div className="col-md-6">
          <input
            type="search"
            placeholder="search offer"
            className="form-control"
            value={holidayPackages.searchTitle}
            onChange={(event) => {
              holidayPackageDispatch({
                type: "SET_SEARCH_TITLE",
                payload: event.target.value,
              });
              holidayPackageDispatch({ type: "SEARCH_BY_PACKAGE_TITLE" });
            }}
          />
        </div>

        <div className="col-md-3">
          <input
            type="number"
            placeholder="Price from"
            className="form-control"
            onChange={(event) => {
              holidayPackageDispatch({
                type: "SET_MIN_PRICE",
                payload: event.target.value,
              });
              holidayPackageDispatch({ type: "SEARCH_BY_PRICE_RANGE" });
            }}
          />
        </div>

        <div className="col-md-3">
          <input
            type="number"
            placeholder="Price to"
            className="form-control"
            onChange={(event) => {
              holidayPackageDispatch({
                type: "SET_MAX_PRICE",
                payload: event.target.value,
              });
              holidayPackageDispatch({ type: "SEARCH_BY_PRICE_RANGE" });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPackageComponent;
