import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/about";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

export default function MyApp() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#003262";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
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
      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Please Enter the Text below..."
          mode={mode}
        />

        {/* <About /> */}
      </div>
    </>
  );
}
