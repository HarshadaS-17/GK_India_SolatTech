import Container from "../../../components/UI/Container";

const stats = [
  {
    value: "10,000+",
    label: "Happy Customers",
  },
  {
    value: "150 MW+",
    label: "Solar Installed",
  },
  {
    value: "₹100 Cr+",
    label: "Electricity Bills Saved",
  },
  {
    value: "25+",
    label: "Cities Served",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y rounded-2xl border border-gray-200 bg-white shadow-lg md:grid-cols-4 md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center p-8 text-center"
            >
              <h2 className="text-4xl font-extrabold text-blue-600 lg:text-5xl">
                {stat.value}
              </h2>

              <p className="mt-3 text-sm font-medium text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
