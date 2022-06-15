
import { Link } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout/index";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios"
import Swal from 'sweetalert2'
import React, { Component } from 'react'

export default class index extends Component {
  constructor(props){
    super(props)
    this.state={
           FirstName:"",
           LastName:"",
           Email:"",
           Password:"",
           confirmPassword:"",
           PhoneNumber:"",
           errors: {}
    }
  }
  handleValidation() {
    let { FirstName,LastName, Email, Password, confirmPassword, PhoneNumber } = this.state
    let errors = {};
    let formIsValid = true;
    //Name
    if (!FirstName) {
      formIsValid = false;
      errors.FirstName = "Cannot be empty";
    }

    if (typeof FirstName !== "undefined") {
      if (!FirstName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors.FirstName = "  FirstName Containe Just Only letters UperCase, LowerCase";
      }
    }
    if (!LastName) {
      formIsValid = false;
      errors.LastName = "Cannot be empty";
    }
    //Email
    if (!Email) {
      formIsValid = false;
      errors.Email = "Cannot be empty";
    }

    if (typeof Email !== "undefined") {
      let lastAtPos = Email.lastIndexOf('@');
      let lastDotPos = Email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && Email.indexOf('@@') === -1 && lastDotPos > 2 && (Email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors.Email = "Your Email Shoold Write like example@gmail.com";
      }
    }
    //password
    if (!Password) {
      formIsValid = false;
      errors.Password = "Cannot be empty";
    }

    // if (typeof Password !== "undefined") {
    //   if (!Password.match(/^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{8,}$/)) {
    //     formIsValid = false;
    //     errors.Password = "Password shoold Containe letters UperCase, LowerCase, Number and Special Caracter ";
    //   }
    // }
    if (confirmPassword !== Password) {
      errors.confirmPassword = "confirmPassword shoold Containe the Same like password "
    }
    if (PhoneNumber.length < 0) {
      errors.PhoneNumber = "Cannot be empty";
    }


    this.setState({ errors: errors });
    return formIsValid;
  }
 
  async contactSubmit(e) {
    let { FirstName,LastName, Email, Password, confirmPassword, PhoneNumber } = this.state
    e.preventDefault();  
    if (this.handleValidation()) {
      // const formData = new FormData()
        axios.post("http://localhost:3333/api/user", {
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          Password: Password,
          confirmPassword: confirmPassword,
          PhoneNumber: PhoneNumber
        }).then((res) => {
          console.log(res,'im heareeeeeeee')
        })
    } else {
      Swal.fire({
        position: 'mid',
        icon: 'error',
        title: 'Something went wrong! Check your Password or Email',
        showConfirmButton: false,
        timer: 1500
      })
    }
 

  }
  //handlechange my inputs
  handleChange(e){ 
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    console.log(this.state)
    const {PhoneNumber}=this.state
    return (
      <BasicLayout
        title="Welcome!"
        description="Use these awesome forms to login or create new account in your project for free."
        image={curved6}
      >
        <Card>
          <SuiBox p={3} mb={1} textAlign="center">
            <SuiTypography variant="h5" fontWeight="medium">
              Register with
            </SuiTypography>
          </SuiBox>
          <SuiBox mb={2}>
            <Socials />
          </SuiBox>
          <Separator />
          <SuiBox pt={2} pb={3} px={3}>
            <SuiBox component="form" role="form">
              <SuiBox mb={2}>
                <SuiInput placeholder="FirstName"  name="FirstName" onChange={(e)=>this.handleChange(e)}/>
                <span className="error" style={{color:"red", fontSize:"10px",fontFamily:"cursive"}}>{this.state.errors["FirstName"]}</span>
              </SuiBox>
              <SuiBox mb={2}>
                <SuiInput placeholder="LastName" name="LastName" onChange={(e)=>this.handleChange(e)}/>
                <span className="error" style={{color:"red", fontSize:"10px",fontFamily:"cursive"}}>{this.state.errors["LastName"]}</span>
              </SuiBox>
              <SuiBox mb={2}>
                <SuiInput type="email" placeholder="Email" name="Email" onChange={(e)=>this.handleChange(e)}/>
                <span className="error" style={{color:"red", fontSize:"10px",fontFamily:"cursive"}}>{this.state.errors["Email"]}</span>
              </SuiBox>
              <SuiBox mb={2}>
                <SuiInput type="password" placeholder="Password" name="Password" onChange={(e)=>this.handleChange(e)}/>
                <span className="error" style={{color:"red", fontSize:"10px",fontFamily:"cursive"}}>{this.state.errors["Password"]}</span>
              </SuiBox>
              <SuiBox mb={2}>
                <SuiInput type="password" placeholder="confirmPassword" name="confirmPassword" onChange={(e)=>this.handleChange(e)}/>
                <span className="error" style={{color:"red", fontSize:"10px",fontFamily:"cursive"}}>{this.state.errors["confirmPassword"]}</span>
              </SuiBox>
              <SuiBox mb={2}>
                <PhoneInput
            placeholder="Enter phone number"
            country={'tn'}
            value={PhoneNumber}
            onChange={ PhoneNumber  => this.setState({PhoneNumber })}
         />   
         <span className="error" style={{color:"red", fontSize:"10px",fontFamily:"cursive"}}>{this.state.errors["PhoneNumber"]}</span>
              </SuiBox>
              <SuiBox display="flex" alignItems="center">
                <Checkbox />
                {/* checked={agreement} onChange={handleSetAgremment}  */}
                <SuiTypography
                  variant="button"
                  fontWeight="regular"
                  // onClick={handleSetAgremment}
                  sx={{ cursor: "poiner", userSelect: "none" }}
                >
                  &nbsp;&nbsp;I agree the&nbsp;
                </SuiTypography>
                <SuiTypography component="a" href="#" variant="button" fontWeight="bold" textGradient>
                  Terms and Conditions
                </SuiTypography>
              </SuiBox>
              <SuiBox mt={4} mb={1}>
                <SuiButton variant="gradient" color="dark" fullWidth  onClick={(e) => this.contactSubmit(e)} >
                  sign up
                </SuiButton>
              </SuiBox>
              <SuiBox mt={3} textAlign="center">
                <SuiTypography variant="button" color="text" fontWeight="regular">
                  Already have an account?&nbsp;
                  <SuiTypography
                    component={Link}
                    to="/authentication/sign-in"
                    variant="button"
                    color="dark"
                    fontWeight="bold"
                    textGradient
                  >
                    Sign in
                  </SuiTypography>
                </SuiTypography>
              </SuiBox>
            </SuiBox>
          </SuiBox>
        </Card>
      </BasicLayout>
    );
  }
}

