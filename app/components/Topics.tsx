import { CheckCircle } from "lucide-react";
import { topics } from "../index";

export default function Topics() {
  return (
    <section id="topics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Topic Highlights
          </h2>
          <div className="w-24 h-1 bg-[#19325E] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge topics that are shaping the future of customer
            experience and loyalty
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="group bg-linear-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-[#19325E] shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={20}
                />
                <p className="text-gray-700 leading-relaxed">{topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
