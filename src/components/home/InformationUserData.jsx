import React from "react";

const InformationUserData = (props) => {
  const { filterAge, dataLength } = props;
  return (
    <div className="col-sm-12 bg-dark rounded col-md-8 offset-md-4 my-4">
      <div className="row p-2">
        <div className="col-12 col-sm-6 col-md-4 text-white ">
          <div className="d-flex flex-column justify-content-center">
            <h6>{filterAge.findMaxAges(false)["maxAge"]} بیشترین سن</h6>
            <h6>{filterAge.findMinAges(false)["minAge"]} کمترین سن</h6>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 text-white ">
          <div className="d-flex flex-column">
            <h6>
              {filterAge.findMaxAges(false)["length"]} تعداد کاربران با بیشترین
              سن
            </h6>
            <h6>
              {filterAge.findMinAges(false)["length"]} تعداد کاربران با کمترین
              سن
            </h6>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 text-white ">
          <div className="d-flex flex-column">
            <h6> {dataLength} تعداد کل کاربران </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationUserData;
