
import Dashboard from "layouts/dashboard";

import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import AboutUs from "layouts/page/AboutUs";
import Contact from "layouts/authentication/contact/Contact";

// Soft UI Dashboard React icons  

import Shop from "examples/Icons/Shop";




import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Post from "layouts/page/Post";
import Page404 from "layouts/page/Page404";
var routes
if((sessionStorage.secsuss===
  document.cookie.slice(7,document.cookie.length))||document.cookie.slice(7,document.cookie.length).length>50 ){
 routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/layouts/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "AddNewPoste",
    key: "Post",
    route: "/layouts/page/Post",
    icon: <CustomerSupport size="12px" />,
    component: <Post />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "AboutUs",
    key: "AboutUs",
    route: "/layouts/page/AboutUs",
    icon: <Document size="12px" />,
    component: <AboutUs />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Contact",
    key: "Contact",
    route: "/authentication/contact",
    icon: <Document size="12px" />,
    component: <Contact />,
    noCollapse: true,
  }
]}else if(!sessionStorage.secsuss && 
    !document.cookie.slice(8,document.cookie.length-1) ){
 
     routes=[
      {
      
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        route: "/dashboard",
        icon: <Shop size="12px" />,
        component: <Dashboard />,
        noCollapse: true,
      },
      { type: "title", title: "Account Pages", key: "account-pages" },
      {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "AboutUs",
    key: "AboutUs",
    route: "/layouts/page/AboutUs",
    icon: <Document size="12px" />,
    component: <AboutUs />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Contact",
    key: "Contact",
    route: "/authentication/contact",
    icon: <Document size="12px" />,
    component: <Contact />,
    noCollapse: true,
  }
]
    }else{
      routes=[{
        type: "collapse",
        name: "Contact",
        key: "Contact",
        route: "/layouts/page/Page404",
        icon: <Document size="12px" />,
        component: <Page404 />,
        noCollapse: true,
      }]
    }
export default routes;
