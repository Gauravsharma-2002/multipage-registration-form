import React from 'react'
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Firstchild = ({setFormData,formData,setdisable}) => {
  return (
    <div className="phone">
      <div>
        <label>Linked IN </label>
        <input
          type="text"
          onChange={(e) => {
            const lidvlu = e.target.value;
            setFormData({ ...formData, lid: lidvlu });
          }}
          placeholder="Linked In url"
          value={formData.lid}
        />
      </div>
      <div>
        <label>phone number</label>
        <PhoneNumberInput
          formData={formData}
          setFormData={setFormData}
          setdisable={setdisable}
        />
      </div>
    </div>
  );
};
const PhoneNumberInput = ({ formData, setFormData, setdisable }) => {
  return (
    <div>
      <PhoneInput
        international
        onChange={(e) => {
          const pnoValue = e;
          setFormData({ ...formData, pno: pnoValue });
          if (formData.pno === undefined) setdisable(true);
          else setdisable(false);
        }}
        placeholder="Phone Number"
        className="phoneInput"
        value={formData.pno}
      />
    </div>
  )
}

export default Firstchild