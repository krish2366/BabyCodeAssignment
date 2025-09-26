import React from 'react'
import { BookOpen, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">F-IELTS</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for IELTS success with AI-powered learning
              and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Courses
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Practice Tests
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Success Stories
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@fielts.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Bandra, Mumbai 696721</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 F-IELTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
