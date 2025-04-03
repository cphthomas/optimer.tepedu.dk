import React, { useState } from "react";

import { Row, Col, FormControl } from "react-bootstrap";
import "chartjs-plugin-annotation";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./styles.css";
import {
  // numberFormat1,
  // numberFormat2,
  // numberFormat3,
  numberFormat4,
  //numberFormat5,
  //numberFormat6,
} from "./lib"; //ændrer til komma og pct + DKK
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";

import "katex/dist/katex.min.css";
// import { BlockMath } from "react-katex";
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/annotations")(Highcharts);
require("highcharts/highcharts-more")(Highcharts);

export function linjer() {
  const [a, seta] = useState(+(-2).toFixed(2));
  const [b, setb] = useState(+(100).toFixed(2));
  const [a2, seta2] = useState(+(-0.5).toFixed(2));
  const [b2, setb2] = useState(+(50).toFixed(2));
  var xlodretknæk, ylodretknæk, anedrelodret, bnedrelodret;
  var xlim = -b2 / a2 - b / a;
  var ylim = Math.max(b, b2);
  var y1ligning = a + "X<sub>1</sub>+" + b;
  var y2ligning = a2 + "X<sub>2</sub>+" + b2;
  var xmax = Math.max(-b / a, -b2 / a2);
  var xsum = -b / a + -b2 / a2;

  if (-b / a < -b2 / a2) {
    xlodretknæk = -b / a;
    ylodretknæk = +a2 * xlodretknæk + b2;
    anedrelodret = +a2;
    bnedrelodret = +b2;
  } else if (-b / a > -b2 / a2) {
    xlodretknæk = -b2 / a2;
    ylodretknæk = +a * xlodretknæk + b;
    anedrelodret = +a;
    bnedrelodret = +b;
  } else if (-b / a === -b2 / a2) {
    xlodretknæk = 0;
    ylodretknæk = 0;
    anedrelodret = -a;
    bnedrelodret = -b;
  }

  var alodret = +a + a2;
  var blodret = +b + b2;
  var lodretligning = alodret + "X<sub>lodret</sub>+" + blodret;
  var balodret = Math.max(-b / a, -b2 / a2);
  var yvandretknæk, xvandretknæk, aøvrevandret, bøvrevandret;
  if (b > b2) {
    yvandretknæk = +b2;
    xvandretknæk = (+b2 - b) / a;
    aøvrevandret = +a;
    bøvrevandret = +b;
  } else {
    yvandretknæk = +b;
    xvandretknæk = (+b - b2) / a2;
    aøvrevandret = +a2;
    bøvrevandret = +b2;
  }

  var anedrevandret = yvandretknæk / (xvandretknæk - xsum);
  var bnedrevandret = -anedrevandret * xsum;
  return (
    <div>
      <br></br>
      <Container>
        <div class="p-3 mb-2 bg-secondary text-light">
          <h3>Addition af 2 linjer</h3>
          <h5>Vertikal addition</h5>
          <h5>Horisontal addition</h5>
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 b2-white text-black">
          <div class="card">
            <div class="card-body"></div>

            <Container>
              <div class="p-3 mb-2 mt-0 b2-white">
                <Form>
                  <h6>
                    Y<sub>1</sub> = {numberFormat4(a)}X + {b}
                  </h6>
                  <Row>
                    <Col>
                      <InputGroup size="sm">
                        {/* <InputGroup.Prepend>
                          <InputGroup.Text size="sm">i boks før input</InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <FormControl
                          type="number"
                          max="-0.000000001"
                          step={0.01}
                          precision={0}
                          //mobile={true}
                          value={+a}
                          onChange={(e) => seta(-Math.abs(e.target.value))}
                          placeholder="0"
                        />

                        <InputGroup.Append>
                          <InputGroup.Text
                            inputGroup-sizing-sm
                            id="basic-addon2"
                          >
                            a
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Hældningskoefficienten: a
                      </Form.Text>
                    </Col>
                    <Col>
                      <InputGroup size="sm">
                        {/* <InputGroup.Prepend>
                          <InputGroup.Text size="sm">i boks før input</InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <Form.Control
                          type="number"
                          min="0"
                          step={1}
                          precision={0}
                          mobile={true}
                          value={+b}
                          onChange={(e) => setb(Math.abs(e.target.value))}
                          placeholder="0"
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">b</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Skæringen med y-aksen: b
                      </Form.Text>
                    </Col>
                  </Row>
                  <h6>
                    Y<sub>2</sub> = {numberFormat4(a2)}X + {b2}
                  </h6>
                  <Row>
                    <Col>
                      <InputGroup size="sm">
                        {/* <InputGroup.Prepend>
                          <InputGroup.Text size="sm">i boks før input</InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <FormControl
                          type="number"
                          max="-0.000000001"
                          step={0.01}
                          precision={0}
                          //mobile={true}
                          value={+a2}
                          onChange={(e) => seta2(-Math.abs(e.target.value))}
                          placeholder="0"
                        />

                        <InputGroup.Append>
                          <InputGroup.Text
                            inputGroup-sizing-sm
                            id="basic-addon2"
                          >
                            a
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Hældningskoefficienten: a
                      </Form.Text>
                    </Col>
                    <Col>
                      <InputGroup size="sm">
                        {/* <InputGroup.Prepend>
                          <InputGroup.Text size="sm">i boks før input</InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <Form.Control
                          type="number"
                          min="0"
                          step={1}
                          precision={0}
                          mobile={true}
                          value={+b2}
                          onChange={(e) => setb2(Math.abs(e.target.value))}
                          placeholder="0"
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">b</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Skæringen med y-aksen: b
                      </Form.Text>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Container>
          </div>
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 b2-white text-black">
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                //containerProps={{ style: { height: "200%" } }}
                highcharts={Highcharts}
                options={{
                  useHTML: true,
                  title: {
                    text: "2 Linjer",
                  },
                  exporting: {
                    buttons: {
                      contextButton: {
                        menuItems: [
                          "viewFullscreen",
                          "separator",
                          // "downloadPNG",
                          "downloadPDF",
                          // "downloadSVG",
                        ],
                      },
                    },
                  },
                  credits: {
                    enabled: false,
                  },
                  annotations: [
                    {
                      labelOptions: {
                        verticalAlign: "top",
                        padding: 2,

                        style: {
                          fontSize: "0.6em",
                        },
                      },
                      labels: [],
                    },
                  ],
                  xAxis: {
                    title: {
                      text: "Afsætning",
                    },
                    gridLineWidth: 1,
                    min: 0,
                    max: xlim,
                    labels: {
                      format: "{value} stk.",
                    },
                  },
                  yAxis: {
                    title: {
                      text: null,
                    },
                    min: 0,
                    max: ylim,
                    labels: {
                      format: "{value} DKK.",
                    },
                  },
                  series: [
                    {
                      type: "line",
                      useHTML: true,
                      color: "blue",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      name: "Y<sub>1</sub>",
                      data: [
                        [0, b],
                        [-b / a, 0],
                      ],
                    },

                    {
                      type: "line",
                      useHTML: true,
                      color: "red",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      name: "Y<sub>2</sub>",
                      data: [
                        [0, b2],
                        [-b2 / a2, 0],
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 b2-white text-black">
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                //containerProps={{ style: { height: "200%" } }}
                highcharts={Highcharts}
                options={{
                  useHTML: true,
                  title: {
                    text: "2 Linjer med labels",
                  },
                  exporting: {
                    buttons: {
                      contextButton: {
                        menuItems: [
                          "viewFullscreen",
                          "separator",
                          // "downloadPNG",
                          "downloadPDF",
                          // "downloadSVG",
                        ],
                      },
                    },
                  },
                  credits: {
                    enabled: false,
                  },
                  annotations: [
                    {
                      labelOptions: {
                        verticalAlign: "top",
                        padding: 2,

                        style: {
                          fontSize: "0.6em",
                        },
                      },
                      labels: [
                        {
                          useHTML: true,
                          point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 0,
                            y: b,
                          },
                          text: "Y<sub>1</sub>=" + y1ligning,
                          borderWidth: 1,
                          borderColor: "blue",
                          backgroundColor: "blue",
                          style: { color: "white" },
                        },

                        {
                          useHTML: true,
                          point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 0,
                            y: b2,
                          },
                          text: "Y<sub>2</sub>=" + y2ligning,
                          borderWidth: 1,
                          borderColor: "red",
                          backgroundColor: "red",
                          style: { color: "white" },
                        },
                      ],
                    },
                  ],
                  xAxis: {
                    title: {
                      text: "Afsætning",
                    },
                    gridLineWidth: 1,
                    min: 0,
                    max: xlim,
                    labels: {
                      format: "{value} stk.",
                    },
                  },
                  yAxis: {
                    title: {
                      text: null,
                    },
                    min: 0,
                    max: ylim,
                    labels: {
                      format: "{value} DKK.",
                    },
                  },
                  series: [
                    {
                      type: "line",
                      useHTML: true,
                      color: "blue",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      name: "Y<sub>1</sub>",
                      data: [
                        [0, b],
                        [-b / a, 0],
                      ],
                    },

                    {
                      type: "line",
                      useHTML: true,
                      color: "red",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      name: "Y<sub>2</sub>",
                      data: [
                        [0, b2],
                        [-b2 / a2, 0],
                      ],
                    },
                    {
                      type: "line",
                      color: "pink",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      dashStyle: "ShortDot",
                      name: "Knæk lodret",
                      data: [
                        [0, +ylodretknæk.toFixed(2)],
                        [+xlodretknæk.toFixed(2), +ylodretknæk.toFixed(2)],
                        [+xlodretknæk.toFixed(2), 0],
                      ],
                    },
                    {
                      type: "line",
                      color: "green",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      dashStyle: "ShortDot",
                      name: "Knæk vandret",
                      data: [
                        [0, +yvandretknæk.toFixed(2)],
                        [+xvandretknæk.toFixed(2), +yvandretknæk.toFixed(2)],
                        [+xvandretknæk.toFixed(2), 0],
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 b2-white text-black">
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                //containerProps={{ style: { height: "200%" } }}
                highcharts={Highcharts}
                options={{
                  useHTML: true,
                  title: {
                    text: "Lodret addition",
                  },
                  exporting: {
                    buttons: {
                      contextButton: {
                        menuItems: [
                          "viewFullscreen",
                          "separator",
                          // "downloadPNG",
                          "downloadPDF",
                          // "downloadSVG",
                        ],
                      },
                    },
                  },
                  credits: {
                    enabled: false,
                  },
                  annotations: [
                    {
                      labelOptions: {
                        verticalAlign: "top",
                        padding: 2,

                        style: {
                          fontSize: "0.6em",
                        },
                      },
                      labels: [
                        {
                          useHTML: true,
                          point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 0,
                            y: b + b2,
                          },
                          text: "Y<sub>lodret</sub>=" + lodretligning,
                          borderWidth: 1,
                          borderColor: "orange",
                          backgroundColor: "orange",
                          style: { color: "white" },
                        },

                        {
                          useHTML: true,
                          point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: (xlodretknæk + xmax) / 2,
                            y:
                              1.2 *
                              (+anedrelodret * ((xlodretknæk + xmax) / 2) +
                                bnedrelodret),
                          },
                          text: "Y=" + anedrelodret + "X+" + bnedrelodret,
                          borderWidth: 1,
                          borderColor: "orange",
                          backgroundColor: "orange",
                          style: { color: "white" },
                        },

                        {
                          useHTML: true,
                          point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 0,
                            y: b,
                          },
                          text: "Y<sub>1</sub>=" + y1ligning,
                          borderWidth: 1,
                          borderColor: "blue",
                          backgroundColor: "blue",
                          style: { color: "white" },
                        },
                        {
                          useHTML: true,
                          point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 0,
                            y: b2,
                          },
                          text: "Y<sub>2</sub>=" + y2ligning,
                          borderWidth: 1,
                          borderColor: "red",
                          backgroundColor: "red",
                          style: { color: "white" },
                        },
                      ],
                    },
                  ],
                  xAxis: {
                    title: {
                      text: "Afsætning",
                    },
                    gridLineWidth: 1,
                    min: 0,
                    max: xlim,
                    labels: {
                      format: "{value} stk.",
                    },
                  },
                  yAxis: {
                    title: {
                      text: null,
                    },
                    min: 0,
                    max: +b + b2,
                    labels: {
                      format: "{value} DKK.",
                    },
                  },
                  series: [
                    {
                      type: "line",
                      useHTML: true,
                      color: "blue",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      name: "Y<sub>1</sub>",
                      data: [
                        [0, b],
                        [-b / a, 0],
                      ],
                    },

                    {
                      type: "line",
                      useHTML: true,
                      color: "red",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      name: "Y<sub>2</sub>",
                      data: [
                        [0, b2],
                        [-b2 / a2, 0],
                      ],
                    },
                    {
                      type: "line",
                      lineWidth: 4,
                      useHTML: true,
                      color: "orange",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      name: "Y-Lodret",
                      data: [
                        [0, +blodret],
                        [+xlodretknæk, +alodret * xlodretknæk + blodret],
                        [balodret, 0],
                      ],
                    },
                    {
                      type: "line",
                      color: "pink",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      dashStyle: "ShortDot",
                      name: "Knæk lodret",
                      data: [
                        [0, +ylodretknæk.toFixed(2)],
                        [+xlodretknæk.toFixed(2), +ylodretknæk.toFixed(2)],
                        [+xlodretknæk.toFixed(2), 0],
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container className="p-0">
        <div class="container">
          <table class="table table-bordered table-responsive table-white table-hover table-striped ">
            <small>
              <thead>
                <span class="align-middle">
                  <tr>
                    <br />

                    <h3>
                      &nbsp;&nbsp;&nbsp;Forklaring på variable lodret addition
                    </h3>

                    <br />
                  </tr>
                </span>
              </thead>
              <tbody>
                <span class="align-top">
                  <tr>
                    <th>Navn</th>

                    <th>Værdi</th>
                    <th>Forklaring</th>
                  </tr>

                  <tr>
                    <td>
                      X<sub>knæk</sub>
                    </td>
                    <td>
                      {-b / a !== -b2 / a2 && numberFormat4(xlodretknæk)}
                      {-b / a === -b2 / a2 && "Intet knæk"}
                    </td>

                    <td>
                      {-b / a !== -b2 / a2 && (
                        <p>
                          For at bestemme knækket for den lodret adderede
                          funktion, skal vi bestemme X-værdien mellem, hvor
                          begge funktioner er definerede og kun en funktion er
                          defineret.
                          <br />
                          Skæringerne for de 2 linjer med X-aksen, kan findes
                          ved formlen -b/a. Før den mindste skæring med X-aksen,
                          er begge funktioner definerede.
                          <br />X<sub>1 skæring</sub>=-b/a={-b}/{a}=
                          {numberFormat4(-b / a)}
                          <br />X<sub>2 skæring</sub>=-b/a={-b2}/{a2}=
                          {numberFormat4(-b2 / a2)}
                          <br />X<sub>knæk</sub>={numberFormat4(xlodretknæk)}
                          <br />
                          <br />
                          Knækket for den lodret adderede orange funktion, er
                          markeret med den stiplede pink linje ovenfor.
                        </p>
                      )}
                      {-b / a === -b2 / a2 && (
                        <p>
                          Da begge definitionsmængder er identiske, har den
                          lodret adderede funktion intet knæk. Det er ingen
                          X-værdier for hvilke kun den ene funktion er
                          defineret.
                        </p>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Y<sub>knæk</sub>
                    </td>

                    <td>
                      {-b / a !== -b2 / a2 && numberFormat4(ylodretknæk)}
                      {-b / a === -b2 / a2 && "Intet knæk"}
                    </td>

                    <td>
                      {-b / a !== -b2 / a2 && (
                        <p>
                          Nu kan vi finde Y værdien ved knækket, dette kan vi
                          gøre ved at indsætte X<sub>knæk</sub> ={" "}
                          {numberFormat4(xlodretknæk)} i funktionen der
                          fortsætter efter X<sub>knæk</sub> ={" "}
                          {numberFormat4(xlodretknæk)}:
                          <br />Y<sub>knæk</sub>={numberFormat4(anedrelodret)}*
                          {numberFormat4(xlodretknæk)}+
                          {numberFormat4(bnedrelodret)}=
                          {numberFormat4(anedrelodret * xlodretknæk)}+
                          {bnedrelodret}={numberFormat4(ylodretknæk)}
                          <br />
                          <br />
                          Knækket for den lodret adderede orange funktion, er
                          markeret med den stiplede pink linje ovenfor.
                        </p>
                      )}
                      {-b / a === -b2 / a2 && (
                        <p>
                          Da begge definitionsmængder er identiske, har den
                          lodret adderede funktion intet knæk. Det er ingen
                          X-værdier for hvilke kun den ene funktion er
                          defineret.
                        </p>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Y<sub>lodret</sub>
                    </td>

                    <td>
                      {numberFormat4(alodret)}X<sub>lodret</sub>+
                      {numberFormat4(blodret)}
                      <br />
                      {-b / a !== -b2 / a2 && "og"}
                      <br />
                      {-b / a !== -b2 / a2 &&
                        numberFormat4(anedrelodret) +
                        "X+" +
                        numberFormat4(bnedrelodret)}
                    </td>

                    <td>
                      Vi kan nu bestemme a og b for Y<sub>lodret</sub> hvor både
                      Y<sub>1</sub> og Y<sub>2</sub> er definerede.
                      Hældningskoefficienten a for Y<sub>lodret</sub> er summen
                      af hældningskoefficienterne for Y<sub>1</sub> og Y
                      <sub>2</sub>:
                      <br />a<sub>1</sub>+a<sub>2</sub>={numberFormat4(a)}
                      {numberFormat4(a2)}={numberFormat4(a + a2)}
                      <br />b for Y<sub>lodret</sub> er summen af b<sub>1</sub>{" "}
                      for Y<sub>1</sub> og b<sub>2</sub> for Y<sub>2</sub>:
                      <br />b<sub>1</sub>+b<sub>2</sub>={numberFormat4(b)}+
                      {numberFormat4(b2)}={numberFormat4(b + b2)}
                      <br />
                      Den lodret adderede funktion hvor begge funktioner er
                      definerede bliver derfor:
                      <br />Y<sub>lodret</sub>={numberFormat4(alodret)}X
                      <sub>lodret</sub>+{numberFormat4(blodret)}
                      <br />
                      {-b / a !== -b2 / a2 && (
                        <p>
                          Den lodret adderede funktion hvor kun den ene funktion
                          er defineret bliver derfor:
                          <br />Y<sub>lodret</sub>={numberFormat4(anedrelodret)}
                          X<sub>lodret</sub>+{numberFormat4(bnedrelodret)}
                          <br />
                        </p>
                      )}
                      Den lodret adderede funktion er markeret med orange i
                      figuren ovenfor.
                      {-b / a === -b2 / a2 && (
                        <p>
                          Da begge definitionsmængder er identiske, har den
                          lodret adderede funktion intet knæk. Det er ingen
                          X-værdier for hvilke kun den ene funktion er
                          defineret.
                        </p>
                      )}
                    </td>
                  </tr>
                </span>
              </tbody>
            </small>
          </table>
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 b2-white text-black">
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                //containerProps={{ style: { height: "200%" } }}
                highcharts={Highcharts}
                options={{
                  useHTML: true,
                  title: {
                    text: "Vandret addition",
                  },
                  exporting: {
                    buttons: {
                      contextButton: {
                        menuItems: [
                          "viewFullscreen",
                          "separator",
                          // "downloadPNG",
                          "downloadPDF",
                          // "downloadSVG",
                        ],
                      },
                    },
                  },
                  credits: {
                    enabled: false,
                  },
                  annotations: [
                    {
                      labelOptions: {
                        verticalAlign: "top",
                        padding: 2,

                        style: {
                          fontSize: "0.6em",
                        },
                      },
                      labels: [
                        {
                          useHTML: true,
                          point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 0,
                            y: b,
                          },
                          text: "Y<sub>1</sub>=" + y1ligning,
                          borderWidth: 1,
                          borderColor: "blue",
                          backgroundColor: "blue",
                          style: { color: "white" },
                        },

                        {
                          useHTML: true,
                          point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 0,
                            y: b2,
                          },
                          text: "Y<sub>2</sub>=" + y2ligning,
                          borderWidth: 1,
                          borderColor: "red",
                          backgroundColor: "red",
                          style: { color: "white" },
                        },

                        {
                          useHTML: true,
                          point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: (xvandretknæk + xmax) / 2,
                            y:
                              1.1 *
                              (+anedrevandret * ((xvandretknæk + xmax) / 2) +
                                bnedrevandret),
                          },
                          text:
                            "Y<sub>vandret</sub>=" +
                            numberFormat4(anedrevandret) +
                            "X<sub>vandret</sub>+" +
                            numberFormat4(bnedrevandret),
                          borderWidth: 1,
                          borderColor: "orange",
                          backgroundColor: "orange",
                          style: { color: "white" },
                        },

                        {
                          useHTML: true,
                          point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: xvandretknæk / 2,
                            y: aøvrevandret * (xvandretknæk / 2) + bøvrevandret,
                          },
                          text: "Y<sub>2</sub>=" + y2ligning,
                          borderWidth: 1,
                          borderColor: "orange",
                          backgroundColor: "orange",
                          style: { color: "white" },
                        },
                      ],
                    },
                  ],
                  xAxis: {
                    title: {
                      text: "Afsætning",
                    },
                    gridLineWidth: 1,
                    min: 0,
                    max: xlim,
                    labels: {
                      format: "{value} stk.",
                    },
                  },
                  yAxis: {
                    title: {
                      text: null,
                    },
                    min: 0,
                    max: ylim,
                    labels: {
                      format: "{value} DKK.",
                    },
                  },
                  series: [
                    {
                      type: "line",
                      useHTML: true,
                      color: "blue",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      name: "Y<sub>1</sub>",
                      data: [
                        [0, b],
                        [-b / a, 0],
                      ],
                    },

                    {
                      type: "line",
                      useHTML: true,
                      color: "red",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      name: "Y<sub>2</sub>",
                      data: [
                        [0, b2],
                        [-b2 / a2, 0],
                      ],
                    },

                    {
                      type: "line",
                      lineWidth: 4,
                      useHTML: true,
                      color: "orange",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      name: "Y<sub>2</sub>",
                      data: [
                        [0, bøvrevandret],
                        [xvandretknæk, yvandretknæk],
                        [-b2 / a2 - b / a, 0],
                      ],
                    },

                    {
                      type: "line",
                      color: "green",
                      marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                      },
                      dashStyle: "ShortDot",
                      name: "Knæk vandret",
                      data: [
                        [0, +yvandretknæk.toFixed(2)],
                        [+xvandretknæk.toFixed(2), +yvandretknæk.toFixed(2)],
                        [+xvandretknæk.toFixed(2), 0],
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container className="p-0">
        <div class="container">
          <table class="table table-bordered table-responsive table-white table-hover table-striped ">
            <small>
              <thead>
                <span class="align-middle">
                  <tr>
                    <br />

                    <h3>
                      &nbsp;&nbsp;&nbsp;Forklaring på variable vandret addition
                    </h3>

                    <br />
                  </tr>
                </span>
              </thead>
              <tbody>
                <span class="align-top">
                  <tr>
                    <th>Navn</th>

                    <th>Værdi</th>
                    <th>Forklaring</th>
                  </tr>

                  <tr>
                    <td>
                      Y<sub>knæk</sub>
                    </td>
                    <td>
                      {b !== b2 && numberFormat4(yvandretknæk)}
                      {(b === b2) === true && "Intet knæk"}
                    </td>

                    <td>
                      For at bestemme knækket for den vandret adderede funktion,
                      skal vi bestemme Y-værdien, hvor begge funktioner er har
                      fælles værdimængde og hvor kun en funktion har
                      værdimængde.
                      <br />
                      Skæringerne for de 2 linjer med Y-aksen er b.
                      <br />Y<sub>1 skæring</sub> = b = {numberFormat4(b)}
                      <br />Y<sub>2 skæring</sub> = b = {numberFormat4(b2)}
                      <br />
                      Den mindste skæring med Y-aksen, hvor begge funktioner er
                      definerede bliver:
                      <br />Y<sub>knæk</sub>={numberFormat4(yvandretknæk)}
                      <br />
                      {b !== b2 &&
                        "Knækket for den vandret adderede orange funktion, er markeret med den stiplede grønne linje ovenfor."}
                      {b === b2 &&
                        "Der er intet knæk for den vandret adderede funktion da begge funktioner har samme skæring med Y-aksen =" +
                        numberFormat4(b)}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      X<sub>knæk</sub>
                    </td>

                    <td>
                      {b !== b2 && numberFormat4(xvandretknæk)}
                      {b === b2 && "Intet knæk"}
                    </td>

                    <td>
                      {b !== b2 && (
                        <p>
                          Nu kan vi finde X værdien ved knækket, dette kan vi
                          gøre ved at indsætte Y<sub>knæk</sub> ={" "}
                          {numberFormat4(yvandretknæk)} i funktionen med den
                          største skæring med Y-aksen efter Y<sub>knæk</sub> ={" "}
                          {numberFormat4(yvandretknæk)}:
                          <br />Y<sub>knæk</sub> = aX<sub>knæk</sub> + b &hArr;
                          <br />
                          {numberFormat4(yvandretknæk)}=
                          {numberFormat4(aøvrevandret)}·X
                          <sub>knæk</sub> + {numberFormat4(bøvrevandret)}&hArr;
                          <br />
                          {numberFormat4(yvandretknæk)} -{" "}
                          {numberFormat4(bøvrevandret)} =
                          {numberFormat4(aøvrevandret)}·X
                          <sub>knæk</sub>&hArr;
                          <br />
                          {numberFormat4(yvandretknæk - bøvrevandret)}/
                          {numberFormat4(aøvrevandret)} = X<sub>knæk</sub>&hArr;
                          <br />
                          {numberFormat4(xvandretknæk)} = X<sub>knæk</sub>
                          <br />
                          <br />
                          Knækket for den lodret adderede orange funktion, er
                          markeret med den stiplede grønne linje ovenfor.
                        </p>
                      )}
                      {b === b2 &&
                        "Der er intet knæk for den lodret adderede funktion da begge funktioner er ens."}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Y<sub>vandret</sub>
                    </td>

                    <td>
                      {numberFormat4(anedrevandret)}X<sub>vandret</sub>+
                      {numberFormat4(bnedrevandret)}
                      <br />
                      {b !== b2 && "og"}
                      <br />
                      {b !== b2 &&
                        numberFormat4(aøvrevandret) +
                        "X+" +
                        numberFormat4(bøvrevandret)}
                    </td>

                    <td>
                      Vi kan nu bestemme a og b for Y<sub>vandret</sub> hvor
                      både Y<sub>1</sub> og Y<sub>2</sub> har værdimængde. Vi
                      har allerede punktet ({numberFormat4(xvandretknæk)},
                      {numberFormat4(yvandretknæk)}) <br />
                      Vi kan også finde skæringen med X-aksen for Y
                      <sub>vandret</sub> som summen af skæringerne med X-aksen
                      for <br />Y<sub>1 x-skæring</sub> = -b/a ={" "}
                      {numberFormat4(-b / a)}
                      <br />
                      og
                      <br />Y<sub>2 x-skæring</sub> = -b/a ={" "}
                      {numberFormat4(-b2 / a2)}
                      <br />
                      Så skæringen med X-aksen for den vandret adderede funktion
                      bliver:
                      <br />Y<sub>vandret x-skæring</sub> ={" "}
                      {numberFormat4(-b2 / a2 + -b / a)}
                      <br />
                      Så nu har vi det andet punkt (
                      {numberFormat4(-b2 / a2 + -b / a)},0).
                      <br />
                      Hældningskoefficienten a for Y<sub>vandret</sub> bliver:
                      <br />
                      (Y<sub>1</sub>-Y<sub>2</sub>)/(X<sub>1</sub>-X<sub>2</sub>
                      ) = ({numberFormat4(yvandretknæk)}-0)/(
                      {numberFormat4(xvandretknæk)}-
                      {numberFormat4(-b2 / a2 + -b / a)}) ={" "}
                      {numberFormat4(yvandretknæk)}/
                      {numberFormat4(xvandretknæk - (-b2 / a2 + -b / a))} ={" "}
                      {numberFormat4(anedrevandret)}
                      <br />
                      Nu kan vi med et vilkårligt af de 2 punkter og a finde b:
                      <br />Y<sub>vandret</sub> = aX<sub>vandret</sub> + b
                      &hArr;
                      <br />0 = {numberFormat4(anedrevandret)}·
                      {numberFormat4(-b2 / a2 + -b / a)} + b &hArr;
                      <br />0 ={" "}
                      {numberFormat4(anedrevandret * (-b2 / a2 + -b / a))} + b
                      &hArr;
                      <br />
                      {numberFormat4(
                        -1 * anedrevandret * (-b2 / a2 + -b / a)
                      )}{" "}
                      = b
                      <br />
                      <br />
                      Den vandret adderede funktion er markeret med orange i
                      figuren ovenfor.
                    </td>
                  </tr>
                </span>
              </tbody>
            </small>
          </table>
        </div>
      </Container>
    </div>
  );
}
