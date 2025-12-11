import { attendees, industries } from "../index";

export default function WhoAttend() {
  return (
    <section
      id="who-attends"
      className="py-20 bg-linear-to-br from-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who Will You Meet?
          </h2>
          <div className="w-24 h-1 bg-[#19325E] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {attendees.map((attendee, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="bg-linear-to-br from-blue-900 to-red-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <attendee.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {attendee.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Target Industries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-blue-50 to-red-50 p-4 rounded-lg text-center font-semibold text-gray-700 hover:from-blue-100 hover:to-red-100 transition-colors"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
