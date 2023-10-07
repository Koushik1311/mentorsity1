import { CoursesData } from "@/utils/Course";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// Props
interface LinkCourseProps {
  courses: Record<string, CoursesData>;
  onCourseClick: (key: string) => void;
  activeCourseKey: string | null;
}

const LinkCourse: React.FC<LinkCourseProps> = ({
  courses,
  onCourseClick,
  activeCourseKey,
}) => {
  // extract the keys of the courses object and store them in an array called keys.
  const keys = Object.keys(courses);

  return (
    <div className="">
      <ul className="flex flex-col font-lato max-h-96 overflow-y-scroll text-sm">
        {/* Mapping the courses with the corresponding keys */}
        {keys.map((key) => (
          <li key={key}>
            {/* If the key or the course is active then its background color and border will change */}
            <div
              className={`cursor-pointer ${
                activeCourseKey === key
                  ? "border-l-4 border-yellow-500 bg-cyan-100 font-extrabold"
                  : "border-l-4 border-transparent hover:bg-yellow-200/30"
              }`}
              onClick={() => onCourseClick(key)}
            >
              <div className="flex items-center py-3 px-4">
                {/* Name or Title of the courses */}
                <h1 className="flex-auto">{courses[key].title}</h1>
                {/* Icon */}
                <ChevronRightIcon className="w-4 h-4 flex-none" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkCourse;
