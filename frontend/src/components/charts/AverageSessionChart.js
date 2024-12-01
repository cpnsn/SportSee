import React from "react";
import CustomAverageChartTooltip from "../customAverageChartTooltip";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AverageSessionChart = ({ averageSession }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={320}
        data={averageSession}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", zIndex: -1 }}
        >
          <rect x="0" y="0" width="75%" height="100%" fill="#FF0000" />
          <rect x="75%" y="0" width="25%" height="100%" fill="#E60000" />
        </svg>

        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          dy={-30}
          tick={{ fill: "#fff", opacity: 0.5 }}
          ticks={averageSession.map(item => item.day)}
          tickFormatter={(value) => {
            switch (value) {
              case 1: return "L";
              case 2: return "M";
              case 3: return "M";
              case 4: return "J";
              case 5: return "V";
              case 6: return "S";
              case 7: return "D";
              default: return value;
            }
          }}
          interval={0}
          tickMargin={10}
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
