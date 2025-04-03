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
  //numberFormat1,
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

export function kalkulation3() {
  const [a, seta] = useState(+(250).toFixed(2)); //Salgspris incl moms
  const [b, setb] = useState(+(40).toFixed(2)); //db%
  const [c, setc] = useState(+(2.5).toFixed(2)); //Hjemtagelse
  const [d, setd] = useState(+(40).toFixed(2)); //Øvrige variable
  var [problemtype, setproblemtype] = useState("DB % af variable omkostninger");

  var problemtypeSelect = (e) => {
    setproblemtype(e);
};

 

var db=a*.8-a*.8/(1+b/100)

var dbtext1 = "% af variable omkostninger"
//var dbtext2 = "Moms af salgspris excl. moms 25% af "+numberFormat1(a*.8)+" DKK"

if (problemtype === "DB % af variable omkostninger") {
  db=a*.8-a*.8/(1+b/100)
  dbtext1 = "% af de variable omk."
  
} else {
  dbtext1 = "% af salgspris excl. moms "
  db=a*.8*+b/100
}
  
  

 

  return (
    <div>
      <br></br>
      <Container>
        <div class="p-3 mb-2 bg-secondary text-white">
          {/* <div class="card">
            <div class="p-4"> */}
          <h3>Retrograde bidragskalkulation</h3>
        </div>
      </Container>

      
                                            
                                        

      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body"></div>

            <Container>
              <div class="p-3 mb-1 bg-white">
                <Form>
                     {/*  <DropdownButton
                        alignleft
                        variant="warning"
                        title={"Retrograde bidragskalkulation"}
                        size="sm"
                      >
                      <Dropdown.Item size="sm" href="/kalkulation3" Retrograde><small>Vælg retrograde bidragskalkulation</small></Dropdown.Item>  
                      <Dropdown.Item size="sm" href="/kalkulation4" Retrograde><small>Vælg retrograde fordelingskalkulation</small></Dropdown.Item>
                      </DropdownButton>                                                
                      <br></br> */}
                      

                              <DropdownButton
                                  alignleft
                                  variant="warning"
                                  title={problemtype}
                                   id="type"
                                    size="sm"
                                    onSelect={problemtypeSelect}
                                                >

                                                    <Dropdown.Item eventKey="DB % af variable omkostninger">
                                                    <small>Dækningsbidraget beregnes som % af de variable omkostninger</small>
                                                        </Dropdown.Item>
                                                    <Dropdown.Item eventKey="DB % af salgspris">
                                                    <small>Dækningsbidraget beregnes som % af salgsprisen excl. moms</small>
                                                        </Dropdown.Item>
                                                </DropdownButton>
                                                
                <br></br>


                <h6>
                I Bidragskalkulationen beregnes salgsprisen af de variable omkostninger plus dækningsbidrag.
                  </h6>
                  
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
                                                                Salgspris incl. moms DKK.
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Salgspris incl. moms</span>
                      
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
                                                              25% moms i DKK
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Moms af salgspris 20% af {numberFormat3(a)}</span>
                      </OverlayTrigger>
                      </span>
                      </div>
                     
                        
                      <Form.Control
                        placeholder="Disabled input" disabled
                          value={numberFormat3(a*.2)}
                          
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">Salgspris excl. moms</InputGroup.Text>
                        </InputGroup.Append>
                        
                        <Form.Control
                        placeholder="Disabled input" disabled
                          value={numberFormat3(a*.8)}
                          
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
                                                              {b+dbtext1} hvilket giver {numberFormat3(db)} DKK
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Dækningsbidrag</span>
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
                          <InputGroup.Text id="basic-addon2">{dbtext1}</InputGroup.Text>
                        </InputGroup.Append>
                        
                        <Form.Control
                        placeholder="Disabled input" disabled
                          value={numberFormat3(db)}
                          
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
                                                                Variable enhedsomkostninger i DKK består af indkøbspris + fragt + øvrige variable omkostninger
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Variable enhedsomkostninger</span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                        placeholder="Disabled input" disabled
                          class="text-right"
                          value={numberFormat3(+a*0.8-db)}
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
                                                              Hjemtagelsesomkostninger i DKK
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Hjemtagelsesomkostninger</span>
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
                        
                        <Form.Control
                        placeholder="Disabled input" disabled
                          value={numberFormat3(c)}
                          
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
                                                              Øvrige variable omkostninger i DKK
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Øvrige variable omkostninger</span>
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
                          <InputGroup.Text id="basic-addon2">DKK</InputGroup.Text>
                        </InputGroup.Append>
                        
                        <Form.Control
                        placeholder="Disabled input" disabled
                          value={numberFormat3(d)}
                          
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
                                                                Salgspris minus hjemtagelsesomkostninger og andre variable omkostninger giver den maksimale indkøbspris DKK.
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span><b>Maksimal indkøbspris</b></span>
                      
                      </OverlayTrigger>
                      </span>
                      </div>
                        <Form.Control
                        placeholder="Disabled input" disabled
                          class="text-right"
                          value={numberFormat3(+a*0.8-db-c-d)}
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
          <h3>Skema retrograde bidragskalkulation</h3>
          
          {/* <h5>Y = aX + b</h5> */}
        </div>
      </Container>

      <br></br>
      <Container>

      <Table  bordered hover size="sm">
  
      <thead>
    <tr>
      <th scope="col"><b>Navn</b></th>
      <th scope="col"><b>Beregning</b></th>
      
      <th scope="col" class="text-right"><b>Værdi</b></th>
      
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td><p class="text-left" >Salgspris incl. moms</p></td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(a)} DKK</p></td>
    </tr>

    <tr>
      <td><p class="text-left" >Moms af salgspris</p></td>
      <td>0,2 · {numberFormat3(a)}</td>
      <td><p class="text-right" >{numberFormat3(a*.2)} DKK</p></td>
    </tr>

    <tr class="table-secondary">
      <td><p class="text-left" >Salgspris excl. moms</p></td>
      <td>{numberFormat3(a)} - {numberFormat3(a*.2)}</td>
      <td><p class="text-right" >{numberFormat3(a*.8)} DKK</p></td>
    </tr>


    <tr>
    <td><p class="text-left" >Dækningsbidrag</p></td>
      <td>{b}% · {(problemtype === "DB % af variable omkostninger"?numberFormat3(a*0.8-db):numberFormat3(a*0.8))}</td>
      <td><p class="text-right" >{numberFormat3(db)} DKK</p></td>
    </tr>

    <tr class="table-secondary">
    <td><p class="text-left" >Variable enhedsomkostninger</p></td>
      <td>{numberFormat3(a*0.8-db-c-d)}+{numberFormat3(d)}+{numberFormat3(c)}</td>
      <td><p class="text-right" >{numberFormat3(a*0.8-db)} DKK</p></td>
    </tr>

    <tr>
    <td><p class="text-left" >Hjemtagelsesomkostninger</p></td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(c)} DKK</p></td>
    </tr>

    <tr>
    <td><p class="text-left" >Øvrige variable omkostninger</p></td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(d)} DKK</p></td>
    </tr>

    <tr class="table-secondary">
      <td><p class="text-left" >Maksimal indkøbspris
</p></td>
<td>{numberFormat3(a*0.8-db)}-{numberFormat3(c)}-{numberFormat3(d)}</td>
<td><p class="text-right" >{numberFormat3(a*0.8-db-c-d)} DKK</p></td>
      
      
    </tr>

   
  </tbody>
</Table>

      </Container>



      

       

     
      <br />

      <br />
    </div>
  );
}
