import React from "react";
import CustomAverageChartTooltip from "../customAverageChartTooltip";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceArea,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AverageSessionChart = ({ averageSession }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={averageSession}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 30,
        }}
      >
        <ReferenceArea
          x1={averageSession[0]?.day}
          x2={averageSession[4]?.day}
          fill="#FF0000"
          fillOpacity={1}
        />
        <ReferenceArea
          x1={averageSession[4]?.day}
          x2={averageSession[6]?.day}
          fill="#E60000"
          fillOpacity={1}
        />

        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          dy={-30}
          tick={{ fill: "#fff", opacity: 0.5 }}
        />
        <YAxis hide={true} domain={["dataMin - 20", "dataMax + 20"]} />

        <Tooltip content={<CustomAverageChartTooltip />} />

        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={1.5}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSessionChart;
