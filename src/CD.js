import React, { useState } from "react";




// import React from "react";
// import { render } from "react-dom";
// import Toggle from "./ToggleRenderProps";
// import _ from "lodash";
// import chunk from "lodash/chunk";
import { Row, Col } from "react-bootstrap";
// import { High3d } from './components/high3d';
// import { High3d2 } from './components/high3d2';
// import {  FormControl, Button } from "react-bootstrap";
// import "chartjs-plugin-annotation";


import "./styles.css";
import {
    numberFormat1,
    numberFormat2,
    numberFormat3,
    numberFormat4,
    numberFormat5,
    //numberFormat6,
} from "./lib"; //ændrer til komma og pct + DKK
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "bootstrap/dist/css/bootstrap.min.css";

// import Plot from 'react-plotly.js';

// import "katex/dist/katex.min.css";
// import { BlockMath } from "react-katex";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from 'highcharts/highcharts-3d';

highcharts3d(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/annotations")(Highcharts);
require("highcharts/highcharts-more")(Highcharts);





export function CD() {
    var [Q, setQ] = useState(+(100).toFixed(2)); //?
    var [A, setA] = useState(+(1).toFixed(2));
    var [b, setb] = useState(+(1).toFixed(2));
    var [a, seta] = useState(+(0.5).toFixed(2));
    var [r, setr] = useState(+(100).toFixed(2));
    var [w, setw] = useState(+(10).toFixed(2));



    var optL = ((-w / r) / ((-b / a) * (Q ** (1 / a) / A ** (1 / a)))) ** (1 / ((-b / a) - 1))
    var optK = ((Q * optL ** (-b)) / A) ** (1 / a)


    var optL2 = ((-w / r) / ((-b / a) * ((Q * 2) ** (1 / a) / A ** (1 / a)))) ** (1 / ((-b / a) - 1))
    var optK2 = ((Q * 2 * optL2 ** (-b)) / A) ** (1 / a)
    var optL3 = ((-w / r) / ((-b / a) * ((Q * 3) ** (1 / a) / A ** (1 / a)))) ** (1 / ((-b / a) - 1))
    var optK3 = ((Q * 3 * optL3 ** (-b)) / A) ** (1 / a)

    var isocosta = -w / r
    var isocostb = optK + w / r * optL
    var isocostb2 = optK2 + w / r * optL2
    var isocostb3 = optK3 + w / r * optL3

    var ekspansiona = optK / optL

    const range = (start, stop, step) =>
        Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)

    // Funktion til at ændre decimaler
    // function toFixedIfNecessary(value, dp) {
    //   return +parseFloat(value).toFixed(dp);
    // }

    if (!optL > 0 || A === 0 || w === 0) {
        optL = 1
    };

    // Q =AK**a*L**b
    // Q/A *L**-b=K**a



    var x = range(optL / 100, optL * 10, optL / 20)
    var aopt = (Q / A) ** (1 / a)
    var aopt2 = (Q * 2 / A) ** (1 / a)
    var aopt3 = (Q * 3 / A) ** (1 / a)
    // var aopt4 = Q * 3 / A ** (-b * (1 / a))
    var exponentopt = (-b * (1 / a))

    var isofunc = x.map(
        (x) =>
            (((Q * x ** (-b)) / A) ** (1 / a))
    );
    var isofunc2 = x.map(
        (x) =>
            ((Q * 2 * x ** (-b)) / A) ** (1 / a)
    );
    var isofunc3 = x.map(
        (x) =>
            ((Q * 3 * x ** (-b)) / A) ** (1 / a)
    );


    var isodata = [
        x,
        isofunc,
    ]
    var isodata2 = [
        x,
        isofunc2,
    ]
    var isodata3 = [
        x,
        isofunc3,
    ]


    isodata = isodata[0].map((_, colIndex) => isodata.map(row => row[colIndex]));
    isodata2 = isodata2[0].map((_, colIndex) => isodata2.map(row => row[colIndex]));
    isodata3 = isodata3[0].map((_, colIndex) => isodata3.map(row => row[colIndex]));

    // ###########################################################################################################################################################################################################################################

    var aLTC = (1 / A) ** (1 / (a + b)) * w ** (b / (a + b)) * r ** (a / (a + b)) * ((b / a) ** (a / (a + b)) + (a / b) ** (b / (a + b)))
    var eksponentLTC = (1 / (b + a))
    var q = range(0, Q * 5, Q * 5 / 1000)
    var LTCfunc = q.map(
        (q) =>
            aLTC * q ** eksponentLTC
    );
    var LTCdata = [
        q,
        LTCfunc,
    ]
    LTCdata = LTCdata[0].map((_, colIndex) => LTCdata.map(row => row[colIndex]));
    var LTCmax = aLTC * (Q * 5 * .8) ** eksponentLTC
    var cost = w * optL + r * optK



    // ###########################################################################################################################################################################################################################################

    var aLAC = aLTC
    var aLMC = eksponentLTC * aLTC
    var eksponentLAC = (eksponentLTC - 1)
    var eksponentLMC = (eksponentLTC - 1)

    var LACfunc = q.map(
        (q) =>
            aLAC * q ** eksponentLAC
    );
    var LACdata = [
        q,
        LACfunc,
    ]
    LACdata = LACdata[0].map((_, colIndex) => LACdata.map(row => row[colIndex]));

    var LMCfunc = q.map(
        (q) =>
            aLMC * q ** eksponentLMC
    );

    var LMCdata = [
        q,
        LMCfunc,
    ]
    LMCdata = LMCdata[0].map((_, colIndex) => LMCdata.map(row => row[colIndex]));

    // var test = [aLMC * 0 ** eksponentLMC, aLMC * (Q * 5) ** eksponentLMC, aLAC * 0 ** eksponentLAC, aLAC * (Q * 5) ** eksponentLAC]
    var optLMC = aLMC * Q ** eksponentLMC
    var optLAC = aLAC * Q ** eksponentLAC
    var LMCLACmax = Math.min(1.05 * Math.max(...[aLMC * x[0] ** eksponentLMC, aLMC * (Q * 5) ** eksponentLMC, aLAC * x[0] ** eksponentLAC, aLAC * (Q * 5) ** eksponentLAC]), 20 * optLAC)
    // ###########################################################################################################################################################################################################################################
    // ###########################################################################################################################################################################################################################################
    // ###########################################################################################################################################################################################################################################
    // ###########################################################################################################################################################################################################################################
    // ###########################################################################################################################################################################################################################################


    Highcharts.setOptions({ lang: { decimalPoint: ',', thousandsSep: ".", valueDecimals: "2" } });





    var optionshighcharts = {

        title: {
            useHTML: true,
            text: "Input: L\u1D52\u1D56\u1D57=" + numberFormat4(optL) + ", K\u1D52\u1D56\u1D57=" + numberFormat4(optK) + " Kost: " + numberFormat1(cost) + " Output: " + numberFormat4(Q) + " stk.",

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
                    useHTML: true,
                    // backgroundColor: "rgba(255,255,255,1)",
                    // backgroundColor: "rgba(252, 255, 197, 1)",
                    // verticalAlign: "top",
                    padding: 2,

                    style: {
                        fontSize: "0.6em",
                    },
                },
                labels: [
                    {
                        point: {
                            useHTML: true,
                            xAxis: 0,
                            yAxis: 0,
                            x: optL.toFixed(2),
                            y: optK.toFixed(2),
                        },
                        // formatter: function () {
                        //   return "<b>test</b><sup>" + a + "</sup><br>test";
                        // },
                        text: "Isokvant K =" + numberFormat4(aopt) + "L<sup>" + numberFormat4(exponentopt) + "</sup><br>L\u1D52\u1D56\u1D57=" + numberFormat4(optL) + " og K\u1D52\u1D56\u1D57=" + numberFormat4(optK),
                        borderWidth: 1,
                        borderColor: "green",
                        backgroundColor: "green",
                        style: { color: "white" },
                    },
                    {
                        point: {
                            useHTML: true,
                            xAxis: 0,
                            yAxis: 0,
                            x: -isocostb / isocosta.toFixed(2),
                            y: 0,
                        },
                        // formatter: function () {
                        //   return "<b>test</b><sup>" + a + "</sup><br>test";
                        // },
                        text: "Isokost K =" + numberFormat4(isocosta) + "L + " + numberFormat4(isocostb),
                        borderWidth: 1,
                        borderColor: "red",
                        backgroundColor: "red",
                        style: { color: "white" },
                    },
                    {
                        point: {
                            useHTML: true,
                            xAxis: 0,
                            yAxis: 0,
                            x: optK * 5 * .9 / ekspansiona.toFixed(2),
                            y: optK * 5 * .9.toFixed(2),
                        },
                        // formatter: function () {
                        //   return "<b>test</b><sup>" + a + "</sup><br>test";
                        // },
                        text: "Ekspansionsvejen K =" + numberFormat4(ekspansiona) + "L",
                        borderWidth: 1,
                        borderColor: "purple",
                        backgroundColor: "purple",
                        style: { color: "white" },
                    },



                ],
            },
            {
                labelOptions: {
                    shape: "connector",
                    useHTML: true,
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
        xAxis: {


            title: {
                text: "Labour",
            },
            gridLineWidth: 1,
            min: 0,
            max: optL * 10,

            // labels: {
            //   format: "{value} L",
            // },
            labels: {
                formatter: function () {
                    return [this.value.toString().replace(/\./g, ',')] + " L"
                        ;
                }
            },
            // crosshair: true
        },
        // Legend skal være på def for html fungerer 
        legend: {
            enabled: true,
            useHTML: true
        },
        tooltip: {
            useHTML: true,
            valueDecimals: 2,
            formatter: function () {

                return this.series.name + '<br>Labour L: ' + this.x.toFixed(2).toString().replace(/\./g, ',') + " enheder<br>" +
                    'Kapital K: ' + this.y.toFixed(2).replace(".", ",") + ' enheder';
            }
        },

        // Skjuler alle navne
        // legend: {
        //   enabled: false
        // },

        yAxis: {
            title: {
                text: "Kapital",
            },
            min: 0,
            max: optK * 5,
            // labels: {
            //   format: "{value} K",
            // },
            labels: {
                formatter: function () {
                    return [this.value.toString().replace(/\./g, ',')] + " K"
                        ;
                }
            },
            // crosshair: true
        },

        series: [
            {
                // showInLegend: false,
                type: "line",
                color: "green",
                format: ': {point.percentage:,.1f}',
                // format: '<b>{point.name}</b>: {point.percentage:,.1f} %',
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },
                name: "Isokvant " + Q + " stk. K =" + numberFormat4(aopt) + "L<sup>" + numberFormat4(exponentopt) + "</sup>",
                data: isodata,
            },

            {
                type: "line",
                color: "red",
                // showInLegend: false,
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },
                name: "Isokost: " + numberFormat1(optL * w + optL * r) + " K=" + numberFormat2(isocosta) + "L+" + numberFormat2(isocostb),
                data: [[0, isocostb], [-isocostb / isocosta, 0]],
            },
            {
                type: "line",
                color: "green",
                marker: {
                    enabled: true,
                    symbol: "circle",
                    radius: 3,
                },
                name: "Optimalt input",
                data: [[+optL.toFixed(2), +optK.toFixed(2)]],
            },
            {
                type: "line",
                color: "blue",
                showInLegend: false,
                marker: {
                    enabled: true,
                    symbol: "circle",
                    radius: 3,
                },
                name: "Optimalt input",
                data: [[+optL2.toFixed(2), +optK2.toFixed(2)]],
            },
            {
                type: "line",
                color: "orange",
                showInLegend: false,
                marker: {
                    enabled: true,
                    symbol: "circle",
                    radius: 3,
                },
                name: "Optimalt input",
                data: [[optL3, optK3]],
            },

            {
                type: "line",
                showInLegend: false,
                color: "blue",
                dashStyle: "ShortDot",
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },

                name: "Isokvant " + Q * 2 + " stk. K =" + numberFormat4(aopt2) + "L<sup>" + numberFormat4(exponentopt) + "</sup>",
                data: isodata2,
            },
            {
                type: "line",
                showInLegend: false,
                color: "blue",
                dashStyle: "ShortDot",
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },

                name: "Isokost: " + numberFormat1(optL2 * w + optL2 * r) + " K=" + numberFormat2(isocosta) + "L+" + numberFormat2(isocostb2),
                data: [[0, isocostb2], [-isocostb2 / isocosta, 0]],
            },

            {
                type: "line",
                showInLegend: false,
                color: "darkorange",
                dashStyle: "ShortDot",
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },
                name: "Isokvant " + Q * 3 + " stk. K =" + numberFormat4(aopt3) + "L<sup>" + numberFormat4(exponentopt) + "</sup>",
                data: isodata3,
            },
            {
                type: "line",
                showInLegend: false,
                color: "darkorange",
                dashStyle: "ShortDot",
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },

                name: "Isokost: " + numberFormat1(optL3 * w + optL3 * r) + " K=" + numberFormat2(isocosta) + "L+" + numberFormat2(isocostb3),
                data: [[0, isocostb3], [-isocostb3 / isocosta, 0]],
            },

            {
                type: "line",
                color: "purple",
                // dashStyle: "ShortDot",
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },
                name: "Ekspansionsvejen K=" + numberFormat4(ekspansiona) + "L",
                data: [[0, 0], [+optL * 10, ekspansiona * optL * 10]],
            },
        ],
    };


    // ###########################################################################################################################################################################################################################################
    // ###########################################################################################################################################################################################################################################
    // ###########################################################################################################################################################################################################################################
    // ###########################################################################################################################################################################################################################################
    // ###########################################################################################################################################################################################################################################
    // ###########################################################################################################################################################################################################################################
    // LTCPLOT

    var optionshighcharts2 = {

        title: {



            useHTML: true,
            text: "LTC=" + numberFormat2(aLTC) + "Q<sup>" + numberFormat2(eksponentLTC) + "</sup> LAC=" + numberFormat2(aLAC) + "Q<sup>" + numberFormat2(eksponentLAC) + "</sup> LMC: " +
                numberFormat2(aLMC) + "Q<sup>" + numberFormat2(eksponentLMC) + "</sup> Q= " + numberFormat4(Q) + " stk. Omkostning: " + numberFormat1(cost),

        }
        ,

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
                    useHTML: true,

                    padding: 2,

                    style: {
                        fontSize: "0.6em",
                    },
                },
                labels: [
                    {
                        point: {
                            useHTML: true,
                            xAxis: 0,
                            yAxis: 0,
                            x: Q.toFixed(2),
                            y: cost.toFixed(2),
                        },
                        // formatter: function () {
                        //   return "<b>test</b><sup>" + a + "</sup><br>test";
                        // },
                        text: "LTC K=" + numberFormat4(aLTC) + "Q<sup>" + numberFormat4(eksponentLTC) + "</sup><br>L\u1D52\u1D56\u1D57=" + numberFormat4(optL) + " og K\u1D52\u1D56\u1D57=" + numberFormat4(optK),
                        borderWidth: 1,
                        borderColor: "green",
                        backgroundColor: "green",
                        style: { color: "white" },
                    },





                ],
            },
            {
                labelOptions: {
                    shape: "connector",
                    useHTML: true,
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
        xAxis: {


            title: {
                text: "Produktion i stk. Q",
            },
            gridLineWidth: 1,
            min: 0,
            max: Q * 5,

            // labels: {
            //   format: "{value} L",
            // },
            labels: {
                formatter: function () {
                    return [this.value.toString().replace(/\./g, ',')] + " stk."
                        ;
                }
            },
            // crosshair: true
        },
        // Legend skal være på def for html fungerer 
        legend: {
            enabled: true,
            useHTML: true
        },
        tooltip: {
            useHTML: true,
            valueDecimals: 2,
            formatter: function () {

                return this.series.name + '<br>Produktion Q: ' + numberFormat3(this.x) +
                    " stk.<br>Omkostninger LTC: " + numberFormat1(this.y);
            }
        },

        // Skjuler alle navne
        // legend: {
        //   enabled: false
        // },

        yAxis: {
            title: {
                text: "Totale omkostninger",
            },
            min: 0,
            max: LTCmax,
            // labels: {
            //   format: "{value} K",
            // },
            labels: {
                formatter: function () {
                    return [this.value.toString().replace(/\./g, ',')] + " DKK"
                        ;
                }
            },
            // crosshair: true
        },

        series: [
            {
                // showInLegend: false,
                type: "line",
                color: "green",
                // format: ': {point.percentage:,.1f}',

                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },
                name: "LTC=" + numberFormat2(aLTC) + "Q<sup>" + numberFormat4(ekspansiona),
                data: LTCdata,
            },
            {
                showInLegend: false,
                dashStyle: "ShortDot",
                type: "line",
                color: "green",

                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },
                name: "Q\u1D52\u1D56\u1D57: " + numberFormat2(Q) + " Omkostning\u1D52\u1D56\u1D57: " + numberFormat1(cost) + " stk.",
                data: [[Q, 0], [Q, cost]],
            },
            {
                showInLegend: false,
                dashStyle: "ShortDot",
                type: "line",
                color: "green",
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },
                name: "Q\u1D52\u1D56\u1D57 = " + numberFormat2(Q) + " stk. Omkostning\u1D52\u1D56\u1D57 = " + numberFormat1(cost),
                data: [[0, cost], [Q, cost]],
            },
        ],
    };

    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // LAC and LMC


    var optionshighcharts3 = {

        title: {
            useHTML: true,
            text: "",



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
                    useHTML: true,

                    padding: 2,

                    style: {
                        fontSize: "0.6em",
                    },
                },
                labels: [
                    {
                        point: {
                            useHTML: true,
                            xAxis: 0,
                            yAxis: 0,
                            x: Q.toFixed(2),
                            y: optLAC.toFixed(2),
                        },
                        // formatter: function () {
                        //   return "<b>test</b><sup>" + a + "</sup><br>test";
                        // },
                        text: "LAC\u1D52\u1D56\u1D57" + numberFormat4(aLAC) + "Q<sup>" + numberFormat4(eksponentLTC) + "</sup> L\u1D52\u1D56\u1D57=" + numberFormat4(optL) + " og K\u1D52\u1D56\u1D57=" + numberFormat4(optK),
                        borderWidth: 1,
                        borderColor: "green",
                        backgroundColor: "green",
                        style: { color: "white" },
                    },
                    {
                        point: {
                            useHTML: true,
                            xAxis: 0,
                            yAxis: 0,
                            x: Q.toFixed(2),
                            y: optLMC.toFixed(2),
                        },
                        // formatter: function () {
                        //   return "<b>test</b><sup>" + a + "</sup><br>test";
                        // },
                        text: "LMC\u1D52\u1D56\u1D57" + numberFormat4(aLAC) + "Q<sup>" + numberFormat4(eksponentLTC) + "</sup> L\u1D52\u1D56\u1D57=" + numberFormat4(optL) + " og K\u1D52\u1D56\u1D57=" + numberFormat4(optK),
                        borderWidth: 1,
                        borderColor: "red",
                        backgroundColor: "red",
                        style: { color: "white" },
                    },





                ],
            },
            {
                labelOptions: {
                    shape: "connector",
                    useHTML: true,
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
        xAxis: {


            title: {
                text: "Produktion i stk. Q",
            },
            gridLineWidth: 1,
            min: 0,
            max: Q * 5,

            // labels: {
            //   format: "{value} L",
            // },
            labels: {
                formatter: function () {
                    return [this.value.toString().replace(/\./g, ',')] + " stk."
                        ;
                }
            },
            // crosshair: true
        },
        // Legend skal være på def for html fungerer 
        legend: {
            enabled: true,
            useHTML: true
        },
        tooltip: {
            useHTML: true,
            valueDecimals: 2,
            formatter: function () {

                return this.series.name + '<br>Q: ' + numberFormat3(this.x) +
                    " stk.<br>Enhedsomkostning: " + numberFormat1(this.y);
            }
        },

        // Skjuler alle navne
        // legend: {
        //   enabled: false
        // },

        yAxis: {
            title: {
                text: "Omkostninger pr. stk.",
            },
            min: 0,
            max: LMCLACmax,
            // labels: {
            //   format: "{value} K",
            // },
            labels: {
                formatter: function () {
                    return [this.value.toString().replace(/\./g, ',')] + " DKK"
                        ;
                }
            },
            // crosshair: true
        },

        series: [
            {
                // showInLegend: false,
                type: "line",
                color: "green",
                // format: ': {point.percentage:,.1f}',

                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 4,
                },
                name: "LAC=" + numberFormat2(aLAC) + "Q<sup>" + numberFormat4(eksponentLAC),
                data: LACdata,
            },
            {
                showInLegend: true,
                type: "line",
                color: "red",
                // format: ': {point.percentage:,.1f}',

                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },
                name: "LMC=" + numberFormat2(aLMC) + "Q<sup>" + numberFormat4(eksponentLMC),
                data: LMCdata,
            },
            {
                showInLegend: false,
                dashStyle: "ShortDot",
                type: "line",
                color: "green",

                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },
                name: "Q\u1D52\u1D56\u1D57: " + numberFormat2(Q) + "stk. Omkostning\u1D52\u1D56\u1D57: " + numberFormat1(cost) + " stk.",
                data: [[Q, 0], [Q, LMCLACmax * 2]],
            },
            {
                showInLegend: false,
                dashStyle: "ShortDot",
                type: "line",
                color: "green",
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },
                name: "LAC\u1D52\u1D56\u1D57 = " + numberFormat1(optLAC) + " Q\u1D52\u1D56\u1D57 = " + numberFormat2(Q) + " stk.",
                data: [[0, optLAC], [Q, optLAC]],
            },
            {
                showInLegend: false,
                dashStyle: "ShortDot",
                type: "line",
                color: "green",
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                },
                name: "LMC\u1D52\u1D56\u1D57 = " + numberFormat1(optLAC) + " Q\u1D52\u1D56\u1D57 = " + numberFormat2(Q) + " stk.",
                data: [[0, optLMC], [Q, optLMC]],
            },
        ],
    };
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################










    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    // ################################################################################################################################################################
    return (
        <div>
            <Container>
                <br></br>
                <div class="p-3 mb-2 bg-secondary text-light">
                    <h3>Cobb Douglas Produktionsfunktion</h3>






                </div>
            </Container>

            <Container className="p-0">
                <div class="p-3 mb-2 bg-white text-black">
                    <div class="card">
                        <div class="card-body"></div>

                        <Container>
                            <div class="p-3 mb-2 mt-0 bg-white">
                                <div>
                                    <>
                                        <Form>
                                            <h5>
                                                Produktionsfunktion Q = AK<sup>a</sup>L<sup>b</sup> altså {Q} = {A}K<sup>{numberFormat5(a)}</sup>L<sup>{numberFormat5(b)}</sup>
                                            </h5>
                                            <Row>

                                                <Col>
                                                    <Form.Text className="text-muted">
                                                        Produktionsoutput i stk.
                          </Form.Text>
                                                    <InputGroup size="sm">

                                                        <Form.Control
                                                            type="number"
                                                            step={1}
                                                            precision={0}
                                                            mobile={true}
                                                            value={Q}
                                                            onChange={(e) => setQ(Math.abs(e.target.value))}
                                                            aria-describedby="inputGroupAppend"
                                                            placeholder="0"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text
                                                                inputGroup-sizing-sm
                                                                id="basic-addon2"
                                                            >
                                                                Q
                              </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>

                                                </Col>
                                                <Col>
                                                    <Form.Text className="text-muted">
                                                        A
                          </Form.Text>
                                                    <InputGroup size="sm">
                                                        <Form.Control



                                                            type="number"
                                                            step={1}

                                                            precision={0}
                                                            mobile={true}
                                                            value={A}
                                                            onChange={(e) => setA(Math.abs(e.target.value))}
                                                            aria-describedby="inputGroupAppend"
                                                            placeholder="0" />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text
                                                                inputGroup-sizing-sm
                                                                id="basic-addon2"

                                                            >
                                                                A
                              </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>

                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Text className="text-muted">
                                                        a er produktions elasticitet for kapital K
                          </Form.Text>
                                                    <InputGroup size="sm">
                                                        <Form.Control
                                                            type="number"
                                                            step={0.1}
                                                            precision={0}
                                                            mobile={true}
                                                            value={a}
                                                            onChange={(e) => seta(Math.abs(e.target.value))}
                                                            aria-describedby="inputGroupAppend"
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

                                                </Col>
                                                <Col>
                                                    <Form.Text className="text-muted">
                                                        b er produktions elasticitet for arbejdskraft L
                          </Form.Text>
                                                    <InputGroup size="sm">
                                                        <Form.Control
                                                            type="number"

                                                            step={.1}
                                                            precision={0}
                                                            mobile={true}
                                                            value={b}
                                                            onChange={(e) =>
                                                                setb(Math.abs(e.target.value))
                                                            }
                                                            aria-describedby="inputGroupAppend"
                                                            placeholder="0"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                b
                              </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>

                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Text className="text-muted">
                                                        Pris på en enhed Kapital r
                          </Form.Text>
                                                    <InputGroup size="sm">
                                                        <Form.Control
                                                            type="number"
                                                            step={1}
                                                            precision={0}
                                                            mobile={true}
                                                            value={r}
                                                            onChange={(e) => setr(Math.abs(e.target.value))}
                                                            aria-describedby="inputGroupAppend"
                                                            placeholder="0"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text
                                                                inputGroup-sizing-sm
                                                                id="basic-addon2"
                                                            >
                                                                r
                              </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>

                                                </Col>
                                                <Col>
                                                    <Form.Text className="text-muted">
                                                        Pris på en enhed Labour w
                          </Form.Text>
                                                    <InputGroup size="sm">
                                                        <Form.Control
                                                            type="number"
                                                            step={1}
                                                            precision={0}
                                                            mobile={true}
                                                            value={w}
                                                            onChange={(e) => setw(Math.abs(e.target.value))}
                                                            aria-describedby="inputGroupAppend"
                                                            placeholder="0"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text
                                                                inputGroup-sizing-sm
                                                                id="basic-addon2"
                                                            >
                                                                w
                              </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>

                                                </Col>

                                            </Row>


                                        </Form>
                                    </>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </Container>

            <Container className="p-0">
                <div class="p-3 mb-2 bg-white text-black">
                    <div class="card">
                        <div class="card-body">
                            <HighchartsReact
                                //containerProps={{ style: { height: "200%" } }}
                                highcharts={Highcharts}
                                options={optionshighcharts}

                            />

                        </div>
                    </div>
                </div>
            </Container>

            <Container className="p-0">
                <div class="p-3 mb-2 bg-white text-black">
                    <div class="card">
                        <div class="card-body">
                            <HighchartsReact
                                //containerProps={{ style: { height: "200%" } }}
                                highcharts={Highcharts}
                                options={optionshighcharts2}
                            />
                            <HighchartsReact
                                //containerProps={{ style: { height: "200%" } }}
                                highcharts={Highcharts}
                                options={optionshighcharts3}
                            />
                            {/* <High3d />
              <High3d2 /> */}
                        </div>
                    </div>
                </div>
            </Container>



















            {/* <Container className="p-0">
          <div class="container">
            <table class="table table-bordered table-responsive table-white table-hover table-striped ">
              <small>
                <thead>
                  <span class="align-middle">
                    <tr>
                      <br />

                      <h3>&nbsp;&nbsp;&nbsp;Forklaring på variable</h3>

                      <br />
                    </tr>
                  </span>
                </thead>
                <tbody>
                  <span class="align-top">
                    <tr>
                      <th>DK navn</th>
                      <th>US navn</th>
                      <th>Værdi</th>
                      <th>Forklaring</th>
                    </tr>

                    <tr>
                      <td>P</td>
                      <td>P</td>
                      <td>
                        Selv om du ikke har set din nærmeste familie for nylig, kan du alligevel samles med dem for at holde juleaften. Så længe I ikke er flere end 10 personer samlet.
  
                        Det står klart efter dagens pressemøde, hvor statsminister Mette Frederiksen, sammen med blandt andre sundhedsminister Magnus Heunicke og direktør i Sundhedsstyrelsen Søren Brostrøm udstak nye corona-restriktioner og gav anbefalinger for, hvordan jul og nytår bør forløbe.
  
                        Herunder kan du få et overblik over, hvilke restriktioner og anbefalinger der er for både jul og nytår.
                    </td>
                      <td>
                        Herunder kan du få et overblik over, hvilke restriktioner og anbefalinger der er for både jul og nytår.
                    </td>

                    </tr>
                  </span>
                </tbody>
              </small>
            </table>
          </div>
        </Container> */}
        </div >
    );
}
