import "./Main.css";
import Promo from "../Promo/Promo";
import Technologies from "../Technologies/Technologies"
import About from "../About/About";
import Student from "../Student/Student";

function Main() {
  return (
    <div className="main">
      <Promo />
      <About />
      <Technologies />
      <Student />
    </div>
  );
}

export default Main;
