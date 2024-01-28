import React from "react";
import Box from "@mui/material/Box";
import { Typography, Link } from "@mui/material";
import "./Footer.css";
import Email from "../assets/icons/email.png";

const Footer: React.FC = () => {
  return (
    <Box sx={{ background: "#D92D27", padding: "1.6rem 3rem", color: "white" }}>
      <Typography variant="h2">Need Help?</Typography>
      <div
        className="flex flex-wrap w-full justify-between mb-6"
        id="footerContentContainer"
      >
        <div className="my-6 flex-auto">
          <Typography variant="h3">Email us</Typography>
          <div className="flex">
            <img
              src={Email}
              alt="Link to Instagram"
              width={20}
              style={{ marginRight: "0.25em" }}
            />
            <Link
              color="inherit"
              href="mailto:info@senecahackathon.com"
              className="no-underline"
            >
              info@senecahackathon.com
            </Link>
          </div>
        </div>
        <div className="my-6 flex-auto">
          <Typography variant="h3">Address</Typography>
          <p className="my-1 text-lg">
            Seneca Polytechnic
            <br />
            1750 Finch Ave East
            <br />
            Toronto, Ontario, Canada
            <br />
            M2J 2X5
          </p>
        </div>
      </div>
      <p className="text-[x-small]">
        Ⓒ Copyright. All rights reserved by Housing Hackathon.
      </p>
    </Box>
  );
};

export default Footer;
