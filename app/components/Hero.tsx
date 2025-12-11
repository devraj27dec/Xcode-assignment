import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function Hero({
  setShowModal,
}: {
  setShowModal: (value: boolean) => void;
}) {
  return (
    <>
      <section className="relative pt-20 pb-32 bg-linear-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-20">
          <div className="text-center">
            <div className="inline-block bg-blue-100 text-blue-900 px-6 py-2 rounded-full mb-6 border border-blue-200">
              <span className="font-semibold">2nd Annual Edition</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-red-500">CX & LOYALTY</span>
              <br />
              <span className="text-blue-900">SUMMIT MENA 2023</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
              Driving Revenue & Building Relations through CX Transformation
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white shadow-lg px-6 py-3 rounded-full border border-gray-200">
                <Calendar size={20} className="text-red-500" />
                <span className="font-semibold text-gray-900">
                  November 1-2, 2023
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white shadow-lg px-6 py-3 rounded-full border border-gray-200">
                <MapPin size={20} className="text-blue-900" />
                <span className="font-semibold text-gray-900">Dubai, UAE</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-10">
              <div className="bg-white shadow-xl rounded-xl p-4 min-w-[70px] border-2 border-red-500">
                <div className="text-3xl font-bold text-red-500">10</div>
                <div className="text-black text-sm">Days</div>
              </div>

              <div className="bg-white shadow-xl rounded-xl p-4 min-w-[70px] border-2 border-red-500">
                <div className="text-3xl font-bold text-red-500">05</div>
                <div className="text-black text-sm">Hours</div>
              </div>

              <div className="bg-white shadow-xl rounded-xl p-4 min-w-[70px] border-2 border-red-500">
                <div className="text-3xl font-bold text-red-500">30</div>
                <div className="text-black text-sm">Mins</div>
              </div>

              <div className="bg-white shadow-xl rounded-xl p-4 min-w-[70px] border-2 border-red-500">
                <div className="text-3xl font-bold text-red-500">40</div>
                <div className="text-black text-sm">Secs</div>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
            >
              Register Now <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#19325E] mb-2">500+</div>
              <div className="text-gray-600">Attendees</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#19325E] mb-2">50+</div>
              <div className="text-gray-600">Speakers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#19325E] mb-2">30+</div>
              <div className="text-gray-600">Sessions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#19325E] mb-2">2</div>
              <div className="text-gray-600">Days</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
