import React from 'react'
import { Code, Heart, Coffee, Lightbulb } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">เกี่ยวกับผม</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ผมเป็นนักเรียนทุนที่มีความตั้งใจที่จะศึกษาเรียนรู้และพัฒนาตัวเองอย่างสม่ำเสมอ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">เรื่องราวของผม</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                ผมเริ่มต้นการเดินทางในโลกของการเขียนโปรแกรมเมื่อตอนเรียนมหาวิทยาลัย 
                และได้ค้นพบความหลงใหลในการสร้างเว็บไซต์และแอปพลิเคชันที่ใช้งานง่าย
              </p>
              <p>
                ตลอดหลายเดือนที่ผ่านมา ผมได้เรียนรู้และพัฒนาทักษะในเทคโนโลยีต่างๆ 
                ไม่ว่าจะเป็น Frontend, Backend, หรือ SaaS 
                และยังคงเรียนรู้สิ่งใหม่ๆ อยู่เสมอ
              </p>
              <p>
                ผมเชื่อว่า AI จะมาช่วยยกระดับเว็บไซต์ให้มีประสิทธิภาพมากขึ้น
              </p>
            </div>
          </div>

          {/* Right Column - Interests */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">สิ่งที่ผมสนใจ</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">การเขียนโปรแกรม</h4>
                <p className="text-sm text-gray-600">
                  สร้างเว็บไซต์และแอปพลิเคชันที่ใช้งานง่าย
                </p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">การออกแบบ UX/UI</h4>
                <p className="text-sm text-gray-600">
                  ออกแบบประสบการณ์ผู้ใช้ที่ดีและสวยงาม
                </p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <Lightbulb className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">นวัตกรรม</h4>
                <p className="text-sm text-gray-600">
                  นำ AI ไปประยุกต์ใช้เพื่อยกระดับเว็บไซต์
                </p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <Coffee className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">การเรียนรู้</h4>
                <p className="text-sm text-gray-600">
                  เรียนรู้เทคโนโลยีใหม่ๆ อยู่เสมอ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-gray-600">เดือนประสบการณ์</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">โปรเจคที่ทำ</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">เทคโนโลยีที่ใช้</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">ความมุ่งมั่น</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
