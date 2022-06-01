
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
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
           PhoneNumber:""
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
              </SuiBox>
              <SuiBox mb={2}>
                <SuiInput placeholder="LastName" name="LastName" onChange={(e)=>this.handleChange(e)}/>
              </SuiBox>
              <SuiBox mb={2}>
                <SuiInput type="email" placeholder="Email" name="Email" onChange={(e)=>this.handleChange(e)}/>
              </SuiBox>
              <SuiBox mb={2}>
                <SuiInput type="password" placeholder="Password" name="Password" onChange={(e)=>this.handleChange(e)}/>
              </SuiBox>
              <SuiBox mb={2}>
                <SuiInput type="password" placeholder="confirmPassword" name="confirmPassword" onChange={(e)=>this.handleChange(e)}/>
              </SuiBox>
              <SuiBox mb={2}>
                <PhoneInput
            placeholder="Enter phone number"
            country={'tn'}
            value={PhoneNumber}
            onChange={ PhoneNumber  => this.setState({PhoneNumber })}
         />   
         {/* value={value}
         onChange={setValue} */}
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
                <SuiButton variant="gradient" color="dark" fullWidth>
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

