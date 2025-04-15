import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <button
              key={index}
              className="icon"
              onClick={() => window.open(socialImg.link, "_blank")}
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </button>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Priyanshu Dixit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
