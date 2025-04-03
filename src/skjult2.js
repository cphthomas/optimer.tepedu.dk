import React, { useState } from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./styles.css";
import "katex/dist/katex.min.css";

import { numberFormat4 } from "./lib"; //ændrer til komma og pct + DKK
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import "bootstrap/dist/css/bootstrap.min.css";

import "katex/dist/katex.min.css";
// import { BlockMath } from "react-katex";
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/annotations")(Highcharts);

require("highcharts/highcharts-more")(Highcharts);

export function skjult2() {
  const [a, seta] = useState(+(-2).toFixed(2));
  const [b, setb] = useState(+(100).toFixed(2));
  const [a2, seta2] = useState(+(1).toFixed(2));
  const [b2, setb2] = useState(+(50).toFixed(2));

  var dataline, dataline2, xmin, xmax, ymin, ymax, xskær, yskær;

  var textY1, textY2, anno;

  if (+a !== +a2) {
    xskær = (+b2 - +b) / (+a - a2);
    xskær = +xskær.toFixed(2);
    yskær = +a * +xskær + +b;
    yskær = +yskær.toFixed(2);
    xmin = Math.min(+xskær * 2, 0, -b, -b2, -a, -a2);
    xmax = Math.max(+xskær * 2, 0, b, b2, a, a2);
    ymin = Math.min(+yskær * 2, +b, +b2, -a, -a2, 0, -b, -b2);
    ymax = Math.max(+yskær * 2, +b, +b2, a, a2, 0, +b, +b2);
  } else {
    xmin = Math.min(-b * 2, -b2 * 2, -a * 2, -a2 * 2, 0);
    xmax = Math.max(b * 2, b2 * 2, a * 2, a2 * 2, 0);
    ymin = Math.min(-a * 2, -a2 * 2, 0, -b * 2, -b2 * 2);
    ymax = Math.max(a * 2, a2 * 2, 0, +b * 2, +b2 * 2);
  }
  dataline = [
    [+xmin * 10, +a * xmin * 10 + +b],
    [+xmax * 10, +a * xmax * 10 + +b],
  ];
  dataline2 = [
    [+xmin * 10, a2 * xmin * 10 + +b2],
    [+xmax * 10, a2 * xmax * 10 + +b2],
  ];

  if (+b > 0) {
    if (+a !== 0 && +a !== 1 && +a !== -1) {
      textY1 = numberFormat4(a) + "X + " + numberFormat4(+b);
    } else if (+a === 0) {
      textY1 = numberFormat4(+b);
    } else if (+a === 1) {
      textY1 = "X + " + numberFormat4(+b);
    } else {
      textY1 = "-X + " + numberFormat4(+b);
    }
  } else if (+b < 0) {
    if (+a !== 0 && +a !== 1 && +a !== -1) {
      textY1 = numberFormat4(a) + "X " + numberFormat4(+b);
    } else if (+a === 0) {
      textY1 = numberFormat4(+b);
    } else if (+a === 1) {
      textY1 = "X " + numberFormat4(+b);
    } else {
      textY1 = "-X " + numberFormat4(+b);
    }
  } else {
    if (+a !== 0) {
      textY1 = numberFormat4(a) + "X";
    } else {
      textY1 = numberFormat4(+b);
    }
  }

  if (+b2 > 0) {
    if (+a2 !== 0 && +a2 !== 1 && +a2 !== -1) {
      textY2 = numberFormat4(a2) + "X + " + numberFormat4(+b2);
    } else if (+a2 === 0) {
      textY2 = numberFormat4(+b2);
    } else if (+a2 === 1) {
      textY2 = "X + " + numberFormat4(+b2);
    } else {
      textY2 = "-X + " + numberFormat4(+b2);
    }
  } else if (+b2 < 0) {
    if (+a2 !== 0 && +a2 !== 1 && +a2 !== -1) {
      textY2 = numberFormat4(+a2) + "X " + numberFormat4(+b2);
    } else if (+a2 === 0) {
      textY2 = numberFormat4(+b2);
    } else if (+a2 === 1) {
      textY2 = "X " + numberFormat4(+b2);
    } else {
      textY2 = "-X " + numberFormat4(+b2);
    }
  } else {
    if (+a2 !== 0) {
      textY2 = numberFormat4(+a2) + "X";
    } else {
      textY2 = numberFormat4(+b2);
    }
  }

  anno = {
    labelOptions: {
      // verticalAlign: "top",
      padding: 1,

      style: {
        fontSize: "0.6em",
      },
    },
    labels: [
      {
        useHTML: true,
        point: {
          align: "left",
          xAxis: 0,
          yAxis: 0,
          x: (xmax + xmin) / 8,
          y: (a * (xmax + xmin)) / 8 + +b,
        },

        text: "Y<sub>1</sub>=" + textY1,

        borderWidth: 1,
        borderColor: "blue",
        backgroundColor: "blue",
        style: { color: "white" },
      },
      {
        useHTML: true,
        point: {
          align: "left",
          xAxis: 0,
          yAxis: 0,
          x: (xmax + xmin) / 6,
          y: (a2 * (xmax + xmin)) / 6 + +b2,
        },

        text: "Y<sub>1</sub>=" + textY2,

        borderWidth: 1,
        borderColor: "red",
        backgroundColor: "red",
        style: { color: "white" },
      },
    ],
  };





  return (
    <div>
      <Container>
        <div class="p-3 mb-2 bg-secondary text-white">
          {/* <div class="card">
            <div class="p-4"> */}
          <h3>LP</h3>

        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 b2-white">
          <div class="card">
            <div class="card-body">
              <div class="p-3 mb-2 bg-white">
                <Form>
                  <h6>
                    Y<sub>1</sub> = {textY1}
                  </h6>
                  <Row>
                    <Col>
                      <InputGroup size="sm">
                        {/* <InputGroup.Prepend>
                          <InputGroup.Text size="sm">i boks før input</InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <FormControl
                          type="number"
                          //   max="-0.000000001"
                          step={1}
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
                          //   min="0"
                          step={1}
                          precision={0}
                          //   mobile={true}
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
                  <h6>
                    Y<sub>2</sub> = {textY2}
                  </h6>
                  <Row>
                    <Col>
                      <InputGroup size="sm">
                        {/* <InputGroup.Prepend>
                          <InputGroup.Text size="sm">i boks før input</InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <FormControl
                          type="number"
                          //   max="-0.000000001"
                          step={1}
                          precision={0}
                          //mobile={true}
                          value={+a2}
                          onChange={(e) => seta2(e.target.value)}
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
                          //   min="0"
                          step={1}
                          precision={0}
                          mobile={true}
                          value={+b2}
                          onChange={(e) => setb2(e.target.value)}
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
            </div>
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
                      text: "",
                    },
                    // title: {
                    //   text:
                    //     "Skæring  = (" +
                    //     numberFormat4(xskær) +
                    //     "," +
                    //     numberFormat4(yskær) +
                    //     ")",
                    // },
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
                      min: ymin,
                      max: ymax,
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
                        type: "line",

                        color: "green",
                        marker: {
                          enabled: false,
                          symbol: "circle",
                          radius: 1,
                        },
                        dashStyle: "ShortDot",
                        name: "",
                        // name: "Skæring X = " + numberFormat4(xskær),
                        data: [
                          [xskær, 0],
                          [xskær, yskær],
                        ],
                      },
                      {
                        type: "line",

                        color: "orange",
                        marker: {
                          enabled: false,
                          symbol: "circle",
                          radius: 1,
                        },
                        dashStyle: "ShortDot",
                        name: "",
                        // name: "Skæring Y = " + numberFormat4(yskær),
                        data: [
                          [xskær, yskær],
                          [0, yskær],
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
                        name: "Y",

                        data: dataline,
                      },
                      {
                        type: "line",

                        lineWidth: 2,
                        color: "red",
                        marker: {
                          enabled: false,
                          symbol: "circle",
                          radius: 1,
                        },
                        dashStyle: "line",
                        name: "Y2",

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

      <Container>
        {/* <div class="container"> */}
        <div>
          {/* <div class="card"> */}

          <table class="table table-bordered table-responsive table-white table-hover table-striped ">
            <thead>
              <span class="align-middle">
                <tr>
                  <br />
                  <h3>&nbsp;&nbsp;&nbsp;Forklaring LP </h3>
                  <small>
                    <tbody>
                      <span class="align-top">
                        <tr>
                          <th>Navn</th>

                          <th>Værdi</th>
                          <th>Forklaring</th>
                        </tr>
                        <tr>
                          <td>Linje 1</td>

                          <td>

                          </td>

                          <td>


                          </td>
                        </tr>

                        <tr>
                          <td>Skæring Y</td>

                          <td>
                            On June 24, 1948, the former Soviet Union blocked all land and water routes through East Germany to Berlin. A gigantic airlift was organized using American and British planes to supply food, clothing and other supplies to more than 2 million people in West Berlin.

                            The cargo capacity was 30,000 cubic feet for an American plane and 20,000 cubic feet for a British plane. To break the Soviet blockade, the Western Allies had to maximize cargo capacity, but were subject to the following restrictions: No more than 44 planes could be used. The larger American planes required 16 personnel per flight; double that of the requirement for the British planes. The total number of personnel available could not exceed 512. The cost of an American flight was $9000 and the cost of a British flight was $5000. The total weekly costs could note exceed $300,000. Find the number of American and British planes that were used to maximize cargo capacity.
                          </td>

                          <td>
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
