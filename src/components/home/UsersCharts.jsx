import React from "react";
import { Bar } from "react-chartjs-2";

const UsersCharts = (props) => {
  const { chartData } = props;
  return (
    <div className="p-2">
      <Bar
        data={chartData}
        options={{
          scales: {
            xAxes: [
              {
                barPercentage: 0.4,
              },
            ],
            yAxes: [
              {
                barPercentage: 0.2,
              },
            ],
          },
          plugins: {
            title: {
              display: true,
              text: "Users Age",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};

export default React.memo(UsersCharts);
