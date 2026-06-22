export default function ProjectGallery() {
  const projects = [
    {
      title: "Ramesh & Ramesh Law Associates",
      type: "Client Project",
      image: "/lawfirm.png",
    },
    {
      title: "Business Website Concept",
      type: "Design Concept",
      image: "/concept1.jpg",
    },
    {
      title: "Portfolio Website Concept",
      type: "Design Concept",
      image: "/concept2.jpg",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Portfolio
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Recent Work & Concepts
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Client projects and design concepts demonstrating modern,
            business-focused website solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition"
            >
              <div className="aspect-video bg-slate-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">
                  {project.type}
                </span>

                <h3 className="mt-2 text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}