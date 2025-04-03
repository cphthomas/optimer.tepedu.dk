import React, { useState } from "react";
// import Toggle from "./ToggleRenderProps";
// import ReactPlayer from "react-player";
// import { FormCheckbox } from "shards-react";
// import { MDBContainer } from "mdbreact";

// import { Row, Col, FormControl, Button } from "react-bootstrap";
import { Row, Col,Tooltip,OverlayTrigger,Table } from "react-bootstrap";

// import { MDBInput, MDBFormInline, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import { MDBContainer } from "mdbreact";
import DropdownButton from "react-bootstrap/DropdownButton";

import Dropdown from "react-bootstrap/Dropdown";

import Highcharts from "highcharts";
// import { Tooltip, OverlayTrigger } from "react-bootstrap";

import "./styles.css";

import "katex/dist/katex.min.css";
// import { BlockMath } from "react-katex";

import {
  // numberFormat1,
  // numberFormat2,
  numberFormat3,
  
  //numberFormat5,
  //numberFormat6,
} from "./lib"; //ændrer til komma og pct + DKK
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import "bootstrap/dist/css/bootstrap.min.css";

import "katex/dist/katex.min.css";
// import { BlockMath } from "react-katex";
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/annotations")(Highcharts);

require("highcharts/highcharts-more")(Highcharts);

