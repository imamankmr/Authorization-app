import React from "react";


const SignUp = () => {
  return (
    <>
      <h1>SignUp here</h1>
      <form>
        <label htmlFor="">Enter your email</label>
        <input type="email" placeholder="Enter email" />
    <br />
        <label htmlFor="">Enter your UserName</label>
        <input type="email" placeholder="Enter username" />
        <br />
        <label htmlFor="">Enter your Password</label>
        <input type="email" placeholder="Enter Password" />
<br />
        <button  type="submit">SignUp</button>
      </form>
    </>
  );
};

export default SignUp;
