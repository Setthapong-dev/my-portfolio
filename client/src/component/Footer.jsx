import React from 'react'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'หน้าแรก', section: 'hero' },
    { label: 'เกี่ยวกับ', section: 'about' },
    { label: 'ทักษะ', section: 'skills' },
    { label: 'ผลงาน', section: 'projects' },
    { label: 'ติดต่อ', section: 'contact' }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/Setthapong-dev',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/setthapong-thansirisuntorn-9b023a386/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:setthapong.thansirisuntorn.com',
      label: 'Email'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              นักพัฒนาเว็บไซต์และแอปพลิเคชัน ที่มีความหลงใหลในการนำเอา Ai ไปประยุกต์ใช้เพื่อยกระดับเว็บไซต์
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">ติดต่อ</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 setthapong.thansirisuntorn@gmail.com</p>
              <p>📱 097-287-2636</p>
              <p>📍 กรุงเทพมหานคร, ประเทศไทย</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 mb-4 md:mb-0">
              <span>สร้างด้วย</span>
              <Heart className="w-4 h-4 text-red-500 mx-2" />
              <span>โดย setthapong-dev © {currentYear}</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              กลับขึ้นบน
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
