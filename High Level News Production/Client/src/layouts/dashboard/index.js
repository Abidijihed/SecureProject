import Grid from "@mui/material/Grid";
import Users from "../page/users"
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import axios from "axios"
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
  const reloadCount = sessionStorage.getItem('reloadCount');
  if(reloadCount < 2) {
    sessionStorage.setItem('reloadCount', String(reloadCount + 1));
    window.location.reload();
  } else {
    sessionStorage.removeItem('reloadCount');
  }
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
 getmyusers(){
  axios.get("http://localhost:3333/api/session").then((res)=>{
    console.log(res)
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
            <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
   
               {this.state.usersdata.map((e)=>
     <Users data={e} key={e.id}/>  
)} 
                </Grid>
              </Grid>
              </SuiBox>
           {oneuserdata ==="seesion login fail"&& !togglle2 &&  <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
   
     <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="jihed.jpg"/>
               
                </Grid>
              </Grid>
              </SuiBox>
              }
              </Grid>
            </SuiBox>
          </SuiBox>
          <Footer />
        </DashboardLayout>
      );
    
  }
}

