export default function CustomAverageChartTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div
        className="text-center bg-white text-xs px-4 py-2 ml-12"
        style={{
          padding: "10px",
          fontSize: "12px",
        }}
      >
        <p>{payload[0].value} min</p>
      </div>
    );
  }

  return null;
}
