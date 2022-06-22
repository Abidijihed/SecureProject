import React, { Component } from 'react'
import curved6 from "assets/images/curved-images/curved0.jpg";
import "./contact.css"
import BasicLayout from '../components/BasicLayout/index2';
import axios  from 'axios';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMapReact from 'google-map-react';
export default class Contact extends Component {
  constructor(){
  super()
    this.state={
          name:"",
          email:"",
          subject:"",
          message:""
    }
  }
  handleChange(e) {
    
    this.setState({ [e.target.name]: e.target.value })
    console.log(
        this.state
    )
}

  
 onNameChange(event) {
  this.setState({name: event.target.value})
}

onEmailChange(event) {
  this.setState({email: event.target.value})
}

onSubjectChange(event) {
  this.setState({subject: event.target.value})
}

onMsgChange(event) {
  this.setState({message: event.target.value})
}
submitEmail(e){
  e.preventDefault();
  const {email,name,subject,message}=this.state
  axios.post("http://localhost:3333/api/send",{
    name: name,   
email: email,  
subject:subject,
message: message
  }).then((response)=>{
    if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
    }else if(response.data.status === 'fail'){
        console.log(response)
    }
  })
}

resetForm(){
  this.setState({name: '', email: '',subject:'', message: ''})
}
  render() {
    return (
      
      <section className="ftco-section">
        <BasicLayout
        title="Contact Us!"
        description="Use these forms to contact Us if you need any help or you want to get some information."
        image={curved6}
      >
          {/* <DashboardNavbar /> */}
          </BasicLayout>
      <div className="container">
     
        <div className="row justify-content-center">
          <div className="col-8">
      
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters mb-5">
                <div className="col-md-7">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Contact Us</h3>
                    <div id="form-message-warning" className="mb-4"></div> 
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form onSubmit={this.submitEmail.bind(this)} method="POST" id="contactForm" name="contactForm" className="contactForm"  >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="name">Full Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" value={this.state.name} 
                                       onChange={this.onNameChange.bind(this)}/>
                          </div>
                        </div>
                        <div className="col-md-6"> 
                          <div className="form-group">
                            <label className="label" htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email"value={this.state.email} onChange=
                                      {this.onEmailChange.bind(this)} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"  value={this.state.subject}
                                      onChange={this.onSubjectChange.bind(this)}/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="#">Message</label>
                            <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"alue={this.state.message}
                                       onChange= {this.onMsgChange.bind(this)}></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="submit" value="send message"  className="btn btn-primary"/>
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
           
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text">
                      <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text">
                      <p><span>Phone:</span> <a>+ 1235 2355 98</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text">
                      <p><span>Email:</span> <a>info@yoursite.com</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-globe"></span>
                    </div>
                    <div className="text">
                      <p><span>Website</span> <a>yoursite.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
  }
}
