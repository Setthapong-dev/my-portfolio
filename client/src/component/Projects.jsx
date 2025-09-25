import React, { useState } from 'react'
import { ExternalLink, Github, Calendar, Code, Users } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'เว็บไซต์ขายของออนไลน์ที่ครบครันด้วยระบบชำระเงิน การจัดการสินค้า และระบบสมาชิก',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'web',
      year: '2024',
      team: 'Solo',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'แอปพลิเคชันจัดการงานที่ช่วยให้ทีมทำงานร่วมกันได้อย่างมีประสิทธิภาพ',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile',
      year: '2024',
      team: 'Team of 3',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'แดชบอร์ดแสดงข้อมูลสภาพอากาศแบบเรียลไทม์ พร้อมแผนที่และกราฟ',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      category: 'web',
      year: '2023',
      team: 'Solo',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'เครื่องมือวิเคราะห์ข้อมูลโซเชียลมีเดียสำหรับธุรกิจ',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'Django', 'PostgreSQL', 'D3.js'],
      category: 'web',
      year: '2023',
      team: 'Team of 4',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'แอปติดตามการออกกำลังกายและสุขภาพส่วนตัว',
      image: '/api/placeholder/400/300',
      technologies: ['Flutter', 'Firebase', 'Health API'],
      category: 'mobile',
      year: '2023',
      team: 'Solo',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'AI Chatbot',
      description: 'บอทสนทนาที่ใช้ AI ช่วยตอบคำถามและให้คำแนะนำ',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      category: 'ai',
      year: '2023',
      team: 'Team of 2',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ]

  const filters = [
    { key: 'all', label: 'ทั้งหมด' },
    { key: 'web', label: 'เว็บไซต์' },
    { key: 'mobile', label: 'แอปมือถือ' },
    { key: 'ai', label: 'AI/ML' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">โปรเจคเด่น</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        {project.team}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">โปรเจคทั้งหมด</h3>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <Code className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
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
