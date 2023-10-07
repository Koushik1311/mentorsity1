"use client";

import { courses } from "@/utils/Course";
import { useEffect, useState } from "react";
import LinkCourse from "@/components/navbar/courses/LinkCourse";
import CourseDetail from "@/components/navbar/courses/CourseDetail";

const Course = () => {
  // Store the selectedCourseKey
  const [selectedCourseKey, setSelectedCourseKey] = useState<string | null>(
    null
  ); // It's initial value is null

  // Getting the first element or first course and setting it up
  useEffect(() => {
    // Set the initial selectedCourseKey to the key of the first item in courses
    const firstCourseKey = Object.keys(courses)[0];
    setSelectedCourseKey(firstCourseKey);
  }, []); // This empty dependency array ensures this effect runs only once, when the component mounts

  // Set the selectedCourseKey to the key of the clicked item in courses
  const onCourseClick = (key: string) => {
    setSelectedCourseKey(key);
  };

  return (
    <div className="absolute pt-3 -left-28 bg-white drop-shadow-2xl">
      <div className="border-2 border-yellow-500 rounded-md hidden group-hover:block hover:block">
        {/* Heading */}
        <h1 className="font-lato text-xl px-4 py-4 border-b-2">
          Browse by domain
        </h1>
        <div className="grid grid-cols-4 w-[80vw] ">
          <div>
            {/* List of the Courses */}
            <LinkCourse
              courses={courses}
              onCourseClick={onCourseClick}
              activeCourseKey={selectedCourseKey}
            />
          </div>
          {/* Getting the corresponding details of that particular course */}
          <div className="col-span-3">
            {selectedCourseKey !== null && (
              <CourseDetail course={courses[selectedCourseKey]} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
