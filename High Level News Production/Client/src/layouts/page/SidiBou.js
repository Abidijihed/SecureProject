import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { Component } from 'react'
import "./SidiBou.css"
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import theme from "assets/theme";
export default class 
 extends Component {
    constructor(props){
        super(props)
        this.state={
            charge:"",
            product:"",
            Prix:"",
            quantité:"",
            result:"",
            solde:"",
            TV:"",
            TC:""
            

        }
    }
    // componentDidMount(){
    //   const reloadCount = sessionStorage.getItem('reloadCount');
    //   if(reloadCount < 1) {
    //     sessionStorage.setItem('reloadCount', String(reloadCount + 1));
    //     window.location.reload();
    //   } else {
    //     sessionStorage.removeItem('reloadCount');
    //   }
    // }
    handleChange(e){ 
        this.setState({[e.target.name]:e.target.value})
     const {product,Prix,quantité,result,charge,TV,TC,solde}=this.state
     var newresult=0
     var newTv=0
     var newTc=0
     newresult=Number(Prix)*Number(quantité)
     newTv+=Number(newresult)
     newTc=solde-this.state.TV
        this.setState({result:newresult})
        this.setState({TV:newTv})
        this.setState({TC:newTc})
        console.log(
          {[e.target.name]:e.target.value}
        )
      }
  render() {
    return (
        <DashboardLayout >
            <DashboardNavbar />
        <Container>
        <Row>
          <Col sm={8}>
          <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/236x/16/7b/32/167b32c010b0ebe412e782f23d259a32.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/564x/41/f1/91/41f1918e7ec045e0bf495b8829a29a90.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/564x/55/9e/a9/559ea99c01b7f3ae2ce11d22d485f23d.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </Col>
     
        </Row><br></br>
        <Row>
          <Col sm={7}>
          <table>
  
  <thead>
     
    <tr>

      <th scope="col">Days</th>
      <th scope="col">Time Open And Close</th>
      <th scope="col">Services</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Monday</th>
      <td>From: To:</td>
      <td>Services</td>
    </tr>
    <tr>
     
      <th scope="row">Tuesday</th>
      <td>From: To:</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Wednesday</th>
      <td>From: To:</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Thursday</th>
      <td>From: To:</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Friday</th>
      <td>From: To:</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Saturday</th>
      <td>From: To:</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sunday</th> 
      <td>close</td>
      <td></td>
    </tr>
    
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Data is updated every 15 minutes.</td>
    </tr>
  </tfoot>
</table>
         </Col>
  
          <Col sm={5}>
     
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
          <table>
  <thead> 
    <tr>   
      <th scope="col">Charge variant</th>
      <th scope="col"></th>
      <th scope="col">quantité</th>
      <th scope="col">Charge fixe</th>
      <th scope="col">total</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><input placeholder='Name of product' name='product' onChange={(e)=>this.handleChange(e)}/></th>
      <td><input placeholder='prix of product' name='Prix' onChange={(e)=>this.handleChange(e)}/></td>
      <td><input placeholder='quantité' name='quantité' onChange={(e)=>this.handleChange(e)}/></td>
      <th><input placeholder='Charge fix' name='charge' onChange={(e)=>this.handleChange(e)}/></th>
      <td name="result" onChange={(e)=>this.handleChange(e)}>value:{this.state.result}</td>
    </tr>
    <tr>
     
    <th scope="row"><input placeholder='Name of product' name='product' onChange={(e)=>this.handleChange(e)}/></th>
      <td><input placeholder='prix of product' name='Prix' onChange={(e)=>this.handleChange(e)}/></td>
      <td><input placeholder='quantité' name='quantité' onChange={(e)=>this.handleChange(e)}/></td>
      <th></th>
      <td name="result" onChange={(e)=>this.handleChange(e)}>value:{this.state.result}</td>
    </tr>
    <tr>
    <th scope="row"><input placeholder='Name of product' name='product' onChange={(e)=>this.handleChange(e)}/></th>
      <td><input placeholder='prix of product' name='Prix' onChange={(e)=>this.handleChange(e)}/></td>
      <td><input placeholder='quantité' name='quantité' onChange={(e)=>this.handleChange(e)}/></td>
      <th></th>
      <td>value</td>
    </tr>
    <tr>
    <th scope="row"><input placeholder='Name of product' name='product' onChange={(e)=>this.handleChange(e)}/></th>
      <td><input placeholder='prix of product' name='Prix' onChange={(e)=>this.handleChange(e)}/></td>
      <td><input placeholder='quantité' name='quantité' onChange={(e)=>this.handleChange(e)}/></td>
      <th></th>
      <td name="result" onChange={(e)=>this.handleChange(e)}>value:{this.state.result}</td>
    </tr>
    <tr>
    <th scope="row"><input placeholder='Name of product' name='product' onChange={(e)=>this.handleChange(e)}/></th>
      <td><input placeholder='prix of product' name='Prix' onChange={(e)=>this.handleChange(e)}/></td>
      <td><input placeholder='quantité' name='quantité' onChange={(e)=>this.handleChange(e)}/></td>
      <th></th>
      <td name="result" onChange={(e)=>this.handleChange(e)}>value:{this.state.result}</td>
    </tr>
    <tr>
    <th scope="row"><input placeholder='Name of product' name='product' onChange={(e)=>this.handleChange(e)}/></th>
      <td><input placeholder='prix of product' name='Prix' onChange={(e)=>this.handleChange(e)}/></td>
      <td><input placeholder='quantité' name='quantité' onChange={(e)=>this.handleChange(e)}/></td>
      <th></th>
      <td name="result" onChange={(e)=>this.handleChange(e)}>value:{this.state.result}</td>
    </tr>
    <tr>
    <th scope="row"><input placeholder='Name of product' name='product' onChange={(e)=>this.handleChange(e)}/></th>
      <td><input placeholder='prix of product' name='Prix' onChange={(e)=>this.handleChange(e)}/></td>
      <td><input placeholder='quantité' name='quantité' onChange={(e)=>this.handleChange(e)}/></td>
      <th></th>
      <td name="result" onChange={(e)=>this.handleChange(e)}>value:{this.state.result}</td>
      
    </tr>
    
  </tbody>
  <tfoot>
    <tr>
    <td><input placeholder='chiffre d affaire' name='solde' onChange={(e)=>this.handleChange(e)}/></td>
      <td colspan="3" name="TV" onChange={(e)=>this.handleChange(e)}>T.value:{this.state.TV} </td>
      <td name="TC" onChange={(e)=>this.handleChange(e)}>T.Carge:{this.state.TC}</td>
    </tr>
  </tfoot>
</table>
          </Col>
        </Row>
      </Container>
      </DashboardLayout>
    )
  }
}
