import { X, Menu } from "lucide-react";
import Image from "next/image";
import { Navlinks } from "../index";

interface HeaderProps {
  scrolled: boolean;
  scrollToSection: (id: string) => void;
  setShowModal: (value: boolean) => void;

  isMenuOpen: boolean;
  setIsMenuOpen: (value:boolean) =>void
}
export default function Header({
  scrolled,
  scrollToSection,
  setShowModal,
  isMenuOpen,
  setIsMenuOpen
}: HeaderProps) {


  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Image
            src="/logo.png"
            alt="CX-Loyalty-logo"
            width={220}
            height={220}
            className={`${scrolled ? "opacity-100" : "opacity-90"}`}
          />

          <div className="hidden md:flex space-x-8">
            {Navlinks.map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className={`font-medium transition-colors ${
                    scrolled
                      ? "text-[#19325E] hover:text-[#E63946]"
                      : "text-[#19325E] hover:text-red-300"
                  }`}
                >
                  {item}
                </button>
              )
            )}

            <button
              onClick={() => setShowModal(true)}
              className={`px-6 py-2 rounded-full transition-colors ${
                scrolled
                  ? "bg-[#19325E] text-white hover:bg-[#E63946]"
                  : "bg-white text-[#19325E] hover:bg-red-200 underline font-bold"
              }`}
            >
              Register Now
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${
              scrolled ? "text-[#19325E]" : "text-white"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {Navlinks.map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded"
                >
                  {item}
                </button>
              )
            )}
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
