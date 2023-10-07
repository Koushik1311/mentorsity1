import { ChevronDownIcon } from "@heroicons/react/24/outline"; // Import icons from Heroicons

import Course from "@/components/navbar/courses/Course";

const Cources = () => {
  return (
    <div className="group">
      <div className="flex items-center gap-3 cursor-pointer border-2 border-yellow-500 bg-yellow-500 text-white rounded-sm px-3 py-1.5 uppercase text-sm font-semibold group-hover:bg-white group-hover:text-yellow-500 transition-all">
        <div className="">Courses</div>
        <ChevronDownIcon className="w-5 h-5 stroke-2 origin-center group-hover:text-yellow-500 group-hover:rotate-180 transition-all" />
      </div>
      <div className="relative">
        <Course />
      </div>
    </div>
  );
};

export default Cources;
