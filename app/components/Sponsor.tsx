export default function Sponsor() {
  return (
    <section
      id="sponsor"
      className="py-20 bg-linear-to-br from-blue-900 via-slate-800 to-blue-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Sponsor?</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Position your brand in front of key decision-makers and industry
            leaders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Demonstrate Thought Leadership",
              description:
                "Position your company as a thought leader by delivering presentations or moderating panels to a pre-qualified audience of decision makers",
            },
            {
              title: "Network & Generate Leads",
              description:
                "Optimize networking opportunities by getting in front of key decision makers prequalified based on seniority and budget availability",
            },
            {
              title: "Brand Positioning",
              description:
                "Establish and strengthen your brand in front of CMOs, Heads of CX & Loyalty who are looking to strengthen their strategies",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-blue-100 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-white/20">
          <h3 className="text-3xl font-bold mb-4">Interested in Sponsoring?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Contact us to learn more about ROI-driven sponsorship opportunities
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Phone:</span>
              <a href="tel:+919876543210" className="hover:text-red-300">
                +91 987 654 3210
              </a>
            </div>
            <div className="hidden md:block text-blue-300">|</div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Email:</span>
              <a href="mailto:abcd@gmail.com" className="hover:text-red-300">
                abcd@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
