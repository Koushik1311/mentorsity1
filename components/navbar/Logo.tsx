import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    // Link to Home page
    <Link href="/">
      {/* Logo Path = "@/public/logo.png" */}
      <Image src="/logo.png" alt="Logo" width="160" height="45" />
    </Link>
  );
};

export default Logo;
