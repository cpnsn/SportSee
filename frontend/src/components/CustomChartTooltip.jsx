export default function CustomChartTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="text-center text-white text-xs bg-redChart px-4 py-6 ml-12">
        <p className="mb-8">{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    );
  }

  return null;
}
