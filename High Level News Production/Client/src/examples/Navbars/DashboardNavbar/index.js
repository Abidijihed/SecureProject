import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import Icon from "@mui/material/Icon";

import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import CustomerSupport from "examples/Icons/CustomerSupport";
import Document from "examples/Icons/Document";
// import Cube from "examples/Icons/Cube";
// import Shop from "examples/Icons/Shop";
// import Settings from "examples/Icons/Settings";
// import SpaceShip from "examples/Icons/SpaceShip";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import logo from "../../../assets/images/logos/logo.png"
// Soft UI Dashboard React examples
import Breadcrumbs from "examples/Breadcrumbs";
// import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  // navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Soft UI Dashboard React context
import {
  useSoftUIController,
  setTransparentNavbar,
} from "context";
import axios from "axios"
function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();

  const [controller, dispatch] = useSoftUIController();
  const { transparentNavbar, fixedNavbar } = controller;
  // const [ setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
const userLogout=(()=>{
  axios.get('http://localhost:3333/api/logout').then((res)=>{
    if(res.data==="user loget out"){
      sessionStorage.removeItem("secsuss")
      document.cookie = "secure" + "="+"";
       window.location.reload()
    }
  })
})
  useEffect(() => {
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
      
    }
  
    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  return (
 
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <SuiBox color="inherit" mb={{ xs: 1, md: 1 }} sx={(theme) => navbarRow(theme, { isMini })}>
        <Link to="/dashboard">
          <img  src={logo} width="95px" height="70px"/>
          </ Link>
        </SuiBox>
        {isMini? null : (
          <SuiBox sx={(theme) => navbarRow(theme, { isMini })}>
          {((sessionStorage.secsuss===
             document.cookie.slice(document.cookie.indexOf("secure=")+7,document.length))||document.cookie.slice(document.cookie.indexOf("secure=")+7,document.length).length>50 ) &&   <>
           <SuiBox color={light ? "white" : "inherit"} pr={5}>
              <Link to="/layouts/page/Post">
                <IconButton sx={navbarIconButton}>
                <AddCircleIcon
                   size="12px"
                   color="aliceblue"
                  />
                  <SuiTypography
                    variant="button"
                    fontSize="25px"
                    fontWeight="medium"
                    color={"white"}
                  >
                   AddNewPoste
                  </SuiTypography>
                </IconButton>
              </Link>
            </SuiBox>
            </>}
            {(!sessionStorage.secsuss && 
             !document.cookie.slice(8,document.cookie.length-1) ) && <>
            <SuiBox color={light ? "white" : "inherit"} pr={5}>
              <Link to="/layouts/page/AboutUs">
                <IconButton sx={navbarIconButton}>
                <Document
                   size="25px"
                   color="aliceblue"
                  />
                  <SuiTypography
                    variant="button"
                    fontSize="25px"
                    fontWeight="medium"
                    color={"white"}
                  >
                   About Us
                  </SuiTypography>
                </IconButton>
              </Link>
            </SuiBox>




           <SuiBox color={light ? "white" : "inherit"} pr={5}>
              <Link to="/authentication/sign-up">
                <IconButton sx={navbarIconButton} size="small">
                <AccountBoxIcon
                   size="12px"
                   color="aliceblue"
                  />
                  <SuiTypography
                    variant="button"
                    fontSize="25px"
                    fontWeight="medium"
                    color={"white"}
                  >
                   SignUp
                  </SuiTypography>
                </IconButton>
              </Link>
            </SuiBox>


       <SuiBox color={light ? "white" : "inherit"} pr={5}>
              <Link to="/authentication/sign-in">
                <IconButton sx={navbarIconButton} size="small">
                <LoginIcon
                   size="25px"
                   color="aliceblue"
                  />
                  <SuiTypography
                    variant="button"
                    fontSize="25px"
                    fontWeight="medium"
                    color={"white"}
                  >
                   SignIn
                  </SuiTypography>
                </IconButton>
              </Link>
            </SuiBox>
            <SuiBox color={light ? "white" : "inherit"} pr={5}>
              <Link to="/authentication/contact">
                <IconButton sx={navbarIconButton} size="small">
                <CustomerSupport
                   size="25px"
                   color="aliceblue"
                  />
                  <SuiTypography
                    variant="button"
                    fontSize="25px"
                    fontWeight="medium"
                    color={"white"}
                  >
                   Contact
                  </SuiTypography>
                </IconButton>
              </Link>
            </SuiBox>
            </>}
            { ((sessionStorage.secsuss===
             document.cookie.slice(document.cookie.indexOf("secure=")+7,document.length))||document.cookie.slice(document.cookie.indexOf("secure=")+7,document.length).length>50 ) && 
             <>
                 <SuiBox color={light ? "white" : "inherit"} pr={5}>
              <Link to="/authentication/contact">
                <IconButton sx={navbarIconButton} size="small">
                <CustomerSupport
                   size="25px"
                   color="aliceblue"
                  />
                  <SuiTypography
                    variant="button"
                    fontSize="25px"
                    fontWeight="medium"
                    color={"white"}
                  >
                   Contact
                  </SuiTypography>
                </IconButton>
              </Link>
            </SuiBox>
             <SuiBox color={light ? "white" : "inherit"} pr={5}>
              <Link to="/layouts/profile">
                <IconButton sx={navbarIconButton} size="small">
                <ManageAccountsIcon
                   size="25px"
                   color="aliceblue"
                  />
                  <SuiTypography
                    variant="button"
                    fontWeight="xl"
                    fontSize="25px"
                    color={"white"}
                  >
                    Profile  
                  </SuiTypography>
                </IconButton>
              </Link>
            </SuiBox>
            <SuiBox color={light ? "white" : "inherit"} pr={5}>
              <Link to="/layouts/page/AboutUs">
                <IconButton sx={navbarIconButton}>
                <Document
                   size="25px"
                   color="aliceblue"
                  />
                  <SuiTypography
                    variant="button"
                    fontSize="25px"
                    fontWeight="medium"
                    color={"white"}
                  >
                   About Us
                  </SuiTypography>
                </IconButton>
              </Link>
            </SuiBox>
            </>
            }
     
           {((sessionStorage.secsuss===
             document.cookie.slice(document.cookie.indexOf("secure=")+7,document.length))||document.cookie.slice(document.cookie.indexOf("secure=")+7,document.length).length>50 )&&  <SuiBox color={light ? "white" : "inherit"} pr={5}>
              <Link to="/authentication/sign-in">
                <IconButton sx={navbarIconButton} size="small">
                <LogoutIcon
                   size="25px"
                   color="aliceblue"
                  />
                  <SuiTypography
                    variant="button"
                    fontSize="25px"
                    fontWeight="medium"
                    color={"white"}
                    onClick={()=>userLogout()}
                  >
                   logout
                  </SuiTypography>
                </IconButton>
              </Link>
            </SuiBox>
            
            }
  
            <SuiBox pr={2}>
              <SuiInput
                placeholder="Type here..."
                icon={{ component: "search", direction: "left" }}
              />
            </SuiBox>
          </SuiBox>
          
        )}
      </Toolbar>
      
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
