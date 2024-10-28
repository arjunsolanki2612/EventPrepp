import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import '../../App.css';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-gray-300 py-6">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
      {/* Left Section */}
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <h3 className="text-lg font-semibold text-white">Loremipsum</h3>
        <p className="text-sm">
          © {new Date().getFullYear()} Loremipsum. All rights reserved.
        </p>
      </div>

      {/* Socials */}
      <div className="flex space-x-6">
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Facebook"><FaFacebookF size={24} /></a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Facebook"><FaXTwitter size={24} /></a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Facebook"><FaInstagram size={24} /></a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Facebook"><FaLinkedinIn size={24} /></a>
      </div>
    </div>
  </footer>
  )
}

export default Footer