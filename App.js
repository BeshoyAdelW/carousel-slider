import React from "react";
import CustomScrollingCarousel from "./Components/CustomScrollingCarousel";
import CustomScrollingCarouselNoSpacing from "./Components/CustomScrollingCarouselNoSpacing";
import ScrollViewProgressIndicator from "./Components/ScrollViewProgressIndicator";
import SimpleCarousel from "./Components/SimpleCarousel";

export default function App() {
  const images = [
    require("./assets/image-placeholder.jpeg"),
    require("./assets/image-placeholder2.jpeg"),
    require("./assets/image-placeholder3.png"),
  ];
  return (
    <>
      {/* <SimpleCarousel style={{ flex: 1 }} images={images} /> */}
      {/* <CustomScrollingCarousel style={{ flex: 1 }} images={images} /> */}
      {/* <ScrollViewProgressIndicator style={{ flex: 1 }} images={images} /> */}
      <CustomScrollingCarouselNoSpacing style={{ flex: 1 }} images={images} />
    </>
  );
}
