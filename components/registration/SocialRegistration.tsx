"use client";

import Link from "next/link";


// Social Login Items
const socialIcon = [
  {
    label: "Google",
    icon: "/social/googleicon.jpg",
    link: "#",
  },
  {
    label: "Facebook",
    icon: "/social/facebook.png",
    link: "#",
  },
  {
    label: "LinkedIn",
    icon: "/social/linkedin.png",
    link: "#",
  },
];

function SocialLogin() {
  
  return (
    <>
      <div className="flex items-center justify-center gap-5">
        {/* Map through socialIcon */}
        {socialIcon.map((icon) => (
          <div className="">
            {/* Links */}
            <Link href={icon.link}>
              <img className="w-6 h-6" src={icon.icon} alt={icon.label} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default SocialLogin;