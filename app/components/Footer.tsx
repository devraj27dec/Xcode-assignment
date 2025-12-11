import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 ">
          <div>
            <Image
                src="/logo.png"
                alt="CX-Loyalty-logo"
                width={220}
                height={220}
            />
            <p className="text-gray-400">
              Driving revenue and building relations through CX transformation
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Event Details</h4>
            <p className="text-gray-400 mb-2">November 1-2, 2023</p>
            <p className="text-gray-400 mb-2">Dubai, UAE</p>
            <p className="text-gray-400">www.cxloyaltymena.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Phone: +91 987 654 3210</p>
            <p className="text-gray-400">Email: abcd@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2023 CX & Loyalty Summit MENA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
