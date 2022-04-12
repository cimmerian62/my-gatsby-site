import React from "react";
import "./PieApp.css";
import {
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

const PieApp = ({height, weight, XP}) => {
  const data = [
    { name: "Height(in.)", value: height },
    { name: "Weight(lbs.)", value: weight },
    { name: "XP", value: XP },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default PieApp;