export default function SolutionsSection() {
  const solutions = [
    { title: "Web Design and Development", desc: ".", img: "Landing/webdev.png" },
    { title: "Social Media Marketing", desc: ".", img: "Landing/webdev.png" },
    { title: "Social Media Advertising", desc: "", img: "Landing/webdev.png" },
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-teal-900">Our Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {solutions.map((sol, i) => (
            <div key={i} className="p-6 border rounded-2xl hover:shadow-lg transition">
              <img src={sol.img} alt={sol.title} className="mx-auto mb-6 h-10" />
              <h3 className="text-2xl font-semibold mb-2">{sol.title}</h3>
              <p className="text-gray-600">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
