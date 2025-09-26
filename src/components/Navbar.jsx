import {useState} from 'react'
import {
  Menu,
  X,
  BookOpen,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">F-IELTS</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#courses"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Courses
            </a>
            <a
              href="#practice"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Practice
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#courses"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Courses
              </a>
              <a
                href="#practice"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Practice
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </a>
              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar
