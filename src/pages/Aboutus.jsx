import React from "react";
import Navbar from "../components/common/Navbar";
import { Grid, Typography, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import about from "../images/about.jpg";
import "../styles/About.css";

const Aboutus = () => {
  const phoneNumber = "9654991140";
  const username = "SpamTheScam";
  const message = "Hi, I saw your resume and I am interested in your work!";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const link2 = `https://t.me/${username}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <Navbar />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Poppins, sans-serif",
              padding: "0px 20px 20px 20px",
            }}
          >
            Resume <br /> Builder
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Typography
            sx={{ fontFamily: "Poppins, sans-serif", padding: "20px" }}
          >
            Welcome to my Resume Builder App! This app is designed to make the
            process of creating a professional and polished resume as easy and
            streamlined as possible. With an intuitive user interface, you can
            easily input all of your relevant details, experience, education,
            and skills, and customize the layout and design to match your
            personal style through the readymade available templates. Whether
            you are a recent graduate just starting your career or an
            experienced professional looking to update your resume, this app is
            the perfect tool to help you create a standout document that will
            impress hiring managers and help you land your dream job. Try this
            Resume Builder App today and take the first step towards your next
            career move! <br /> <br /> Thank you for taking the time to read
            this. If you have any questions or would like to get in touch,
            please don't hesitate to reach out to me. I'm always looking for new
            challenges and opportunities to grow. If you think I would be a good
            fit for your team or project, I'd love to hear from you. I hope my
            experience and skills can be of value to others. My goal is to make
            a positive impact in everything I do, and I'm excited to see where
            my journey takes me next.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} sx={{ padding: "20px" }}>
          <div className="about-img">
            <img src={about} className="about-img" alt="About Us" />
          </div>
        </Grid>
        <Grid sx={{ padding: "20px" }} item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontFamily: "Poppins , sans-serif" }}>
            This project was made using:
          </Typography>
          <div className="icons">
            <Tooltip title="React Js">
              <a href="https://www.reactjs.org">
                <FaReact />
              </a>
            </Tooltip>
            <Tooltip title="Redux Toolkit">
              <a href="https://redux.js.org/">
                <SiRedux />
              </a>
            </Tooltip>
            <Tooltip title="Material UI">
              <a href="https://mui.com/">
                <SiMaterialui />
              </a>
            </Tooltip>
          </div>
        </Grid>
        <Grid sx={{ padding: "20px" }} item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontFamily: "Poppins , sans-serif" }}>
            Connect with me:
          </Typography>
          <div className="icons">
            <Tooltip title="Whatsapp">
              <a href={link}>
                <WhatsAppIcon />
              </a>
            </Tooltip>
            <Tooltip title="Github">
              <a href="https://www.github.com/AShekharCodes">
                <GitHubIcon />
              </a>
            </Tooltip>
            <Tooltip title="Facebook">
              <a href="https://www.facebook.com/TheFadedWalker">
                <FacebookIcon />
              </a>
            </Tooltip>
            <Tooltip title="Telegram">
              <a href={link2}>
                <TelegramIcon />
              </a>
            </Tooltip>
            <Tooltip title="Instagram">
              <a href="https://www.instagram.com/abh1shekhar">
                <InstagramIcon />
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <a href="https://www.linkedin.com/in/abhishek-shekhar-0b433b213">
                <LinkedIn />
              </a>
            </Tooltip>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Aboutus;
