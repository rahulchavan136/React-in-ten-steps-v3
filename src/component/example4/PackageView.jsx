import { useContext } from "react";
import HolidayContext from './HolidayContext';

let PackageViewComponent = () => {
    let {holidayPackages} = useContext(HolidayContext);
    console.log(holidayPackages, "***CONTEXT");

    return (
        <>
            {holidayPackages?.packageList.map((item) => (
                <div className="card m-3">
                    <a href="#" style={{ "text-decoration": "none" }}>
                        <div className="row g-0">
                            <div className="col-md-4 p-2">
                                <img
                                    src={item.imgPath}
                                    style={{ width: "300px" }}
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">{item.packageName}</h5>
                                    <p className="card-text bg-white">{item.descr}</p>
                                </div>
                            </div>
                            <div className="col-md-2 bg-light">
                                <div className="card-body">
                                    <p className="card-text text-danger fw-bold bg-light">
                                        {item.offer}
                                        <br />{" "}
                                        <span>
                                            <del className="text-secondary">{item.packagePrice}</del>
                                        </span>
                                        <br />{" "}
                                        <span className="fs-1 fw-bold text-dark">
                                            {item.payblePrice}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            ))}

        </>
    )
}

export default PackageViewComponent;