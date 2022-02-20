import { Link } from "react-router-dom";

const navbar = () => {
   return (
      <header>
         <img src="./orange_noBG.png" alt="logo" className="logo" />
         <nav>
            <ul className="navlinks">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </nav>
      </header>
   );
}

export default navbar;