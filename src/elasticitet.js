import React, { useState } from 'react';
// import Toggle from "./ToggleRenderProps";
// import ReactPlayer from "react-player";
// import { FormCheckbox } from "shards-react";
// import { MDBContainer } from "mdbreact";

// import { Row, Col, FormControl, Button } from "react-bootstrap";
import { Row, Col, Tooltip, OverlayTrigger, Table } from 'react-bootstrap';

// import { MDBInput, MDBFormInline, MDBBtn } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import { MDBContainer } from "mdbreact";
import DropdownButton from 'react-bootstrap/DropdownButton';

import Dropdown from 'react-bootstrap/Dropdown';

import Highcharts from 'highcharts';
// import { Tooltip, OverlayTrigger } from "react-bootstrap";

import './styles.css';

import 'katex/dist/katex.min.css';
// import { BlockMath } from "react-katex";

import {
  //numberFormat1,
  // numberFormat1,
  // numberFormat2,
  numberFormat3,

  //numberFormat5,
  //numberFormat6,
} from './lib'; //ændrer til komma og pct + DKK
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import "bootstrap/dist/css/bootstrap.min.css";

import 'katex/dist/katex.min.css';
// import { BlockMath } from "react-katex";
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/annotations')(Highcharts);

require('highcharts/highcharts-more')(Highcharts);

export function elasticitet() {
  const [a, seta] = useState(+(250).toFixed(2)); //A pris før
  const [b, setb] = useState(+(280).toFixed(2)); //A pris nu
  const [c, setc] = useState(+(200).toFixed(2)); //A afsætning FØR
  const [d, setd] = useState(+(180).toFixed(2)); //A AFS NU

  return (
    <div>
      <br></br>
      <Container>
        <div class="p-3 mb-2 bg-secondary text-white">
          {/* <div class="card">
            <div class="p-4"> */}
          <h3>Priselasticitet</h3>
          <h5>Priselasticiteten bestemmes ud fra pris- og afsætningsændring</h5>
          <h6>Kaldes ARC elasticiteten, man skal kende 2 priser og afsætninger i beregningen</h6>
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

                  <DropdownButton alignleft variant="warning" title={'Priselasticitet'} id="type" size="sm">
                    <Dropdown.Item size="sm" href="/elasticitet">
                      <small>Priselasticitet</small>
                    </Dropdown.Item>
                    <Dropdown.Item size="sm" href="/elasticitet2" target="_blank">
                      <small>Krydspriselasticitet</small>
                    </Dropdown.Item>
                  </DropdownButton>
                  <br />
                  <br />
                  <Row>
                    <Col>
                      <InputGroup size="sm">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 100, hide: 100 }}
                              overlay={<Tooltip>Prisen før ændring i DKK</Tooltip>}
                            >
                              <span>Oprindelig pris</span>
                            </OverlayTrigger>
                          </span>
                        </div>
                        <Form.Control
                          class="text-right"
                          type="number"
                          step={1}
                          precision={0}
                          value={+a}
                          onChange={(e) => seta(e.target.value)}
                          placeholder="0"
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">DKK</InputGroup.Text>
                        </InputGroup.Append>
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 100, hide: 100 }}
                              overlay={<Tooltip>Prisen efter ændring i DKK</Tooltip>}
                            >
                              <span>Ny pris</span>
                            </OverlayTrigger>
                          </span>
                        </div>
                        <Form.Control
                          class="text-right"
                          type="number"
                          //min="0"
                          step={1}
                          precision={0}
                          value={+b}
                          onChange={(e) => setb(e.target.value)}
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
                              overlay={<Tooltip>Afsætningen før prisændring i stk.</Tooltip>}
                            >
                              <span>Oprindelig afsætning</span>
                            </OverlayTrigger>
                          </span>
                        </div>
                        <Form.Control
                          class="text-right"
                          type="number"
                          step={1}
                          precision={0}
                          value={+c}
                          onChange={(e) => setc(e.target.value)}
                          placeholder="0"
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">Stk.</InputGroup.Text>
                        </InputGroup.Append>
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 100, hide: 100 }}
                              overlay={<Tooltip>Afsætningen efter prisændring i stk.</Tooltip>}
                            >
                              <span>Ny afsætning</span>
                            </OverlayTrigger>
                          </span>
                        </div>
                        <Form.Control
                          class="text-right"
                          type="number"
                          //min="0"
                          step={1}
                          precision={0}
                          value={+d}
                          onChange={(e) => setd(e.target.value)}
                          placeholder="0"
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">Stk.</InputGroup.Text>
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
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th scope="col">
                <b>Navn</b>
              </th>
              <th scope="col">
                <b>Beregning</b>
              </th>
              <th scope="col">
                <b>Værdi</b>
              </th>
              {/* <th scope="col" class="text-right"><b>Værdi</b></th> */}
              <th scope="col">
                <b>Tolkning</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p class="text-left">Prisændring i %</p>
              </td>
              <td>
                100·({numberFormat3(b)}-{numberFormat3(a)})/{numberFormat3(a)} = 100·{numberFormat3(b - a)}/
                {numberFormat3(a)} = {numberFormat3((100 * (b - a)) / a)}%{' '}
              </td>
              <td>
                <p class="text-right">{numberFormat3((100 * (b - a)) / a)}%</p>
              </td>
              <td>Prisændringen er på {numberFormat3((100 * (b - a)) / a)}%</td>
            </tr>
            <tr>
              <td>
                <p class="text-left">Afsætningsændring i %</p>
              </td>
              <td>
                100·({numberFormat3(d)}-{numberFormat3(c)})/{numberFormat3(c)} = 100·{numberFormat3(d - c)}/
                {numberFormat3(c)} = {numberFormat3((100 * (d - c)) / c)}%{' '}
              </td>
              <td>
                <p class="text-right">{numberFormat3((100 * (d - c)) / c)}%</p>
              </td>
              <td>Afsætningsændringen er på {numberFormat3((100 * (d - c)) / c)}%</td>
            </tr>
            <tr>
              <td>
                <p class="text-left">Priselasticitet &#949; </p>
              </td>
              <td>
                Afsætningsændring/Prisændring = {numberFormat3((d - c) / c)}/{numberFormat3((b - a) / a)} ={' '}
                {numberFormat3((d - c) / c / ((b - a) / a))}
              </td>
              <td>
                <p class="text-right">{numberFormat3((d - c) / c / ((b - a) / a))}</p>
              </td>
              <td>
                {a > b
                  ? 'Priselasticiteten er negativ, for når prisen sænkes, stiger afsætningen. Når prisen sænkes med 1% stiger afsætningen med ' +
                    numberFormat3(Math.abs((d - c) / c / ((b - a) / a))) +
                    '%.'
                  : 'Priselasticiteten er negativ, for når prisen hæves, falder afsætningen. Når prisen hæves med 1%, falder afsætningen med ' +
                    numberFormat3(Math.abs((d - c) / c / ((b - a) / a))) +
                    '%.'}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <br />
      <br />
    </div>
  );
}
