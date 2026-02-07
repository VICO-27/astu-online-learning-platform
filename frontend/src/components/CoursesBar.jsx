import "../styles/coursesBar.css";

const CoursesBar = ({ dashboardOpen }) => {
  const courses = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Java",
    "C++",
    "C",
    "Data Structures",
    "Algorithms",
    "Databases",
    "Operating Systems",
    "Computer Networks",
    "Backend",
    "Django",
    "Node.js",
    "System Design",
  ];

  return (
    <div className={`courses-bar ${dashboardOpen ? "dashboard-open" : ""}`}>
      <div className="courses-scroll">
        <span className="courses-label">Recent Courses</span>

        {courses.map((course) => (
          <button key={course} className="course-pill">
            {course}
          </button>
        ))}
      </div>

      {dashboardOpen && <div className="courses-right-mask" />}
    </div>
  );
};

export default CoursesBar;
