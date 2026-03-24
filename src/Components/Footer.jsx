import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className=" grid   md:grid-cols-4 gap-8  mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-green-600 text-white size-10 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🥗</span>
                </div>
                <span className="text-2xl text-white">HealthDish</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Your trusted partner for healthy, hygienic, and verified food delivery.
              </p>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                  <Facebook className="size-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                  <Twitter className="size-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                  <Instagram className="size-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                  <Youtube className="size-5" />
                </a>
              </div>

            </div>

            <div>
              <h3 className="text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2026 HealthDish. All rights reserved.</p>
            <p>Made with 💚 for healthy living</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer