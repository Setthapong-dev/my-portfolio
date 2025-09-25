import React from 'react'
import { Code, Database, Smartphone, Palette, Server, Cloud, Globe } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      color: 'blue',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      color: 'green',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'REST API', level: 90 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'purple',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 65 },
        { name: 'Android Development', level: 70 }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-8 h-8" />,
      color: 'pink',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Photoshop', level: 75 },
        { name: 'Illustrator', level: 70 },
        { name: 'User Research', level: 80 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-8 h-8" />,
      color: 'orange',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 75 },
        { name: 'Linux', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8" />,
      color: 'indigo',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Redis', level: 65 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      title: 'ภาษา',
      icon: <Globe className="w-8 h-8" />,
      color: 'teal',
      skills: [
        { name: 'ไทย (ภาษาแม่)', level: 100 },
        { name: 'อังกฤษ (TOEIC 850)', level: 85 },
        { name: 'จีน (พื้นฐาน)', level: 40 },
        { name: 'ญี่ปุ่น (พื้นฐาน)', level: 30 }
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600',
      pink: 'bg-pink-50 border-pink-200 text-pink-600',
      orange: 'bg-orange-50 border-orange-200 text-orange-600',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
      teal: 'bg-teal-50 border-teal-200 text-teal-600'
    }
    return colorMap[color] || colorMap.blue
  }

  const getProgressColor = (color) => {
    const colorMap = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
      orange: 'bg-orange-500',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              'npm/yarn', 'Webpack', 'Vite', 'Jest', 'Cypress',
              'Slack', 'Trello', 'Notion', 'Google Analytics'
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
