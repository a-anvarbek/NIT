import { BrowserRouter } from "react-router";

import MainRouter from "./routes/MainRouter";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <MainRouter />
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
