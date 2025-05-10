import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import References from "./pages/References";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import MenstrualHealth from "./pages/topics/MenstrualHealth";
import CancerAwareness from "./pages/topics/CancerAwareness";
import ImmunizationAwareness from "./pages/topics/ImmunizationAwareness";
import ChildhoodIllnesses from "./pages/topics/ChildhoodIllnesses";
import HealthyHabits from "./pages/topics/HealthyHabits";
import HomeSafety from "./pages/topics/HomeSafety";
import ChildHoodObesity from "./pages/topics/ChildHoodObesity";
import Blogs from "./pages/Blogs";
import Map from "./pages/Places";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />

          {/* Wellness Topic Routes */}
          <Route
            path="/topics/menstrual-health-and-hygiene"
            element={<MenstrualHealth />}
          />
          <Route
            path="/topics/cervical-and-breast-cancer-awareness"
            element={<CancerAwareness />}
          />
          <Route
            path="/topics/immunization-awareness-for-mothers-and-children"
            element={<ImmunizationAwareness />}
          />
          <Route
            path="/topics/common-childhood-illnesses-and-first-aid"
            element={<ChildhoodIllnesses />}
          />
          <Route
            path="/topics/healthy-habits-for-moms-and-kids"
            element={<HealthyHabits />}
          />
          <Route
            path="/topics/safety-at-home-injury-prevention-and-healthy-spaces"
            element={<HomeSafety />}
          />
          <Route
            path="/topics/preventing-and-addressing-childhood-obesity"
            element={<ChildHoodObesity />}
          />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}
