import React,{useState} from 'react'

const Component = ({formData,setFormData,setdisable}) => {
  const [isValid,setIsValid]=useState();
  const [isValidname,setValidName]=useState(false);
  const nextbtn=()=>{
    isValid&&isValidname?setdisable(false):setdisable(true);
  }
  const checkName=()=>{
    formData.fname.length<4?setValidName(false):setValidName(true);
    

  }
  const  isValidCheck=()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(formData.email));
    // console.log(isValid);
    // isValid?setdisable(false):setdisable(true);
  }
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
              // if(fnamevalue===""||formData.email==="")setdisable(true)
              // else setdisable(false);
              checkName();
              nextbtn();
            }}
            // onBlur={()=>{
            //   checkName();
            //   nextbtn();
            // }}
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
              // if(emailvaluevalue===""||formData.fname==="")setdisable(true)
              // else setdisable(false);
              isValidCheck();
              nextbtn();
          
            }}
            // onBlur={()=>{
            //   isValidCheck();
            //   nextbtn();
            // }}
            value={formData.email}
          />
        </div>
      </form>
    </div>
  )
}

export default Component