export default function CustomAverageChartTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="text-center bg-white text-xs px-4 py-2 ml-12">
        <p className="mb-8">{payload[0].value} min</p>
      </div>
    );
  }

  return null;
}
