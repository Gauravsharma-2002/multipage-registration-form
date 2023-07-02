import React from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const Component1 = ({formData,setFormData,disable,setdisable}) => {
  return (
    <>
    <div className="dropdown">
       <label>What describes you best</label>
      <select
      onChange={(e) => {
        const selectedOption = e.target.value;
        setFormData({ ...formData, option: selectedOption });
       if(selectedOption==="") setdisable(true);
       else setdisable(false);
      
      }}
      value={formData.option}
      >
        <option value="">Select....</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
    </div>
      <div className="centralDiv">
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
    <div className="interiordiv">
        
        <div className="buttonGrp">
          <button>
            <FaGoogle />
            Google
          </button>
          <button>
            <FaLinkedin />
            LinkedIN
          </button>
        </div>

        <div className="lastlink">
          <p>
            By clicking Sign in with LinkedIn, you agree to let Konnectorx store
            your LinkedIn profile
          </p>
          <p>
            Already have an account? <span>Sign in</span>
          </p>
        </div>

      </div>
        </>
  )
}

export default Component1