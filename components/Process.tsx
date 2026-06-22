const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding your business, services, and goals.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Planning structure, content, and user experience.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building a fast, responsive, and modern website.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deployment, SEO setup, hosting, and domain configuration.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Maintenance, updates, monitoring, and improvements.",
  },
];

export default function Process() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Process
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            How I Deliver Projects
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            A structured approach that ensures your website is
            delivered professionally from start to finish.
          </p>

        </div>

        <div className="mt-20 grid lg:grid-cols-5 gap-6">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div className="text-5xl font-bold text-blue-600">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}