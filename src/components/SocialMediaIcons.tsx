import Box from "@mui/material/Box";
import Facebook from "../assets/icons/facebook.png";
import Instagram from "../assets/icons/instagram.png";
import LinkedIn from "../assets/icons/linkedin.png";
import Tiktok from "../assets/icons/tiktok.png";
import Twitter from "../assets/icons/twitter.png";
import "./SocialMediaIcons.css";
function SocialMediaIcons() {
  return (
    <div className="flex flex-row gap-x-2">
      <a
        href="https://www.instagram.com/senecahackathon/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Instagram}
          style={{ margin: "0.05em 0.25em" }}
          alt="Link to Instagram"
          width={20}
        />
      </a>
      <a
        href="https://www.facebook.com/SenecaHackathon2022"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Facebook}
          style={{ margin: "0.05em 0.25em" }}
          alt="Link to Facebook"
          width={20}
        />
      </a>
      <a
        href="https://www.linkedin.com/company/seneca-hackathon/mycompany/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={LinkedIn}
          style={{ margin: "0.05em 0.25em" }}
          alt="Link to LinkedIn"
          width={20}
        />
      </a>
      <a
        href="https://twitter.com/SenecaHackathon"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Twitter}
          style={{ margin: "0.05em 0.25em" }}
          alt="Link to Twitter"
          width={20}
        />
      </a>
      <a
        href="https://www.tiktok.com/@senecahackathon"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Tiktok}
          style={{ margin: "0.05em 0.25em" }}
          alt="Link to Tiktok"
          width={20}
        />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
