import { Chart } from "react-google-charts";
import { Loading } from "carbon-components-react";
// import { useState } from "react";

type PieChartProps = {
  percentHelpful: number;
};

const PieChart = ({ percentHelpful }: PieChartProps) => {
  //   const [isLoading, setLoading] = useState<boolean>(true);
  const percent = percentHelpful * 100;
  const data = [
    ["Helpfulness", "Percent Agree"],
    ["Helpful", percent],
    ["Not As Helpful", 100 - percent],
  ];
  const options = {
    title: "Percent of FA's who found this helpful:",
    legend: "none",
    pieHole: 0.4,
    is3D: false,
    colors: ["orange", "grey"],
  };
  return (
    <>
      <Chart
        chartType="PieChart"
        width="100%"
        height="200px"
        data={data}
        loader={<Loading />}
        options={options}
        style={{ border: "black" }}
      />
    </>
  );
};

export default PieChart;
