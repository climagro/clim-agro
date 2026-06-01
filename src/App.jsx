import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Model from "./pages/Model.jsx";
import Impact from "./pages/Impact.jsx";
import Projects from "./pages/Projects.jsx";
import Gallery from "./pages/Gallery.jsx";
import Investors from "./pages/Investors.jsx";
import News from "./pages/News.jsx";
import NewsPost from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="model" element={<Model />} />
        <Route path="impact" element={<Impact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="investors" element={<Investors />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsPost />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
