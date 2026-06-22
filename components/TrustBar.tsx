export default function TrustBar() {
  const items = [
    "Business Websites",
    "Hosting Setup",
    "Domain Management",
    "DNS Configuration",
    "SEO Setup",
    "Business Email",
    "Website Maintenance",
    "Landing Pages",
  ];

  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {items.map((item) => (
            <div
              key={item}
              className="px-5 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}