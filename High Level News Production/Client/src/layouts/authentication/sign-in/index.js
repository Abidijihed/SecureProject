// import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import React, { Component } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

export default class index extends Component {
  constructor(props){
    super(props)
    this.state={
         Email:"",
         Password:"",
         alert:''
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(
        this.state
    )
}
checkUser(e){
  const {Password,Email}=this.state
 axios.post('http://localhost:3333/api/login',{
   Email:Email,
   Password:Password
   
 }).then(res=>{
   console.log(res,'yoyoyoyoyo')
   if(res.data[1]==="secsuss"){
     sessionStorage.setItem("secsuss",res.data[0])
    Swal.fire({
      position: 'mid',
      icon: 'success',
      title: 'Your Login has been secced',
      showConfirmButton: false,
      timer: 1500
    }) 
    window.location.href="http://localhost:3333/Dashboard"
    
   }else if(res.data==="somthing went wrong") {
    Swal.fire({
      position: 'mid',
      icon: 'error',
      title: 'Something went wrong! Check your Password or Email',
      showConfirmButton: false,
      timer: 1500
    })
   }else{
    Swal.fire({
      position: 'mid',
      icon: 'error',
      title: 'user not fund go to Sign-up',
      showConfirmButton: false,
      timer: 1500
    })
   }
 }).catch((err)=>{
  console.log(err)
 })
}
  render() {
    return (
      <CoverLayout
        title="Welcome back"
        description="Enter your Email and Password to sign in"
        image={curved9}
      >
        <SuiBox component="form" role="form">
          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                Email
              </SuiTypography>
            </SuiBox>
            <SuiInput type="Email" placeholder="Email" name="Email"  onChange={(e)=>this.handleChange(e)}/>
          </SuiBox>
          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                Password
              </SuiTypography>
            </SuiBox>
            <SuiInput type="Password" placeholder="Password" name="Password" onChange={(e)=>this.handleChange(e)} />
          </SuiBox>
          <SuiBox display="flex" alignItems="center">
          {/* // onChange={handleSetRememberMe}  checked={rememberMe} */ }
            <Switch />
            <SuiTypography
              variant="button"
              fontWeight="regular"
              // onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;Remember me
            </SuiTypography>
          </SuiBox>
          <SuiBox mt={4} mb={1}>
            <SuiButton variant="gradient" color="info" fullWidth onClick={(e)=>this.checkUser(e)}>
              sign in
            </SuiButton>
          </SuiBox>
          <SuiBox mt={3} textAlign="center">
            <SuiTypography variant="button" color="text" fontWeight="regular">
              Don&apos;t have an account?{" "}
              <SuiTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign up
              </SuiTypography>
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </CoverLayout>
    );
  }
}

  // const [rememberMe, setRememberMe] = useState(true);

  // const handleSetRememberMe = () => setRememberMe(!rememberMe);

  

