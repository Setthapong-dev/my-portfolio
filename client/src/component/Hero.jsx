import React from 'react'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import axios from 'axios'

const Hero = () => {
  const downloadCV = async () => {
    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
      const res = await axios.get(`${serverUrl}/api/cv`, {
        responseType: "blob", // สำคัญมาก!
      });

      // แปลง response เป็นไฟล์
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "cv.pdf"); // ตั้งชื่อไฟล์ตอนโหลด
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Error downloading CV:", err);
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Professional Bright Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 via-transparent to-purple-200/30"></div>

      {/* Subtle Professional Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-300/40 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-indigo-300/50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-300/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-slate-300/50 rounded-full animate-bounce"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-indigo-400/50 rounded-full animate-bounce"></div>
      </div>

      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 pb-2">
              สวัสดีครับ
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ผมชื่อ บอส</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              นักพัฒนาเว็บไซต์และแอปพลิเคชัน ที่มีความเชี่ยวชาญในการนำเอา AI ไปประยุกต์ใช้เพื่อยกระดับเว็บไซต์
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={downloadCV}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <Download size={20} />
                ดาวน์โหลด CV
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer"
              >
                ติดต่อผม
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image and Social Links */}
          <div className="flex flex-col items-center relative z-10">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                <div className="w-72 h-72 rounded-full overflow-hidden">
                  <img
                    src="/bosszanarak.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Professional Floating elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 -left-6 w-3 h-3 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute top-1/3 -right-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-pulse shadow-lg"></div>
            </div>

            {/* Professional Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/Setthapong-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors shadow-lg cursor-pointer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/setthapong-thansirisuntorn-9b023a386/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg cursor-pointer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:setthapong.thansirisuntorn@gmail.com"
                className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors shadow-lg cursor-pointer"
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
