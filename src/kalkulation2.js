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

export function kalkulation2() {
  const [a, seta] = useState(+(200).toFixed(2)); //Variable materialeomkostninger
  const [b, setb] = useState(+(40).toFixed(2)); //DB i %
  var [problemtype, setproblemtype] = useState("DB i % af variable omkostninger");

  var problemtypeSelect = (e) => {
    setproblemtype(e);
};
var opType = "dbvar"
if (problemtype === "DB i % af salgspris") {
    opType = "dbsalg"
} else {
    opType = "dbvar"
}
var db=a*+b/100

var dbtext1 = "% af variable omkostninger"
if (opType === "dbvar"){
  db = a*+b/100
  dbtext1 = "% af variable omkostninger"
} else{
  db = a/(+1-b/100)-a
  dbtext1 = "% af salgsprisen"
}

  
  

 

  return (
    <div>
      <br></br>
      <Container>
        <div class="p-3 mb-2 bg-secondary text-white">
          {/* <div class="card">
            <div class="p-4"> */}
          <h3>Bidragskalkulation</h3>
          <h6>
                I Bidragskalkulationen beregnes salgsprisen af de variable omkostninger plus dækningsbidrag.
                  </h6>
        </div>
      </Container>

      
                                            
                                        

      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body"></div>

            <Container>
              <div class="p-3 mb-1 bg-white">
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

                                                    <Dropdown.Item eventKey="DB % af variable omkostninger">
                                                        Vælg DB i % af variable omkostninger
                                                        </Dropdown.Item>
                                                    <Dropdown.Item eventKey="DB i % af salgspris">
                                                        Vælg DB i % af salgspris
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
                                                                Variable omkostninger i alt i DKK.
                                                            </Tooltip>
                                                        }
                                                    > 
                       <span>Variable omkostninger i alt</span>
                      
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
                                                                Dækningsbidrag i DKK
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
                                                                Variable omkostninger plus dækningsbidrag giver salgspris i DKK.
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
                          value={numberFormat3(+a+db)}
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
          <h3>Skema bidragskalkulation</h3>
          
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
      
      <th scope="col" class="text-right"><b>I alt</b></th>
      
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td><p class="text-left" >Variable omkostninger</p></td>
      <td></td>
      <td><p class="text-right" >{numberFormat3(a)} DKK</p></td>
      
      
    </tr>
    <tr>
    <td><p class="text-left" >Dækningsbidrag</p></td>
      <td>{(opType === "dbvar")?b+"% af "+numberFormat3(a):"Her beregnes salgsprisen først, DB findes derefter som: "+numberFormat3(+a+db)+"-"+numberFormat3(+a)+"="+numberFormat3(+db)+" DKK"}</td>
      <td><p class="text-right" >{numberFormat3(db)} DKK</p></td>
      
  
    </tr>
    <tr class="table-secondary">
      <td><p class="text-left" >Salgspris ex. moms
</p></td>
<td>{(opType === "dbvar")?"": "Løs ligningen hvor X er salgspris:\nSalgspris - DB = Variable omkostninger\nX - "+b+"%X = "+numberFormat3(a)+" \nX - "+numberFormat3(b/100)+"X = "+numberFormat3(a) + " \n"+numberFormat3((100-b)/100)+"X = "+numberFormat3(a)+" \nX = "+numberFormat3(a)+"/"+numberFormat3((100-b)/100)+" \nX = "+numberFormat3(a+db)+" DKK"}</td>
<td><p class="text-right" >{numberFormat3(+a+db)} DKK</p></td>
      

    </tr>

   
  </tbody>
</Table>

      </Container>



      

       

     
      <br />

      <br />
    </div>
  );
}
