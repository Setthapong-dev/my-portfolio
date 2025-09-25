# Portfolio Website

เว็บไซต์ Portfolio ที่สร้างด้วย React และ Tailwind CSS สำหรับแสดงผลงานและข้อมูลส่วนตัว

## ✨ คุณสมบัติ

- **Responsive Design** - รองรับทุกขนาดหน้าจอ
- **Modern UI/UX** - ออกแบบด้วย Tailwind CSS
- **Smooth Scrolling** - การเลื่อนหน้าเว็บที่นุ่มนวล
- **Interactive Components** - คอมโพเนนต์ที่ตอบสนองต่อผู้ใช้
- **Contact Form** - ฟอร์มติดต่อที่ใช้งานได้จริง
- **Project Filtering** - ระบบกรองผลงานตามหมวดหมู่
- **Social Media Integration** - เชื่อมต่อกับโซเชียลมีเดีย

## 🚀 การติดตั้งและรัน

### ข้อกำหนดระบบ
- Node.js (เวอร์ชัน 16 หรือใหม่กว่า)
- npm หรือ yarn

### ขั้นตอนการติดตั้ง

1. **Clone โปรเจค**
   ```bash
   git clone <repository-url>
   cd portfolio/client
   ```

2. **ติดตั้ง dependencies**
   ```bash
   npm install
   ```

3. **รันโปรเจคในโหมด development**
   ```bash
   npm run dev
   ```

4. **เปิดเบราว์เซอร์ไปที่**
   ```
   http://localhost:5173
   ```

## 📁 โครงสร้างโปรเจค

```
client/
├── src/
│   ├── component/
│   │   ├── About.jsx          # ข้อมูลเกี่ยวกับตัว
│   │   ├── Contact.jsx        # ฟอร์มติดต่อ
│   │   ├── Footer.jsx         # Footer
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Projects.jsx       # แสดงผลงาน
│   │   └── Skills.jsx         # แสดงทักษะ
│   ├── App.jsx                # Main App component
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── public/                    # Static assets
├── package.json
└── vite.config.js
```

## 🎨 การปรับแต่ง

### เปลี่ยนข้อมูลส่วนตัว

1. **Hero Section** - แก้ไขใน `src/component/Hero.jsx`
   - เปลี่ยนชื่อ
   - แก้ไขคำอธิบาย
   - อัปเดตลิงก์โซเชียลมีเดีย

2. **About Section** - แก้ไขใน `src/component/About.jsx`
   - เปลี่ยนเรื่องราวส่วนตัว
   - อัปเดตสถิติและข้อมูล

3. **Skills Section** - แก้ไขใน `src/component/Skills.jsx`
   - เพิ่ม/ลดทักษะ
   - ปรับระดับความเชี่ยวชาญ
   - เพิ่มเครื่องมือใหม่

4. **Projects Section** - แก้ไขใน `src/component/Projects.jsx`
   - เพิ่มโปรเจคใหม่
   - อัปเดตข้อมูลโปรเจค
   - เปลี่ยนลิงก์ GitHub และ Live Demo

5. **Contact Section** - แก้ไขใน `src/component/Contact.jsx`
   - อัปเดตข้อมูลติดต่อ
   - เปลี่ยนลิงก์โซเชียลมีเดีย
   - ปรับแต่งสถานะการทำงาน

### เปลี่ยนสีธีม

แก้ไขใน `src/index.css` หรือใช้ Tailwind classes ใหม่:

```css
/* ตัวอย่างการเปลี่ยนสีหลัก */
:root {
  --primary-color: #3B82F6;    /* Blue */
  --secondary-color: #8B5CF6; /* Purple */
}
```

### เพิ่มรูปภาพ

1. วางรูปภาพในโฟลเดอร์ `public/`
2. อัปเดต path ใน component ที่ต้องการใช้รูปภาพ

## 🛠️ เทคโนโลยีที่ใช้

- **React 19** - Frontend framework
- **Vite** - Build tool และ dev server
- **Tailwind CSS** - CSS framework
- **Lucide React** - Icon library
- **React Router DOM** - Client-side routing

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 การ Deploy

### Vercel (แนะนำ)

1. Push โค้ดไปยัง GitHub
2. เชื่อมต่อ Vercel กับ GitHub repository
3. Deploy อัตโนมัติ

### Netlify

1. Build โปรเจค: `npm run build`
2. Upload โฟลเดอร์ `dist/` ไปยัง Netlify

### GitHub Pages

1. ติดตั้ง `gh-pages`: `npm install --save-dev gh-pages`
2. เพิ่ม script ใน `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Build และ Deploy: `npm run build && npm run deploy`

## 📝 การใช้งาน

1. **Navigation** - คลิกเมนูเพื่อเลื่อนไปยังส่วนต่างๆ
2. **Project Filtering** - ใช้ปุ่มกรองเพื่อดูโปรเจคตามหมวดหมู่
3. **Contact Form** - กรอกฟอร์มเพื่อส่งข้อความติดต่อ
4. **Social Links** - คลิกลิงก์โซเชียลมีเดียเพื่อติดตาม

## 🤝 การมีส่วนร่วม

1. Fork โปรเจค
2. สร้าง feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request

## 📄 License

โปรเจคนี้อยู่ภายใต้ MIT License - ดูไฟล์ [LICENSE](LICENSE) สำหรับรายละเอียด

## 📞 ติดต่อ

- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your Name](https://linkedin.com/in/yourprofile)

---

สร้างด้วย ❤️ โดย [ชื่อของคุณ]
