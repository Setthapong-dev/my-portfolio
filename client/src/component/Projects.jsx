import React from 'react'
import { ExternalLink, Github, Calendar, Code, Users } from 'lucide-react'

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'Multi Vendor E-Commerce Website with Ai Tools',
      description: 'เว็บไซต์ขายของออนไลน์ที่ครบครันด้วยระบบชำระเงิน การจัดการสินค้า และระบบสมาชิก พร้อม  AI ช่วยกรอกข้อมูลสินค้า',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'PostgreSQL', 'Rest API', 'OpenAI API'],
      category: 'web',
      year: '2025',
      team: 'Solo',
      github: 'https://github.com/Setthapong-dev/gocart',
      live: 'https://gocart-rust.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'SaaS Multi Ai Tools',
      description: 'เว็ปแอปพลิเคชันรวม Service AI พร้อมระบบสมาชิก',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Rest API', 'OpenAI API'],
      category: 'web',
      year: '2025',
      team: 'solo',
      github: 'https://github.com/Setthapong-dev/SuperTool',
      live: 'https://super-tool-wine.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'Self Training AI Model Classification',
      description: 'เทรนโมเดล AI ใช้จำแนกมะม่วงสุกหรือไม่สุกด้วยรูปภาพ',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'Python'],
      category: 'web',
      year: '2025',
      team: 'Solo',
      github: 'https://github.com/Setthapong-dev/Ai-See',
      live: 'https://ai-see.vercel.app/',
      featured: true
    },
    {
      id: 4,
      title: 'Full Stack Project',
      description: 'เว็ปไซต์หน้าบ้านหลังบ้าน',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'Rest API', 'Axios'],
      category: 'web',
      year: '2025',
      team: 'solo',
      github: 'https://github.com/Setthapong-dev/IoT-web',
      live: 'https://iot-web-tawny.vercel.app/',
      featured: true
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ผลงานของผม</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            โปรเจคต่างๆ ที่ผมได้สร้างขึ้นมาเพื่อแสดงทักษะและประสบการณ์
          </p>
        </div>

        {/* Featured Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">โปรเจคเด่น</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <Code className="w-12 h-12 text-white" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Users size={12} />
                      {project.team}
                    </div>
                    <div className="flex gap-1">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
