import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white body-font">
      <div className="container px-5 py-16 mx-auto flex flex-wrap md:items-center lg:items-start md:flex-row md:flex-nowrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/">
            <div className="flex title-font font-medium items-center md:justify-start justify-center text-white cursor-pointer">
              <Image src="/logo.png" alt="Crafted Treasures" width={80} height={80} className="mr-4" />
              <span className="text-lg font-bold">Crafted Treasures</span>
            </div>
          </Link>
          <p className="mt-2 text-sm text-gray-300 px-6">Blend of local crafts for all your needs.</p>
        </div>
        
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-3">SHOP</h2>
            <nav className="list-none mb-10">
              <li><Link href="/homedecor" className="text-gray-400 hover:text-white">Home Decor</Link></li>
              <li><Link href="/pottery" className="text-gray-400 hover:text-white">Pottery</Link></li>
              <li><Link href="/ceramics" className="text-gray-400 hover:text-white">Ceramics</Link></li>
              <li><Link href="/embroidery" className="text-gray-400 hover:text-white">Embroidery</Link></li>
            </nav>
          </div>
          
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-3">ABOUT</h2>
            <nav className="list-none mb-10">
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            </nav>
          </div>
          
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-3">POLICY</h2>
            <nav className="list-none mb-10">
              <li><Link href="/return-policy" className="text-gray-400 hover:text-white">Return Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms Of Use</Link></li>
              <li><Link href="/security" className="text-gray-400 hover:text-white">Security</Link></li>
            </nav>
          </div>
          
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-3">FOLLOW US</h2>
            <nav className="list-none mb-10 flex flex-col items-center space-y-2">
              <div className="flex flex-col items-center">
                <span>Facebook</span>
              </div>
              <div className="flex flex-col items-center">
                <span>Instagram</span>
              </div>
              <div className="flex flex-col items-center">
                <span>Twitter</span>
              </div>
              <div className="flex flex-col items-center">
                <span>LinkedIn</span>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4 flex justify-center items-center">
        <p className="text-center text-sm text-gray-400">© {new Date().getFullYear()} The Crafted Treasures - All rights reserved.</p>
        <div className="flex space-x-4 ml-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
