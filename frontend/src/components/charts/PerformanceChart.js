import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart = ({ performance }) => {
  const processedData =
    performance?.data?.map((item) => ({
      value: item.value,
      kind: performance.kind[item.kind],
    })) || [];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={processedData}>
        <PolarGrid stroke="#fff" radialLines={false} />
        <PolarAngleAxis dataKey="kind" tick={{ fill: "#fff", fontSize: 12 }} />
        <Radar
          name="Performance"
          dataKey="value"
          fill="#ff0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
