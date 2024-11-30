import React from "react";
import CustomChartTooltip from "../CustomChartTooltip";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DailyActivityChart = ({ activity }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={450}
        height={600}
        data={activity}
        barSize={10}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          tickFormatter={(_, index) => index + 1}
          tickLine={false}
          axisLine={{ stroke: "#9B9EAC" }}
          tick={{ fill: "#9B9EAC" }}
          dy={20}
        />

        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#9B9EAC" }}
          dx={20}
        />
        <Tooltip content={<CustomChartTooltip />} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={10}
          wrapperStyle={{ paddingBottom: "60px" }}
          formatter={(value) => {
            if (value === "kilogram") return "Poids (kg)";
            if (value === "calories") return "Calories brûlées (kCal)";
            return value;
          }}
        />
        <Bar
          dataKey="kilogram"
          fill="#000000"
          radius={[100, 100, 0, 0]}
          activeBar={<Rectangle fill="#000000" stroke="#000000" />}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          radius={[100, 100, 0, 0]}
          activeBar={<Rectangle fill="#E60000" stroke="#E60000" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DailyActivityChart;
