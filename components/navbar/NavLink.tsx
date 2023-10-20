import Link from "next/link";
import { links } from "@/lib/Links";

// For better understanding check Links.tsx file, File Path = "@/utils/Links.tsx"

const NavLink = () => {
  return (
    <div className="flex gap-10 mr-16 uppercase font-lato">
      {/* Mapping through links */}
      {links.map((link) => (
        <div>
          <div className="px-3 text-left cursor-pointer group hover:text-yellow-500">
            {/* Links name */}
            <h1 className="py-6 font-semibold ">{link.name}</h1>
            {/* Sublinks or Submenus */}
            {link.submenu && (
              <div>
                <div className="absolute top-14 hidden group-hover:block hover:block">
                  <div className="py-2">
                    <div className="w-4 h-4 left-3 absolute bg-slate-200 rotate-45"></div>
                  </div>
                  <div className="bg-slate-200 px-6 py-3 rounded-md">
                    {/* Mapping through sublinks or submenus */}
                    {link.sublinks.map((sublink) => (
                      <div>
                        {/* Mapping through sublink */}
                        {sublink.sublink.map((slink) => (
                          <li className="list-none text-sm py-1 font-semibold text-gray-600 my-2.5 hover:text-yellow-500">
                            <Link href={slink.link}>{slink.name}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavLink;
