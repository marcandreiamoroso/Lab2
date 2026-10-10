
function CourseCard({
  courseCode = "BSIT-101",
  courseName = "Introduction to Computing",
  description = "Learn the fundamentals of computers, information technology, and computing systems.",
  instructor = "John Smith",
  studentsCount = 35,
  units = 3,
  status = "Active",
  onViewDetails,
}) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Course header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.25c-2.5-2-6-2-9-1.5v13c3-.5 6.5-.5 9 1.5m0-13c2.5-2 6-2 9-1.5v13c-3-.5-6.5-.5-9 1.5m0-13v13.5"
            />
          </svg>
        </div>

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

      {/* Course information */}
      <div className="mt-5">
        <p className="text-sm font-semibold text-blue-600">
          {courseCode}
        </p>

        <h2 className="mt-1 text-xl font-bold text-gray-900">
          {courseName}
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          {description}
        </p>
      </div>

      {/* Course statistics */}
      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-gray-100 pt-5">
        <div>
          <p className="text-xs text-gray-500">Instructor</p>
          <p className="mt-1 font-medium text-gray-800">
            {instructor}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Enrolled Students</p>
          <p className="mt-1 font-medium text-gray-800">
            {studentsCount} students
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Credit Units</p>
          <p className="mt-1 font-medium text-gray-800">
            {units} units
          </p>
        </div>
      </div>

      {/* Action button */}
      <button
        type="button"
        onClick={onViewDetails}
        className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        View Course Details →
      </button>
    </div>
  )
}

export default CourseCard;
