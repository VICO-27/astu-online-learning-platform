# ASTU Online Learning Platform

Welcome to the **ASTU Online Learning Platform**, a modern, interactive web app built to help students **Learn, Practice, and Grow**.  
This project is part of the **Adama Science and Technology University (ASTU) Dev Community** initiative.

---

## **🌟 Features**

- **Animated Hero Section**  
  - Welcome message with smooth fade-in and scroll indicator.

- **Left Profile Card (Static)**  
  - Always visible on the left side.
  - Displays student/creator profile info.

- **Right Dashboard (Static)**  
  - Contains navigation menus: Home, Study Plan, Programs, Colleges, Help.
  - Submenus expand on click.

- **Scrollable Topic Bar**  
  - Horizontal topics like C++, Java, DSA, LeetCode, Codeforces, etc.
  - Animated hover effects.

- **Courses Section**  
  - Displays courses or content as cards.
  - Cards animate from bottom → top as user scrolls.

- **Responsive Layout**  
  - Works on desktop and mobile.
  - Sticky left/right columns for easy navigation.

---

## **🛠 Technology Stack**

- **Frontend:** React, Vite, Framer Motion
- **Styling:** CSS (modularized per component)
- **Version Control:** Git & GitHub

---

## **📂 Folder Structure**

frontend/
├─ src/
│ ├─ components/
│ │ ├─ Navbar.jsx
│ │ ├─ LeftProfileCard.jsx
│ │ ├─ RightSidebar.jsx
│ │ ├─ Hero.jsx
│ │ ├─ TopicBar.jsx
│ │ ├─ CenterContent.jsx
│ │ ├─ CourseGrid.jsx
│ │ └─ MainLayout.jsx
│ ├─ styles/
│ │ ├─ global.css
│ │ ├─ hero.css
│ │ ├─ layout.css
│ │ ├─ profilecard.css
│ │ ├─ sidebar.css
│ │ ├─ topicbar.css
│ │ └─ course.css
│ └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js


---

## **🚀 Installation & Running Locally**

1. **Clone the repository**

```bash
git clone https://github.com/VICO-27/astu-online-learning-platform.git
cd astu-online-learning-platform/frontend
```
2. **Install dependencies**
  ```
npm install
```
3. **Run the development server**
```
 npm run dev
```
4. Open your browser at the URL provided in the terminal
   (usually http://localhost:5173)

## 🎯 Next Steps / TODO
    
    - Add smooth scroll to the courses section when clicking the "↓ Scroll Me" indicator.
    - Add additional middle content (tutorials, projects, challenges).
    - Improve mobile responsiveness and animations.
    - Implement user authentication (optional future upgrade).
## 💡 Author

**Ashenafi Deresa**
Computer Science Student at ASTU (2023/2024)
[GitHub](https://github.com/VICO-27) | [VICO-27.github.io](https://vico-27.github.io/)

## License
This project is licensed under the MIT License.