export function kalkulation() {
  const [a, seta] = useState(+(200).toFixed(2)); //Variable materialeomkostninger
  const [b, setb] = useState(+(3).toFixed(2)); //Indirekte materialeomkostninger %
  const [c, setc] = useState(+(50).toFixed(2)); //Variable Lønomkostninger
  const [d, setd] = useState(+(2).toFixed(2)); //Indirekte forarbejdningsomkostninger%
  const [h, seth] = useState(+(20).toFixed(2)); //Afskrivninger
  const [f, setf] = useState(+(10).toFixed(2)); //Kapacitetsomkostninger%
  const [g, setg] = useState(+(10).toFixed(2)); //Avance%

  var materialetotalt = +a+a*+b/100;
  var forarbejningt = +c+c*+d/100;
  var forarbejningtotalt = +h+forarbejningt;
  var produktiontotalt = +materialetotalt+forarbejningtotalt;
  var kapacitetsomkostninger = +produktiontotalt*+f/100
  var egenpris = +kapacitetsomkostninger+produktiontotalt
  var salgspris = +egenpris+egenpris*+g/100

  var [problemtype, setproblemtype] = useState("Avance i % af egenpris");

  var problemtypeSelect = (e) => {
    setproblemtype(e);
};

if (problemtype === "Avance i % af salgspris") {
  salgspris = +egenpris/(1-g/100)
} else {
  salgspris = +egenpris+egenpris*+g/100
}
  

  
  

 

  return (
    <div>
      <br></br>
      <Container>
        <div class="p-3 mb-2 bg-secondary text-white">
          {/* <div class="card">
            <div class="p-4"> */}
          <h3>Fordelingskalkulation</h3>
          <h6>
                  Fordelingskalkulation eller Full cost-kalkulation indebærer at samtlige omkostninger (både faste og variable) fordeles fuldt ud på produktet.
                  </h6>
          {/* <h5>Y = aX + b</h5> */}
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body"></div>

            <Container>
              <div class="p-3 mb-2 bg-white">
                <Form>
                <DropdownButton
                                                    alignleft
                                                    variant="warning"
                                                    title={problemtype}
                                                    id="type"
                                                    size="sm"
                                                    // id="dropdown-split-basic"
                                                    onSelect={problemtypeSelect}
                                                >

                                                    <Dropdown.Item eventKey="Avance i % af egenpris">
                                                        Vælg avance i % af egenpris
                                                        </Dropdown.Item>
                                                    <Dropdown.Item eventKey="Avance i % af salgspris">
                                                        Vælg avance i % af salgspris
                                                        </Dropdown.Item>
                                                </DropdownButton>
                                                
                <br></br>        
                 
                
                  
                  <Row>
                  <Col>
                  <InputGroup size="sm">
                  
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                Variable materialeomkostninger i DKK.
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Variable materialeomkostninger</span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                          class="text-right"
                          type="number"
                          //min="0"
                          step={1}
                          precision={0}
                          // mobile={true}
                          value={+a}
                          onChange={(e) => seta(e.target.value)}
                          placeholder="0"
                          
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">DKK</InputGroup.Text>
                        </InputGroup.Append>                        
                      </InputGroup>
                      </Col>
                  </Row>






                  <Row>
                  <Col>
                  <InputGroup size="sm">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                Tillæg for indirekte materialeomkostninger i % af variable materialeomkostninger.
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Indirekte materialeomkostninger</span>
                      </OverlayTrigger>
                      </span>
                      </div>
                     
                        
                        <Form.Control
                          class="text-right"
                          type="number"
                          //min="0"
                          step={1}
                          precision={0}
                          // mobile={true}
                          value={+b}
                          onChange={(e) => setb(e.target.value)}
                          placeholder="0"
                          
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                        </InputGroup.Append>
                        
                        <Form.Control
                        placeholder="Disabled input" disabled
                          value={numberFormat3(+a*+b/100)}
                          
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2"> DKK</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      </Col>
                  </Row>
                  

                  <Row>
                  <Col>
                  <InputGroup size="sm">
                  
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                Variable materiale-omkostninger + indirekte materiale-omkostninger i DKK.
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span><b>Materialeomkostninger i alt</b></span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                        placeholder="Disabled input" disabled
                          class="text-right"
                          value={numberFormat3(+a+(+a*+b/100))}
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2"><b>DKK</b></InputGroup.Text>
                        </InputGroup.Append>                        
                      </InputGroup>
                      </Col>
                  </Row>



















                <br></br>
                  <Row>
                  <Col>
                  <InputGroup size="sm">
                  
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                Variable lønomkostninger i DKK.
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Variable Lønomkostninger</span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                          class="text-right"
                          type="number"
                          //min="0"
                          step={1}
                          precision={0}
                          // mobile={true}
                          value={+c}
                          onChange={(e) => setc(e.target.value)}
                          placeholder="0"
                          
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">DKK</InputGroup.Text>
                        </InputGroup.Append>                        
                      </InputGroup>
                      </Col>
                  </Row>





                  <Row>
                  <Col>
                  <InputGroup size="sm">
                  
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                Indirekte forarbejdnings-omkostninger i procent af variable lønomkostninger
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Indirekte forarbejdningsomkostninger</span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                          class="text-right"
                          type="number"
                          //min="0"
                          step={1}
                          precision={0}
                          // mobile={true}
                          value={+d}
                          onChange={(e) => setd(e.target.value)}
                          placeholder="0"
                          
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                        </InputGroup.Append>       
                        
                        <Form.Control
                        placeholder="Disabled input" disabled
                          value={numberFormat3(+c*+d/100)}
                          
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2"> DKK</InputGroup.Text>
                        </InputGroup.Append>                 
                      </InputGroup>
                      </Col>
                  </Row>





                  <Row>
                  <Col>
                  <InputGroup size="sm">
                  
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                Tillæg for faste maskinomkostninger (afskrivninger) i DKK
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Afskrivninger</span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                      <Form.Control
                          class="text-right"
                          type="number"
                          //min="0"
                          step={1}
                          precision={0}
                          // mobile={true}
                          value={+h}
                          onChange={(e) => seth(e.target.value)}
                          placeholder="0"
                          
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">DKK</InputGroup.Text>
                        </InputGroup.Append>                        
                      </InputGroup>
                      </Col>
                  </Row>



                  <Row>
                  <Col>
                  <InputGroup size="sm">
                  
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                Forarbejdnings-omkostninger i alt består af Variable Lønomkostninger + Variable Lønomkostninger + afskrivninger.
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span><b>Forarbejdningsomkostninger i alt</b></span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                          placeholder="Disabled input" disabled
                          class="text-right"
                          value={numberFormat3(+forarbejningtotalt)}
                        />
                        
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2"><b>DKK</b></InputGroup.Text>
                        </InputGroup.Append>                        
                      </InputGroup>
                      </Col>
                  </Row>

                  <Row>
                  <Col>
                  <InputGroup size="sm">
                  
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                Produktion-omkostninger i alt består af Materiale-omkostninger i alt + Forarbejdnings-omkostninger i alt

                                                            </Tooltip>
                                                        }
                                                    > 
                       <span><b>Produktionomkostninger i alt</b></span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                        placeholder="Disabled input" disabled
                          class="text-right"
                          value={numberFormat3(+produktiontotalt)}
                        />
                        
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2"><b>DKK</b></InputGroup.Text>
                        </InputGroup.Append>                        
                      </InputGroup>
                      </Col>
                  </Row>



<br></br>


                  


                  <Row>
                  <Col>
                  <InputGroup size="sm">
                  
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                Administrative og øvrige kapacitets-omkostninger i % af produktions-omkostninger.
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Kapacitetsomkostninger</span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                          class="text-right"
                          type="number"
                          //min="0"
                          step={1}
                          precision={0}
                          // mobile={true}
                          value={+f}
                          onChange={(e) => setf(e.target.value)}
                          placeholder="0"                          
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                        </InputGroup.Append>       
                        
                        <Form.Control
                          value={numberFormat3(+produktiontotalt*f/100)}
                          placeholder="Disabled input" disabled
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2"> DKK</InputGroup.Text>
                        </InputGroup.Append>                 
                      </InputGroup>
                      </Col>
                  </Row>

                  <Row>
                  <Col>
                  <InputGroup size="sm">
                  
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                Egenprisen er varens samlede produkt-omkostninger.

                                                            </Tooltip>
                                                        }
                                                    > 
                       <span><b>Egenpris</b></span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                        placeholder="Disabled input" disabled
                          class="text-right"
                          value={numberFormat3(+egenpris)}
                        />
                        
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2"><b>DKK</b></InputGroup.Text>
                        </InputGroup.Append>                        
                      </InputGroup>
                      </Col>
                  </Row>
                  <br></br>

                  <Row>
                  <Col>
                  <InputGroup size="sm">
                  
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                {problemtype === "Avance i % af salgspris"?"Avance opgjort som % af salgspris":"Avance opgjort som % af egenpris"}
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>{problemtype === "Avance i % af salgspris"?"Avance i % af salgspris":"Avance i % af egenpris"}</span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                          type="number"
                          //min="0"
                          step={1}
                          precision={0}
                          // mobile={true}
                          value={+g}
                          onChange={(e) => setg(e.target.value)}
                          placeholder="0"
                          
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                        </InputGroup.Append>       
                        
                        <Form.Control
                          value={numberFormat3(salgspris-egenpris)}
                          placeholder="Disabled input" disabled
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2"> DKK</InputGroup.Text>
                        </InputGroup.Append>                 
                      </InputGroup>
                      </Col>
                  </Row>

                  <Row>
                  <Col>
                  <InputGroup size="sm">
                  
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                Salgsprisen er egenprisen + et avancetillæg.

                                                            </Tooltip>
                                                        }
                                                    > 
                       <span><b>Salgspris</b></span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                        placeholder="Disabled input" disabled
                          class="text-right"
                          value={numberFormat3(+salgspris)}
                        />
                        
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2"><b>DKK</b></InputGroup.Text>
                        </InputGroup.Append>                        
                      </InputGroup>
                      </Col>
                  </Row>







                </Form>
                        









              </div>
              
            </Container>
          </div>
        </div>
      </Container>

      

      <Container>
        <div class="p-3 mb-2 bg-secondary text-white">
          {/* <div class="card">
            <div class="p-4"> */}
          <h3>Skema Fordelingskalkulation</h3>
          
          {/* <h5>Y = aX + b</h5> */}
        </div>
      </Container>

      <br></br>
      <Container>

      <Table  bordered hover size="sm">
  
      <thead>
    <tr>
      <th scope="col"><b>Omkostningsart</b></th>
      <th scope="col"><b>Beregning</b></th>
      <th scope="col"><b>Variabel</b></th>
      <th scope="col"><b>Fast</b></th>
      <th scope="col" class="text-right"><b>I alt</b></th>
      
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td><p class="text-left" >Variable materialeomkostninger</p></td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(a)} DKK</p></td>
      <td></td>
      <td colSpan="2"><p class="text-right" >{numberFormat3(a)} DKK</p></td>
      
    </tr>
    <tr>
    <td><p class="text-left" >Indirekte materialeomkostninger</p></td>
      <td>{b}% af {numberFormat3(a)} DKK</td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(+a*+b/100)} DKK</p></td>
      <td><p class="text-right" >{numberFormat3(+a*+b/100)} DKK</p></td>
  
    </tr>
    <tr class="table-secondary">
      <td><p class="text-left" >Materialeomkostninger i alt
