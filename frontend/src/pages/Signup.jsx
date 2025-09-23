import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import { handleError, handleSuccess } from '../utils';

const Signup = () => {

  const [signupInfo,setSignupInfo]=useState({
    name:'',
    email:'',
    password:''
  })
  const navigate=useNavigate()
  const handleChange=(e)=>{
     const {name,value}=e.target;
     console.log(name,value)
     const copySignupInfo={...signupInfo}
     copySignupInfo[name]=value;
     setSignupInfo(copySignupInfo)
  }
  const handleSignup=async(e)=>{
    e.preventDefault();
    const {name,email,password}=signupInfo
    if(!name||!email||!password){
      return handleError('All the fields are required')
    }
    try{
      const url="http://localhost:8080/auth/signup"
      const response=await fetch(url,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(signupInfo)
      })
      const result=await response.json()
      const{success,message,error}=result;
      if(success){
        handleSuccess(message)
        setTimeout(()=>{
          navigate('/login')
        },1000)
      }else if(error){
        const details=error?.details[0].message;
        handleError(details)
      }else if(!success){
        handleError(message)
      }
    }catch(err){
      handleError(err)
    }
  }
  return (
    <StyledWrapper>
      <div className="login-box">
        <p>Sign Up</p>
        <form onSubmit={handleSignup}>
          <div className='user-box'>
            <input value={signupInfo.name} onChange={handleChange} required name="name" type='text' />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input value={signupInfo.email} onChange={handleChange} required name="email" type="text" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input value={signupInfo.password} onChange={handleChange} required name="password" type="password" />
            <label>Password</label>
          </div>
          <button type="submit" className="signup-button">
            <span />
            <span />
            <span />
            <span />
            <span />
            Submit
          </button>
        </form>
        <p>Already have an account? <a href="/login" className="a2 cursor-pointer">Login</a></p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  background-color: #3f3f46;
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    margin: 20px auto;
    transform: translate(-50%, -55%);
    background: rgba(0,0,0,.9);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
  }

  .login-box p:first-child {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .login-box .user-box {
    position: relative;
  }

  .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #fff;
    font-size: 12px;
  }

  .login-box form .signup-button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    font-weight: bold;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 3px;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .login-box .signup-button:hover {
    background: #fff;
    color: #272727;
    border-radius: 5px;
  }

  .login-box .signup-button span {
    position: absolute;
    display: block;
  }

  .login-box .signup-button span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #fff);
    animation: btn-anim1 1.5s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }

    50%,100% {
      left: 100%;
    }
  }

  .login-box .signup-button span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #fff);
    animation: btn-anim2 1.5s linear infinite;
    animation-delay: .375s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }

    50%,100% {
      top: 100%;
    }
  }

  .login-box .signup-button span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #fff);
    animation: btn-anim3 1.5s linear infinite;
    animation-delay: .75s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }

    50%,100% {
      right: 100%;
    }
  }

  .login-box .signup-button span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #fff);
    animation: btn-anim4 1.5s linear infinite;
    animation-delay: 1.125s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }

    50%,100% {
      bottom: 100%;
    }
  }

  .login-box p:last-child {
    color: #aaa;
    font-size: 14px;
  }

  .login-box a.a2 {
    color: #fff;
    text-decoration: none;
  }

  .login-box a.a2:hover {
    background: transparent;
    color: #aaa;
    border-radius: 5px;
  }`;

export default Signup;
