import React from "react";
import logoImg from "../assets/konnectorxLogo.webp";
import startLogo from "../assets/startup.png";
import jobLogo from "../assets/job.png";
import investorLogo from "../assets/investor.png";
import homeLogo from "../assets/home.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <img src={logoImg} alt="logoImage" />
      <div>
        <Link to={"/startup"}>
          <img src={startLogo} alt="" />
          StartUp
        </Link>
        <Link to={"/investor"}>
          <img src={investorLogo} alt="" />
          investor
        </Link>
        <Link to={"/jobs"}>
          <img src={jobLogo} alt="" />
          Jobs
        </Link>
        <Link to={"/news"}>
          <img src={homeLogo} alt="" />
          News
        </Link>
      <Link to={"/login"}>
        <button>Join Now</button>
      </Link>
      </div>
      <Link to={"/login"} className="joinBtn"><button>Join Now</button></Link>
    </nav>
  );
};

export default Header;
