import React from "react";
import ScrollViewProgressIndicator from "./Components/ScrollViewProgressIndicator";

export default function App() {
  const photos = [
    require("./assets/image-placeholder.jpeg"),
    require("./assets/image-placeholder2.jpeg"),
    require("./assets/image-placeholder3.png"),
  ];
  return <ScrollViewProgressIndicator photos={photos} />;
}
