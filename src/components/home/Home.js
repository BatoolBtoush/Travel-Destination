import React from "react";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div className="homee">
      <div>
        <Header />
      </div>
      <div>
        <Tours />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
