export default function StatsSection() {
  const stats = [
    { label: "Solar Power Generated", value: "250K MWh" },
    { label: "Wind Turbines Installed", value: "1,200+" },
    { label: "EV Charging Points", value: "800+" },
    { label: "Carbon Saved", value: "5.6M Tons" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, i) => (
          <div key={i}>
            <p className="text-3xl font-bold text-teal-900">{item.value}</p>
            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
