import React, { useState } from "react";
// import Toggle from "./ToggleRenderProps";
// import ReactPlayer from "react-player";
// import { FormCheckbox } from "shards-react";
// import { MDBContainer } from "mdbreact";

// import { Row, Col, FormControl, Button } from "react-bootstrap";
import { Row, Col, FormControl } from "react-bootstrap";

// import { MDBInput, MDBFormInline, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import { MDBContainer } from "mdbreact";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./styles.css";

import "katex/dist/katex.min.css";
// import { BlockMath } from "react-katex";

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
// import "bootstrap/dist/css/bootstrap.min.css";

import "katex/dist/katex.min.css";
// import { BlockMath } from "react-katex";
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/annotations")(Highcharts);

require("highcharts/highcharts-more")(Highcharts);

export function linje2() {
  var [x1, setx1] = useState(+(1).toFixed(2));
  var [y1, sety1] = useState(+(16).toFixed(2));
  var [x2, setx2] = useState(+(10).toFixed(2));
  var [y2, sety2] = useState(+(-2).toFixed(2));

  var a = (+y1 - +y2) / (+x1 - +x2);

  var b = +y1 - +a * +x1;

  var afsmax = +b / -a;

  var dataline, dataline2;
  var text23, text330, anno;

  if (+a !== 0) {
    dataline = [
      [
        Math.min((2 * -+b) / a, (2 * +b) / a, +x1, +x2),
        a * Math.min((2 * -b) / a, (2 * +b) / a, +x1, +x2) + +b,
      ],
      [
        Math.max((2 * -Number(b)) / a, (2 * Number(b)) / a, +x1, +x2),
        a * Math.max((2 * -b) / a, (2 * Number(b)) / a, +x1, +x2) + Number(b),
      ],
    ];
    dataline2 = [
      [+x1, +y1],
      [+x2, +y2],
    ];
    // xmin = Math.min(1.1 * (-b / a), x1, x2);
    // xmax = Math.max(1.1 * (-b / a), 1.1 * (-b / -a), x1, x2);
    // ymin = Math.min(0, +y1, +y2, +b);
    // ymax = Math.max(0, +y1, +y2, +b);
    // text23 = "Y = " + numberFormat4(a) + "X + " + numberFormat4(b);
    if (b > 0) {
      text23 = "Y = " + numberFormat4(a) + "X + " + numberFormat4(b);
      text330 = numberFormat4(a) + "X + " + numberFormat4(b);
    } else {
      text23 = "Y = " + numberFormat4(a) + "X " + numberFormat4(b);
      text330 = numberFormat4(a) + "X " + numberFormat4(b);
    }
    anno = {
      labelOptions: {
        // verticalAlign: "top",
        padding: 2,

        style: {
          fontSize: "0.6em",
        },
      },
      labels: [
        {
          point: {
            align: "left",
            xAxis: 0,
            yAxis: 0,
            x: (-0.85 * Number(b)) / Number(a),
            y: a * ((-0.85 * Number(b)) / Number(a)) + Number(b),
          },
          // distance: 7,
          text: "Y = " + numberFormat4(a) + "X + " + numberFormat4(b),

          borderWidth: 1,
          borderColor: "blue",
          backgroundColor: "blue",
          style: { color: "white" },
        },

        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 0,
            y: Number(b),
          },
          // x: -4,
          text: "Skæring med <br />y-aksen b = " + numberFormat4(+b),
          borderWidth: 1,
          borderColor: "red",
          backgroundColor: "red",
          style: { color: "white" },
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: -Number(b) / Number(a),
            y: 0,
          },
          // x: -4,
          // distance: 7,
          // align: "left",
          text: "Skæring med <br />x-aksen -b/a = " + numberFormat4(+afsmax),
          borderWidth: 1,
          borderColor: "orange",
          backgroundColor: "orange",
          style: { color: "white" },
        },

        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: (Math.min(0, +x1, +x2) + Math.max(0, +x1, +x2)) / 2,
            y: (+a * (Math.min(0, +x1, +x2) + Math.max(0, +x1, +x2))) / 2 + b,
          },

          // distance: 7,
          // x: 4,
          // y: -37,
          // // distance: -10,
          // align: "left",
          text:
            "Hældningskoefficienten<br />Når X vokser med 1, ændres Y med " +
            numberFormat4(a) +
            "<br />Ændring i X: ∆X=1 <br />Ændring i Y: ∆Y=" +
            numberFormat4(a),
          borderWidth: 1,
          borderColor: "green",
          backgroundColor: "green",
          style: { color: "white" },
        },

        {
          labelOptions: {
            shape: "connector",
            align: "right",
            justify: false,
            crop: true,
            style: {
              fontSize: "0.8em",
              textOutline: "0px white",
            },
          },
        },
      ],
    };
  } else {
    dataline = [
      [Math.min(0, +x1, +x2, -b / +a), +b],
      [Math.max(0, +x1, +x2, -b / +a), +b],
    ];
    dataline2 = [
      [+x1, +y1],
      [+x2, +y2],
    ];

    // xmin = Math.min(0, +x1, +x2, -b / +a);
    // xmax = Math.max(0, +x1, +x2, -b / +a);
    text23 = "Y = " + numberFormat4(+b);
    // plotLinesvalue = +b;
    // plotLinescolor = "blue";
    anno = {
      labelOptions: {
        // verticalAlign: "top",
        padding: 2,

        style: {
          fontSize: "0.6em",
        },
      },
      labels: [
        {
          point: {
            align: "left",
            xAxis: 0,
            yAxis: 0,
            x: +x2,
            y: +y2,
          },
          // distance: 7,
          text: "Y = " + numberFormat4(+b),
          borderWidth: 1,
          borderColor: "blue",
          backgroundColor: "blue",
          style: { color: "white" },
        },

        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 0,
            y: Number(b),
          },
          // x: -4,
          text: "Skæring med <br />y-aksen b = " + numberFormat4(+b),
          borderWidth: 1,
          borderColor: "red",
          backgroundColor: "red",
          style: { color: "white" },
        },

        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: (Math.min(0, +x1, +x2) + Math.max(0, +x1, +x2)) / 2,
            y: b,
          },

          text:
            "Hældningskoefficienten er 0<br />Når X vokser med 1, ændres Y ikke " +
            "<br />Funktionen er konstant " +
            numberFormat4(+b),
          borderWidth: 1,
          borderColor: "green",
          backgroundColor: "green",
          style: { color: "white" },
        },

        {
          labelOptions: {
            shape: "connector",
            align: "right",
            justify: false,
            crop: true,
            style: {
              fontSize: "0.8em",
              textOutline: "0px white",
            },
          },
        },
      ],
    };
  }

  return (
    <div>
      <br></br>
      <Container>
        <div class="p-3 mb-2 bg-secondary text-white">
          {/* <div class="card">
            <div class="p-4"> */}
          <h3>Lineær funktion</h3>
          <h5>Bestemt ud fra 2 punkter</h5>
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body"></div>

            <Container>
              <div class="p-3 mb-2 bg-white">
                <Form>
                  <h6>Y = aX + b = {text330}</h6>
                  <Row>
                    <Col>
                      <InputGroup size="sm">
                        <FormControl
                          type="number"
                          // max="-0.000000001"
                          step={1}
                          precision={0}
                          //mobile={true}
                          value={+x1}
                          onChange={(e) => setx1(e.target.value)}
                          placeholder="0"
                        />

                        <InputGroup.Append>
                          <InputGroup.Text
                            inputGroup-sizing-sm
                            id="basic-addon2"
                          >
                            X<sub>1</sub>
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Punkt 1: X<sub>1</sub>
                      </Form.Text>
                    </Col>
                    <Col>
                      <InputGroup size="sm">
                        <FormControl
                          type="number"
                          // max="-0.000000001"
                          step={1}
                          precision={0}
                          //mobile={true}
                          value={+y1}
                          onChange={(e) => sety1(e.target.value)}
                          placeholder="0"
                        />

                        <InputGroup.Append>
                          <InputGroup.Text
                            inputGroup-sizing-sm
                            id="basic-addon2"
                          >
                            Y<sub>1</sub>
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Punkt 1: Y<sub>1</sub>
                      </Form.Text>
                    </Col>
                    &nbsp;&nbsp;&nbsp;
                    <Col>
                      <InputGroup size="sm">
                        <FormControl
                          type="number"
                          // max="-0.000000001"
                          step={1}
                          precision={0}
                          //mobile={true}
                          value={+x2}
                          onChange={(e) => setx2(e.target.value)}
                          placeholder="0"
                        />

                        <InputGroup.Append>
                          <InputGroup.Text
                            inputGroup-sizing-sm
                            id="basic-addon2"
                          >
                            X<sub>2</sub>
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Punkt 2: X<sub>2</sub>
                      </Form.Text>
                    </Col>
                    <Col>
                      <InputGroup size="sm">
                        {/* <InputGroup.Prepend>
                          <InputGroup.Text size="sm">i boks før input</InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <FormControl
                          type="number"
                          // max="-0.000000001"
                          step={1}
                          precision={0}
                          //mobile={true}
                          value={+y2}
                          onChange={(e) => sety2(e.target.value)}
                          placeholder="0"
                        />

                        <InputGroup.Append>
                          <InputGroup.Text
                            inputGroup-sizing-sm
                            id="basic-addon2"
                          >
                            Y<sub>2</sub>
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Punkt 2: Y<sub>2</sub>
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
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={{
                    title: {
                      text: text23,
                    },
                    exporting: {
                      buttons: {
                        contextButton: {
                          menuItems: [
                            "viewFullscreen",
                            "separator",
                            "downloadPNG",
                            "downloadPDF",
                            "downloadSVG",
                          ],
                        },
                      },
                    },
                    credits: {
                      enabled: false,
                    },

                    annotations: [anno],
                    xAxis: {
                      title: {
                        text: "X-aksen",
                      },
                      // lineColor: "black",
                      // lineWidth: 1,
                      gridLineWidth: 1,

                      min: Math.min(0, +x1, +x2),
                      max: Math.max(0, +x1, +x2),
                      labels: {
                        format: "X = {value}",
                      },
                      plotLines: [
                        {
                          color: "black",
                          width: 2,
                          value: 0,
                        },
                      ],
                    },
                    yAxis: {
                      title: {
                        text: "Y-aksen",
                      },
                      // lineColor: "black",
                      // lineWidth: 1,
                      visible: true,
                      min: Math.min(0, +y1, +y2, +b * 1.1),
                      max: Math.max(0, +y1, +y2, +b * 1.1),

                      labels: {
                        format: "Y = {value}",
                      },
                      plotLines: [
                        {
                          color: "black",
                          width: 2,
                          value: 0,
                        },
                      ],
                    },
                    series: [
                      // {
                      //   name: "Hældningskoefficient",
                      //   type: "polygon",
                      //   data: [
                      //     [
                      //       (Number(b) / 2 + Number(a) - Number(b)) / Number(a),
                      //       Number(b) / 2 + Number(a),
                      //     ],
                      //     [
                      //       (Number(b) / 2 - Number(b)) / Number(a),
                      //       Number(b) / 2,
                      //     ],
                      //     [
                      //       (Number(b) / 2 - Number(b)) / Number(a) + 1,
                      //       Number(b) / 2,
                      //     ],
                      //   ],
                      //   color: "green",
                      // },

                      // {
                      //   type: "line",

                      //   color: "blue",
                      //   marker: {
                      //     enabled: false,
                      //     symbol: "circle",
                      //     radius: 1,
                      //   },
                      //   dashStyle: "ShortDot",
                      //   name: "∆X = 1",
                      //   data: [
                      //     [(b / 2 - b) / a + 1, b / 2],
                      //     [(b / 2 - b) / a, b / 2],
                      //   ],
                      // },
                      // {
                      //   type: "line",

                      //   color: "red",
                      //   marker: {
                      //     enabled: false,
                      //     symbol: "circle",
                      //     radius: 1,
                      //   },
                      //   dashStyle: "ShortDot",
                      //   name: "∆Y = " + numberFormat4(a),
                      //   data: [
                      //     [
                      //       (Number(b) / 2 - Number(b)) / Number(a) + 1,
                      //       Number(b) / 2,
                      //     ],
                      //     [
                      //       (Number(b) / 2 - Number(b)) / Number(a) + 1,
                      //       Number(b) / 2 + Number(a),
                      //     ],
                      //   ],
                      // },

                      {
                        type: "line",

                        lineWidth: 2,
                        color: "blue",
                        marker: {
                          enabled: false,
                          symbol: "circle",
                          radius: 1,
                        },
                        dashStyle: "line",
                        name: "Y=",

                        data: dataline,
                      },
                      {
                        type: "line",

                        lineWidth: 2,
                        color: "blue",
                        marker: {
                          enabled: true,
                          symbol: "circle",
                          radius: 6,
                        },
                        dashStyle: "line",
                        name: "Punkter",

                        data: dataline2,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <HighchartsReact
                  containerProps={{ style: { height: "400%" } }}
                  highcharts={Highcharts}
                  options={chartoptions}
                />
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      <Container>
        {/* <div class="container"> */}
        <div>
          {/* <div class="card"> */}

          <table class="table table-bordered table-responsive table-white table-hover table-striped ">
            <thead>
              <span class="align-middle">
                <tr>
                  <br />
                  <h3>&nbsp;&nbsp;&nbsp;Forklaring på variable </h3>
                  <small>
                    <tbody>
                      <span class="align-top">
                        <tr>
                          <th>Navn</th>

                          <th>Værdi</th>
                          <th>Forklaring</th>
                        </tr>
                        <tr>
                          <td>a</td>

                          <td>{numberFormat4(a)}</td>

                          <td>
                            Vi kan ud fra de 2 punkter (X<sub>1</sub>,Y
                            <sub>1</sub>)=({x1},{y1}) og (X<sub>2</sub>,Y
                            <sub>2</sub>)=({x2},{y2}), bestemme
                            hældningskoefficienten a vha. formlen.
                            <br />
                            (Y<sub>1</sub>- Y<sub>2</sub>)/(X<sub>1</sub> - X
                            <sub>2</sub>)= ({y1}-{y2})/({x1}-{x2})= {+y1 - y2}/
                            {+x1 - x2}={numberFormat4((+y1 - y2) / (+x1 - x2))}
                            <br />
                            Hældningskoefficienten a viser at hver gang X vokser
                            med 1, ændres Y med hældningskoefficienten a ={" "}
                            {numberFormat4(a)}
                            <br />
                            {+a === 0 && (
                              <p>
                                Hældningskoefficienten er 0, da funktionen er
                                konstant.
                              </p>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>b</td>

                          <td>{numberFormat4(b)}</td>

                          <td>
                            Linjens skæring med Y-aksen kaldes også b, hvilket
                            svarer til den lineære funktions værdi når X = 0.
                            <br />
                            Vi kan ud fra et af de 2 punkter (X<sub>1</sub>,Y
                            <sub>1</sub>)=({x1},{y1}) eller (X<sub>2</sub>,Y
                            <sub>2</sub>)=({x2},{y2}), bestemme b ved at at
                            indsætte punktet i ligningen, hvor vi jo lige har
                            bestemt a:
                            <br />
                            <br />
                            Hvis man vælger (X<sub>1</sub>,Y
                            <sub>1</sub>)=({x1},{y1})
                            <br />
                            Y=aX+b &hArr; <br />
                            {numberFormat4(y1)}={numberFormat4(a)}·
                            {numberFormat4(x1)}+b &hArr; <br />
                            {numberFormat4(y1)}={numberFormat4(a * x1)}
                            +b &hArr; <br />
                            {numberFormat4(y1)}-{numberFormat4(a * x1)}
                            =b &hArr; <br />
                            {numberFormat4(y1 - a * x1)}=b
                            <br />
                            <br />
                            Hvis man vælger (X<sub>2</sub>,Y
                            <sub>2</sub>)=({x2},{y2})
                            <br />
                            Y=aX+b &hArr; <br />
                            {numberFormat4(y2)}={numberFormat4(a)}·
                            {numberFormat4(x2)}+b &hArr; <br />
                            {numberFormat4(y2)}={numberFormat4(a * x2)}
                            +b &hArr; <br />
                            {numberFormat4(y2)}-{numberFormat4(a * x2)}
                            =b &hArr; <br />
                            {numberFormat4(y2 - a * x2)}=b <br />
                            <br />
                            Linjens skæring med Y-aksen er altså b ={" "}
                            {numberFormat4(b)}
                          </td>
                        </tr>

                        <tr>
                          <td>-b/a</td>

                          <td>{+a !== 0 && numberFormat4(-b / a)}</td>

                          <td>
                            {+a !== 0 && (
                              <p>
                                Linjens skæring med X-aksen findes som -b/a,
                                hvilket svarer til den lineære funktions X-værdi
                                når Y = 0. Dette kan vi se ved at indsætte Y = 0
                                i funktionen:
                                <br />
                                0 = a·X + b &hArr; <br />
                                -b = a·X &hArr; <br />
                                -b/a = X &hArr; <br />
                                {numberFormat4(a)} = X &hArr; <br />
                                {numberFormat4(-b / a)} = X <br />
                              </p>
                            )}
                            {+a === 0 && (
                              <p>
                                Der er ingen skæring med X-aksen, da funktionen
                                er konstant
                              </p>
                            )}
                          </td>
                        </tr>

                        <tr>
                          <td>Y eller f(X)</td>

                          <td>
                            {+a !== 0 && text330}
                            {+a === 0 && +numberFormat4(+b)}
                          </td>

                          <td>
                            En lineær funktion bestemmes altid ved de 2
                            parametre:
                            <br />
                            Hældningskoefficient a = {numberFormat4(a)}, der
                            viser hvor meget Y ændres hver gang X vokser med 1.
                            <br />
                            Skæringen med Y-aksen b = {numberFormat4(b)}
                            <br />
                            Forskriften for den lineære funktion bliver.
                            <br />
                            f(X) = {+a !== 0 && text330}
                            {+a === 0 && +numberFormat4(+b)}
                            <br />
                            Vi kan opfatte funktionen som en maskine vi putter
                            X-værdier ind og får Y-værdier ud. Disse par af X og
                            Y-værdier ligger altid på den rette linje vist med
                            blåt ovenfor.
                            <br />
                          </td>
                        </tr>
                      </span>
                    </tbody>
                  </small>

                  <br />
                </tr>
              </span>
            </thead>
          </table>
        </div>
      </Container>

      {/* <Container fluid className="p-0">
        <div class="p-3 mb-0 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="demo"
                  className="embed-responsive-item"
                  src="https://player.vimeo.com/video/389002644"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      <br />

      <br />
    </div>
  );
}
