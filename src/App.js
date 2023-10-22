import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

export default function MyApp() {
  return (
    <>
      <Navbar title="WordsCounter" aboutUs="About" />

      <div className="container my-5">
        <TextForm heading="Please Enter the Text below..." />
      </div>
    </>
  );
}
