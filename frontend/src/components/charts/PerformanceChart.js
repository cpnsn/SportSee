import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart = ({ performance }) => {
  const customLabels = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  const processedData =
    performance?.data?.map((item) => ({
      value: item.value,
      kind:
        customLabels[performance.kind[item.kind]] ||
        performance.kind[item.kind],
    })) || [];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={processedData}>
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
