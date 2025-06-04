"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[#0a0a0a] z-0">
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255, 97, 60, 0.03), rgba(0, 0, 0, 0))",
               backgroundSize: "30px 30px, 100% 100%"
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white">Protect Your </span>
              <span className="text-orange-500">Crypto Assets</span>
              <br />
              <span className="text-white">on </span>
              <span className="text-orange-500">Starknet</span>
              <span className="text-white"> with Confidence</span>
            </h1>
            
            <p className="text-gray-300 text-lg max-w-xl">
              Secure your digital investments on Starknet from hacks, smart contract
              exploits, and exchange vulnerabilities with our comprehensive decentralized
              insurance solutions.
            </p>
            
            <div className="pt-4">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {/* User avatars */}
                  <div className="w-8 h-8 rounded-full bg-amber-200 border-2 border-gray-900 overflow-hidden"></div>
                  <div className="w-8 h-8 rounded-full bg-rose-200 border-2 border-gray-900 overflow-hidden"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-gray-900 overflow-hidden"></div>
                  <div className="w-8 h-8 rounded-full bg-emerald-200 border-2 border-gray-900 overflow-hidden"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-gray-900 overflow-hidden"></div>
                </div>
                <p className="text-sm text-gray-400">Trusted by over 15M+ people</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-md">
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-700 text-white hover:border-gray-500 bg-transparent px-8 py-2.5 rounded-md"
              >
                Calculate Coverage
              </Button>
            </div>
          </div>
          
          {/* Right content - Phone mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-64 md:w-80 h-auto">
              {/* Glow effects */}
              <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-3xl"></div>
              <div className="absolute -bottom-2 -right-2 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl"></div>
              
              {/* Phone image */}
              <div className="relative z-10 transform rotate-6">
                <Image
                  src="/phone-mockup.svg"
                  alt="DefiGuard Mobile App"
                  width={320}
                  height={640}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
