import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="conrainer">
        <div>
          <h4>KONNECTORX</h4>
          <p>
            konnectorx platform aim to simplify the process of connecting
            startups, founders, investors, and job seekers, and provide a
            valuable resource for anyone looking to find job opportunities,
            raise funds, or connect with the startup community. Additionally, at
            KonnectorX, we understand the importance of staying informed and
            inspired. That's why we bring you aggregated news on startup
            businesses, industry trends, and motivational stories. Stay
            up-to-date with the latest happenings in the startup world, gain
            insights from successful entrepreneurs, and find the motivation you
            need to fuel your own journey.
          </p>
        </div>


        
        <div>
          
          
          <div>
            <h5>USEFUL LINKS</h5>
            <ul>
              <Link to={"/about"}>About</Link>
              <Link to={"/blog"}>Blogs</Link>
              <Link to={"/startup"}>Startup</Link>
              <Link to={"/investor"}>Investor</Link>
              <Link to={"/jobs"}>Jobs</Link>
            </ul>
          </div>
          <div>
            <h5>IMPORTANT LINKS</h5>
            <ul>
              <Link to={"/about"}>About</Link>
              <Link to={"/blog"}>Blogs</Link>
              <Link to={"/startup"}>Startup</Link>
              <Link to={"/investor"}>Investor</Link>
              <Link to={"/jobs"}>Jobs</Link>
            </ul>
          </div>
          <div>
            <h5>CONTACT US</h5>
            <p>
              5th Floor, Unit No.-534-535 Spaze ITech Park, Sohna Road Sector
              49, Gurgaon 122018 Haryana
            </p>
            <p>+91-9718214022</p>
            <p>admin@koderbox.com</p>
          </div>
        </div>


      </div>
      <div className="bottom">© Copyright Konnectorx.All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
