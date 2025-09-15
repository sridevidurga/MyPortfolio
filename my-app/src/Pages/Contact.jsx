import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20 bg-white text-black flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-purple-400">Contact Me</h1>

      <div className="flex flex-col gap-6">
        {/* Gmail */}
        <a
          href="mailto:yourmail@gmail.com"
          className="flex items-center gap-3 text-lg hover:text-yellow-400 transition"
        >
          <FaEnvelope className="text-2xl" />
          subasundar789@gmail.com
        </a>

        {/* Phone */}
        <a
          href="tel:+919876543210"
          className="flex items-center gap-3 text-lg hover:text-yellow-400 transition"
        >
          <FaPhone className="text-2xl" />
          +91  8608546487
        </a>
      </div>
    </div>
  );
};

export default Contact;
