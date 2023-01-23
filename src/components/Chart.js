import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CustomEvents from "highcharts-custom-events";
import HC_brokenAxis from "highcharts/modules/broken-axis";

HC_brokenAxis(Highcharts);
CustomEvents(Highcharts);

const Chart = ({ onEvent }) => {
  const chartOptions = {
    xAxis: {
      categories: ["Test1", "Test2"],
      labels: {
        events: {
          mouseover: () => {
            onEvent("mouseover");
            console.log("mouseover");
          },

          mouseout: () => {
            onEvent("mouseout");
            console.log("mouseout");
          },

          click: () => {
            onEvent("click");
            console.log("click");
          },
        },
      },
    },
    series: [
      {
        data: [44, 24],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default Chart;
