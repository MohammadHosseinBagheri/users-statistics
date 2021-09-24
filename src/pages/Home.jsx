import React, { useEffect, useState } from "react";
import Loading from "../components/common/Loading";
import { useGetUsers } from "../hooks/useGetUsers";
import { filterAge, handleFilterData } from "../utils/home/filter";
import UsersCharts from "../components/home/UsersCharts";
import InformationUserData from "../components/home/InformationUserData";
import Sidebar from "../components/common/Sidebar";

const Home = () => {
  const { isLoading, isFetching, isSuccess, data } = useGetUsers();
  const [chartData, setChartData] = useState(null);
  const filterDataConstructor = filterAge(setChartData, data?.data?.results);

  useEffect(() => {
    if (typeof data !== "undefined") {
      setChartData({
        labels: data.data.results.map((person) => person.name.last),
        datasets: [
          {
            label: "Ages",
            data: data.data.results.map((person) => person.dob.age),
            backgroundColor: ["#a90d80"],
          },
        ],
      });
    }
  }, [data]);
  if (isLoading || isFetching) {
    return <Loading />;
  } else if (isSuccess) {
    return (
      <>
        <div className="col-sm-12 col-md-11 ">
          <div className="row w-100 d-flex justify-content-end mt-3 home_div__container">
            <div className="d-flex flex-column align-items-end justify-content-center home_div__header">
              <h4>مکالمات</h4>
              <small>
                پیام های خودکار ارسال کنید .ابزارک را در صفحات نمایش دهید و یا
                در صفحات خاصی پنهان کنید
              </small>
            </div>
          </div>
          <div className="row w-100 px-4">
            <h6 style={{ textAlign: "right" }} className="fw-bold">
              سن کاربران هفته گذشته
            </h6>
            <InformationUserData
              filterAge={filterDataConstructor}
              dataLength={data?.data?.results?.length}
            />
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-2">
              <select
                className="form-select "
                onChange={(e) => {
                  handleFilterData(
                    e.target.value,
                    setChartData,
                    data.data.results
                  );
                }}
              >
                <option value="">فیلتر</option>
                <option value="1">بییشترین سن</option>
                <option value="2">کمترین سن</option>
              </select>
            </div>
          </div>
          <UsersCharts chartData={chartData} />
        </div>
        <Sidebar />
      </>
    );
  }
  return <div>error</div>;
};

export default Home;
