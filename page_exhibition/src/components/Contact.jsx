// img
import linkedInLogo from "../img/linkedin-logo.avif";
import gitHubLogo from "../img/github-logo.png";
import codePenLogo from "../img/codepen-logo.png";
import gmailLogo from "../img/gmail-logo.png";
import instagramLogo from "../img/Instagram-logo.webp";
import whatsappLogo from "../img/whatsapp-logo.png";

// css
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contato</h2>
      <div className="contact-container">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/carlosc137/" target="_blank">
              <img src={linkedInLogo} alt="linkedin logo" id="in-logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com/CarlosAlbertoC137" target="_blank">
              <img src={gitHubLogo} alt="github logo" />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/CarlosC137" target="_blank">
              <img src={codePenLogo} alt="codepen logo" />
            </a>
          </li>
          <li>
            <a
              href="mailto:carlosalbertodeandradedasilva@gmaiil.com"
              target="_blank"
            >
              <img src={gmailLogo} alt="gmail logo" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_carlosc137/" target="_blank">
              <img src={instagramLogo} alt="instagram logo" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5521970678247" target="_blank">
              <img src={whatsappLogo} alt="whatsapp logo" id="whats-logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
