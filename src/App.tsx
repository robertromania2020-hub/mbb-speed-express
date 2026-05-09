import { Routes, Route } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import Home from "@/pages/Home";
import Servicii from "@/pages/Servicii";
import Despre from "@/pages/Despre";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="servicii" element={<Servicii />} />
        <Route path="despre" element={<Despre />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
