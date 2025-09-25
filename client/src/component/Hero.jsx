import React from 'react'
import { Download, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              สวัสดีครับ
              <span className="block text-blue-600">ผมชื่อ เศรษฐพงษ์</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              นักพัฒนาเว็บไซต์และแอปพลิเคชัน ที่มีความหลงใหลในการนำเอา Ai ไปประยุกต์ใช้เพื่อยกระดับเว็บไซต์
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Download size={20} />
                ดาวน์โหลด CV
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                ติดต่อผม
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image and Social Links */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-6xl text-gray-400">👤</span>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
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
