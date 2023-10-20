import { alumniWorkPlace } from "@/lib/data";
import Image from "next/image";
import React from "react";

export default function AlumniWorkPlace() {
  return (
    <section className="mt-10">
      {/* Heading */}
      <h1 className="mb-10 font-medium ml-11 sm:ml-32 text-2xl">
        Where our Alumni Work
      </h1>
      <ul className="grid grid-cols-5 gap-y-7 mx-16 sm:mx-40">
        {/* Alumni Work Place */}
        {alumniWorkPlace.map((alumni, index) => (
          <li key={index}>
            {/* Image */}
            <Image src={alumni.imageUrl} alt="Where our Alumni Work" />
          </li>
        ))}
      </ul>
    </section>
  );
}
