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

export function linje() {
  const [a, seta] = useState(+(-1).toFixed(2));
  const [b, setb] = useState(+(100).toFixed(2));

  // var x;
  // var dataoms = [];
  // for (var i = 0; i < 10; i += 0.1) {
  //   dataoms.push([x, fun(x)]);
  // }

  // function fun(x) {
  //   return a * x * x + b * x; // or other function
  // }

  var afsmax = b / -a;

  var dataline, xmin, xmax;

  var text23, text330, anno;

  if (+a !== 0) {
    dataline = [
      [
        Math.min((2 * -Number(b)) / a, (2 * Number(b)) / a),
        a * Math.min((2 * -b) / a, (2 * Number(b)) / a) + Number(b),
      ],
      [
        Math.max((2 * -Number(b)) / a, (2 * Number(b)) / a),
        a * Math.max((2 * -b) / a, (2 * Number(b)) / a) + Number(b),
      ],
    ];
    xmin = Math.min(1.1 * (-b / a), 0);
    xmax = Math.max(1.1 * (-b / a), 1.1 * (-b / -a));
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
          text: text23,

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
          text: "Skæring med <br />y-aksen b = " + +numberFormat4(b),
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
          text: "Skæring med <br />x-aksen -b/a = " + numberFormat4(afsmax),
          borderWidth: 1,
          borderColor: "orange",
          backgroundColor: "orange",
          style: { color: "white" },
        },

        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: (b / 2 - b) / a + 0.5,
            y: b / 2,
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
      [-100, +b],
      [100, +b],
    ];
    xmin = 0;
    xmax = 100;
    text23 = "Y = " + b;
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
            x: 50,
            y: +b,
          },
          // distance: 7,
          text: "Y = " + numberFormat4(b),
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
          text: "Skæring med <br />y-aksen b = " + +numberFormat4(b),
          borderWidth: 1,
          borderColor: "red",
          backgroundColor: "red",
          style: { color: "white" },
        },

        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 80,
            y: b,
          },

          text:
            "Hældningskoefficienten er 0<br />Når X vokser med 1, ændres Y ikke " +
            "<br />Funktionen er konstant" +
            numberFormat4(b),
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
          <h5>Y = aX + b</h5>
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body"></div>

            <Container>
              <div class="p-3 mb-2 bg-white">
                <Form>
                  <h6>
                    Y = aX + b = {numberFormat4(a)}X + {b}
                  </h6>
                  <Row>
                    <Col>
                      <InputGroup size="sm">
                        {/* <InputGroup.Prepend>
                          <InputGroup.Text size="sm">i boks før input</InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <FormControl
                          type="number"
                          // max="-0.000000001"
                          step={0.01}
                          precision={0}
                          //mobile={true}
                          value={+a}
                          onChange={(e) => seta(e.target.value)}
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
                          //min="0"
                          step={1}
                          precision={0}
                          // mobile={true}
                          value={+b}
                          onChange={(e) => setb(e.target.value)}
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
                    annotations: [anno],
                    xAxis: {
                      title: {
                        text: "X-aksen",
                      },
                      // lineColor: "black",
                      // lineWidth: 1,
                      gridLineWidth: 1,
                      min: xmin,
                      max: xmax,
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
                      min: Math.min(0, b * 1.1),
                      max: Math.max(0, b * 1.1),
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
                      {
                        name: "Hældningskoefficient",
                        type: "polygon",
                        data: [
                          [
                            (Number(b) / 2 + Number(a) - Number(b)) / Number(a),
                            Number(b) / 2 + Number(a),
                          ],
                          [
                            (Number(b) / 2 - Number(b)) / Number(a),
                            Number(b) / 2,
                          ],
                          [
                            (Number(b) / 2 - Number(b)) / Number(a) + 1,
                            Number(b) / 2,
                          ],
                        ],
                        color: "green",
                      },

                      {
                        type: "line",

                        color: "blue",
                        marker: {
                          enabled: false,
                          symbol: "circle",
                          radius: 1,
                        },
                        dashStyle: "ShortDot",
                        name: "∆X = 1",
                        data: [
                          [(b / 2 - b) / a + 1, b / 2],
                          [(b / 2 - b) / a, b / 2],
                        ],
                      },
                      {
                        type: "line",

                        color: "red",
                        marker: {
                          enabled: false,
                          symbol: "circle",
                          radius: 1,
                        },
                        dashStyle: "ShortDot",
                        name: "∆Y = " + numberFormat4(a),
                        data: [
                          [
                            (Number(b) / 2 - Number(b)) / Number(a) + 1,
                            Number(b) / 2,
                          ],
                          [
                            (Number(b) / 2 - Number(b)) / Number(a) + 1,
                            Number(b) / 2 + Number(a),
                          ],
                        ],
                      },

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
                            Hældningskoefficienten a viser at hver gang X vokser
                            med 1, ændres Y med hældningskoefficienten a ={" "}
                            {numberFormat4(a)}
                            <br />
                            <br />
                            {+a !== 0 && (
                              <p>
                                I figuren ovenfor er hældningskoefficienten
                                illustreret ved det grønne areal.
                                <br />
                                Ændringen i X = ∆X = 1, er markeret med den
                                vandrette stiplede blå linje.
                                <br />
                                Ændringen i Y = ∆Y = {numberFormat4(a)}
                                , er markeret med den lodrette stiplede røde
                                linje.
                                <br />
                              </p>
                            )}
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
                            Dette kan vi se ved at indsætte X = 0 i Y = f(X):
                            <br />
                            f(0) = a·0 + b = {numberFormat4(a)}·0 +{" "}
                            {numberFormat4(b)} = {numberFormat4(b)}
                            <br />
                            <br />
                            Linjens skæring med Y-aksen b = {numberFormat4(
                              b
                            )}{" "}
                            er markeret på figuren ovenfor med rød label.
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
                                <br />
                                Linjens skæring med X-aksen -b/a ={" "}
                                {numberFormat4(-b / a)} er markeret på figuren
                                ovenfor med orange label.
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
                            {+a === 0 && +b}
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
                            f(X) = {+a !== 0 && numberFormat4(a) + "X + " + b}
                            {+a === 0 && +b}
                            <br />
                            Vi kan opfatte funktionen som en maskine vi putter
                            X-værdier ind og får Y-værdier ud. Disse par af X og
                            Y-værdier ligger altid på den rette linje vist med
                            blåt ovenfor.
                            <br />
                            Hvis hældningskoefficienten er positiv er funktionen
                            voksende, er hældningskoefficienten negativ er
                            funktionen aftagende. Hvis hældningskoefficienten er
                            0 bliver den rette linje vandret, vi siger da
                            funktionen er konstant, så vil Y-værdierne altid
                            være det samme uanset hvad X er. Forskriften for en
                            konstant version indeholder derfor ikke et X led:
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
