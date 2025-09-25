import React from 'react'
import { Download, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-cyan-500/20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-cyan-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-yellow-400/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-purple-400/30 rounded-full animate-bounce"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              สวัสดีครับ
              <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">ผมชื่อ เศรษฐพงษ์</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              นักพัฒนาเว็บไซต์และแอปพลิเคชัน ที่มีความหลงใหลในการนำเอา Ai ไปประยุกต์ใช้เพื่อยกระดับเว็บไซต์
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <Download size={20} />
                ดาวน์โหลด CV
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
              >
                ติดต่อผม
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image and Social Links */}
          <div className="flex flex-col items-center relative z-10">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8 shadow-2xl animate-pulse">
                <div className="w-72 h-72 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-6xl text-white">👤</span>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute top-1/3 -right-8 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg"></div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://github.com/Setthapong-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/setthapong-thansirisuntorn-9b023a386/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:setthapong.thansirisuntorn.com" 
                className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