</p></td>
<td></td>
<td><p class="text-right" >{numberFormat3(a)} DKK</p></td>
      <td><p class="text-right" >{numberFormat3(+a*+b/100)} DKK</p></td>
      <td colSpan="2"><p class="text-right" >{numberFormat3(materialetotalt)} DKK</p></td>
      
    </tr>

    <tr>
      <td><p class="text-left" >Variable lønomkostninger</p></td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(+c)} DKK</p></td>
      <td></td>
      <td colSpan="2"><p class="text-right" >{numberFormat3(+c)} DKK</p></td>
      
    </tr>
    <tr>
    <td><p class="text-left" >Indirekte forarbejdningsomkostninger</p></td>
      <td>{d}% af {numberFormat3(+c)} DKK</td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(+c*+d/100)} DKK</p></td>
      <td><p class="text-right" >{numberFormat3(+c*+d/100)} DKK</p></td>
  
    </tr>
    <tr>
      <td><p class="text-left" >Afskrivninger</p></td>
      <td></td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(+h)} DKK</p></td>
      <td colSpan="2"><p class="text-right" >{numberFormat3(+h)} DKK</p></td>
      
    </tr>
    <tr class="table-secondary">
      <td><p class="text-left" >Forarbejdningsomkostninger i alt</p></td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(+c)} DKK</p></td>
      <td><p class="text-right" >{numberFormat3(+c*(+d/100)+(+h))} DKK</p></td>
      <td colSpan="2"><p class="text-right" >{numberFormat3(+forarbejningtotalt)} DKK</p></td>
      
    </tr>
    <tr class="table-secondary">
      <td><p class="text-left" >Produktionomkostninger i alt
      </p></td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(+produktiontotalt-(+a*(+b/100)+c*(+d/100)+(+h)))} DKK</p></td>
      <td><p class="text-right" >{numberFormat3(+a*(+b/100)+c*(+d/100)+(+h))} DKK</p></td>
      <td colSpan="2"><p class="text-right" >{numberFormat3(+produktiontotalt)} DKK</p></td>
      
    </tr>

    <tr>
    <td><p class="text-left" >Kapacitetsomkostninger</p></td>
      <td>{f}% af {numberFormat3(+produktiontotalt)} DKK</td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(+produktiontotalt*f/100)} DKK</p></td>
      <td><p class="text-right" >{numberFormat3(+produktiontotalt*f/100)} DKK</p></td>
  
    </tr>
    <tr class="table-secondary">
      <td><p class="text-left" >Egenpris
</p></td>
<td></td>
<td><p class="text-right" >{numberFormat3(+produktiontotalt-(+a*(+b/100)+c*(+d/100)+(+h)))} DKK</p></td>
      <td><p class="text-right" >{numberFormat3(+a*b/100+c*d/100+(+h)+produktiontotalt*+f/100)} DKK</p></td>
      <td colSpan="2"><p class="text-right" >{numberFormat3(+egenpris)} DKK</p></td>
      
    </tr>



    <tr>
    <td><p class="text-left" >{problemtype === "Avance i % af salgspris"?"Avance i % af salgspris":"Avance i % af egenpris"}</p></td>
      <td>{g}% af {problemtype === "Avance i % af salgspris"?numberFormat3(+salgspris):numberFormat3(+egenpris)} DKK</td>
      <td></td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(salgspris-egenpris)} DKK</p></td>
  
    </tr>
    <tr class="table-secondary">
      <td><p class="text-left" >Salgspris
</p></td>
<td></td>
<td></td>
      <td></td>
      <td colSpan="2"><p class="text-right" >{numberFormat3(+salgspris)} DKK</p></td>
      
    </tr>
  </tbody>
</Table>

      </Container>



      

       

     
      <br />

      <br />
    </div>
  );
}
