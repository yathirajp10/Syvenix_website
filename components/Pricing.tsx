export default function Pricing() {
  const plans = [
    {
      title: "Starter Website",
      price: "₹10,000 - ₹15,000",
      features: [
        "Up to 5 Pages",
        "Mobile Responsive Design",
        "Contact Form",
        "WhatsApp Integration",
        "Basic SEO Setup",
        "7-10 Day Delivery",
      ],
    },
    {
      title: "Business Website",
      price: "₹20,000 - ₹30,000",
      featured: true,
      features: [
        "Up to 10 Pages",
        "Blog Setup",
        "Hosting Assistance",
        "Domain Configuration",
        "SEO Foundations",
        "Google Search Console Setup",
        "10-15 Day Delivery",
      ],
    },
    {
      title: "Complete Business Presence",
      price: "₹30,000+",
      features: [
        "Business Website",
        "Hosting Setup",
        "Domain Management",
        "Business Email Setup",
        "SEO Setup",
        "Maintenance Support",
        "Priority Assistance",
      ],
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Pricing
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Website Packages
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Transparent pricing designed for small businesses,
            professionals, and growing brands.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-3xl border p-8 ${
                plan.featured
                  ? "border-blue-600 bg-slate-950 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-full mb-6">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {plan.title}
              </h3>

              <div className="mt-4 text-3xl font-bold text-blue-500">
                {plan.price}
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://forms.gle/9EqhVPBxjCbdn7B48"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block text-center py-4 rounded-xl font-semibold ${
                  plan.featured
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100"
                }`}
              > 
                Request Proposal
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}