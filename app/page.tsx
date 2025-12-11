"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegistrationFrom from "./components/RegistrationFrom";
import MyAttend from "./components/MyAttend";
import Sponsor from "./components/Sponsor";
import Topics from "./components/Topics";
import WhoAttend from "./components/WhoAttend";
import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        scrollToSection={scrollToSection}
        scrolled={scrolled}
        setShowModal={setShowModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero setShowModal={setShowModal} />
      <About />
      <MyAttend />
      <Topics />
      <WhoAttend />
      <Sponsor />
      <Footer />
      {showModal && <RegistrationFrom setShowModal={setShowModal} />}
    </div>
  );
}
