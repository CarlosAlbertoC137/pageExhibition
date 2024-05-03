// img
import qrcodeImg from "../img/qrcode-img.png";
// css
import "./Projects.css";

const Project2 = () => {
  return (
    <div className="project-container">
      <a href="https://github.com/CarlosAlbertoC137/geradordeqrcode">
        <img src={qrcodeImg} alt="gerador de qr code image" />
      </a>
      <h4>Gerador de QR Code</h4>
      <p>Gerador de QR Code feito em HTML, CSS e JS.</p>
    </div>
  );
};

export default Project2;
