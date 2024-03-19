// components
import { Navbar, Footer } from "@/components";
// sections
import Hero from "./hero";
import ListResep from "./list-resep";

export default function Campaign() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <ListResep />
      <Footer />
    </>
  );
}
