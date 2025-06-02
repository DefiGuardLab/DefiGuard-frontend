import { Button } from "./Button"

export default function Navbar(){
    return (
        <nav className="flex items-center justify-between px-6 mt-9 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-white text-4xl font-bold tracking-wide">DEFI- GUARD</h1>
        </div>
  
        {/* Navigation Links */}
        <div className="flex items-center space-x-1  rounded-md px-8 py-2.5 bg-white/20 backdrop-blur-md shadow-lg p-4">
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
  
        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 bg-transparent"
          >
            Log In
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Sign Up</Button>
        </div>
      </nav>
    )
}