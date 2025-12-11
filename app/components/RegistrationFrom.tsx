import { X } from "lucide-react";


type Props = {
    setShowModal: (value:boolean) => void
};

export default function RegistrationFrom({setShowModal}: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Register Your Interest
        </h3>
        <div className="space-y-4">
          <label htmlFor="name" className="text-black">Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19325E] focus:border-transparent outline-none"
          />
          <label htmlFor="name" className="text-black">Email</label>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19325E] focus:border-transparent outline-none"
          />
          <label htmlFor="name" className="text-black">Company</label>

          <input
            type="text"
            placeholder="Company"
            className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19325E] focus:border-transparent outline-none"
          />
          <label htmlFor="name" className="text-black">Job Title</label>

          <input
            type="text"
            placeholder="Job Title"
            className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19325E] focus:border-transparent outline-none"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              alert("Thank you for your interest! We will contact you soon.");
              setShowModal(false);
            }}
            className="w-full bg-[#19325E] text-white py-3 rounded-lg font-bold hover:bg-[#E63946] transition-colors"
          >
            Submit Registration
          </button>
        </div>
      </div>
    </div>
  );
}
