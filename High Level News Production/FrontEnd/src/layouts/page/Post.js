import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios'
import  "./post.css"
import SuiBox from 'components/SuiBox';
import BasicLayout from 'layouts/authentication/components/BasicLayout';
import curved6 from "../../assets/images/curved-images/curved14.jpg";
import SuiInput from 'components/SuiInput';
import SuiButton from 'components/SuiButton';
import { Card } from '@mui/material';
class Post extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'',
      namee:'',
      createdAt:'',
      imageselected: [],
      body:''
     
    }
   
  }
  handleValidation() {
    let { title,imageselected } = this.state
    let errors = {};
    let formIsValid = true;
    //Name
    if (!title) {
      formIsValid = false;
      errors.title = "Cannot be empty";
    }else if(!imageselected){
      formIsValid = false;
      errors.title = "Cannot be empty";
    }

 

    this.setState({ errors: errors });
    return formIsValid;
  }

//the user can add some poste
async contactSubmit(e) {
  var datavideo=''
  var dataimage=''
  console.log(this.state.imageselected)
  const date = moment().format('MM-DD-YYYY hh:mm:ss')
  const{title,namee,imageselected,body}=this.state
  e.preventDefault();
  // if (this.handleValidation()) {
    const formData = new FormData()
    formData.append("file", imageselected)
    formData.append('upload_preset', 'xylngbvj')
    await axios.post('https://api.cloudinary.com/v1_1/dm1xlu8ce/upload', formData).then((res) => {
     if(res.data.url.slice(res.data.url.length-4)==='.mp4'){
       dataimage=''
       datavideo=res.data.url
     }else if(res.data.url.slice(res.data.url.length-4)==='.png'||res.data.url.slice(res.data.url.length-4)==='.jpg'){
      dataimage=res.data.url
      datavideo=''
     }
    axios.post('http://localhost:3333/api/createnewpost',{
     title:title,
     namee:namee,
     createdAt:date,
     imageUrl:dataimage,
     body:body,
     video:datavideo,
    }).then((res) => {
      console.log(res)
    })

})
// } else {
//   alert("Form has errors.")
// }

}
 handleChange(e){ 
     
  this.setState({[e.target.name]:e.target.value})
  
  console.log(
    {[e.target.name]:e.target.value}
  )
}

 
    render() {
        return (
            <BasicLayout
            title="ADD NEW POSTES!"
            description="Use these awesome forms to login or create new account in your project for free."
            image={curved6}
          >
            <Card>
            <SuiBox pt={6} pb={6} px={1} >
            <SuiBox component="form" role="form">
              <SuiBox mb={2}>  
                <SuiInput onChange={(e)=>this.handleChange(e)} name="title"  className="create-input" type="text"  placeholder="Post Title"/>
                </SuiBox>
                <SuiBox mb={2}>
                <SuiInput onChange={(e)=>this.handleChange(e)} name="namee"  className="create-input" type="text"  placeholder="your name"/>

                </SuiBox>
                <SuiBox mb={2}>
                <input type="file" accept="image/*,.mp4" name="image-upload" id="input" onChange={(event) => this.setState({ imageselected: event.target.files[0] })} />
                      <div className="label">
                        <label className="image-upload" htmlFor="input">
                          <i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
          </div>
                </SuiBox>
             
                <textarea onChange={(e)=>this.handleChange(e)} name="body"  className="create-body-textarea"  placeholder="Post Body"></textarea>
                <SuiBox mt={4} mb={1}>
                <SuiButton
                 variant="gradient" color="dark" fullWidth  onClick={(e) => this.contactSubmit(e)} >
                  Poste
                </SuiButton>
              </SuiBox>           

          </SuiBox>
           
          
          </SuiBox>
          </Card>
          </BasicLayout>
        );
    }
}

export default Post;
