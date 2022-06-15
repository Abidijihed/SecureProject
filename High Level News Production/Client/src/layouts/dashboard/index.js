// @mui material components
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
// import Card from "@mui/material/Card";
import Users from "../page/users"
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import axios from "axios"
// Soft UI Dashboard React base styles
// import typography from "assets/theme/base/typography";

// Dashboard layout components
// import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
// import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
// import Projects from "layouts/dashboard/components/Projects";
// import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import React, { Component } from 'react'
import "./index.css"

export default class index extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      usersdata:[],
      oneuserdata:[1],
      togglle1:false,
      togglle2:false,
      myvedio:1
    }
}

async componentDidMount(e){
//  await this.getmydata()
this.getmyusers()
}
GetData(){
  axios.get('http://localhost:3333/api/getall').then(res=>{
      this.setState({
        usersdata:res.data
      })
  }).catch(error =>{
      console.log(error)
  })
}
//get all poste and render them 


 getmyusers(){
  axios.get("http://localhost:3333/api/session").then((res)=>{
    console.log(res.data,'first')
  this.setState({oneuserdata:res.data})
                 })
 
     axios.get('http://localhost:3333/api/getallpost').then(res=>{
      this.setState({
          data:res.data    
      })
  }).catch(error =>{
      console.log(error)
  })
    
    
    this.GetData()
}

  render() {
 
    console.log(this.state.oneuserdata.register_id,'users')
    console.log(this.state.usersdata,'meeeee')
    const {togglle1,oneuserdata,togglle2}=this.state
      return (
        <DashboardLayout >
          <DashboardNavbar />
          <SuiBox py={3}>
          <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
               
    <ul>
              {this.state.data.map((e,index)=>
              <div className="post" key={index}>
              <li className="feed-list-item" > </li>
          <li className="feed-list-item-title" >{e.title}</li>
          <li className="feed-list-item-byline"><span className="feed-list-item-byline-author">{e.namee}</span><br></br>{e.createdAt}</li>
          <SuiBox mb={3}>
   <img src={e.imageUrl}  className="feed-list-item-image" alt=''/>
   </SuiBox>
        {e.video?!togglle1 && <video
          className="VideoInput_video"
          width="100%"
          height="400px"
          controls
          src={e.video}
      />:togglle1 && <video
      className="VideoInput_video"
      width="400px"
      height="500px"
      controls
      src={e.video}
     
  />
  
  }
           
 
          <p id="mybody">{e.body}</p>
 

 
        
     
      </div>
    )}
    </ul>
            </Grid>
            {oneuserdata.register_id !==undefined && !togglle2 && < SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
   
               {this.state.usersdata.map((e)=>
     <Users data={e} key={e.id}/>  
)} 
             {/* hello */}
             
               
                </Grid>
              </Grid>
              </SuiBox>}
           {oneuserdata ==="seesion login fail"&& !togglle2 &&  <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
   
     <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"/>
             {/* hello */}
             
               
                </Grid>
              </Grid>
              </SuiBox>
              }
              </Grid>
            </SuiBox>
       
            {/* <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={8}>
                <Projects />
              </Grid>
              <Grid item xs={12} lg={4}>
                <Projects />
              </Grid>
            </Grid> */}
          </SuiBox>
          <Footer />
        </DashboardLayout>
      );
    
  }
}

