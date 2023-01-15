import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import GallerySlider from "../components/GallerySlider";
import GalleryWrapper from "../components/GalleryWrapper";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <GalleryWrapper />
      <GallerySlider />
      <NewsLetter />
      <Footer />
    </div>
  );
}
