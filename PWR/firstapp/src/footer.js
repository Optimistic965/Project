import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";




const Footer = () => {
   return (
      <div className="footer">
         <div className="social">
            <FontAwesomeIcon icon={faCompass} />
            <ul>
               <li><a href="https://www.instagram.com/ai_quad/">Instagram</a></li>
               <li><a href="https://www.linkedin.com/in/Ifeoluwa-Olamiji">LinkedIn</a></li>
               <li><a href="https://t.me/Ifeoluwa_Olamiji">Telegram</a></li>
               <li><a href="https://twitter.com/atom_optimistic">Twitter</a></li>
            </ul>
         </div>
        <p className="copy">Copyright <span>&copy; </span> Ifeoluwa Olamiji - All Right Reserved</p>
      </div>
    );
}

export default Footer;