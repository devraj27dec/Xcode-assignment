

export default function MyAttend() {
  return (
    <section id="why-attend" className="py-20 bg-linear-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Attend?</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join senior industry professionals to explore emerging CX strategies, latest technologies, and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Knowledge & Insights",
                description: "Gain knowledge and insights from top industry leaders and experts from across the globe",
                icon: "🎯"
              },
              {
                title: "Network & Collaborate",
                description: "Network with industry peers in a solution-oriented environment and discuss partnerships",
                icon: "🤝"
              },
              {
                title: "Real Case Studies",
                description: "Deep dive into insights derived from real-time case studies and practical implementations",
                icon: "📊"
              },
              {
                title: "Latest Technologies",
                description: "Explore Digital, Automation and best practices that keep you at the forefront of CX excellence",
                icon: "💡"
              },
              {
                title: "Industry Collaboration",
                description: "Build industry ecosystem collaboration to address latest challenges together",
                icon: "🌐"
              },
              {
                title: "Expert Speakers",
                description: "Learn from globally renowned speakers, panelists, and moderators in power-packed sessions",
                icon: "🎤"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}