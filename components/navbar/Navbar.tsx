import Courses from "@/components/navbar/courses/Courses";
import Logo from "@/components/navbar/Logo";
import NavLink from "@/components/navbar/NavLink";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-11 flex-auto">
        {/* Logo and Courses Components */}
        <Logo />
        <Courses />
      </div>
      <div className="relative flex-row-reverse">
        {/* NavLink Components */}
        <NavLink />
      </div>
      <div className="flex-none">
        <Link
          className="font-lato font-semibold text-white bg-yellow-500 px-6 py-3 rounded-full hover:bg-yellow-600 transition-all"
          href="/authentication/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
