import React from "react";
import PropTypes from "prop-types";
import CustomAverageChartTooltip from "../CustomAverageChartTooltip";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const getDayLetter = (day) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return days[day - 1];
};

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
          tick={({ x, y, index }) => {
            const day = averageSession[index].day;
            let xOffset = 0;
            if (index === 0) xOffset = 10;
            if (index === averageSession.length - 1) xOffset = -10;
            return (
              <text
                x={x + xOffset}
                y={y}
                dy={-30}
                textAnchor="middle"
                fill="#fff"
                opacity={0.5}
                fontSize={14}
              >
                {getDayLetter(day)}
              </text>
            );
          }}
          interval={0}
          tickMargin={30}
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
          activeDot={{
            r: 4,
            fill: "#fff",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: 10,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

AverageSessionChart.propTypes = {
  averageSession: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AverageSessionChart;
