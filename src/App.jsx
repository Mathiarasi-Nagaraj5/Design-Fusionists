import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Suggestions from "./pages/suggestions/Suggestions";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return <>
    <Header>
      
    </Header>
    <Suggestions></Suggestions>
    <Footer/>
  </>;
}

export default App;
