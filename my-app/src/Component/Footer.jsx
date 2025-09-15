import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-purple-900 text-yellow-400 p-6 text-center">
    <div className="flex justify-center space-x-6 mb-4">
      <a href="https://github.com/sridevidurga" className="hover:text-white"><FaGithub size={24} /></a>
      <a href="https://www.linkedin.com/in/sridevidurga-sundar-74b916278/" className="hover:text-white"><FaLinkedin size={24} /></a>
      
    </div>
    <p>© 2025 MyPortfolio. All rights reserved.</p>
  </footer>
);

export default Footer;
