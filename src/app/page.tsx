// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
import CoursesCategories from "./courses-categories";
import ListBarang from "./barang";
import Testimonial from "./testimonial";
import Events from "./events";
import StudentsFeedback from "./students-feedback";
import TrustedCompany from "./trusted-companies";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <OutImpressiveStats /> */}
      {/* <CoursesCategories /> */}
      <ListBarang />
      {/* <Testimonial /> */}
      {/* <Events /> */}
      {/* <StudentsFeedback /> */}
      {/* <TrustedCompany /> */}
      <Footer />
    </>
  );
}
