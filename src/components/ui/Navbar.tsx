"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 mt-8 w-full relative">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-white text-lg sm:text-4xl font-bold tracking-wide">DEFI- GUARD</h1>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center space-x-1  rounded-md px-8 py-2.5 bg-white/20 backdrop-blur-md shadow-lg p-">
        <a
          href="#plans"
          className="text-gray-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-200 hover:bg-gray-700/50"
        >
          Plans
        </a>
        <a
          href="#features"
          className="text-gray-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-200 hover:bg-gray-700/50"
        >
          Features
        </a>
        <a
          href="#calendar"
          className="text-gray-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-200 hover:bg-gray-700/50"
        >
          Calendar
        </a>
        <a
          href="#faqs"
          className="text-gray-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-200 hover:bg-gray-700/50"
        >
          FAQs
        </a>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden sm:flex items-center space-x-3">
        <Button
          variant="outline"
          className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 bg-transparent text-sm"
        >
          Log In
        </Button>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm">Sign Up</Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden text-white p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 z-50">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <a
                href="#plans"
                className="block text-gray-300 hover:text-white px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-800/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plans
              </a>
              <a
                href="#features"
                className="block text-gray-300 hover:text-white px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-800/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#calendar"
                className="block text-gray-300 hover:text-white px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-800/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Calendar
              </a>
              <a
                href="#faqs"
                className="block text-gray-300 hover:text-white px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-800/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </a>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <Button
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 bg-transparent"
              >
                Log In
              </Button>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
