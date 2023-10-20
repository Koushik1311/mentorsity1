import { CoursesData } from "@/lib/Course";
import Link from "next/link";

// Props
interface CourseDetailProps {
  course: CoursesData;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  return (
    <div className="max-h-96 overflow-y-scroll">
      {/* Link and Title of the Course */}
      <Link
        href="#"
        className="pl-9 font-lato font-bold text-xl underline absolute top-7"
      >
        {course.title}
      </Link>

      {/* Details of the course */}
      <div className="grid grid-cols-3 gap-4 p-9">
        {/* mapping through institution */}
        {course?.institution?.map((insti) => (
          <div className="w-auto h-28 cursor-pointer shadow-md hover:shadow-xl">
            {/* Title of the institution */}
            <h2>{insti.title}</h2>

            {/* How much time will it take to complete the pert course froicularm a perticular institution */}
            <p>
              {insti.time} <span> Years</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
