import "./Main.css";
import Promo from "../Promo/Promo";
import Technologies from "../Technologies/Technologies";
import About from "../About/About";
import Student from "../Student/Student";

function Main(props) {
  return (
    <div className="main">
      <Promo loggedIn={props.loggedIn} />
      <About />
      <Technologies />
      <Student />
    </div>
  );
}

export default Main;
