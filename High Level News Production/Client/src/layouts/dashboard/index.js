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
      myvedio:1,
      news:[]
    }
}

async componentDidMount(e){
  
  const reloadCount = sessionStorage.getItem('reloadCount');
  if(reloadCount < 1) {
    sessionStorage.setItem('reloadCount', String(reloadCount + 1));
    window.location.reload();
  } else {
    sessionStorage.removeItem('reloadCount');
  }
  
this.getmyusers()
}

getNewes(){
  // fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-06-22&sortBy=popularity&apiKey=87f2419d7b7c4177a2564c743540d731")
  fetch("https://newsdata.io/api/1/news?apikey=pub_859614c96833ce887b793a790f79e3533a6b&country=cn,eg,fr,lb,us&language=ar,en,fr&category=politics,sports,top")
 
  .then(res => res.json())
  .then((res) => {
    console.log(res)
      this.setState({ news: res.results})
  })
  .catch(console.log)
}
GetData(){
  axios.get('http://localhost:3333/api/getall').then(res=>{
    
      this.setState({
        usersdata:res.data
      })
  }).catch(error =>{
      console.log(error)
  })
  this.getNewes()
}
 getmyusers(){
  axios.get("http://localhost:3333/api/session").then((res)=>{
    console.log(res)
  this.setState({oneuserdata:res.data})
  sessionStorage.setItem('id',res.data.users_id)
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
          <Grid container spacing={2}>
            <Grid sm={12}>556</Grid>
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
            <SuiBox py={3}>
            <SuiBox mb={3}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} lg={5}>
   
               {this.state.usersdata.map((e)=>
     <Users data={e} key={e.id}/>  
)} 
                </Grid> */}
                  <Grid item xs={12} lg={7}>
               
               <ul>
               {this.state.news.map((el,i)=>{
    return(
                         <div className="post" key={i}>
                         <li className="feed-list-item" > </li>
                     <li className="feed-list-item-title" >{el.title}</li>
                     <li className="feed-list-item-byline"><span className="feed-list-item-byline-author">{el.description }</span><br></br>{el.pubDate}</li>
                     <SuiBox mb={3}>
              <img src={el.image_url}  className="feed-list-item-image" alt=''/>
              </SuiBox>
                  
             
             
            <p id="mybody">{el.content}</p>
            
           
            
                   
                
                 </div>
         )}
  
   
         )}
               </ul>
                       </Grid>
              </Grid>
              </SuiBox>
              </SuiBox>
           {/* <SuiBox mb={3}> */}
          {/* <Grid container spacing={3}> */}
            {/* <Grid item xs={12} lg={5}>
   {this.state.news.map((el,i)=>{
    return(
    <div key={i}>
      {console.log(el)}
  <img  src={el.urlToImage} alt="jihed.jpg"/>
  <p>{el.description}</p>
   </div>
   )}
  
   
   )}
     
               
                </Grid> */}
              {/* </Grid> */}
              {/* </SuiBox> */}
              
              </Grid>
            </SuiBox>
          </SuiBox>
          <Footer />
        </DashboardLayout>
      );
    
  }
}

