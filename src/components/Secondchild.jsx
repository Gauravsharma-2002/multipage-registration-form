import React, { useState } from "react";

const Secondchild = ({ formData, setFormData }) => {
  const [submit, setsubmit] = useState(true);
  return (
    <div className="password">
      <div>
        <label>Set Password</label>
        {/* <input type="E" /> */}
        <input
          type="password"
          onChange={(e) => {
            const lidvalue = e.target.value;
            // console.log(lidvalue);
            setFormData({ ...formData, spassword: lidvalue });
            if (
              formData.spassword === "" ||
              formData.spassword !== formData.cpassword
            )
              setsubmit(true);
            else setsubmit(false);
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
            const pnoValue = e.target.value;
            setFormData({ ...formData, cpassword: pnoValue });
            if (
              formData.cpassword === "" ||
              formData.cpassword !== formData.spassword
            )
              setsubmit(true);
            else setsubmit(false);
          }}
          value={formData.cpassword}
        />
      </div>
      <button disabled={submit}>Submit</button>
    </div>
  );
};

export default Secondchild;
