import AlumniProfile from "@/components/AlumniProfile";
import AlumniWorkPlace from "@/components/AlumniWorkPlace";
import TopUniversityPartners from "@/components/TopUniversityPartners";

export default function Home() {
  return (
    <main>
      <TopUniversityPartners />
      <AlumniProfile />
      <AlumniWorkPlace />
    </main>
  );
}
