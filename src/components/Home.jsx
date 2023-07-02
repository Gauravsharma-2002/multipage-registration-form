import React, { useState } from "react";

import Component from "./Component";
import Firstchild from "./Firstchild";
import Secondchild from "./Secondchild";
import Component1 from "./Component1";


import img1 from "../assets/konnectorxLogo.webp";
import img2 from "../assets/registration.jpg";

const Home = () => {
  const [isactive, setIsActive] = useState(0);
  const [disable, setdisable] = useState(true);
  const [formData, setFormData] = useState({
    option: "",
    fname: "",
    email: "",
    spassword: "",
    cpassword: "",
    lid: "",
    pno: undefined  ,
  });

  const backHandler = () => {
    setIsActive((currPage) => currPage - 1);
  };
  const nextHandler = () => {
    setIsActive((currPage) => currPage + 1);
    setdisable(true);
  };
  return (
    <div className="homePage">

    <div className="final">
      <div className="imagesection">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
      <div className="form">
        {isactive === 0 ? (
          <Component1
            isactive={isactive}
            backHandler={backHandler}
            nextHandler={nextHandler}
            formData={formData}
            setFormData={setFormData}
            disable={disable}
            setdisable={setdisable}
          />
        ) : isactive === 1 ? (
          <Component
            isactive={isactive}
            backHandler={backHandler}
            nextHandler={nextHandler}
            formData={formData}
            setFormData={setFormData}
            disable={disable}
            setdisable={setdisable}
            />
        ) : isactive === 2 ? (
          <Firstchild
            isactive={isactive}
            backHandler={backHandler}
            nextHandler={nextHandler}
            formData={formData}
            setFormData={setFormData}
            disable={disable}
            setdisable={setdisable}
            />
        ) : isactive === 3 ? (
          <Secondchild
          isactive={isactive}
          backHandler={backHandler}
          nextHandler={nextHandler}
          formData={formData}
          setFormData={setFormData}
          disable={disable}
          setdisable={setdisable}
          />
          ) : (
            <Component />
            )}

        <div className="btn-class">
          <button disabled={isactive === 0} onClick={backHandler}>
            back
          </button>
          {/* {console.log(disable)}; */}
          <button disabled={isactive===3|| disable} onClick={nextHandler}>
            next
          </button>
        </div>
      </div>
    </div>
            </div>
  )
}

export default Home