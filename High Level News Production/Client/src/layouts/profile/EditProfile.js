import React, { Component } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios"
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import "./edit.css"
// import { Link } from 'react-router-dom'
// import Thheaders from '../../../containers/TheHeader'
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageselected:[],
            FirstName:"" ,
            LastName:"",
            Email:"",
            phone:"",
            Address:"",
            Password:"",
            country:"",
            Zip:"",
            image:"",
            OldPassword:"",
            confirmPassword:"",
            myPassword:"",
            mycountry:"",
            errors:{}
        }
        
    }
  
    handleValidation(){
        let{FirstName,LastName,Email,Password,confirmPassword,OldPassword,myPassword,country}= this.state
        let errors = {};
        let formIsValid = true;
        //Name
        if(!FirstName){
         
           formIsValid = false;
           errors.FirstName = "Cannot be empty";
        }
    
        if(typeof FirstName !== "undefined"){
           if(!FirstName.match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors.FirstName = "  FirstName Containe Just Only letters UperCase, LowerCase";
           }        
        }
        if(!LastName){
            formIsValid = false;
            errors.LastName = "Cannot be empty";
         }
     
         if(typeof LastName !== "undefined"){
            if(!LastName.match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors.LastName = "  LastName Containe Just Only letters UperCase, LowerCase";
            }        
         }
     
    
        //Email
        if(!Email){
           formIsValid = false;
           errors.Email = "Cannot be empty";
        }
    
        if(typeof Email !== "undefined"){
           let lastAtPos = Email.lastIndexOf('@');
           let lastDotPos = Email.lastIndexOf('.');
    
           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && Email.indexOf('@@') == -1 && lastDotPos > 2 && (Email.length - lastDotPos) > 2)) {
              formIsValid = false;
              errors.Email = "Email is not valid Your Email Shoold Write like example@gmail.com";
            }
       }  
    //Password
    if(!Password){
      formIsValid = false;
      errors.Password = "Cannot be empty";
    }
    
    // if(typeof Password !== "undefined"){
    //   if(!Password.match(/^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{8,}$/)){
    //      formIsValid = false;
    //      errors.Password = "Password shoold Containe letters UperCase, LowerCase, Number and Special Caracter ";
    //   }        
    // }
     if(Password!==myPassword && Password!==confirmPassword){
            formIsValid=false
            errors.confirmPassword = "Repeat Password shoold Containe the Same like Password "
        }else if(Password!==myPassword  && Password===confirmPassword ){
            formIsValid = true;
        }
      if(country.length<0){
        errors.country = "Cannot be empty";
      }
    
    
       this.setState({errors: errors});
       return formIsValid;
    }
    async componentDidMount(){
        const {FirstName,LastName,Email,Password,country,Zip,Address,phone,myPassword}= this.state
       const userid= sessionStorage.getItem('id')
      await  axios.get('http://localhost:3333/api/getoneuser/'+userid).then((res)=>{
            if(FirstName.length===0||LastName.length===0||Email.length===0||Password.length===0||country.length===0 ||Address.length===0||Zip.length===0||Address.length===0||phone==="undefinde" ){
                this.setState({
                    FirstName:res.data.FirstName,
                    LastName:res.data.LastName,
                    Email:res.data.Email,
                    Password:res.data.Password,
                    country:res.data.country,
                    Zip:res.data.Zip,
                    Address:res.data.Address,
                    PhoneNumber:res.data.PhoneNumber,
                   image:res.data.image,
                   myPassword:res.data.Password
                })
            }
           
        })
    }
    async contactSubmit(e){
        const userid= sessionStorage.getItem('id')

        const {FirstName,LastName,Email,Password,country,Zip,imageselected,Address,image,phone}= this.state
          e.preventDefault(e);
          if(this.handleValidation()){
            if(image.length!==0 && imageselected.length===0 ){
                axios.patch("http://localhost:3333/api/updateuser/"+userid,{
                    FirstName:FirstName,
                    LastName:LastName,
                    Email:Email,
                    Address:Address,
                    PhoneNumber:phone,
                    Password:Password,
                    image:image,
                    country:country,
                    Zip:Zip
                  })
                  .then((res)=>{
                    console.log(res)
                  })
            }else if(imageselected){
            const formData = new FormData()
            formData.append("file", imageselected)
            formData.append('upload_preset', 'kgiezron')
           await axios.post('https://api.cloudinary.com/v1_1/dm1xlu8ce/image/upload', formData).then((res) => {
            axios.patch("http://localhost:3333/api/updateuser/"+userid,{
              FirstName:FirstName,
              LastName:LastName,
              Email:Email,
              Address:Address,
              PhoneNumber:phone,
              Password:Password,
              image:res.data.url,
              country:country,
              Zip:Zip
            })
            
            .then((res)=>{
              
            })
            
          })
        }
          }else{
             alert("Form has errors.")
          }
        
      }
    
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(
            this.state
        )
    }
    render() {
        const {FirstName,LastName,errors,Email,mycountry,country,Zip,imageselected,PhoneNumber,Address,image,phone}= this.state
        return (
            <DashboardLayout >
            <DashboardNavbar />
            <div>
                {/* <Thheaders />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> */}
            <div className="container" id='yoyocontainer'>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-8 mx-auto">
                        {/* <h2 className="h3 mb-4 page-title">Settings</h2> */}
                        <div className="my-4">
                            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">

                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" >Edit your Profile</a>
                                </li>
                            </ul>
                            <form>
                                <div className="row mt-5 align-items-center">
                                    <div className="col-md-3 text-center mb-5">
                                        <div className="avatar avatar-xl">
                                            <img src={image} alt="..." className="avatar-img rounded-circle" />

                                        </div>
                                        <input type="file" accept="image/*" name="image-upload" id="input" onChange={(event) => this.setState({ imageselected: event.target.files[0] })} />
                                        <div className="label">
                                            <label className="image-upload" htmlFor="input">
                                                <i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row align-items-center">
                                            <div className="col-md-7">
                                                <h4 className="mb-1">{FirstName}, {LastName}</h4>
                                              
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-md-7">
                                                <p className="text-muted">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at,
                                                    pretium blandit sapien.
                                            </p>
                                            </div>
                                            <div className="col">
                                            <p className="small mb-0 text-muted">{Email}</p>
                                                <p className="small mb-0 text-muted">{mycountry}</p>
                                                <p className="small mb-0 text-muted">{Address}</p>
                                                <p className="small mb-0 text-muted">{PhoneNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="FirstName">FirstName</label>
                                        <input type="text" name="FirstName" className="form-control" placeholder="Your FirstName" onChange={(e)=>this.handleChange(e)} />
                                        <span className="error">{errors["FirstName"]}</span>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="LastName">LastName</label>
                                        <input type="text" name="LastName" className="form-control" placeholder="Your LastName" onChange={(e)=>this.handleChange(e)} />
                                        <span className="error">{errors["LastName"]}</span>
                        </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input type="Email" className="form-control" name="Email" placeholder="ex brown@asher.me" onChange={(e)=>this.handleChange(e)}/>
                                    <span className="error">{errors["Email"]}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress5">Address</label>
                                    <input type="text" className="form-control" name="Address" placeholder="ex P.O. Box 464, 5975 Eget Avenue" onChange={(e)=>this.handleChange(e)} />
                                </div>
                                <div className="form-row">
                                <div className="form-group col-md-6">
                                <label htmlFor="inputState5">Phone Number</label>
                                    <PhoneInput
                                        country={'us'}
                                        value={phone }
                                      type="text"
                                        onChange={ phone  => this.setState({phone })}
                                    />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputZip5">Zip</label>
                                        <input type="text" className="form-control" name="Zip" placeholder="98232"  onChange={(e)=>this.handleChange(e)}/>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="inputPassword4">Old Password</label>
                                            <input type="Password" className="form-control" name="OldPassword" onChange={(e)=>this.handleChange(e)}/>
                                            <span className="error">{this.state.errors["OldPassword"]}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword5">New Password</label>
                                            <input type="Password" className="form-control" name="Password" onChange={(e)=>this.handleChange(e)}/>
                                            <span className="error">{this.state.errors["Password"]}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword6">Confirm Password</label>
                                            <input type="Password" className="form-control" name="confirmPassword" onChange={(e)=>this.handleChange(e)} />
                                            <span className="error">{this.state.errors["confirmPassword"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="mb-2">Password requirements</p>
                                        <p className="small text-muted mb-2">To create a new Password, you have to meet all of the following requirements:</p>
                                        <ul className="small text-muted pl-4 mb-0">
                                            <li>Minimum 8 character</li>
                                            <li>At least one special character</li>
                                            <li>At least one number</li>
                                            <li>Can’t be the same as a previous Password</li>
                                        </ul>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={(e)=>this.contactSubmit(e)}>Save Change</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            </DashboardLayout>
        )
    }
}