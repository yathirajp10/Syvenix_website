export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          Client Feedback
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Trusted By Businesses
        </h2>

        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-10">

          <div className="text-yellow-500 text-3xl">
            ★★★★★
          </div>

          <p className="mt-6 text-xl text-slate-700 leading-relaxed">
           Professional website setup including hosting, domain configuration, SEO setup, and blog integration. The project was delivered with attention to detail and a focus on establishing a strong online presence.
          </p>

          <div className="mt-8">
            <h4 className="font-semibold">
              Ramesh & Ramesh Law Associates
            </h4>

            <p className="text-slate-500">
              Legal Services
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}