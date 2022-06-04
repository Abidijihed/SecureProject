// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Users from "../page/users"
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import axios from "axios"
// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
// import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
// import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
// import Projects from "layouts/dashboard/components/Projects";
// import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import React, { Component } from 'react'
import "./index.css"

export default class index extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      usersdata:[],
      togglle1:false,
      togglle2:false,
      myvedio:1
    }
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
componentDidMount(){
const {togglle,togglle2}=this.state
axios.get('http://localhost:3333/api/getallpost').then(res=>{
        this.setState({
            data:res.data    
        })
       res.data.map((e=>{
         if(e.video.length===0){
                 return this.setState({togglle:true})
         }
       }))
    }).catch(error =>{
        console.log(error)
    })
    this.GetData()
}
  render() {
    console.log(this.state.usersdata,'users')
    const { size } = typography;
    const { chart, items } = reportsBarChartData;
    const {togglle1}=this.state
    console.log(this.state.data,'vedio')
      return (
        <DashboardLayout >
          <DashboardNavbar />
          <SuiBox py={3}>
          <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
               
    <ul>
              {this.state.data.map((e,index)=>
              <div className="post">
              <li className="feed-list-item" key={index}> </li>
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
  />}
         <p className="feed-list-item-lede">{e.body}</p>
     
      </div>
    )}
    </ul>
            </Grid>
            <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
   
               {this.state.usersdata.map((e)=>
     <Users data={e} key={e.id}/>  
)} 
             {/* hello */}
             
               
                </Grid>
              </Grid>
              </SuiBox>
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

