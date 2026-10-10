
import CourseCard from "../components/CourseCard"

function Courses() {
  const courses = [
    {
      courseCode: "IT-101",
      courseName: "Introduction to Computing",
      description:
        "Learn computer fundamentals, hardware, software, and computing concepts.",
      instructor: "John Smith",
      studentsCount: 35,
      units: 3,
      status: "Active",
    },
    {
      courseCode: "IT-202",
      courseName: "Web Development",
      description:
        "Build websites using HTML, CSS, JavaScript, and modern web technologies.",
      instructor: "Maria Santos",
      studentsCount: 28,
      units: 3,
      status: "Active",
    },
    {
      courseCode: "IT-303",
      courseName: "Database Management",
      description:
        "Explore relational databases, SQL queries, and database design.",
      instructor: "Carlos Reyes",
      studentsCount: 32,
      units: 3,
      status: "Inactive",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Courses
        </h1>

        <p className="mt-2 mb-6 text-gray-500">
          Manage and view available courses.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.courseCode}
              {...course}
              onViewDetails={() =>
                alert(`Viewing ${course.courseName}`)
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses;
