import { benefits } from "..";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About The Summit
          </h2>
          <div className="w-24 h-1 bg-[#19325E] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A strong customer experience, employee experience and customer
              loyalty program management are the hallmark of many of the world's
              most successful brands. Over the past years, customer expectations
              have evolved, making CX one of the biggest differentiators between
              brands and competition.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Two thirds of organizations globally now compete on customer
              experience alone, with 87% of business leaders having identified
              CX as their top growth engine.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 2nd Annual CX & Loyalty Summit MENA 2023 showcases innovative
              approaches that leading organizations are deploying to manage
              customer interactions and maximize customer value.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-linear-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#19325E] p-3 rounded-lg">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
