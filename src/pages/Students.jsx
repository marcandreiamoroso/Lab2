
import StudentCard from "../components/StudentCard"

function Students() {
  const students = [
    {
      studentId: "STU-001",
      name: "Sarah Johnson",
      course: "Computer Science",
      email: "sarah.johnson@university.edu",
      status: "Active",
      enrolledDate: "Aug 25, 2023",
    },
    {
      studentId: "STU-002",
      name: "Michael Santos",
      course: "Information Technology",
      email: "michael.santos@university.edu",
      status: "Active",
      enrolledDate: "Sep 10, 2023",
    },
    {
      studentId: "STU-003",
      name: "Angela Reyes",
      course: "Information Systems",
      email: "angela.reyes@university.edu",
      status: "Inactive",
      enrolledDate: "Jun 12, 2022",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Students
        </h1>

        <p className="mb-6 text-gray-500">
          Manage and view student information.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {students.map((student) => (
            <StudentCard
              key={student.studentId}
              {...student}
              onViewDetails={() =>
                alert(`Viewing ${student.name}`)
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Students;
