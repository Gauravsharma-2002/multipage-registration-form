import React, { useState } from "react";

const Secondchild = ({ formData, setFormData }) => {
  // const [submit, setsubmit] = useState(true);
  // const submitStatus=()=>{
  //   if(formData.spassword===""||formData.cpassword==="")setsubmit(true)
  //   else setsubmit(false);
  //   console.log("check")

  //   if(formData.spassword!==formData.cpassword)setsubmit(true) 
  //   else setsubmit(false);
  // }
  
  const alertabove=()=>{
    if(formData.spassword!==formData.cpassword)
    alert("mismatch in password")
  }

  return (
    <div className="password">
      <div>
        <label>Set Password</label>
        {/* <input type="E" /> */}
        <input
          type="password"
          onChange={(e) => {
            const svalue = e.target.value;
            // console.log(lidvalue);
            setFormData({ ...formData, spassword: svalue });
            // submitStatus();
          }}

          value={formData.spassword}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        {/* <input type="text" /> */}
        <input
          type="password"
          required
          onChange={(e) => {
            const cValue = e.target.value;
            setFormData({ ...formData, cpassword: cValue });
            // submitStatus();
          }}
          value={formData.cpassword}
        />
      </div>
      <button onClick={alertabove}>Submit</button>
    </div>
  );
};

export default Secondchild;
