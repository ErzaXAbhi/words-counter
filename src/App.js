import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/about";
// import TextForm from "./components/TextForm";

export default function MyApp() {
  return (
    <>
      <Navbar title="WordsCounter" />

      <div className="container my-5">
        {/* <TextForm heading="Please Enter the Text below..." /> */}

        <About />
      </div>
    </>
  );
}
