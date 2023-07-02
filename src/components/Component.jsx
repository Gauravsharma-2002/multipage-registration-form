import React from 'react'

const Component = ({formData,setFormData,setdisable}) => {
  return (
    <div id="loginPage">
      <form>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            required
            onChange={(e) => {
              const fnamevalue = e.target.value;
              setFormData({ ...formData, fname: fnamevalue });
              if(fnamevalue===""||formData.email==="")setdisable(true)
              else setdisable(false);
              
          
            }}
            value={formData.fname}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            required
            onChange={(e) => {
              const emailvaluevalue = e.target.value;
              setFormData({ ...formData, email: emailvaluevalue });
              if(emailvaluevalue===""||formData.fname==="")setdisable(true)
              else setdisable(false);
          
            }}
            value={formData.email}
          />
        </div>
      </form>
    </div>
  )
}

export default Component