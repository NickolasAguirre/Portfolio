import "./App.css";
import { NextUIProvider } from "@nextui-org/react";

import InputContact from "./components/InputContact";

import { Presentation } from "./components/Presentation";
import Proyects from "./components/Proyects";

import { Footer } from "./components/Footer";
import Description from "./components/Description";
import Header from "./components/Header";

function App() {
  return (
    <NextUIProvider>
      <Header />
      <Presentation />
      <Description />
      <Proyects />
      <InputContact />
      <Footer />
    </NextUIProvider>
  );
}

export default App;
