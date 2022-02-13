import Header from "../header/Header";
import Tours from "../tours/Tours";
import travelData from "../../data/db.json";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Tours theUsedData={travelData} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
