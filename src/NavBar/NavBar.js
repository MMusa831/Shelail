import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import  './Nav.css';


function NavBar() {

  

  return (
    <div className="NavBar">

      <MobileNav/>
      <Navigation/>

    </div>

  );
}

export default NavBar;    