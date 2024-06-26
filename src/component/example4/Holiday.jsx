import { useContext, useState, useReducer } from "react";
import PackageViewComponent from "./PackageView";
import SearchPackageComponent from "./SearchPackage";
import HolidayContext from "./HolidayContext";
import holidayPackageList from "./fakedb";

let HolidayComponent = () => {
  const holidayPackageReducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_BY_PACKAGE_TITLE":
        if (state.searchTitle === "") {
          return { ...state, packageList: holidayPackageList };
        } else {
          const filterByPackageTitle = holidayPackageList.filter((item) => {
            if (
              item?.packageName
                .toLowerCase()
                .includes(state.searchTitle.toLowerCase())
            ) {
              return item;
            }
          });
          return { ...state, packageList: filterByPackageTitle };
        }

        break;
      case "SET_SEARCH_TITLE":
        return { ...state, searchTitle: action.payload };
        break;
      case "SET_MIN_PRICE":
        return { ...state, minimumPrice: action.payload };
        break;
      case "SET_MAX_PRICE":
        return { ...state, maximumPrice: action.payload };
        break;
      case "SEARCH_BY_PRICE_RANGE":
        if (state.minimumPrice && state.maximumPrice && parseInt(state.maximumPrice) >  parseInt(state.minimumPrice)) {
          const filterByPackagePrice = holidayPackageList.filter((item) => {
            const trimmedString = item.packagePrice.replace( /,/g, "" ).slice(1)
            let price = parseInt(trimmedString);
            console.log( price <= parseInt(state.maximumPrice), price, )
            if (
              price >= parseInt(state.minimumPrice) &&
              price <= parseInt(state.maximumPrice)
            ) {
              return item;
            }
          });
          return { ...state, packageList: filterByPackagePrice };
        } else {
          return { ...state, packageList: holidayPackageList };
        }

        break;
      default:
        return state;
        break;
    }
  };

  const [holidayPackages, holidayPackageDispatch] = useReducer(
    holidayPackageReducer,
    {
      packageList: holidayPackageList,
      searchTitle: "",
      minimumPrice: null,
      maximumPrice: null,
    }
  );

  return (
    <div className="p-1">
      <h1 style={{ color: "darkblue", textAlign: "center" }}>Context API</h1>

      <HolidayContext.Provider
        value={{ holidayPackages, holidayPackageDispatch }}
      >
        <SearchPackageComponent />
        <PackageViewComponent />
      </HolidayContext.Provider>
    </div>
  );
};

export default HolidayComponent;
