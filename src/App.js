import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/about";
import TextForm from "./components/TextForm";

export default function MyApp() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#003262";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="WordsCounter"
        aboutUs="About"
        mode={mode}
        toggleMode={toggleMode}
      />

      <div className="container my-5">
        <TextForm heading="Please Enter the Text below..." mode={mode} />

        {/* <About /> */}
      </div>
    </>
  );
}
