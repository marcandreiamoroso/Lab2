
function StudentCard({
  name = "Sarah Johnson",
  studentId = "STU-001",
  course = "Computer Science",
  email = "sarah.johnson@university.edu",
  status = "Active",
  enrolledDate = "Aug 25, 2023",
  onViewDetails,
}) {
  return (
    <div className="w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* Student information */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        {/* Avatar */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>

        {/* Details */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-bold text-gray-900">
              {name}
            </h2>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {status}
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Student ID: {studentId}
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p className="text-gray-700">
              <span className="font-medium text-gray-500">
                Course:
              </span>{" "}
              {course}
            </p>

            <p className="break-words text-gray-700">
              <span className="font-medium text-gray-500">
                Email:
              </span>{" "}
              {email}
            </p>

            <p className="text-gray-700">
              <span className="font-medium text-gray-500">
                Enrolled:
              </span>{" "}
              {enrolledDate}
            </p>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="mt-6 border-t border-gray-100 pt-4">
        <button
          type="button"
          onClick={onViewDetails}
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
        >
          View Details →
        </button>
      </div>
    </div>
  )
}

export default StudentCard;
