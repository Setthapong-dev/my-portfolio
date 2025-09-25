import React from 'react'
import { Code, Database, Server, Globe } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      color: 'blue',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Next.js', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      color: 'green',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'REST API', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8" />,
      color: 'indigo',
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 90 },
      ]
    },
    {
      title: 'ภาษา',
      icon: <Globe className="w-8 h-8" />,
      color: 'teal',
      skills: [
        { name: 'ไทย (ภาษาแม่)', level: 100 },
        { name: 'อังกฤษ (TOEIC 850)', level: 85 },
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
      teal: 'bg-teal-50 border-teal-200 text-teal-600'
    }
    return colorMap[color] || colorMap.blue
  }

  const getProgressColor = (color) => {
    const colorMap = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      indigo: 'bg-indigo-500',
      teal: 'bg-teal-500'
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ทักษะของผม</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            เทคโนโลยีและเครื่องมือที่ผมใช้ในการสร้างโปรเจคต่างๆ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border-2 ${getColorClasses(category.color)} hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${getColorClasses(category.color)} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(category.color)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">เครื่องมืออื่นๆ</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'VS Code', 'GitHub', 'Postman', 'Chrome DevTools', 
              'npm/yarn', 'Axcios', 'Vite', 'Bcrypt', 'Clerk',
              'Neon', 'Lucide', 'React Router Dom', 'OpenAI API'
            ].map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
