import React from "react";
import { useState} from "react";
// import RangeSlider from 'react-bootstrap-range-slider';

// import { Row, Col } from "react-bootstrap";
// import Toggle from "./ToggleRenderProps";
import Form from "react-bootstrap/Form";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
// import {Form}  from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import TooltipTrigger from 'react-popper-tooltip';
// import { usePopper } from 'react-popper';
import "bootstrap/dist/css/bootstrap.min.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./styles.css";
import {
    // numberFormat1,
    numberFormat2,
    numberFormat3,
    numberFormat4,
    // numberFormat5,
    // numberFormat6,
    // numberFormat7,
} from "./lib"; //ændrer til komma og pct + DKK
import Container from "react-bootstrap/Container";
// import ReactHtmlParser from "react-html-parser";
// import { Bar } from "react-chartjs-2";
// import { Doughnut } from "react-chartjs-2";
import DropdownButton from "react-bootstrap/DropdownButton";

import Dropdown from "react-bootstrap/Dropdown";
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/annotations")(Highcharts);
require("highcharts/highcharts-more")(Highcharts);


// import CurrencyInput from 'react-currency-input-field';

// import MathJax from "react-mathjax2";

// import "handsontable/dist/handsontable.full.css";
// import { HotTable } from "@handsontable/react";
// import Handsontable from "handsontable";


  
var solver = require("javascript-lp-solver");






export function LP() {
    var [x1, setx1] = useState(+(20000).toFixed(2));
    var [x2, setx2] = useState(+(30000).toFixed(2));
    var [x3, setx3] = useState(+(0).toFixed(2));
    var [x4, setx4] = useState(+(0).toFixed(2));
    var [x5, setx5] = useState(+(0).toFixed(2));
    var [x6, setx6] = useState(+(0).toFixed(2));
    var [x7, setx7] = useState(+(0).toFixed(2));
    var [x8, setx8] = useState(+(0).toFixed(2));

    var [x11, setx11] = useState(+(1).toFixed(2));
    var [x12, setx12] = useState(+(1).toFixed(2));
    var [x13, setx13] = useState(+(0).toFixed(2));
    var [x14, setx14] = useState(+(0).toFixed(2));
    var [x15, setx15] = useState(+(0).toFixed(2));
    var [x16, setx16] = useState(+(0).toFixed(2));
    var [x17, setx17] = useState(+(0).toFixed(2));
    var [x18, setx18] = useState(+(0).toFixed(2));


    var [x21, setx21] = useState(+(8).toFixed(2));
    var [x22, setx22] = useState(+(16).toFixed(2));
    var [x23, setx23] = useState(+(0).toFixed(2));
    var [x24, setx24] = useState(+(0).toFixed(2));
    var [x25, setx25] = useState(+(0).toFixed(2));
    var [x26, setx26] = useState(+(0).toFixed(2));
    var [x27, setx27] = useState(+(0).toFixed(2));
    var [x28, setx28] = useState(+(0).toFixed(2));


    var [x31, setx31] = useState(+(0).toFixed(2));
    var [x32, setx32] = useState(+(0).toFixed(2));
    var [x33, setx33] = useState(+(0).toFixed(2));
    var [x34, setx34] = useState(+(0).toFixed(2));
    var [x35, setx35] = useState(+(0).toFixed(2));
    var [x36, setx36] = useState(+(0).toFixed(2));
    var [x37, setx37] = useState(+(0).toFixed(2));
    var [x38, setx38] = useState(+(0).toFixed(2));

    var [x41, setx41] = useState(+(0).toFixed(2));
    var [x42, setx42] = useState(+(0).toFixed(2));
    var [x43, setx43] = useState(+(0).toFixed(2));
    var [x44, setx44] = useState(+(0).toFixed(2));
    var [x45, setx45] = useState(+(0).toFixed(2));
    var [x46, setx46] = useState(+(0).toFixed(2));
    var [x47, setx47] = useState(+(0).toFixed(2));
    var [x48, setx48] = useState(+(0).toFixed(2));


    var [x51, setx51] = useState(+(0).toFixed(2));
    var [x52, setx52] = useState(+(0).toFixed(2));
    var [x53, setx53] = useState(+(0).toFixed(2));
    var [x54, setx54] = useState(+(0).toFixed(2));
    var [x55, setx55] = useState(+(0).toFixed(2));
    var [x56, setx56] = useState(+(0).toFixed(2));
    var [x57, setx57] = useState(+(0).toFixed(2));
    var [x58, setx58] = useState(+(0).toFixed(2));

    var [x61, setx61] = useState(+(0).toFixed(2));
    var [x62, setx62] = useState(+(0).toFixed(2));
    var [x63, setx63] = useState(+(0).toFixed(2));
    var [x64, setx64] = useState(+(0).toFixed(2));
    var [x65, setx65] = useState(+(0).toFixed(2));
    var [x66, setx66] = useState(+(0).toFixed(2));
    var [x67, setx67] = useState(+(0).toFixed(2));
    var [x68, setx68] = useState(+(0).toFixed(2));


    var [x71, setx71] = useState(+(0).toFixed(2));
    var [x72, setx72] = useState(+(0).toFixed(2));
    var [x73, setx73] = useState(+(0).toFixed(2));
    var [x74, setx74] = useState(+(0).toFixed(2));
    var [x75, setx75] = useState(+(0).toFixed(2));
    var [x76, setx76] = useState(+(0).toFixed(2));
    var [x77, setx77] = useState(+(0).toFixed(2));
    var [x78, setx78] = useState(+(0).toFixed(2));


    var [x81, setx81] = useState(+(0).toFixed(2));
    var [x82, setx82] = useState(+(0).toFixed(2));
    var [x83, setx83] = useState(+(0).toFixed(2));
    var [x84, setx84] = useState(+(0).toFixed(2));
    var [x85, setx85] = useState(+(0).toFixed(2));
    var [x86, setx86] = useState(+(0).toFixed(2));
    var [x87, setx87] = useState(+(0).toFixed(2));
    var [x88, setx88] = useState(+(0).toFixed(2));


    var [x91, setx91] = useState(+(0).toFixed(2));
    var [x92, setx92] = useState(+(0).toFixed(2));
    var [x93, setx93] = useState(+(0).toFixed(2));
    var [x94, setx94] = useState(+(0).toFixed(2));
    var [x95, setx95] = useState(+(0).toFixed(2));
    var [x96, setx96] = useState(+(0).toFixed(2));
    var [x97, setx97] = useState(+(0).toFixed(2));
    var [x98, setx98] = useState(+(0).toFixed(2));

    var [x101, setx101] = useState(+(0).toFixed(2));
    var [x102, setx102] = useState(+(0).toFixed(2));
    var [x103, setx103] = useState(+(0).toFixed(2));
    var [x104, setx104] = useState(+(0).toFixed(2));
    var [x105, setx105] = useState(+(0).toFixed(2));
    var [x106, setx106] = useState(+(0).toFixed(2));
    var [x107, setx107] = useState(+(0).toFixed(2));
    var [x108, setx108] = useState(+(0).toFixed(2));

    var [variable, setvariable] = useState(+(2));
    var [bib1, setbib1] = useState(["≤"]);

var [bib2, setbib2] = useState(["≤"]);
var [bib3, setbib3] = useState(["≤"]);
var [bib4, setbib4] = useState(["≤"]);
var [bib5, setbib5] = useState(["≤"]);
var [bib6, setbib6] = useState(["≤"]);
var [bib7, setbib7] = useState(["≤"]);
var [bib8, setbib8] = useState(["≤"]);
var [bib9, setbib9] = useState(["≤"]);
var [bib10, setbib10] = useState(["≤"]);
    
    var [bibetingelser, setbibetingelser] = useState(+(2));
    var [problemtype, setproblemtype] = useState("Maksimeringsproblem");

    var [hs1, seths1] = useState(44);
    var [hs2, seths2] = useState(512);
    var [hs3, seths3] = useState(0);
    var [hs4, seths4] = useState(0);
    var [hs5, seths5] = useState(0);
    var [hs6, seths6] = useState(0);
    var [hs7, seths7] = useState(0);
    var [hs8, seths8] = useState(0);
    var [hs9, seths9] = useState(0);
    var [hs10, seths10] = useState(0);
// tjek om vi skal ændre her skal objektværdi sættes ind her
    


    var problemtypeSelect = (e) => {
        setproblemtype(e);
    };
    var opType = "max"
    if (problemtype === "Minimeringsproblem") {
        opType = "min"
    } else {
        opType = "max"
    }

    
    var bib1Select = (e) => {
        setbib1(e);
    };
    var bib1value = "max"
    if (bib1 === "≥") {
        bib1value = "min"
    } else {
        if (bib1 === "=") {
            bib1value = "equal"
        } else {
            bib1value = "max"
        }
    }

    
    var bib2Select = (e) => {
        setbib2(e);
    };
    var bib2value = "max"
    if (bib2 === "≥") {
        bib2value = "min"
    } else {
        if (bib2 === "=") {
            bib2value = "equal"
        } else {
            bib2value = "max"
        }
    }


    
    var bib3Select = (e) => {
        setbib3(e);
    };
    var bib3value = "max"
    if (bib3 === "≥") {
        bib3value = "min"
    } else {
        if (bib3 === "=") {
            bib3value = "equal"
        } else {
            bib3value = "max"
        }
    }

    
    var bib4Select = (e) => {
        setbib4(e);
    };
    var bib4value = "max"
    if (bib4 === "≥") {
        bib4value = "min"
    } else {
        if (bib4 === "=") {
            bib4value = "equal"
        } else {
            bib4value = "max"
        }
    }

    
    var bib5Select = (e) => {
        setbib5(e);
    };
    var bib5value = "max"
    if (bib5 === "≥") {
        bib5value = "min"
    } else {
        if (bib5 === "=") {
            bib5value = "equal"
        } else {
            bib5value = "max"
        }
    }

    
    var bib6Select = (e) => {
        setbib6(e);
    };
    var bib6value = "max"
    if (bib6 === "≥") {
        bib6value = "min"
    } else {
        if (bib6 === "=") {
            bib6value = "equal"
        } else {
            bib6value = "max"
        }
    }

    
    var bib7Select = (e) => {
        setbib7(e);
    };
    var bib7value = "max"
    if (bib7 === "≥") {
        bib7value = "min"
    } else {
        if (bib7 === "=") {
            bib7value = "equal"
        } else {
            bib7value = "max"
        }
    }


    
    var bib8Select = (e) => {
        setbib8(e);
    };
    var bib8value = "max"
    if (bib8 === "≥") {
        bib8value = "min"
    } else {
        if (bib8 === "=") {
            bib8value = "equal"
        } else {
            bib8value = "max"
        }
    }


    
    var bib9Select = (e) => {
        setbib9(e);
    };
    var bib9value = "max"
    if (bib9 === "≥") {
        bib9value = "min"
    } else {
        if (bib9 === "=") {
            bib9value = "equal"
        } else {
            bib9value = "max"
        }
    }


    
    var bib10Select = (e) => {
        setbib10(e);
    };
    var bib10value = "max"
    if (bib10 === "≥") {
        bib10value = "min"
    } else {
        if (bib10 === "=") {
            bib10value = "equal"
        } else {
            bib10value = "max"
        }
    }



    













    // LP ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // var test = JSON.parse("bib1value");

    var LP = {
        "optimize": "obj",
        "opType": opType,
        // "optimize": {
        //     "x1": "max",
        //     "x2": "max",
        //     "x3": "max",
        //     "x4": "max",
        //     "x5": "max",
        //     "x6": "max",
        //     "x7": "max",
        //     "x8": "max"
            
        // },
        constraints:
        {
            "con1": { [bib1value]: hs1 },
            "con2": { [bib2value]: hs2 },
            "con3": { [bib3value]: hs3 },
            "con4": { [bib4value]: hs4 },
            "con5": { [bib5value]: hs5 },
            "con6": { [bib6value]: hs6 },
            "con7": { [bib7value]: hs7 },
            "con8": { [bib8value]: hs8 },
            "con9": { [bib9value]: hs9 },
            "con10":  {[bib10value]: hs10 }
        },
        "variables": {
            "x1": {
                "obj": x1,
                "con1": x11,
                "con2": x21,
                "con3": x31,
                "con4": x41,
                "con5": x51,
                "con6": x61,
                "con7": x71,
                "con8": x81,
                "con9": x91,
                "con10": x101



            },
            "x2": {
                "obj": x2,
                "con1": x12,
                "con2": x22,
                "con3": x32,
                "con4": x42,
                "con5": x52,
                "con6": x62,
                "con7": x72,
                "con8": x82,
                "con9": x92,
                "con10": x102

            },
            "x3": {
                "obj": x3,
                "con1": x13,
                "con2": x23,
                "con3": x33,
                "con4": x43,
                "con5": x53,
                "con6": x63,
                "con7": x73,
                "con8": x83,
                "con9": x93,
                "con10": x103

            },
            "x4": {
                "obj": x4,
                "con1": x14,
                "con2": x24,
                "con3": x34,
                "con4": x44,
                "con5": x54,
                "con6": x64,
                "con7": x74,
                "con8": x84,
                "con9": x94,
                "con10": x104

            },
            "x5": {
                "obj": x5,
                "con1": x15,
                "con2": x25,
                "con3": x35,
                "con4": x45,
                "con5": x55,
                "con6": x65,
                "con7": x75,
                "con8": x85,
                "con9": x95,
                "con10": x105

            },
            "x6": {
                "obj": x6,
                "con1": x16,
                "con2": x26,
                "con3": x36,
                "con4": x46,
                "con5": x56,
                "con6": x66,
                "con7": x76,
                "con8": x86,
                "con9": x96,
                "con10": x106

            },
            "x7": {
                "obj": x7,
                "con1": x17,
                "con2": x27,
                "con3": x37,
                "con4": x47,
                "con5": x57,
                "con6": x67,
                "con7": x77,
                "con8": x87,
                "con9": x97,
                "con10": x107

            },
            "x8": {
                "obj": x8,
                "con1": x18,
                "con2": x28,
                "con3": x38,
                "con4": x48,
                "con5": x58,
                "con6": x68,
                "con7": x78,
                "con8": x88,
                "con9": x98,
                "con10": x108

            }
        },
    }


 // LPDUAL ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################


    var LPDUAL = {
        "optimize": "obj",
        "opType": "min",
        constraints:
        {
            "con1": { min: x1 },
            "con2": { min: x2 },
            "con3": { min: x3 },
            "con4": { min: x4 },
            "con5": { [bib5value]: x5 },
            "con6": { [bib6value]: x6 },
            "con7": { [bib7value]: x7 },
            "con8": { [bib8value]: x8 }
           
        },
        "variables": {
            "x1": {
                "obj": hs1,
                "con1": x11,
                "con2": x12,
                "con3": x13,
                "con4": x14,
                "con5": x15,
                "con6": x16,
                "con7": x17,
                "con8": x18
                

            },
            "x2": {
                "obj": hs2,
                "con1": x21,
                "con2": x22,
                "con3": x23,
                "con4": x24,
                "con5": x25,
                "con6": x26,
                "con7": x27,
                "con8": x28

            },
            "x3": {
                "obj": hs3,
                "con1": x31,
                "con2": x32,
                "con3": x33,
                "con4": x34,
                "con5": x35,
                "con6": x36,
                "con7": x37,
                "con8": x38

            },
            "x4": {
                "obj": hs4,
                "con1": x41,
                "con2": x42,
                "con3": x43,
                "con4": x44,
                "con5": x45,
                "con6": x46,
                "con7": x47,
                "con8": x48

            },
            "x5": {
                "obj": hs5,
                "con1": x51,
                "con2": x52,
                "con3": x53,
                "con4": x54,
                "con5": x55,
                "con6": x56,
                "con7": x57,
                "con8": x58

            },
            "x6": {
                "obj": hs6,
                "con1": x61,
                "con2": x62,
                "con3": x63,
                "con4": x64,
                "con5": x65,
                "con6": x66,
                "con7": x67,
                "con8": x68

            },
            "x7": {
                "obj": hs7,
                "con1": x71,
                "con2": x72,
                "con3": x73,
                "con4": x74,
                "con5": x75,
                "con6": x76,
                "con7": x77,
                "con8": x78

            },
            "x8": {
                "obj": hs8,
                "con1": x81,
                "con2": x82,
                "con3": x83,
                "con4": x84,
                "con5": x85,
                "con6": x86,
                "con7": x87,
                "con8": x88

            },
            "x9": {
                "obj": hs9,
                "con1": x91,
                "con2": x92,
                "con3": x93,
                "con4": x94,
                "con5": x95,
                "con6": x96,
                "con7": x97,
                "con8": x98

            },
            "x10": {
                "obj": hs10,
                "con1": x101,
                "con2": x102,
                "con3": x103,
                "con4": x104,
                "con5": x105,
                "con6": x106,
                "con7": x107,
                "con8": x108

            }
        },
    }



    var LPstring2 = solver.Solve(LP)
    var LPstringDUAL = solver.Solve(LPDUAL)
    var objektværdi = LPstring2.result
    
    var shadow1 = (isNaN(LPstringDUAL.x1)?0:LPstringDUAL.x1)
    var shadow2 = (isNaN(LPstringDUAL.x2)?0:LPstringDUAL.x2)
    var shadow3 = (isNaN(LPstringDUAL.x3)?0:LPstringDUAL.x3)
    var shadow4 = (isNaN(LPstringDUAL.x4)?0:LPstringDUAL.x4)
    var shadow5 = (isNaN(LPstringDUAL.x5)?0:LPstringDUAL.x5)
    var shadow6 = (isNaN(LPstringDUAL.x5)?0:LPstringDUAL.x5)
    var shadow7 = (isNaN(LPstringDUAL.x6)?0:LPstringDUAL.x6)
    var shadow8 = (isNaN(LPstringDUAL.x7)?0:LPstringDUAL.x7)
    var shadow9 = (isNaN(LPstringDUAL.x9)?0:LPstringDUAL.x9)
    var shadow10 = (isNaN(LPstringDUAL.x10)?0:LPstringDUAL.x10)
    
    
     var offer1 = x1-(+x11*shadow1+x21*shadow2+x31*shadow3+x41*shadow4+x51*shadow5+x61*shadow6+x71*shadow7+x81*shadow8+x91*shadow9+x101*shadow10)
     var offer2 = x2-(x12*shadow1+x22*shadow2+x32*shadow3+x42*shadow4+x52*shadow5+x62*shadow6+x72*shadow7+x82*shadow8+x92*shadow9+x102*shadow10 )
     var offer3 = x3-(x13*shadow1+x23*shadow2+x33*shadow3+x43*shadow4+x53*shadow5+x63*shadow6+x73*shadow7+x83*shadow8+x93*shadow9+x103*shadow10 )
     var offer4 = x4-(x14*shadow1+x24*shadow2+x34*shadow3+x44*shadow4+x54*shadow5+x64*shadow6+x74*shadow7+x84*shadow8+x94*shadow9+x104*shadow10 )
     var offer5 = x5-(x15*shadow1+x25*shadow2+x35*shadow3+x45*shadow4+x55*shadow5+x65*shadow6+x75*shadow7+x85*shadow8+x95*shadow9+x105*shadow10 )
     var offer6 = x6-(x16*shadow1+x26*shadow2+x36*shadow3+x46*shadow4+x56*shadow5+x66*shadow6+x76*shadow7+x86*shadow8+x96*shadow9+x106*shadow10 )
     var offer7 = x7-(x17*shadow1+x27*shadow2+x37*shadow3+x47*shadow4+x57*shadow5+x67*shadow6+x77*shadow7+x87*shadow8+x97*shadow9+x107*shadow10 )
     var offer8 = x8-(x18*shadow1+x28*shadow2+x38*shadow3+x48*shadow4+x58*shadow5+x68*shadow6+x78*shadow7+x88*shadow8+x98*shadow9+x108*shadow10 )
      
      
       


      var aobjekt = -x1/x2
      var bobjekt = objektværdi/x2
      
    // var feasible = LPstring2.feasible
    // var bounded = LPstring2.bounded
    var x1opt = (isNaN(LPstring2.x1)?0:LPstring2.x1)
    var x2opt = (isNaN(LPstring2.x2)?0:LPstring2.x2)
    var x3opt = (isNaN(LPstring2.x3)?0:LPstring2.x3)
    var x4opt = (isNaN(LPstring2.x4)?0:LPstring2.x4)
    var x5opt = (isNaN(LPstring2.x5)?0:LPstring2.x5)
    var x6opt = (isNaN(LPstring2.x6)?0:LPstring2.x6)
    var x7opt = (isNaN(LPstring2.x7)?0:LPstring2.x7)
    var x8opt = (isNaN(LPstring2.x8)?0:LPstring2.x8)

    var fx1 = numberFormat4(x1)
    var fx2 = numberFormat4(x2)
    var fx3 = numberFormat4(x3)
    var fx4 = numberFormat4(x4)
    var fx5 = numberFormat4(x5)
    var fx6 = numberFormat4(x6)
    var fx7 = numberFormat4(x7)
    var fx8 = numberFormat4(x8)


    var fhs1 = numberFormat4(hs1)
    var fhs2 = numberFormat4(hs2)
    var fhs3 = numberFormat4(hs3)
    var fhs4 = numberFormat4(hs4)
    var fhs5 = numberFormat4(hs5)
    var fhs6 = numberFormat4(hs6)
    var fhs7 = numberFormat4(hs7)
    var fhs8 = numberFormat4(hs8)
    var fhs9 = numberFormat4(hs9)
    var fhs10 = numberFormat4(hs10)

    var fx11 = numberFormat4(x11)
    var fx12 = numberFormat4(x12)
    var fx13 = numberFormat4(x13)
    var fx14 = numberFormat4(x14)
    var fx15 = numberFormat4(x15)
    var fx16 = numberFormat4(x16)
    var fx17 = numberFormat4(x17)
    var fx18 = numberFormat4(x18)

    var fx21 = numberFormat4(x21)
    var fx22 = numberFormat4(x22)
    var fx23 = numberFormat4(x23)
    var fx24 = numberFormat4(x24)
    var fx25 = numberFormat4(x25)
    var fx26 = numberFormat4(x26)
    var fx27 = numberFormat4(x27)
    var fx28 = numberFormat4(x28)

    var fx31 = numberFormat4(x31)
    var fx32 = numberFormat4(x32)
    var fx33 = numberFormat4(x33)
    var fx34 = numberFormat4(x34)
    var fx35 = numberFormat4(x35)
    var fx36 = numberFormat4(x36)
    var fx37 = numberFormat4(x37)
    var fx38 = numberFormat4(x38)

    var fx41 = numberFormat4(x41)
    var fx42 = numberFormat4(x42)
    var fx43 = numberFormat4(x43)
    var fx44 = numberFormat4(x44)
    var fx45 = numberFormat4(x45)
    var fx46 = numberFormat4(x46)
    var fx47 = numberFormat4(x47)
    var fx48 = numberFormat4(x48)

    var fx51 = numberFormat4(x51)
    var fx52 = numberFormat4(x52)
    var fx53 = numberFormat4(x53)
    var fx54 = numberFormat4(x54)
    var fx55 = numberFormat4(x55)
    var fx56 = numberFormat4(x56)
    var fx57 = numberFormat4(x57)
    var fx58 = numberFormat4(x58)


    var fx61 = numberFormat4(x61)
    var fx62 = numberFormat4(x62)
    var fx63 = numberFormat4(x63)
    var fx64 = numberFormat4(x64)
    var fx65 = numberFormat4(x65)
    var fx66 = numberFormat4(x66)
    var fx67 = numberFormat4(x67)
    var fx68 = numberFormat4(x68)

    var fx71 = numberFormat4(x71)
    var fx72 = numberFormat4(x72)
    var fx73 = numberFormat4(x73)
    var fx74 = numberFormat4(x74)
    var fx75 = numberFormat4(x75)
    var fx76 = numberFormat4(x76)
    var fx77 = numberFormat4(x77)
    var fx78 = numberFormat4(x78)


    var fx81 = numberFormat4(x81)
    var fx82 = numberFormat4(x82)
    var fx83 = numberFormat4(x83)
    var fx84 = numberFormat4(x84)
    var fx85 = numberFormat4(x85)
    var fx86 = numberFormat4(x86)
    var fx87 = numberFormat4(x87)
    var fx88 = numberFormat4(x88)

    var fx91 = numberFormat4(x91)
    var fx92 = numberFormat4(x92)
    var fx93 = numberFormat4(x93)
    var fx94 = numberFormat4(x94)
    var fx95 = numberFormat4(x95)
    var fx96 = numberFormat4(x96)
    var fx97 = numberFormat4(x97)
    var fx98 = numberFormat4(x98)

    var fx101 = numberFormat4(x101)
    var fx102 = numberFormat4(x102)
    var fx103 = numberFormat4(x103)
    var fx104 = numberFormat4(x104)
    var fx105 = numberFormat4(x105)
    var fx106 = numberFormat4(x106)
    var fx107 = numberFormat4(x107)
    var fx108 = numberFormat4(x108)

    var chs1 = (x11*(isNaN(LPstring2.x1)?0:(LPstring2.x1))
    +x12*(isNaN(LPstring2.x2)?0:(LPstring2.x2))
    +x13*(isNaN(LPstring2.x3)?0:(LPstring2.x3))
    +x14*(isNaN(LPstring2.x4)?0:(LPstring2.x4))
    +x15*(isNaN(LPstring2.x5)?0:(LPstring2.x5))
    +x16*(isNaN(LPstring2.x6)?0:(LPstring2.x6))
    +x17*(isNaN(LPstring2.x7)?0:(LPstring2.x7))
    +x18*(isNaN(LPstring2.x8)?0:(LPstring2.x8))
    )

    var chs2 = (x21*(isNaN(LPstring2.x1)?0:(LPstring2.x1))
    +x22*(isNaN(LPstring2.x2)?0:(LPstring2.x2))
    +x23*(isNaN(LPstring2.x3)?0:(LPstring2.x3))
    +x24*(isNaN(LPstring2.x4)?0:(LPstring2.x4))
    +x25*(isNaN(LPstring2.x5)?0:(LPstring2.x5))
    +x26*(isNaN(LPstring2.x6)?0:(LPstring2.x6))
    +x27*(isNaN(LPstring2.x7)?0:(LPstring2.x7))
    +x28*(isNaN(LPstring2.x8)?0:(LPstring2.x8))
    )

    var chs3 = (+x31*(isNaN(LPstring2.x1)?0:(LPstring2.x1))
    +x32*(isNaN(LPstring2.x2)?0:(LPstring2.x2))
    +x33*(isNaN(LPstring2.x3)?0:(LPstring2.x3))
    +x34*(isNaN(LPstring2.x4)?0:(LPstring2.x4))
    +x35*(isNaN(LPstring2.x5)?0:(LPstring2.x5))
    +x36*(isNaN(LPstring2.x6)?0:(LPstring2.x6))
    +x37*(isNaN(LPstring2.x7)?0:(LPstring2.x7))
    +x38*(isNaN(LPstring2.x8)?0:(LPstring2.x8))
    )

    var chs4 = (x41*(isNaN(LPstring2.x1)?0:(LPstring2.x1))
    +x42*(isNaN(LPstring2.x2)?0:(LPstring2.x2))
    +x43*(isNaN(LPstring2.x3)?0:(LPstring2.x3))
    +x44*(isNaN(LPstring2.x4)?0:(LPstring2.x4))
    +x45*(isNaN(LPstring2.x5)?0:(LPstring2.x5))
    +x46*(isNaN(LPstring2.x6)?0:(LPstring2.x6))
    +x47*(isNaN(LPstring2.x7)?0:(LPstring2.x7))
    +x48*(isNaN(LPstring2.x8)?0:(LPstring2.x8))
    )

    var chs5 = (x51*(isNaN(LPstring2.x1)?0:(LPstring2.x1))
    +x52*(isNaN(LPstring2.x2)?0:(LPstring2.x2))
    +x53*(isNaN(LPstring2.x3)?0:(LPstring2.x3))
    +x54*(isNaN(LPstring2.x4)?0:(LPstring2.x4))
    +x55*(isNaN(LPstring2.x5)?0:(LPstring2.x5))
    +x56*(isNaN(LPstring2.x6)?0:(LPstring2.x6))
    +x57*(isNaN(LPstring2.x7)?0:(LPstring2.x7))
    +x58*(isNaN(LPstring2.x8)?0:(LPstring2.x8))
    )

    var chs6 = (x61*(isNaN(LPstring2.x1)?0:(LPstring2.x1))
    +x62*(isNaN(LPstring2.x2)?0:(LPstring2.x2))
    +x63*(isNaN(LPstring2.x3)?0:(LPstring2.x3))
    +x64*(isNaN(LPstring2.x4)?0:(LPstring2.x4))
    +x65*(isNaN(LPstring2.x5)?0:(LPstring2.x5))
    +x66*(isNaN(LPstring2.x6)?0:(LPstring2.x6))
    +x67*(isNaN(LPstring2.x7)?0:(LPstring2.x7))
    +x68*(isNaN(LPstring2.x8)?0:(LPstring2.x8))
    )

    var chs7 = (x71*(isNaN(LPstring2.x1)?0:(LPstring2.x1))
    +x72*(isNaN(LPstring2.x2)?0:(LPstring2.x2))
    +x73*(isNaN(LPstring2.x3)?0:(LPstring2.x3))
    +x74*(isNaN(LPstring2.x4)?0:(LPstring2.x4))
    +x75*(isNaN(LPstring2.x5)?0:(LPstring2.x5))
    +x76*(isNaN(LPstring2.x6)?0:(LPstring2.x6))
    +x77*(isNaN(LPstring2.x7)?0:(LPstring2.x7))
    +x78*(isNaN(LPstring2.x8)?0:(LPstring2.x8))
    )

    var chs8 = (x61*(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1))
    +x82*(isNaN(LPstring2.x2)?0:(LPstring2.x2))
    +x83*(isNaN(LPstring2.x3)?0:(LPstring2.x3))
    +x84*(isNaN(LPstring2.x4)?0:(LPstring2.x4))
    +x85*(isNaN(LPstring2.x5)?0:(LPstring2.x5))
    +x86*(isNaN(LPstring2.x6)?0:(LPstring2.x6))
    +x87*(isNaN(LPstring2.x7)?0:(LPstring2.x7))
    +x88*(isNaN(LPstring2.x8)?0:(LPstring2.x8))
    )

    var chs9 = (x91*(isNaN(LPstring2.x1)?0:(LPstring2.x1))
    +x92*(isNaN(LPstring2.x2)?0:(LPstring2.x2))
    +x93*(isNaN(LPstring2.x3)?0:(LPstring2.x3))
    +x94*(isNaN(LPstring2.x4)?0:(LPstring2.x4))
    +x95*(isNaN(LPstring2.x5)?0:(LPstring2.x5))
    +x96*(isNaN(LPstring2.x6)?0:(LPstring2.x6))
    +x97*(isNaN(LPstring2.x7)?0:(LPstring2.x7))
    +x98*(isNaN(LPstring2.x8)?0:(LPstring2.x8))
    )

    var chs10 = (x101*(isNaN(LPstring2.x1)?0:(LPstring2.x1))
    +x102*(isNaN(LPstring2.x2)?0:(LPstring2.x2))
    +x103*(isNaN(LPstring2.x3)?0:(LPstring2.x3))
    +x104*(isNaN(LPstring2.x4)?0:(LPstring2.x4))
    +x105*(isNaN(LPstring2.x5)?0:(LPstring2.x5))
    +x106*(isNaN(LPstring2.x6)?0:(LPstring2.x6))
    +x107*(isNaN(LPstring2.x7)?0:(LPstring2.x7))
    +x108*(isNaN(LPstring2.x8)?0:(LPstring2.x8))
    )






    var objektfunktion = fx1 + "X\u2081 + " + fx2 + "X\u2082 "
        + (variable > 2 ? " + " + fx3 + "X\u2083" : '')
        + (variable > 3 ? " + " + fx4 + "X\u2084" : '')
        + (variable > 4 ? " + " + fx5 + "X\u2085" : '')
        + (variable > 5 ? " + " + fx6 + "X\u2086" : '')
        + (variable > 6 ? " + " + fx7 + "X\u2087" : '')
        + (variable > 7 ? " + " + fx8 + "X\u2088" : '')


    var bibet1 = (fx11) + "X\u2081 + " + (fx12) + "X\u2082 "
        + (variable > 2 ? " + " + (fx13) + "X\u2083" : '')
        + (variable > 3 ? " + " + (fx14) + "X\u2084" : '')
        + (variable > 4 ? " + " + (fx15) + "X\u2085" : '')
        + (variable > 5 ? " + " + (fx16) + "X\u2086" : '')
        + (variable > 6 ? " + " + (fx17) + "X\u2087" : '')
        + (variable > 7 ? " + " + (fx18) + "X\u2088" : '')
        + " " + bib1 + " " + (fhs1)


    var bibet2 = (fx21) + "X\u2081 + " + (fx22) + "X\u2082 "
        + (variable > 2 ? " + " + (fx23) + "X\u2083" : '')
        + (variable > 3 ? " + " + (fx24) + "X\u2084" : '')
        + (variable > 4 ? " + " + (fx25) + "X\u2085" : '')
        + (variable > 5 ? " + " + (fx26) + "X\u2086" : '')
        + (variable > 6 ? " + " + (fx27) + "X\u2087" : '')
        + (variable > 7 ? " + " + (fx28) + "X\u2088" : '')
        + " " + bib2 + " " + (hs2)

    var bibet3 = (fx31) + "X\u2081 + " + (fx32) + "X\u2082 "
        + (variable > 2 ? " + " + (fx33) + "X\u2083" : '')
        + (variable > 3 ? " + " + (fx34) + "X\u2084" : '')
        + (variable > 4 ? " + " + (fx35) + "X\u2085" : '')
        + (variable > 5 ? " + " + (fx36) + "X\u2086" : '')
        + (variable > 6 ? " + " + (fx37) + "X\u2087" : '')
        + (variable > 7 ? " + " + (fx38) + "X\u2088" : '')
        + " " + bib3 + " " + (hs3)


    var bibet4 = (fx41) + "X\u2081 + " + (fx42) + "X\u2082 "
        + (variable > 2 ? " + " + (fx43) + "X\u2083" : '')
        + (variable > 3 ? " + " + (fx44) + "X\u2084" : '')
        + (variable > 4 ? " + " + (fx45) + "X\u2085" : '')
        + (variable > 5 ? " + " + (fx46) + "X\u2086" : '')
        + (variable > 6 ? " + " + (fx47) + "X\u2087" : '')
        + (variable > 7 ? " + " + (fx48) + "X\u2088" : '')
        + " " + bib4 + " " + (hs4)


    var bibet5 = (fx51) + "X\u2081 + " + (fx52) + "X\u2082 "
        + (variable > 2 ? " + " + (fx53) + "X\u2083" : '')
        + (variable > 3 ? " + " + (fx54) + "X\u2084" : '')
        + (variable > 4 ? " + " + (fx55) + "X\u2085" : '')
        + (variable > 5 ? " + " + (fx56) + "X\u2086" : '')
        + (variable > 6 ? " + " + (fx57) + "X\u2087" : '')
        + (variable > 7 ? " + " + (fx58) + "X\u2088" : '')
        + " " + bib5 + " " + (hs5)

    var bibet6 = (fx61) + "X\u2081 + " + (fx62) + "X\u2082 "
        + (variable > 2 ? " + " + (fx63) + "X\u2083" : '')
        + (variable > 3 ? " + " + (fx64) + "X\u2084" : '')
        + (variable > 4 ? " + " + (fx65) + "X\u2085" : '')
        + (variable > 5 ? " + " + (fx66) + "X\u2086" : '')
        + (variable > 6 ? " + " + (fx67) + "X\u2087" : '')
        + (variable > 7 ? " + " + (fx68) + "X\u2088" : '')
        + " " + bib6 + " " + (hs6)


    var bibet7 = (fx71) + "X\u2081 + " + (fx72) + "X\u2082 "
        + (variable > 2 ? " + " + (fx73) + "X\u2083" : '')
        + (variable > 3 ? " + " + (fx74) + "X\u2084" : '')
        + (variable > 4 ? " + " + (fx75) + "X\u2085" : '')
        + (variable > 5 ? " + " + (fx76) + "X\u2086" : '')
        + (variable > 6 ? " + " + (fx77) + "X\u2087" : '')
        + (variable > 7 ? " + " + (fx78) + "X\u2088" : '')
        + " " + bib7 + " " + (hs7)


    var bibet8 = (fx81) + "X\u2081 + " + (fx82) + "X\u2082 "
        + (variable > 2 ? " + " + (fx83) + "X\u2083" : '')
        + (variable > 3 ? " + " + (fx84) + "X\u2084" : '')
        + (variable > 4 ? " + " + (fx85) + "X\u2085" : '')
        + (variable > 5 ? " + " + (fx86) + "X\u2086" : '')
        + (variable > 6 ? " + " + (fx87) + "X\u2087" : '')
        + (variable > 7 ? " + " + (fx88) + "X\u2088" : '')
        + " " + bib8 + " " + (hs8)


    var bibet9 = (fx91) + "X\u2081 + " + (fx92) + "X\u2082 "
        + (variable > 2 ? " + " + (fx93) + "X\u2083" : '')
        + (variable > 3 ? " + " + (fx94) + "X\u2084" : '')
        + (variable > 4 ? " + " + (fx95) + "X\u2085" : '')
        + (variable > 5 ? " + " + (fx96) + "X\u2086" : '')
        + (variable > 6 ? " + " + (fx97) + "X\u2087" : '')
        + (variable > 7 ? " + " + (fx98) + "X\u2088" : '')
        + " " + bib9 + " " + (fhs9)


    var bibet10 = (fx101) + "X\u2081 + " + (fx102) + "X\u2082 "
        + (variable > 2 ? " + " + (fx103) + "X\u2083" : '')
        + (variable > 3 ? " + " + (fx104) + "X\u2084" : '')
        + (variable > 4 ? " + " + (fx105) + "X\u2085" : '')
        + (variable > 5 ? " + " + (fx106) + "X\u2086" : '')
        + (variable > 6 ? " + " + (fx107) + "X\u2087" : '')
        + (variable > 7 ? " + " + (fx108) + "X\u2088" : '')
        + " " + bib10 + " " + (fhs10)


        

    var xmin=    Math.min( 
            isNaN(-(hs1 / x12) / (-x11 / x12))?0: -(hs1 / x12) / (-x11 / x12),
            isNaN(-(hs2 / x22) / (-x21 / x22))?0: -(hs2 / x22) / (-x21 / x22),
            isNaN(-(hs3 / x32) / (-x31 / x32))?0: -(hs3 / x32) / (-x31 / x32),
            isNaN(-(hs4 / x42) / (-x41 / x42))?0: -(hs4 / x42) / (-x41 / x42),
            isNaN(-(hs5 / x52) / (-x51 / x52))?0: -(hs5 / x52) / (-x51 / x52), 
            isNaN(-(hs6 / x62) / (-x61 / x62))?0: -(hs6 / x62) / (-x61 / x62),
            isNaN(-(hs7 / x72) / (-x71 / x72))?0: -(hs7 / x72) / (-x71 / x72), 
            isNaN(-(hs8 / x82) / (-x81 / x82))?0: -(hs8 / x82) / (-x81 / x82),
            isNaN(-(hs9 / x92) / (-x91 / x92))?0: -(hs9 / x92) / (-x91 / x92), 
            isNaN(-(hs10 / x102) / (-x101 / x102))?0: -(hs10 / x102) / (-x101 / x102),
            0
            )

            xmin = (xmin===-Infinity || xmin===Infinity)?xmin:Math.min(x1opt*.01,0)

            var xmax =Math.max(
                isNaN(-(hs1 / x12) / (-x11 / x12))?0: -(hs1 / x12) / (-x11 / x12),
                isNaN(-(hs2 / x22) / (-x21 / x22))?0: -(hs2 / x22) / (-x21 / x22),
                isNaN(-(hs3 / x32) / (-x31 / x32))?0: -(hs3 / x32) / (-x31 / x32),
                isNaN(-(hs4 / x42) / (-x41 / x42))?0: -(hs4 / x42) / (-x41 / x42),
                isNaN(-(hs5 / x52) / (-x51 / x52))?0: -(hs5 / x52) / (-x51 / x52), 
                isNaN(-(hs6 / x62) / (-x61 / x62))?0: -(hs6 / x62) / (-x61 / x62),
                isNaN(-(hs7 / x72) / (-x71 / x72))?0: -(hs7 / x72) / (-x71 / x72), 
                isNaN(-(hs8 / x82) / (-x81 / x82))?0: -(hs8 / x82) / (-x81 / x82),
                isNaN(-(hs9 / x92) / (-x91 / x92))?0: -(hs9 / x92) / (-x91 / x92), 
                isNaN(-(hs10 / x102) / (-x101 / x102))?0: -(hs10 / x102) / (-x101 / x102),
                0,
                )
                xmax = (xmax===-Infinity || xmax===Infinity)?x1opt*5:xmax

            var ymin = Math.min(
                isNaN(hs1 / x12) ? 0 : hs1 / x12, 
                isNaN(hs2 / x22) ? 0 : hs2 / x22,
                isNaN(hs3 / x32) ? 0 : hs3 / x32,
                isNaN(hs4 / x42) ? 0 : hs4 / x42,
                isNaN(hs5 / x52) ? 0 : hs5 / x52,
                isNaN(hs6 / x62) ? 0 : hs6 / x62,
                isNaN(hs7 / x72) ? 0 : hs7 / x72, 
                isNaN(hs8 / x82) ? 0 : hs8 / x82,
                isNaN(hs9 / x92) ? 0 : hs9 / x92, 
                isNaN(hs10 / x102) ? 0 : hs10 / x102,
             0
             )
             ymin = (ymin===-Infinity || ymin===Infinity)?ymin:Math.min(x2opt*.01,0)

             var ymax = Math.max(
                isNaN(hs1 / x12) ? 0 : hs1 / x12, 
                isNaN(hs2 / x22) ? 0 : hs2 / x22,
                isNaN(hs3 / x32) ? 0 : hs3 / x32,
                isNaN(hs4 / x42) ? 0 : hs4 / x42,
                isNaN(hs5 / x52) ? 0 : hs5 / x52,
                isNaN(hs6 / x62) ? 0 : hs6 / x62,
                isNaN(hs7 / x72) ? 0 : hs7 / x72, 
                isNaN(hs8/ x82) ? 0 : hs8 / x82,
                isNaN(hs9 / x92) ? 0 : hs9 / x92, 
                isNaN(hs10 / x102) ? 0 : hs10 / x102,
             0
             )
             ymax = (ymax===-Infinity || ymax===Infinity)?x1opt*5:ymax

    var optionshighcharts = {

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
                            x: x1opt,
                            y: x2opt,
                        },
                        text: "X\u2081:" + numberFormat4(x1opt) + " stk. X\u2082:" + numberFormat4(x2opt)+ " stk.<br/> Objektværdi:"+numberFormat4(objektværdi),
                        borderWidth: 1,
                        borderColor: "black",
                        backgroundColor: "black",
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
                text: "X\u2081 antal enheder",
            },
            gridLineWidth: 1,
            // Y=hs1/x12 -x11/+x12X

            min: xmin,
            max: xmax,
            
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

                return this.series.name + '<br>X\u2081: ' + numberFormat3(this.x) +
                    " stk.<br>X\u2082 " + numberFormat3(this.y) + " stk.";
            }
        },

        // Skjuler alle navne
        // legend: {
        //   enabled: false
        // },

        yAxis: {
            title: {
                text: "X\u2082 antal enheder",
            },
            min: ymin,
            max: ymax,
            // labels: {
            //   format: "{value} K",
            // },
            labels: {
                formatter: function () {
                    return [this.value.toString().replace(/\./g, ',')] + " stk."
                        ;
                }
            },
            // crosshair: true
        },

        series: [
            
            {
                // showInLegend: false,
                type: "line",
                color: "black",
                // dashStyle: "ShortDot",
                
                

                marker: {
                    enabled: true,
                    symbol: "circle",
                    radius: 2,
                },
                name: "Objektfunktionen: X\u2082 = " + numberFormat2(aobjekt) + "X\u2081 + " + numberFormat4(bobjekt),
                data: [
                    [0, bobjekt],
                    [x1opt,x2opt],
                    [-bobjekt/aobjekt, 0],
                ],
                draggable: true,
                draggableSeries: true,
                dragMin: -100   
            },
            {
                showInLegend: false,
                type: "line",
                color: "black",
                // dashStyle: "ShortDot",   

                marker: {
                    enabled: true,
                    symbol: "circle",
                    radius: 4,
                },
                // name: "Optimal kombination X\u2081: = " + numberFormat2(x1opt) + "X\u2082 + " + numberFormat4(x2opt),
                data: [
                    [x1opt,x2opt],                    
                ],
                enableMouseTracking: false
            },


            {
                // showInLegend: false,
                type: "line",
                color: "red",
                dashStyle: "ShortDot",
                // format: ': {point.percentage:,.1f}',

                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 4,
                },
                name: "Bibetingelse\u2081: X\u2082 = " + numberFormat2(-x11 / x12) + "X\u2081 + " + numberFormat4(hs1 / x12),
                data: [
                    [0, hs1 / x12],
                    [-(hs1 / x12) / (-x11 / x12), 0],
                ],
            },
            {
                // showInLegend: false,
                type: "line",
                color: "green",
                dashStyle: "ShortDot",
                
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 4,
                },
                name: "Bibetingelse\u2082: X\u2082 = " + numberFormat2(-x21 / x22) + "X\u2081 + " + numberFormat4(hs2 / x22),
                data: [
                    [0, hs2 / x22],
                    [-(hs2 / x22) / (-x21 / x22), 0],
                ],
            },




        ],
    };





    if (bibetingelser > 2) {
        optionshighcharts.series.push({
            type: "line",
            color: "blue",
            dashStyle: "ShortDot",
            // format: ': {point.percentage:,.1f}',
            marker: {
                enabled: false,
                symbol: "circle",
                radius: 4,
            },
            name: "Bibetingelse\u2083: X\u2082 = " + numberFormat2(-x31 / x32) + "X\u2081 + " + numberFormat4(hs3 / x32),
            data: [
                [0, hs3 / x32],
                [-(hs3 / x32) / (-x31 / x32), 0],
            ],
        });
    }

    if (bibetingelser > 3) {
        optionshighcharts.series.push({
            visible: true,
            // showInLegend: false,
            type: "line",
            color: "orange",
            dashStyle: "ShortDot",
            // format: ': {point.percentage:,.1f}',
            marker: {
                enabled: false,
                symbol: "circle",
                radius: 4,
            },
            name: "Bibetingelse\u2084: X\u2082 = " + numberFormat2(-x41 / x42) + "X\u2081 + " + numberFormat4(hs4 / x42),
            data: [
                [0, hs4 / x42],
                [-(hs4 / x42) / (-x41 / x42), 0],
            ],
        });
    }

    if (bibetingelser > 4) {
        optionshighcharts.series.push({
            visible: true,
            type: "line",
            color: "pink",
            dashStyle: "ShortDot",
            marker: {
                enabled: false,
                symbol: "circle",
                radius: 4,
            },
            name: "Bibetingelse\u2085: X\u2082 = " + numberFormat2(-x51 / x52) + "X\u2081 + " + numberFormat4(hs5 / x52),
            data: [
                [0, hs5 / x52],
                [-(hs5 / x52) / (-x51 / x52), 0],
            ],
        });
    }

    if (bibetingelser > 5) {
        optionshighcharts.series.push({
            visible: true,
            type: "line",
            color: "grey",
            dashStyle: "ShortDot",
            marker: {
                enabled: false,
                symbol: "circle",
                radius: 4,
            },
            name: "Bibetingelse\u2086: X\u2082 = " + numberFormat2(-x61 / x62) + "X\u2081 + " + numberFormat4(hs6 / x62),
            data: [
                [0, hs6 / x62],
                [-(hs6 / x62) / (-x61 / x62), 0],
            ],
        });
    }

    if (bibetingelser > 6) {
        optionshighcharts.series.push({
            visible: true,
            type: "line",
            color: "grey",
            dashStyle: "ShortDot",
            marker: {
                enabled: false,
                symbol: "circle",
                radius: 4,
            },
            name: "Bibetingelse\u2087: X\u2082 = " + numberFormat2(-x71 / x72) + "X\u2081 + " + numberFormat4(hs7 / x72),
            data: [
                [0, hs7 / x72],
                [-(hs7 / x72) / (-x71 / x72), 0],
            ],
        });
    }

    if (bibetingelser > 7) {
        optionshighcharts.series.push({
            visible: true,
            type: "line",
            color: "grey",
            dashStyle: "ShortDot",
            marker: {
                enabled: false,
                symbol: "circle",
                radius: 4,
            },
            name: "Bibetingelse\u2088: X\u2082 = " + numberFormat2(-x81 / x82) + "X\u2081 + " + numberFormat4(hs8 / x82),
            data: [
                [0, hs8 / x82],
                [-(hs8 / x82) / (-x81 / x82), 0],
            ],
        });
    }


    if (bibetingelser > 8) {
        optionshighcharts.series.push({
            visible: true,
            type: "line",
            color: "grey",
            dashStyle: "ShortDot",
            marker: {
                enabled: false,
                symbol: "circle",
                radius: 4,
            },
            name: "Bibetingelse\u2089: X\u2082 = " + numberFormat2(-x91 / x92) + "X\u2081 + " + numberFormat4(hs9 / x92),
            data: [
                [0, hs9 / x92],
                [-(hs9 / x92) / (-x91 / x92), 0],
            ],
        });
    }

    if (bibetingelser > 9) {
        optionshighcharts.series.push({
            visible: true,
            type: "line",
            color: "grey",
            dashStyle: "ShortDot",
            marker: {
                enabled: false,
                symbol: "circle",
                radius: 4,
            },
            name: "Bibetingelse\u2081\u2080: X\u2082 = " + numberFormat2(-x101 / x102) + "X\u2081 + " + numberFormat4(hs10 / x102),
            data: [
                [0, hs10 / x102],
                [-(hs10 / x102) / (-x101 / x102), 0],
            ],
        });
    }

    




    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################




    // var model = {
    //     "optimize": "capacity",
    //     "opType": "max",
    //     "constraints": {
    //         "plane": {"max": 44},
    //         "person": {"max": 512},
    //         "cost": {"max": 300000}
    //     },
    //     "variables": {
    //         "brit": {
    //             "capacity": 20000,
    //             "plane": 1,
    //             "person": 8,
    //             "cost": 5000
    //         },
    //         "yank": {
    //             "capacity": 30000,
    //             "plane": 1,
    //             "person": 16,
    //             "cost": 9000
    //         }
    //     },
    // };

    var model = {
        "optimize": "db",
        "opType": "max",
        "constraints": {
            "denim": {"max": 2500},
            "tilskæring": {"max": 36},
            "syning": {"max": 36},
            "pakning": {"max": 8}

        },
        "variables": {
            "herrejakke": {
                "db": 2000,
                "denim": 150,
            "tilskæring": 3,
            "syning": 4,
            "pakning": 0.75
            },
            "damejakke": {
                "db": 2800,
                "denim": 125,
            "tilskæring": 4,
            "syning": 3,
            "pakning": 0.75
            },
            "herrebuks": {
                "db": 1200,
                "denim": 200,
            "tilskæring": 2,
            "syning": 2,
            "pakning": 0.5
            },
            "damebuks": {
                "db": 1500,
                "denim": 150,
            "tilskæring": 2,
            "syning": 2.5,
            "pakning": 0.5
            }
        },
    };
    
    var results = solver.Solve(model,0.000001, true);
    // console.log(results.Tableau.matrix);
    console.log(results);
    // console.log(solver.Solve(LPDUAL));
    






    return (
        <div>
            <Container>
                <div class="p-3 mb-2 bg-secondary text-white">
                    <h4>LP</h4>
                    {/* <OverlayTrigger
                        overlay={
                            <Tooltip>
                                Hvorledes Tooltip demo bestemmes ligningen 
                    </Tooltip>
                        }
                    >
                    <span class="fake-link" id="fake-link-1">
                        &nbsp;Her er tooltip,&nbsp;</span>
                    </OverlayTrigger>vi kan skrive tekst efterfølgende.                     */}
                </div>
            </Container>




            











            <Container className="p-0">
                <div class="row p-3">
                    <div class="col-md-12 p-3 ">
                        <div class="card h-100">
                            <div class="card-body">
                                <Container className="p-3">
                                    <div class="p-3 mb-2 bg-white">
                                        <Form.Group>
                                        
          
        
      
        

                                            <InputGroup size="sm">
                                                <DropdownButton
                                                    alignleft
                                                    variant="warning"
                                                    title={problemtype}
                                                    id="type"
                                                    size="sm"
                                                    // id="dropdown-split-basic"
                                                    onSelect={problemtypeSelect}
                                                >

                                                    <Dropdown.Item eventKey="Maksimeringsproblem">
                                                        Vælg Maksimeringsproblem
                                                        </Dropdown.Item>
                                                    <Dropdown.Item eventKey="Minimeringsproblem">
                                                        Vælg Minimeringsproblem
                                                        </Dropdown.Item>
                                                </DropdownButton>
                                                
                                                <InputGroup> <br></br></InputGroup>
                                                
                                                    <OverlayTrigger
                                                        placement="right"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                {problemtype} med {variable} variable.
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Form.Control
                                                            aria-describedby="inputGroup-sizing-sm"
                                                            type="number"
                                                            min="2"
                                                            max="8"
                                                            value={variable}
                                                            onChange={(e) =>
                                                                setvariable(+e.target.value.replace(/\D/, ""))
                                                            }
                                                        />

                                                    </OverlayTrigger>
                                                    <InputGroup.Append >
                                                        <InputGroup.Text id="inputGroupAppend">
                                                            Variable
                                                         </InputGroup.Text>
                                                    </InputGroup.Append>






                                                    <OverlayTrigger
                                                        placement="right"
                                                        delay={{ show: 100, hide: 100 }}
                                                        overlay={
                                                            <Tooltip>
                                                                {problemtype} med {bibetingelser} bibetingelser.
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Form.Control
                                                            id="x1"
                                                            type="number"
                                                            min="2"
                                                            max="10"
                                                            value={bibetingelser}
                                                            onChange={(e) =>
                                                                setbibetingelser(+e.target.value.replace(/\D/, ""))
                                                            }
                                                            aria-describedby="inputGroupAppend"
                                                            placeholder="0"
                                                        />
                                                    </OverlayTrigger>
                                                    <InputGroup.Append >
                                                        <InputGroup.Text id="inputGroupAppend">
                                                            Bibetingelser
                                                         </InputGroup.Text>
                                                    </InputGroup.Append>



                                            </InputGroup>
                                        </Form.Group>


                                                <Form.Group >
                                                    {problemtype === "Maksimeringsproblem" && "Maksimer "}{problemtype === "Minimeringsproblem" && "Minimer "}objektfunktionen Z
                                            <InputGroup size="sm">

                                                        <OverlayTrigger
                                                            placement="right"
                                                            delay={{ show: 100, hide: 100 }}
                                                            overlay={
                                                                <Tooltip>
                                                                    Faktoren for  X<sub><sub>1</sub></sub> = {x1} i objektfunktionen Z = {objektfunktion}
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Form.Control
                                                                size="sm"
                                                                type="number"
                                                                value={x1}
                                                                onChange={(e) => setx1(+e.target.value)}
                                                                aria-describedby="inputGroupAppend"
                                                                placeholder="0"
                                                            >
                                                            </Form.Control>

                                                        </OverlayTrigger>





                                                        <OverlayTrigger
                                                            placement="right"
                                                            delay={{ show: 100, hide: 100 }}
                                                            overlay={
                                                                <Tooltip>
                                                                    Faktoren for  X<sub><sub>2</sub></sub> = {x2} i objektfunktionen Z = {objektfunktion}
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Form.Control
                                                                size="sm"
                                                                type="number"
                                                                value={x2}
                                                                onChange={(e) => setx2(+e.target.value)}
                                                                aria-describedby="inputGroupAppend"
                                                                placeholder="0"
                                                            >
                                                            </Form.Control>

                                                        </OverlayTrigger>



                                                        {variable > 2 &&
                                                            <>
                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>3</sub></sub> = {x3} i objektfunktionen Z = {objektfunktion}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x3}
                                                                        onChange={(e) => setx3(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>



                                                            </>
                                                        }
                                                        {variable > 3 &&

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>4</sub></sub> = {x4} i objektfunktionen Z = {objektfunktion}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x4}
                                                                    onChange={(e) => setx4(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>




                                                        }
                                                        {variable > 4 &&

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>5</sub></sub> = {x5} i objektfunktionen Z = {objektfunktion}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x5}
                                                                    onChange={(e) => setx5(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>


                                                        }
                                                        {variable > 5 &&
                                                            <>
                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>6</sub></sub> = {x6} i objektfunktionen Z = {objektfunktion}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x6}
                                                                        onChange={(e) => setx6(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>


                                                            </>}

                                                        {variable > 6 &&

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>7</sub></sub> = {x7} i objektfunktionen Z = {objektfunktion}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x7}
                                                                    onChange={(e) => setx7(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>
                                                        }
                                                        {variable > 7 &&

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>8</sub></sub> = {x8} i objektfunktionen Z = {objektfunktion}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x8}
                                                                    onChange={(e) => setx8(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>
                                                        }
                                                    </InputGroup>
                                                </Form.Group>


                                                {/* // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ################################################################################################################### */}

                                                <Form.Group >
                                                    Under de {bibetingelser} bibetingelser
        
                                            <InputGroup size="sm">
                                                        <OverlayTrigger
                                                            placement="right"
                                                            delay={{ show: 100, hide: 100 }}
                                                            overlay={
                                                                <Tooltip>
                                                                    Faktoren for  X<sub><sub>1</sub></sub> = {fx11} i bibetingelse 1:<br></br>{bibet1}
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Form.Control
                                                                size="sm"
                                                                type="number"
                                                                value={x11}
                                                                onChange={(e) => setx11(+e.target.value)}
                                                                aria-describedby="inputGroupAppend"
                                                                placeholder="0"
                                                            >
                                                            </Form.Control>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger
                                                            placement="right"
                                                            delay={{ show: 100, hide: 100 }}
                                                            overlay={
                                                                <Tooltip>
                                                                    Faktoren for  X<sub><sub>2</sub></sub> = {fx12} i bibetingelse 1:<br></br>{bibet1}
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Form.Control
                                                                size="sm"
                                                                type="number"
                                                                value={x12}
                                                                onChange={(e) => setx12(+e.target.value)}
                                                                aria-describedby="inputGroupAppend"
                                                                placeholder="0"
                                                            >
                                                            </Form.Control>
                                                        </OverlayTrigger>



                                                        {variable > 2 &&
                                                            <>
                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>3</sub></sub> = {fx13} i bibetingelse 1:<br></br>{bibet1}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x13}
                                                                        onChange={(e) => setx13(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>



                                                            </>
                                                        }
                                                        {variable > 3 &&

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>4</sub></sub> = {x14} i bibetingelse 1:<br></br>{bibet1}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x14}
                                                                    onChange={(e) => setx14(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>
                                                        }
                                                        {variable > 4 &&
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>5</sub></sub> = {fx15} i bibetingelse 1:<br></br>{bibet1}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x15}
                                                                    onChange={(e) => setx15(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>
                                                        }
                                                        {variable > 5 &&
                                                            <>
                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>6</sub></sub> = {fx16} i bibetingelse 1:<br></br>{bibet1}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x16}
                                                                        onChange={(e) => setx16(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            </>}
                                                        {variable > 6 &&
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>7</sub></sub> = {x17} i bibetingelse 1:<br></br>{bibet1}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x17}
                                                                    onChange={(e) => setx17(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>
                                                        }
                                                        {variable > 7 &&
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for X<sub><sub>8</sub></sub> = {fx18} i bibetingelse 1:<br></br>{bibet1}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x18}
                                                                    onChange={(e) => setx18(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>
                                                        }
                                                        <div class="btndown">
                                                        <DropdownButton

                                                            // alignleft
                                                            variant="warning"
                                                            title={bib1}
                                                            id="bib1"
                                                            
                                                            
                                                            // id="dropdown-split-basic"
                                                            onSelect={bib1Select}
                                                        >
                                                            <Dropdown.Item eventKey="≤"><p test />
                                                                ≤ Maksimum, mindre end lig med, højst
                                                        </Dropdown.Item>
                                                            <Dropdown.Item eventKey="≥">
                                                                ≥ Minimum, større end lig med, mindst
                                                        </Dropdown.Item>
                                                            <Dropdown.Item eventKey="=">
                                                                = Lig med
                                                        </Dropdown.Item>
                                                        </DropdownButton>
                                                        </div>

                                                        <OverlayTrigger
                                                            placement="right"
                                                            delay={{ show: 100, hide: 100 }}
                                                            overlay={
                                                                <Tooltip>
                                                                    Højresiden = {fhs1} i bibetingelse 1:<br></br>{bibet1}
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Form.Control
                                                                size="sm"
                                                                type="number"
                                                                value={hs1}
                                                                onChange={(e) => seths1(+e.target.value)}
                                                                aria-describedby="inputGroupAppend"
                                                                placeholder="0"
                                                            >
                                                            </Form.Control>

                                                        </OverlayTrigger>
                                                    </InputGroup>
                                                </Form.Group>













                                                {/* // 1 til 2 ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ################################################################################################################### */}


                                                <Form.Group >
                                                    <InputGroup size="sm">
                                                        <OverlayTrigger
                                                            placement="right"
                                                            delay={{ show: 100, hide: 100 }}
                                                            overlay={
                                                                <Tooltip>
                                                                    Faktoren for X<sub><sub>1</sub></sub> = {fx21} i bibetingelse 2:<br></br>{bibet2}
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Form.Control
                                                                size="sm"
                                                                type="number"
                                                                value={x21}
                                                                onChange={(e) => setx21(+e.target.value)}
                                                                aria-describedby="inputGroupAppend"
                                                                placeholder="0"
                                                            >
                                                            </Form.Control>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger
                                                            placement="right"
                                                            delay={{ show: 100, hide: 100 }}
                                                            overlay={
                                                                <Tooltip>
                                                                    Faktoren for  X<sub><sub>2</sub></sub> = {fx22} i bibetingelse 2:<br></br>{bibet2}
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Form.Control
                                                                size="sm"
                                                                type="number"
                                                                value={x22}
                                                                onChange={(e) => setx22(+e.target.value)}
                                                                aria-describedby="inputGroupAppend"
                                                                placeholder="0"
                                                            >
                                                            </Form.Control>
                                                        </OverlayTrigger>



                                                        {variable > 2 &&
                                                            <>
                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>3</sub></sub> = {fx23} i bibetingelse 2:<br></br>{bibet2}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x23}
                                                                        onChange={(e) => setx23(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>



                                                            </>
                                                        }
                                                        {variable > 3 &&

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>4</sub></sub> = {fx24} i bibetingelse 2:<br></br>{bibet2}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x24}
                                                                    onChange={(e) => setx24(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>




                                                        }
                                                        {variable > 4 &&

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>5</sub></sub> = {fx25} i bibetingelse 2:<br></br>{bibet2}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x25}
                                                                    onChange={(e) => setx25(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>


                                                        }
                                                        {variable > 5 &&
                                                            <>
                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for X<sub><sub>6</sub></sub> = {fx26} i bibetingelse 2:<br></br>{bibet2}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x26}
                                                                        onChange={(e) => setx26(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>


                                                            </>}

                                                        {variable > 6 &&

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>7</sub></sub> = {fx27} i bibetingelse 2:<br></br>{bibet2}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x27}
                                                                    onChange={(e) => setx27(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>
                                                        }
                                                        {variable > 7 &&

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>8</sub></sub> = {fx28} i bibetingelse 2:<br></br>{bibet2}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x28}
                                                                    onChange={(e) => setx28(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>
                                                        }
                                                        <div class="btndown">
                                                        <DropdownButton
                                                        
                                                            alignleft
                                                            variant="warning"
                                                            title={bib2}
                                                            id="bib2"
                                                            
                                                            
                                                            onSelect={bib2Select}
                                                        >
                                                            <Dropdown.Item eventKey="≤"><p test />
                                                                ≤ Maksimum, mindre end lig med, højst
                                                        </Dropdown.Item>
                                                            <Dropdown.Item eventKey="≥">
                                                                ≥ Minimum, større end lig med, mindst
                                                        </Dropdown.Item>
                                                            <Dropdown.Item eventKey="=">
                                                                = Lig med
                                                        </Dropdown.Item>
                                                        </DropdownButton>
                                                        </div>

                                                        <OverlayTrigger
                                                            placement="right"
                                                            delay={{ show: 100, hide: 100 }}
                                                            overlay={
                                                                <Tooltip>
                                                                    Højresiden = {fhs2} i bibetingelse 2:<br></br>{bibet2}
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Form.Control
                                                                size="sm"
                                                                type="number"
                                                                value={hs2}
                                                                onChange={(e) => seths2(+e.target.value)}
                                                                aria-describedby="inputGroupAppend"
                                                                placeholder="0"
                                                            >
                                                            </Form.Control>

                                                        </OverlayTrigger>


                                                    </InputGroup>
                                                </Form.Group>













                                                {/* // 2 til 3 ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ################################################################################################################### */}


                                                {bibetingelser > 2 &&
                                                    <Form.Group >
                                                        <InputGroup size="sm">
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>1</sub></sub> = {fx31} i bibetingelse 3:<br></br>{bibet3}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x31}
                                                                    onChange={(e) => setx31(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>2</sub></sub> = {fx32} i bibetingelse 3:<br></br>{bibet3}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x32}
                                                                    onChange={(e) => setx32(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>



                                                            {variable > 2 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>3</sub></sub> = {fx33} i bibetingelse 3:<br></br>{bibet3}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x33}
                                                                            onChange={(e) => setx33(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>



                                                                </>
                                                            }
                                                            {variable > 3 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>4</sub></sub> = {fx34} i bibetingelse 3:<br></br>{bibet3}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x34}
                                                                        onChange={(e) => setx34(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>




                                                            }
                                                            {variable > 4 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>5</sub></sub> = {fx35} i bibetingelse 3:<br></br>{bibet3}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x35}
                                                                        onChange={(e) => setx35(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>


                                                            }
                                                            {variable > 5 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>6</sub></sub> = {fx36} i bibetingelse 3:<br></br>{bibet3}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x36}
                                                                            onChange={(e) => setx36(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>


                                                                </>}

                                                            {variable > 6 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>7</sub></sub> = {fx37} i bibetingelse 3:<br></br>{bibet3}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x37}
                                                                        onChange={(e) => setx37(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            {variable > 7 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for X<sub><sub>8</sub></sub> = {fx38} i bibetingelse 3:<br></br>{bibet3}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x38}
                                                                        onChange={(e) => setx38(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            <div class="btndown">
                                                            <DropdownButton
                                                                alignleft
                                                                variant="warning"
                                                                title={bib3}
                                                                id="bib3"
                                                               
                                                                onSelect={bib3Select}
                                                            >
                                                                <Dropdown.Item eventKey="≤"><p test />
                                                                    ≤ Maksimum, mindre end lig med, højst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="≥">
                                                                    ≥ Minimum, større end lig med, mindst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="=">
                                                                    = Lig med
                                                        </Dropdown.Item>
                                                            </DropdownButton>
                                                            </div>
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Højresiden = {fhs3} i bibetingelse 3:<br></br>{bibet3}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={hs3}
                                                                    onChange={(e) => seths3(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>

                                                        </InputGroup>
                                                    </Form.Group>




                                                }








                                                {/* // 3 til 4 ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ################################################################################################################### */}



                                                {bibetingelser > 3 &&
                                                    <Form.Group >
                                                        <InputGroup size="sm">
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>1</sub></sub> = {fx41} i bibetingelse 4:<br></br>{bibet4}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x41}
                                                                    onChange={(e) => setx41(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>2</sub></sub> = {fx42} i bibetingelse 4:<br></br>{bibet4}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x42}
                                                                    onChange={(e) => setx42(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>



                                                            {variable > 2 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>3</sub></sub> = {fx43} i bibetingelse 4:<br></br>{bibet4}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x43}
                                                                            onChange={(e) => setx43(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>



                                                                </>
                                                            }
                                                            {variable > 3 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>4</sub></sub> = {fx44} i bibetingelse 4:<br></br>{bibet4}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x44}
                                                                        onChange={(e) => setx44(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>




                                                            }
                                                            {variable > 4 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>5</sub></sub> = {fx45} i bibetingelse 4:<br></br>{bibet4}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x45}
                                                                        onChange={(e) => setx45(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>


                                                            }
                                                            {variable > 5 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>6</sub></sub> = {fx46} i bibetingelse 4:<br></br>{bibet4}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x46}
                                                                            onChange={(e) => setx46(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>


                                                                </>}

                                                            {variable > 6 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>7</sub></sub> = {fx47} i bibetingelse 4:<br></br>{bibet4}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x47}
                                                                        onChange={(e) => setx47(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            {variable > 7 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>8</sub></sub> = {fx48} i bibetingelse 4:<br></br>{bibet4}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x48}
                                                                        onChange={(e) => setx48(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            <div class="btndown">
                                                            <DropdownButton
                                                                alignleft
                                                                variant="warning"
                                                                title={bib4}
                                                                id="bib4"
                                                                
                                                                onSelect={bib4Select}
                                                            >
                                                                <Dropdown.Item eventKey="≤"><p test />
                                                                    ≤ Maksimum, mindre end lig med, højst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="≥">
                                                                    ≥ Minimum, større end lig med, mindst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="=">
                                                                    = Lig med
                                                        </Dropdown.Item>
                                                            </DropdownButton>
                                                            </div>
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Højresiden = {fhs4} i bibetingelse 4:<br></br>{bibet4}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={hs4}
                                                                    onChange={(e) => seths4(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>

                                                        </InputGroup>
                                                    </Form.Group>




                                                }








                                                {/* // 4 til 5 ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ################################################################################################################### */}


                                                {bibetingelser > 4 &&
                                                    <Form.Group >
                                                        <InputGroup size="sm">
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for X<sub><sub>1</sub></sub> = {fx51} i bibetingelse 5:<br></br>{bibet5}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x51}
                                                                    onChange={(e) => setx51(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>2</sub></sub> = {fx52} i bibetingelse 5:<br></br>{bibet5}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x52}
                                                                    onChange={(e) => setx52(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>



                                                            {variable > 2 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>3</sub></sub> = {fx53} i bibetingelse 5:<br></br>{bibet5}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x53}
                                                                            onChange={(e) => setx53(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>



                                                                </>
                                                            }
                                                            {variable > 3 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>4</sub></sub> = {fx54} i bibetingelse 5:<br></br>{bibet5}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x54}
                                                                        onChange={(e) => setx54(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>




                                                            }
                                                            {variable > 4 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>5</sub></sub> = {fx55} i bibetingelse 5:<br></br>{bibet5}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x55}
                                                                        onChange={(e) => setx55(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>


                                                            }
                                                            {variable > 5 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>6</sub></sub> = {fx56} i bibetingelse 5:<br></br>{bibet5}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x56}
                                                                            onChange={(e) => setx56(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>


                                                                </>}

                                                            {variable > 6 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>7</sub></sub> = {fx57} i bibetingelse 5:<br></br>{bibet5}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x57}
                                                                        onChange={(e) => setx57(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            {variable > 7 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>8</sub></sub> = {fx58} i bibetingelse 5:<br></br>{bibet5}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x58}
                                                                        onChange={(e) => setx58(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            <div class="btndown">
                                                            <DropdownButton
                                                                alignleft
                                                                variant="warning"
                                                                title={bib5}
                                                                id="bib5"
                                                                
                                                                onSelect={bib5Select}
                                                            >
                                                                <Dropdown.Item eventKey="≤"><p test />
                                                                    ≤ Maksimum, mindre end lig med, højst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="≥">
                                                                    ≥ Minimum, større end lig med, mindst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="=">
                                                                    = Lig med
                                                        </Dropdown.Item>
                                                            </DropdownButton>
                                                            </div>
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Højresiden = {fhs5} i bibetingelse 5:<br></br>{bibet5}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={hs5}
                                                                    onChange={(e) => seths5(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>

                                                        </InputGroup>
                                                    </Form.Group>




                                                }








                                                {/* // 5 til 6 ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ################################################################################################################### */}




                                                {bibetingelser > 5 &&
                                                    <Form.Group >
                                                        <InputGroup size="sm">
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>1</sub></sub> = {fx61} i bibetingelse 6:<br></br>{bibet6}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x61}
                                                                    onChange={(e) => setx61(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>2</sub></sub> = {fx62} i bibetingelse 6:<br></br>{bibet6}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x62}
                                                                    onChange={(e) => setx62(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>



                                                            {variable > 2 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>3</sub></sub> = {fx63} i bibetingelse 6:<br></br>{bibet6}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x63}
                                                                            onChange={(e) => setx63(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>



                                                                </>
                                                            }
                                                            {variable > 3 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>4</sub></sub> = {fx64} i bibetingelse 6:<br></br>{bibet6}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x64}
                                                                        onChange={(e) => setx64(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>




                                                            }
                                                            {variable > 4 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>5</sub></sub> = {fx65} i bibetingelse 6:<br></br>{bibet6}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x65}
                                                                        onChange={(e) => setx65(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>


                                                            }
                                                            {variable > 5 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>6</sub></sub> = {fx66} i bibetingelse 6:<br></br>{bibet6}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x66}
                                                                            onChange={(e) => setx66(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>


                                                                </>}

                                                            {variable > 6 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>7</sub></sub> = {fx67} i bibetingelse 6:<br></br>{bibet6}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x67}
                                                                        onChange={(e) => setx67(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            {variable > 7 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>8</sub></sub> = {fx68} i bibetingelse 6:<br></br>{bibet6}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x68}
                                                                        onChange={(e) => setx68(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            <div class="btndown">
                                                            <DropdownButton
                                                                alignleft
                                                                variant="warning"
                                                                title={bib6}
                                                                id="bib6"
                                                                
                                                                onSelect={bib6Select}
                                                            >
                                                                <Dropdown.Item eventKey="≤"><p test />
                                                                    ≤ Maksimum, mindre end lig med, højst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="≥">
                                                                    ≥ Minimum, større end lig med, mindst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="=">
                                                                    = Lig med
                                                        </Dropdown.Item>
                                                            </DropdownButton>
                                                            </div>
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Højresiden = {fhs6} i bibetingelse 6:<br></br>{bibet6}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={hs6}
                                                                    onChange={(e) => seths6(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>

                                                        </InputGroup>
                                                    </Form.Group>




                                                }








                                                {/* // 6 til 7 ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ################################################################################################################### */}





                                                {bibetingelser > 6 &&
                                                    <Form.Group >
                                                        <InputGroup size="sm">
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>1</sub></sub> = {fx71} i bibetingelse 7:<br></br>{bibet7}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x71}
                                                                    onChange={(e) => setx71(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>2</sub></sub> = {fx72} i bibetingelse 7:<br></br>{bibet7}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x72}
                                                                    onChange={(e) => setx72(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>



                                                            {variable > 2 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>3</sub></sub> = {fx73} i bibetingelse 7:<br></br>{bibet7}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x73}
                                                                            onChange={(e) => setx73(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>



                                                                </>
                                                            }
                                                            {variable > 3 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>4</sub></sub> = {fx74} i bibetingelse 7:<br></br>{bibet7}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x74}
                                                                        onChange={(e) => setx74(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>




                                                            }
                                                            {variable > 4 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>5</sub></sub> = {fx75} i bibetingelse 7:<br></br>{bibet7}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x75}
                                                                        onChange={(e) => setx75(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>


                                                            }
                                                            {variable > 5 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>6</sub></sub> = {fx76} i bibetingelse 7:<br></br>{bibet7}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x76}
                                                                            onChange={(e) => setx76(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>


                                                                </>}

                                                            {variable > 6 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>7</sub></sub> = {fx77} i bibetingelse 7:<br></br>{bibet7}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x77}
                                                                        onChange={(e) => setx77(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            {variable > 7 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>8</sub></sub> = {fx78} i bibetingelse 7:<br></br>{bibet7}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x78}
                                                                        onChange={(e) => setx78(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            <div class="btndown">
                                                            <DropdownButton
                                                                alignleft
                                                                variant="warning"
                                                                title={bib7}
                                                                id="bib7"
                                                                
                                                                onSelect={bib7Select}
                                                            >
                                                                <Dropdown.Item eventKey="≤"><p test />
                                                                    ≤ Maksimum, mindre end lig med, højst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="≥">
                                                                    ≥ Minimum, større end lig med, mindst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="=">
                                                                    = Lig med
                                                        </Dropdown.Item>
                                                            </DropdownButton>
                                                            </div>
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Højresiden = {fhs7} i bibetingelse 7:<br></br>{bibet7}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={hs7}
                                                                    onChange={(e) => seths7(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>

                                                        </InputGroup>
                                                    </Form.Group>




                                                }








                                                {/* // 7 til 8 ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ################################################################################################################### */}




                                                {bibetingelser > 7 &&
                                                    <Form.Group >
                                                        <InputGroup size="sm">
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>1</sub></sub> = {fx81} i bibetingelse 8:<br></br>{bibet8}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x81}
                                                                    onChange={(e) => setx81(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>2</sub></sub> = {fx82} i bibetingelse 8:<br></br>{bibet8}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x82}
                                                                    onChange={(e) => setx82(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>



                                                            {variable > 2 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>3</sub></sub> = {fx83} i bibetingelse 8:<br></br>{bibet8}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x83}
                                                                            onChange={(e) => setx83(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>



                                                                </>
                                                            }
                                                            {variable > 3 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>4</sub></sub> = {fx84} i bibetingelse 8:<br></br>{bibet8}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x84}
                                                                        onChange={(e) => setx84(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>




                                                            }
                                                            {variable > 4 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>5</sub></sub> = {fx85} i bibetingelse 8:<br></br>{bibet8}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x85}
                                                                        onChange={(e) => setx85(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>


                                                            }
                                                            {variable > 5 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>6</sub></sub> = {fx86} i bibetingelse 8:<br></br>{bibet8}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x86}
                                                                            onChange={(e) => setx86(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>


                                                                </>}

                                                            {variable > 6 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>7</sub></sub> = {fx87} i bibetingelse 8:<br></br>{bibet8}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x87}
                                                                        onChange={(e) => setx87(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            {variable > 7 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>8</sub></sub> = {fx88} i bibetingelse 8:<br></br>{bibet8}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x88}
                                                                        onChange={(e) => setx88(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            <div class="btndown">
                                                            <DropdownButton
                                                                alignleft
                                                                variant="warning"
                                                                title={bib8}
                                                                id="bib8"
                                                                
                                                                onSelect={bib8Select}
                                                            >
                                                                <Dropdown.Item eventKey="≤"><p test />
                                                                    ≤ Maksimum, mindre end lig med, højst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="≥">
                                                                    ≥ Minimum, større end lig med, mindst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="=">
                                                                    = Lig med
                                                        </Dropdown.Item>
                                                            </DropdownButton>
                                                            </div>

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Højresiden = {fhs8} i bibetingelse 8:<br></br>{bibet8}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={hs8}
                                                                    onChange={(e) => seths8(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>

                                                        </InputGroup>
                                                    </Form.Group>




                                                }








                                                {/* // 8 til 9 ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ################################################################################################################### */}




                                                {bibetingelser > 8 &&
                                                    <Form.Group >
                                                        <InputGroup size="sm">
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>1</sub></sub> = {fx91} i bibetingelse 9:<br></br>{bibet9}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x91}
                                                                    onChange={(e) => setx91(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>2</sub></sub> = {fx92} i bibetingelse 9:<br></br>{bibet9}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x92}
                                                                    onChange={(e) => setx92(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>



                                                            {variable > 2 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>3</sub></sub> = {fx93} i bibetingelse 9:<br></br>{bibet9}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x93}
                                                                            onChange={(e) => setx93(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>



                                                                </>
                                                            }
                                                            {variable > 3 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>4</sub></sub> = {fx94} i bibetingelse 9:<br></br>{bibet9}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x94}
                                                                        onChange={(e) => setx94(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>




                                                            }
                                                            {variable > 4 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>5</sub></sub> = {fx95} i bibetingelse 9:<br></br>{bibet9}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x95}
                                                                        onChange={(e) => setx95(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>


                                                            }
                                                            {variable > 5 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>6</sub></sub> = {fx96} i bibetingelse 9:<br></br>{bibet9}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x96}
                                                                            onChange={(e) => setx96(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>


                                                                </>}

                                                            {variable > 6 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>7</sub></sub> = {fx97} i bibetingelse 9:<br></br>{bibet9}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x97}
                                                                        onChange={(e) => setx97(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            {variable > 7 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>8</sub></sub> = {fx98} i bibetingelse 9:<br></br>{bibet9}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x98}
                                                                        onChange={(e) => setx98(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            <div class="btndown">
                                                            <DropdownButton
                                                                alignleft
                                                                variant="warning"
                                                                title={bib9}
                                                                id="bib9"
                                                                
                                                                onSelect={bib9Select}
                                                            >
                                                                <Dropdown.Item eventKey="≤"><p test />
                                                                    ≤ Maksimum, mindre end lig med, højst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="≥">
                                                                    ≥ Minimum, større end lig med, mindst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="=">
                                                                    = Lig med
                                                        </Dropdown.Item>
                                                            </DropdownButton>
                                                            </div>
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Højresiden = {fhs9} i bibetingelse 9:<br></br>{bibet9}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={hs9}
                                                                    onChange={(e) => seths9(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>

                                                        </InputGroup>
                                                    </Form.Group>




                                                }








                                                {/* // 9 til 10 ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ################################################################################################################### */}







                                                {bibetingelser > 9 &&
                                                    <Form.Group >
                                                        <InputGroup size="sm">
                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>1</sub></sub> = {fx101} i bibetingelse 10:<br></br>{bibet10}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x101}
                                                                    onChange={(e) => setx101(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Faktoren for  X<sub><sub>2</sub></sub> = {fx102} i bibetingelse 10:<br></br>{bibet10}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={x102}
                                                                    onChange={(e) => setx102(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>
                                                            </OverlayTrigger>



                                                            {variable > 2 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>3</sub></sub> = {fx103} i bibetingelse 10:<br></br>{bibet10}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x103}
                                                                            onChange={(e) => setx103(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>



                                                                </>
                                                            }
                                                            {variable > 3 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>4</sub></sub> = {fx104} i bibetingelse 10:<br></br>{bibet10}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x104}
                                                                        onChange={(e) => setx104(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>




                                                            }
                                                            {variable > 4 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>5</sub></sub> = {fx105} i bibetingelse 10:<br></br>{bibet10}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x105}
                                                                        onChange={(e) => setx105(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>


                                                            }
                                                            {variable > 5 &&
                                                                <>
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 100, hide: 100 }}
                                                                        overlay={
                                                                            <Tooltip>
                                                                                Faktoren for  X<sub><sub>6</sub></sub> = {fx106} i bibetingelse 10:<br></br>{bibet10}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Form.Control
                                                                            size="sm"
                                                                            type="number"
                                                                            value={x106}
                                                                            onChange={(e) => setx106(+e.target.value)}
                                                                            aria-describedby="inputGroupAppend"
                                                                            placeholder="0"
                                                                        >
                                                                        </Form.Control>

                                                                    </OverlayTrigger>


                                                                </>}

                                                            {variable > 6 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>7</sub></sub> = {fx107} i bibetingelse 10:<br></br>{bibet10}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x107}
                                                                        onChange={(e) => setx107(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            {variable > 7 &&

                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 100, hide: 100 }}
                                                                    overlay={
                                                                        <Tooltip>
                                                                            Faktoren for  X<sub><sub>8</sub></sub> = {fx108} i bibetingelse 10:<br></br>{bibet10}
                                                                        </Tooltip>
                                                                    }
                                                                >
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="number"
                                                                        value={x108}
                                                                        onChange={(e) => setx108(+e.target.value)}
                                                                        aria-describedby="inputGroupAppend"
                                                                        placeholder="0"
                                                                    >
                                                                    </Form.Control>

                                                                </OverlayTrigger>
                                                            }
                                                            <div class="btndown">
                                                            <DropdownButton
                                                                alignleft
                                                                variant="warning"
                                                                title={bib10}
                                                                id="bib10"
                                                                
                                                                onSelect={bib10Select}
                                                            >
                                                                <Dropdown.Item eventKey="≤"><p test />
                                                                    ≤ Maksimum, mindre end lig med, højst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="≥">
                                                                    ≥ Minimum, større end lig med, mindst
                                                        </Dropdown.Item>
                                                                <Dropdown.Item eventKey="=">
                                                                    = Lig med
                                                        </Dropdown.Item>
                                                            </DropdownButton>
                                                            </div>

                                                            <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 100, hide: 100 }}
                                                                overlay={
                                                                    <Tooltip>
                                                                        Højresiden = {fhs10} i bibetingelse 10:<br></br>{bibet10}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="number"
                                                                    value={hs10}
                                                                    onChange={(e) => seths10(+e.target.value)}
                                                                    aria-describedby="inputGroupAppend"
                                                                    placeholder="0"
                                                                >
                                                                </Form.Control>

                                                            </OverlayTrigger>

                                                        </InputGroup>
                                                    </Form.Group>




                                                }








                                                {/* // slut med 10 ovenfor ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ###################################################################################################################
    // ################################################################################################################### */}









                                    </div>
                                </Container>
                                    </div>
                        </div>
                            </div>
                        </div>
            </Container >
                    {variable < 3 &&
                        <Container className="p-0">
                            <div class="p-3 mb-2 bg-white text-black">
                                <div class="card">
                                    <div class="card-body">

                                        <HighchartsReact
                                            highcharts={Highcharts}
                                            options={optionshighcharts}
                                        />

                                    </div>
                                </div>
                            </div>
                        </Container>
                    }


<Container className="p-0">
                <div style={{ whiteSpace: 'pre-wrap' }} class="container">
                    <table class="table table-bordered table-responsive table-white table-hover ">
                        <small>
                            <thead>
                                <span class="align-middle">
                                    <tr>
                                        <br />
                                        
                                        <h4>&nbsp;&nbsp;&nbsp;&nbsp;
                                        {problemtype === "Minimeringsproblem" && "Minimeringsproblem"}
                                        {problemtype === "Maksimeringsproblem" && "Maksimeringsproblem"}
                                        </h4>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {problemtype === "Minimeringsproblem" && "Minimer "}
                                        {problemtype === "Maksimeringsproblem" && "Maksimer "}
                                        Objektfunktionen<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {objektfunktion}<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Under bibetingelserne:<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        { bibetingelser > 1 &&
                                        bibet1 +"\n      " 
                                        }
                                        { bibetingelser > 1 &&
                                        bibet2 +"\n      " 
                                        }
                                        { bibetingelser > 2 &&
                                        bibet3 +"\n      " 
                                        }
                                        { bibetingelser > 3 &&
                                        bibet4 +"\n      " 
                                        }
                                        { bibetingelser > 4 &&
                                        bibet5 +"\n      " 
                                        }
                                        { bibetingelser > 5 &&
                                        bibet6 +"\n      " 
                                        }
                                        { bibetingelser > 6 &&
                                        bibet7 +"\n      " 
                                        }
                                        { bibetingelser > 7 &&
                                        bibet8 +"\n      " 
                                        }
                                        { bibetingelser > 8 &&
                                        bibet9 +"\n      " 
                                        }
                                        { bibetingelser > 9 &&
                                        bibet10 +"\n      " 
                                        }
                                        { LPstring2.feasible && "Den optimale løsning på problemet er "+numberFormat4( LPstring2.result)+"\n      "}
                                        { !LPstring2.feasible && "Der er ingen optimal løsning på problemet.\n      "}
                                        { !LPstring2.bounded && "Bibetingelserne sætter ingen grænse for problemet.\n      "}
                                        { LPstring2.x1 && "Optimal værdi af X\u2081 = " +LPstring2.x1+"\n      "}
                                        { LPstring2.x2 && "Optimal værdi af X\u2082 = " +LPstring2.x2+"\n      "}
                                        { LPstring2.x3 && "Optimal værdi af X\u2083 = " +LPstring2.x3+"\n      "}
                                        { LPstring2.x4 && "Optimal værdi af X\u2084 = " +LPstring2.x4+"\n      "}
                                        { LPstring2.x5 && "Optimal værdi af X\u2085 = " +LPstring2.x5+"\n      "}
                                        { LPstring2.x6 && "Optimal værdi af X\u2086 = " +LPstring2.x6+"\n      "}
                                        { LPstring2.x7 && "Optimal værdi af X\u2087 = " +LPstring2.x7+"\n      "}
                                        { LPstring2.x8 && "Optimal værdi af X\u2088 = " +LPstring2.x8+"\n      "}
                                        


                                        <br />
                                    </tr>
                                </span>
                            </thead>

                            
                                
                                <br></br>
                            <tbody>
                                <span class="align-top">
                                    <tr>
                                        <th>Navn</th>
                                        
                                        <th>Værdi</th>
                                        <th>Forklaring</th>
                                    </tr>
                                    <tr>
                                       
                                       <td> 
                                            Objektfunktion 
                                       </td>
                                       <td>
 

                                       {objektfunktion}

                                       
                                       </td>

                                       <td>
 
                                       {
                                       "Vi kan indsætte de optimale værdier for de "+variable+" variable i objektfunktionen herved finder vi værdien af obejktfunktionen i optimum:\n"
                                       +objektfunktion+" = "+
                                       (variable > 1 ? fx1 + "·"+(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1)): '')+
                                       (variable > 1 ? " + " + fx2 + "·"+(isNaN(LPstring2.x2)?0:numberFormat4(LPstring2.x2)): '')+
                                       (variable > 2 ? " + " + fx3 + "·"+(isNaN(LPstring2.x3)?0:numberFormat4(LPstring2.x3)): '')+
                                       (variable > 3 ? " + " + fx4 + "·"+(isNaN(LPstring2.x4)?0:numberFormat4(LPstring2.x4)): '')+
                                       (variable > 4 ? " + " + fx5 + "·"+(isNaN(LPstring2.x5)?0:numberFormat4(LPstring2.x5)): '')+
                                       (variable > 5 ? " + " + fx6 + "·"+(isNaN(LPstring2.x6)?0:numberFormat4(LPstring2.x6)): '')+
                                       (variable > 6 ? " + " + fx7 + "·"+(isNaN(LPstring2.x7)?0:numberFormat4(LPstring2.x7)): '')+
                                       (variable > 7 ? " + " + fx8 + "·"+(isNaN(LPstring2.x8)?0:numberFormat4(LPstring2.x8)): '')+
                                       " = " + numberFormat4( objektværdi)
                                       
                                       
                                       
                                       }

                                       
                                       </td>
                                   </tr>
                                    <tr>                                       
                                        <td> 
                                             Variabel 1 
                                        </td>
                                        <td>
                                        {x1opt}                                        
                                        </td>
                                        <td>{"Den optimale værdi af variabel 1 er "+x1opt+" enheder.\n"+
                                        (x1opt === 0 ? "Offeromkostningen er her "+offer1+", hvilket er "+(opType==="max"?" faldet ":"stigningen ")+" i Z-værdien, når variabel 1 tvinges til at indgå i løsningen med en enhed.":"Offeromkostningen er her 0, da variabel 1 indgår i den optimale løsning, er der ingen ekstra omkostning, ved at gå fra 0 til 1 enheder af variablen.")
                                        }                                        
                                        </td>
                                    </tr>                                                                    
                                    <tr>                                        
                                        <td>Variabel 2</td>
                                        <td>
                                            {x2opt}                                        
                                        </td>
                                            <td>
                                                {"Den optimale værdi af variabel 2 er "+x2opt+" enheder.\n"+
                                            (x2opt === 0 ? "Offeromkostningen er her "+offer2+", hvilket er "+(opType==="max"?" faldet ":"stigningen ")+" i Z-værdien, når variabel 2 tvinges til at indgå i løsningen med en enhed.":"Offeromkostningen er her 0, da variabel 2 indgår i den optimale løsning, er der ingen ekstra omkostning, ved at gå fra 0 til 1 enheder af variablen.")
                                            }
                                        </td>                                        
                                    </tr>                                        
                                    {variable > 2 ?                                   
                                    <tr>                                        
                                        <td>Variabel 3</td>
                                        <td>
                                        {x3opt}                                       
                                        </td>
                                            <td>
                                            {"Den optimale værdi af variabel 3 er "+x3opt+" enheder.\n"+
                                            (x3opt === 0 ? "Offeromkostningen er her "+offer3+", hvilket er "+(opType==="max"?" faldet ":"stigningen ")+" i Z-værdien, når variabel 3 tvinges til at indgå i løsningen med en enhed.":"Offeromkostningen er her 0, da variabel 3 indgår i den optimale løsning, er der ingen ekstra omkostning, ved at gå fra 0 til 1 enheder af variablen.")
                                            }
                                        </td>                                        
                                    </tr>  
                                    :""}    
                                    {variable > 3 ?                                   
                                    <tr>                                        
                                        <td>Variabel 4</td>
                                        <td>
                                        {x4opt}                                       
                                        </td>
                                            <td>
                                            {"Den optimale værdi af variabel 4 er "+x4opt+" enheder.\n"+
                                            (x4opt === 0 ? "Offeromkostningen er her "+offer4+", hvilket er "+(opType==="max"?" faldet ":"stigningen ")+" i Z-værdien, når variabel 4 tvinges til at indgå i løsningen med en enhed.":"Offeromkostningen er her 0, da variabel 4 indgår i den optimale løsning, er der ingen ekstra omkostning, ved at gå fra 0 til 1 enheder af variablen.")
                                            }
                                        </td>                                        
                                    </tr>  
                                    :""}    
                                    {variable > 4 ?                                   
                                    <tr>                                        
                                        <td>Variabel 5</td>
                                        <td>
                                        {x5opt}                                       
                                        </td>
                                            <td>
                                            {"Den optimale værdi af variabel 5 er "+x5opt+" enheder.\n"+
                                            (x5opt === 0 ? "Offeromkostningen er her "+offer5+", hvilket er "+(opType==="max"?" faldet ":"stigningen ")+" i Z-værdien, når variabel 5 tvinges til at indgå i løsningen med en enhed.":"Offeromkostningen er her 0, da variabel 5 indgår i den optimale løsning, er der ingen ekstra omkostning, ved at gå fra 0 til 1 enheder af variablen.")
                                            }
                                        </td>                                        
                                    </tr>  
                                    :""}  
                                    {variable > 5 ?                                   
                                    <tr>                                        
                                        <td>Variabel 6</td>
                                        <td>
                                        {x6opt}                                       
                                        </td>
                                            <td>
                                            {"Den optimale værdi af variabel 6 er "+x6opt+" enheder.\n"+
                                            (x6opt === 0 ? "Offeromkostningen er her "+offer6+", hvilket er "+(opType==="max"?" faldet ":"stigningen ")+" i Z-værdien, når variabel 6 tvinges til at indgå i løsningen med en enhed.":"Offeromkostningen er her 0, da variabel 6 indgår i den optimale løsning, er der ingen ekstra omkostning, ved at gå fra 0 til 1 enheder af variablen.")
                                            }
                                        </td>                                        
                                    </tr>  
                                    :""}  
                                    {variable > 6 ?                                   
                                    <tr>                                        
                                        <td>Variabel 7</td>
                                        <td>
                                        {x7opt}                                       
                                        </td>
                                            <td>
                                            {"Den optimale værdi af variabel 7 er "+x7opt+" enheder.\n"+
                                            (x7opt === 0 ? "Offeromkostningen er her "+offer7+", hvilket er "+(opType==="max"?" faldet ":"stigningen ")+" i Z-værdien, når variabel 7 tvinges til at indgå i løsningen med en enhed.":"Offeromkostningen er her 0, da variabel 7 indgår i den optimale løsning, er der ingen ekstra omkostning, ved at gå fra 0 til 1 enheder af variablen.")
                                            }
                                        </td>                                        
                                    </tr>  
                                    :""}  
                                    {variable > 7 ?                                   
                                    <tr>                                        
                                        <td>Variabel 8</td>
                                        <td>
                                        {x8opt}                                       
                                        </td>
                                            <td>
                                            {"Den optimale værdi af variabel 8 er "+x8opt+" enheder.\n"+
                                            (x8opt === 0 ? "Offeromkostningen er her "+offer8+", hvilket er "+(opType==="max"?" faldet ":"stigningen ")+" i Z-værdien, når variabel 8 tvinges til at indgå i løsningen med en enhed.":"Offeromkostningen er her 0, da variabel 8 indgår i den optimale løsning, er der ingen ekstra omkostning, ved at gå fra 0 til 1 enheder af variablen.")
                                            }
                                        </td>                                        
                                    </tr>  
                                    :""}
                                      

                                    
                                            </span>
                                            </tbody>


                                <br></br><br></br><br></br>
                                        
                            <tbody>
                                <span class="align-top">
                                    <tr>
                                        <th>Bibetingelse    </th>                                        
                                        <th>Værdi</th>
                                        <th>Forklaring</th>
                                    </tr>
                                      
                                    <tr>
                                        <td>Bibetingelse 1</td>
                                        <td>
                                            {bibet1}
                                        </td>
                                        <td>
                                                {
                                                (fx11) + "X\u2081 + " 
                                                + (fx12) + "X\u2082 "
                                                + (variable > 2 ? " + " + (fx13) + "X\u2083" : '')
                                                + (variable > 3 ? " + " + (fx14) + "X\u2084" : '')
                                                + (variable > 4 ? " + " + (fx15) + "X\u2085" : '')
                                                + (variable > 5 ? " + " + (fx16) + "X\u2086" : '')
                                                + (variable > 6 ? " + " + (fx17) + "X\u2087" : '')
                                                + (variable > 7 ? " + " + (fx18) + "X\u2088" : '')
                                                + " = " 
                                                + (fx11) + "·"+(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1)+ " + ") 
                                                + (fx12) + "·" + (isNaN(LPstring2.x2)?0:numberFormat4(LPstring2.x2))
                                                + (variable > 2 ?  " + "+ (fx13) + "·" + (isNaN(LPstring2.x3)?0:numberFormat4(LPstring2.x3)+ " + ") : '')
                                                + (variable > 3 ? " + " + (fx14) + "·" + (isNaN(LPstring2.x4)?0:numberFormat4(LPstring2.x4)+ " + ") : '')
                                                + (variable > 4 ? " + " + (fx15) + "·" + (isNaN(LPstring2.x5)?0:numberFormat4(LPstring2.x5)+ " + ") : '')
                                                + (variable > 5 ? " + " + (fx16) + "·" + (isNaN(LPstring2.x6)?0:numberFormat4(LPstring2.x6)+ " + ") : '')
                                                + (variable > 6 ? " + " + (fx17)  + "·" + (isNaN(LPstring2.x7)?0:numberFormat4(LPstring2.x7)+ " + ") : '')
                                                + (variable > 7 ? " + " + (fx18)  + "·" + (isNaN(LPstring2.x8)?0:numberFormat4(LPstring2.x8)+ " + ") : '')
                                                + " = " 
                                                + chs1+ "\n"+
                                                (+chs1===+hs1 ?  "Slack er lig med " + numberFormat4(+chs1) + " - " + numberFormat4(+hs1) + 
                                                " = 0. Der er intet slack i bibetingelse 1, da højresiden er lig med "+ numberFormat4(+hs1)+ 
                                                ", resourcen i bibetingelse 1 er fuldt udnyttet.\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x1)?0:numberFormat4(LPstringDUAL.x1)) +", en ændring af højresiden på 1 enhed i bibetingelse 1, giver en ændring på netop skyggeprisen i Z-værdien. Bemærk ændringen i skyggeprisen, gælder ikke nødvendigvis i begge retninger og muligvis kun i et begrænset interval."
                                                
                                                :"Resourcen i bibetingelse 1 er ikke fuldt udnyttet, der er et slack på: "+ numberFormat4(+hs1)+ " - " +numberFormat4(+chs1)+
                                                " = "+ numberFormat4(+hs1-chs1)
                                                +"\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x1)?0:numberFormat4(LPstringDUAL.x1)) +", en ændring af højresiden på 1 enhed i bibetingelse 1, giver derfor ingen ændring i Z-værdien.")
                                                }
                                        </td>                                        
                                    </tr>                                  
                                    { bibetingelser > 1 &&
                                    <tr>
                                        <td>Bibetingelse 2</td>
                                        <td>
                                            {bibet2}
                                        </td>
                                        <td>
                                                {
                                                (fx21) + "X\u2081 + " 
                                                + (fx22) + "X\u2082 "
                                                + (variable > 2 ? " + " + (fx23) + "X\u2083" : '')
                                                + (variable > 3 ? " + " + (fx24) + "X\u2084" : '')
                                                + (variable > 4 ? " + " + (fx25) + "X\u2085" : '')
                                                + (variable > 5 ? " + " + (fx26) + "X\u2086" : '')
                                                + (variable > 6 ? " + " + (fx27) + "X\u2087" : '')
                                                + (variable > 7 ? " + " + (fx28) + "X\u2088" : '')
                                                + " = " 
                                                + (fx21) + "·"+(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1)+ " + ") 
                                                + (fx22) + "·" + (isNaN(LPstring2.x2)?0:numberFormat4(LPstring2.x2))
                                                + (variable > 2 ?  " + "+ (fx23) + "·" + (isNaN(LPstring2.x3)?0:numberFormat4(LPstring2.x3)+ " + ") : '')
                                                + (variable > 3 ? " + " + (fx24) + "·" + (isNaN(LPstring2.x4)?0:numberFormat4(LPstring2.x4)+ " + ") : '')
                                                + (variable > 4 ? " + " + (fx25) + "·" + (isNaN(LPstring2.x5)?0:numberFormat4(LPstring2.x5)+ " + ") : '')
                                                + (variable > 5 ? " + " + (fx26) + "·" + (isNaN(LPstring2.x6)?0:numberFormat4(LPstring2.x6)+ " + ") : '')
                                                + (variable > 6 ? " + " + (fx27)  + "·" + (isNaN(LPstring2.x7)?0:numberFormat4(LPstring2.x7)+ " + ") : '')
                                                + (variable > 7 ? " + " + (fx28)  + "·" + (isNaN(LPstring2.x8)?0:numberFormat4(LPstring2.x8)+ " + ") : '')
                                                + " = " 
                                                + chs2+ "\n"+
                                                (+chs2===+hs2 ?  "Slack er lig med " + numberFormat4(+chs2) + " - " + numberFormat4(+hs2) + 
                                                " = 0. Der er intet slack i bibetingelse 2, da højresiden er lig med "+ numberFormat4(+hs2)+ 
                                                ", resourcen i bibetingelse 2 er fuldt udnyttet.\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x2)?0:numberFormat4(LPstringDUAL.x2)) +", en ændring af højresiden på 1 enhed i bibetingelse 2, giver en ændring på netop skyggeprisen i Z-værdien. Bemærk ændringen i skyggeprisen, gælder ikke nødvendigvis i begge retninger og muligvis kun i et begrænset interval."
                                                
                                                :"Resourcen i bibetingelse 2 er ikke fuldt udnyttet, der er et slack på: "+ numberFormat4(+hs2)+ " - " +numberFormat4(+chs2)+
                                                " = "+ numberFormat4(+hs2-chs2)
                                                +"\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x2)?0:numberFormat4(LPstringDUAL.x2))+", en ændring af højresiden på 1 enhed i bibetingelse 2, giver derfor ingen ændring i Z-værdien.")
                                                }
                                        </td>                                        
                                    </tr>
                                }
                                    { bibetingelser > 2 &&
                                    <tr>
                                        
                                        <td>Bibetingelse 3</td>
                                        <td>
                                            {bibet3}                                                                              
                                        </td>
                                        <td>
                                        {
                                                (fx31) + "X\u2081 + " 
                                                + (fx32) + "X\u2082 "
                                                + (variable > 2 ? " + " + (fx33) + "X\u2083" : '')
                                                + (variable > 3 ? " + " + (fx34) + "X\u2084" : '')
                                                + (variable > 4 ? " + " + (fx35) + "X\u2085" : '')
                                                + (variable > 5 ? " + " + (fx36) + "X\u2086" : '')
                                                + (variable > 6 ? " + " + (fx37) + "X\u2087" : '')
                                                + (variable > 7 ? " + " + (fx38) + "X\u2088" : '')
                                                + " = " 
                                                + (fx31) + "·"+(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1)+ " + ") 
                                                + (fx32) + "·" + (isNaN(LPstring2.x2)?0:numberFormat4(LPstring2.x2))
                                                + (variable > 2 ?  " + "+ (fx33) + "·" + (isNaN(LPstring2.x3)?0:numberFormat4(LPstring2.x3)+ " + ") : '')
                                                + (variable > 3 ? " + " + (fx34) + "·" + (isNaN(LPstring2.x4)?0:numberFormat4(LPstring2.x4)+ " + ") : '')
                                                + (variable > 4 ? " + " + (fx35) + "·" + (isNaN(LPstring2.x5)?0:numberFormat4(LPstring2.x5)+ " + ") : '')
                                                + (variable > 5 ? " + " + (fx36) + "·" + (isNaN(LPstring2.x6)?0:numberFormat4(LPstring2.x6)+ " + ") : '')
                                                + (variable > 6 ? " + " + (fx37)  + "·" + (isNaN(LPstring2.x7)?0:numberFormat4(LPstring2.x7)+ " + ") : '')
                                                + (variable > 7 ? " + " + (fx38)  + "·" + (isNaN(LPstring2.x8)?0:numberFormat4(LPstring2.x8)+ " + ") : '')
                                                + " = " 
                                                + chs3+ "\n"+
                                                (+chs3===+hs3 ?  "Slack er lig med " + numberFormat4(+chs3) + " - " + numberFormat4(+hs3) + 
                                                " = 0. Der er intet slack i bibetingelse 3, da højresiden er lig med "+ numberFormat4(+hs3)+ 
                                                ", resourcen i bibetingelse 3 er fuldt udnyttet.\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x3)?0:numberFormat4(LPstringDUAL.x3)) +", en ændring af højresiden på 1 enhed i bibetingelse 3, giver en ændring på netop skyggeprisen i Z-værdien. Bemærk ændringen i skyggeprisen, gælder ikke nødvendigvis i begge retninger og muligvis kun i et begrænset interval."
                                                
                                                :"Resourcen i bibetingelse 3 er ikke fuldt udnyttet, der er et slack på: "+ numberFormat4(+hs3)+ " - " +numberFormat4(+chs3)+
                                                " = "+ numberFormat4(+hs3-chs3)
                                                +"\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x3)?0:numberFormat4(LPstringDUAL.x3))+", en ændring af højresiden på 1 enhed i bibetingelse 3, giver derfor ingen ændring i Z-værdien.")
                                                }
                                            
                                        </td>

                                        
                                    </tr>
                                }
                                { bibetingelser > 3 &&
                                    <tr>
                                        
                                        <td>Bibetingelse 4</td>
                                        <td>
                                            {bibet4}                                                                              
                                        </td>
                                        <td>
                                                {
                                                (fx41) + "X\u2081 + " 
                                                + (fx42) + "X\u2082 "
                                                + (variable > 2 ? " + " + (fx43) + "X\u2083" : '')
                                                + (variable > 3 ? " + " + (fx44) + "X\u2084" : '')
                                                + (variable > 4 ? " + " + (fx45) + "X\u2085" : '')
                                                + (variable > 5 ? " + " + (fx46) + "X\u2086" : '')
                                                + (variable > 6 ? " + " + (fx47) + "X\u2087" : '')
                                                + (variable > 7 ? " + " + (fx48) + "X\u2088" : '')
                                                + " = " 
                                                + (fx41) + "·"+(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1)+ " + ") 
                                                + (fx42) + "·" + (isNaN(LPstring2.x2)?0:numberFormat4(LPstring2.x2))
                                                + (variable > 2 ?  " + "+ (fx43) + "·" + (isNaN(LPstring2.x3)?0:numberFormat4(LPstring2.x3)+ " + ") : '')
                                                + (variable > 3 ? " + " + (fx44) + "·" + (isNaN(LPstring2.x4)?0:numberFormat4(LPstring2.x4)+ " + ") : '')
                                                + (variable > 4 ? " + " + (fx45) + "·" + (isNaN(LPstring2.x5)?0:numberFormat4(LPstring2.x5)+ " + ") : '')
                                                + (variable > 5 ? " + " + (fx46) + "·" + (isNaN(LPstring2.x6)?0:numberFormat4(LPstring2.x6)+ " + ") : '')
                                                + (variable > 6 ? " + " + (fx47)  + "·" + (isNaN(LPstring2.x7)?0:numberFormat4(LPstring2.x7)+ " + ") : '')
                                                + (variable > 7 ? " + " + (fx48)  + "·" + (isNaN(LPstring2.x8)?0:numberFormat4(LPstring2.x8)+ " + ") : '')
                                                + " = " 
                                                + chs4+ "\n"+
                                                (+chs4===+hs4 ?  "Slack er lig med " + numberFormat4(+chs4) + " - " + numberFormat4(+hs4) + 
                                                " = 0. Der er intet slack i bibetingelse 4, da højresiden er lig med "+ numberFormat4(+hs4)+ 
                                                ", resourcen i bibetingelse 4 er fuldt udnyttet.\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x4)?0:numberFormat4(LPstringDUAL.x4)) +", en ændring af højresiden på 1 enhed i bibetingelse 4, giver en ændring på netop skyggeprisen i Z-værdien. Bemærk ændringen i skyggeprisen, gælder ikke nødvendigvis i begge retninger og muligvis kun i et begrænset interval."

                                                :"Resourcen i bibetingelse 4 er ikke fuldt udnyttet, der er et slack på: "+ numberFormat4(+hs4)+ " - " +numberFormat4(+chs4)+
                                                " = "+ numberFormat4(+hs4-chs4)
                                                +"\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x4)?0:numberFormat4(LPstringDUAL.x4))+", en ændring af højresiden på 1 enhed i bibetingelse 4, giver derfor ingen ændring i Z-værdien.")
                                                }                                                                             
                                        </td>

                                        
                                    </tr>
                                }
                                { bibetingelser > 4 &&
                                    <tr>
                                        
                                        <td>Bibetingelse 5</td>
                                        <td>
                                            {bibet5}                                                                              
                                        </td>
                                        <td>
                                        {
                                                (fx51) + "X\u2081 + " 
                                                + (fx52) + "X\u2082 "
                                                + (variable > 2 ? " + " + (fx53) + "X\u2083" : '')
                                                + (variable > 3 ? " + " + (fx54) + "X\u2084" : '')
                                                + (variable > 4 ? " + " + (fx55) + "X\u2085" : '')
                                                + (variable > 5 ? " + " + (fx56) + "X\u2086" : '')
                                                + (variable > 6 ? " + " + (fx57) + "X\u2087" : '')
                                                + (variable > 7 ? " + " + (fx58) + "X\u2088" : '')
                                                + " = " 
                                                + (fx51) + "·"+(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1)+ " + ") 
                                                + (fx52) + "·" + (isNaN(LPstring2.x2)?0:numberFormat4(LPstring2.x2))
                                                + (variable > 2 ?  " + "+ (fx53) + "·" + (isNaN(LPstring2.x3)?0:numberFormat4(LPstring2.x3)+ " + ") : '')
                                                + (variable > 3 ? " + " + (fx54) + "·" + (isNaN(LPstring2.x4)?0:numberFormat4(LPstring2.x4)+ " + ") : '')
                                                + (variable > 4 ? " + " + (fx55) + "·" + (isNaN(LPstring2.x5)?0:numberFormat4(LPstring2.x5)+ " + ") : '')
                                                + (variable > 5 ? " + " + (fx56) + "·" + (isNaN(LPstring2.x6)?0:numberFormat4(LPstring2.x6)+ " + ") : '')
                                                + (variable > 6 ? " + " + (fx57)  + "·" + (isNaN(LPstring2.x7)?0:numberFormat4(LPstring2.x7)+ " + ") : '')
                                                + (variable > 7 ? " + " + (fx58)  + "·" + (isNaN(LPstring2.x8)?0:numberFormat4(LPstring2.x8)+ " + ") : '')
                                                + " = " 
                                                + chs5+ "\n"+
                                                (+chs5===+hs5 ?  "Slack er lig med " + numberFormat4(+chs5) + " - " + numberFormat4(+hs5) + 
                                                " = 0. Der er intet slack i bibetingelse 5, da højresiden er lig med "+ numberFormat4(+hs5)+ 
                                                ", resourcen i bibetingelse 5 er fuldt udnyttet.\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x5)?0:numberFormat4(LPstringDUAL.x5)) +", en ændring af højresiden på 1 enhed i bibetingelse 5, giver en ændring på netop skyggeprisen i Z-værdien. Bemærk ændringen i skyggeprisen, gælder ikke nødvendigvis i begge retninger og muligvis kun i et begrænset interval."

                                                :"Resourcen i bibetingelse 5 er ikke fuldt udnyttet, der er et slack på: "+ numberFormat4(+hs5)+ " - " +numberFormat4(+chs5)+
                                                " = "+ numberFormat4(+hs5-chs5)
                                                +"\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x5)?0:numberFormat4(LPstringDUAL.x5))+", en ændring af højresiden på 1 enhed i bibetingelse 5, giver derfor ingen ændring i Z-værdien.")

                                                }
                                                </td>
                                    </tr>
                                }
                                { bibetingelser > 5 &&
                                    <tr>
                                        
                                        <td>Bibetingelse 6</td>
                                        <td>
                                            {bibet6}                                                                              
                                        </td>   
                                        <td>
                                        {
                                                (fx61) + "X\u2081 + " 
                                                + (fx62) + "X\u2082 "
                                                + (variable > 2 ? " + " + (fx63) + "X\u2083" : '')
                                                + (variable > 3 ? " + " + (fx64) + "X\u2084" : '')
                                                + (variable > 4 ? " + " + (fx65) + "X\u2085" : '')
                                                + (variable > 5 ? " + " + (fx66) + "X\u2086" : '')
                                                + (variable > 6 ? " + " + (fx67) + "X\u2087" : '')
                                                + (variable > 7 ? " + " + (fx68) + "X\u2088" : '')
                                                + " = " 
                                                + (fx61) + "·"+(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1)+ " + ") 
                                                + (fx62) + "·" + (isNaN(LPstring2.x2)?0:numberFormat4(LPstring2.x2))
                                                + (variable > 2 ?  " + "+ (fx63) + "·" + (isNaN(LPstring2.x3)?0:numberFormat4(LPstring2.x3)+ " + ") : '')
                                                + (variable > 3 ? " + " + (fx64) + "·" + (isNaN(LPstring2.x4)?0:numberFormat4(LPstring2.x4)+ " + ") : '')
                                                + (variable > 4 ? " + " + (fx65) + "·" + (isNaN(LPstring2.x5)?0:numberFormat4(LPstring2.x5)+ " + ") : '')
                                                + (variable > 5 ? " + " + (fx66) + "·" + (isNaN(LPstring2.x6)?0:numberFormat4(LPstring2.x6)+ " + ") : '')
                                                + (variable > 6 ? " + " + (fx67)  + "·" + (isNaN(LPstring2.x7)?0:numberFormat4(LPstring2.x7)+ " + ") : '')
                                                + (variable > 7 ? " + " + (fx68)  + "·" + (isNaN(LPstring2.x8)?0:numberFormat4(LPstring2.x8)+ " + ") : '')
                                                + " = " 
                                                + chs6+ "\n"+
                                                (+chs6===+hs6 ?  "Slack er lig med " + numberFormat4(+chs6) + " - " + numberFormat4(+hs6) + 
                                                " = 0. Der er intet slack i bibetingelse 6, da højresiden er lig med "+ numberFormat4(+hs6)+ 
                                                ", resourcen i bibetingelse 6 er fuldt udnyttet.\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x6)?0:numberFormat4(LPstringDUAL.x6)) +", en ændring af højresiden på 1 enhed i bibetingelse 6, giver en ændring på netop skyggeprisen i Z-værdien. Bemærk ændringen i skyggeprisen, gælder ikke nødvendigvis i begge retninger og muligvis kun i et begrænset interval."

                                                :"Resourcen i bibetingelse 6 er ikke fuldt udnyttet, der er et slack på: "+ numberFormat4(+hs6)+ " - " +numberFormat4(+chs6)+
                                                " = "+ numberFormat4(+hs6-chs6)
                                                +"\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x6)?0:numberFormat4(LPstringDUAL.x6))+", en ændring af højresiden på 1 enhed i bibetingelse 6, giver derfor ingen ændring i Z-værdien.")

                                                }   
                                                </td>                                  
                                    </tr>
                                }
                                { bibetingelser > 6 &&
                                    <tr>
                                        
                                        <td>Bibetingelse 7</td>
                                        <td>
                                            {bibet7}                                                                              
                                        </td>       
                                        <td>
                                        {
                                                (fx71) + "X\u2081 + " 
                                                + (fx72) + "X\u2082 "
                                                + (variable > 2 ? " + " + (fx73) + "X\u2083" : '')
                                                + (variable > 3 ? " + " + (fx74) + "X\u2084" : '')
                                                + (variable > 4 ? " + " + (fx75) + "X\u2085" : '')
                                                + (variable > 5 ? " + " + (fx76) + "X\u2086" : '')
                                                + (variable > 6 ? " + " + (fx77) + "X\u2087" : '')
                                                + (variable > 7 ? " + " + (fx78) + "X\u2088" : '')
                                                + " = " 
                                                + (fx71) + "·"+(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1)+ " + ") 
                                                + (fx72) + "·" + (isNaN(LPstring2.x2)?0:numberFormat4(LPstring2.x2))
                                                + (variable > 2 ?  " + "+ (fx73) + "·" + (isNaN(LPstring2.x3)?0:numberFormat4(LPstring2.x3)+ " + ") : '')
                                                + (variable > 3 ? " + " + (fx74) + "·" + (isNaN(LPstring2.x4)?0:numberFormat4(LPstring2.x4)+ " + ") : '')
                                                + (variable > 4 ? " + " + (fx75) + "·" + (isNaN(LPstring2.x5)?0:numberFormat4(LPstring2.x5)+ " + ") : '')
                                                + (variable > 5 ? " + " + (fx76) + "·" + (isNaN(LPstring2.x6)?0:numberFormat4(LPstring2.x6)+ " + ") : '')
                                                + (variable > 6 ? " + " + (fx77)  + "·" + (isNaN(LPstring2.x7)?0:numberFormat4(LPstring2.x7)+ " + ") : '')
                                                + (variable > 7 ? " + " + (fx78)  + "·" + (isNaN(LPstring2.x8)?0:numberFormat4(LPstring2.x8)+ " + ") : '')
                                                + " = " 
                                                + chs7+ "\n"+
                                                (+chs7===+hs7 ?  "Slack er lig med " + numberFormat4(+chs7) + " - " + numberFormat4(+hs7) + 
                                                " = 0. Der er intet slack i bibetingelse 7, da højresiden er lig med "+ numberFormat4(+hs7)+ 
                                                ", resourcen i bibetingelse 7 er fuldt udnyttet.\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x7)?0:numberFormat4(LPstringDUAL.x7)) +", en ændring af højresiden på 1 enhed i bibetingelse 7, giver en ændring på netop skyggeprisen i Z-værdien. Bemærk ændringen i skyggeprisen, gælder ikke nødvendigvis i begge retninger og muligvis kun i et begrænset interval."

                                                :"Resourcen i bibetingelse 7 er ikke fuldt udnyttet, der er et slack på: "+ numberFormat4(+hs7)+ " - " +numberFormat4(+chs7)+
                                                " = "+ numberFormat4(+hs7-chs7)
                                                +"\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x7)?0:numberFormat4(LPstringDUAL.x7))+", en ændring af højresiden på 1 enhed i bibetingelse 7, giver derfor ingen ændring i Z-værdien.")

                                                }   
                                                </td>                                  
                                    </tr>
                                }
                                { bibetingelser > 7 &&
                                    <tr>
                                        
                                        <td>Bibetingelse 8</td>
                                        <td>
                                            {bibet8}                                                                              
                                        </td>             
                                        <td>
                                        {
                                                (fx81) + "X\u2081 + " 
                                                + (fx82) + "X\u2082 "
                                                + (variable > 2 ? " + " + (fx83) + "X\u2083" : '')
                                                + (variable > 3 ? " + " + (fx84) + "X\u2084" : '')
                                                + (variable > 4 ? " + " + (fx85) + "X\u2085" : '')
                                                + (variable > 5 ? " + " + (fx86) + "X\u2086" : '')
                                                + (variable > 6 ? " + " + (fx87) + "X\u2087" : '')
                                                + (variable > 7 ? " + " + (fx88) + "X\u2088" : '')
                                                + " = " 
                                                + (fx81) + "·"+(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1)+ " + ") 
                                                + (fx82) + "·" + (isNaN(LPstring2.x2)?0:numberFormat4(LPstring2.x2))
                                                + (variable > 2 ?  " + "+ (fx83) + "·" + (isNaN(LPstring2.x3)?0:numberFormat4(LPstring2.x3)+ " + ") : '')
                                                + (variable > 3 ? " + " + (fx84) + "·" + (isNaN(LPstring2.x4)?0:numberFormat4(LPstring2.x4)+ " + ") : '')
                                                + (variable > 4 ? " + " + (fx85) + "·" + (isNaN(LPstring2.x5)?0:numberFormat4(LPstring2.x5)+ " + ") : '')
                                                + (variable > 5 ? " + " + (fx86) + "·" + (isNaN(LPstring2.x6)?0:numberFormat4(LPstring2.x6)+ " + ") : '')
                                                + (variable > 6 ? " + " + (fx87)  + "·" + (isNaN(LPstring2.x7)?0:numberFormat4(LPstring2.x7)+ " + ") : '')
                                                + (variable > 7 ? " + " + (fx88)  + "·" + (isNaN(LPstring2.x8)?0:numberFormat4(LPstring2.x8)+ " + ") : '')
                                                + " = " 
                                                + chs8+ "\n"+
                                                (+chs8===+hs8 ?  "Slack er lig med " + numberFormat4(+chs8) + " - " + numberFormat4(+hs8) + 
                                                " = 0. Der er intet slack i bibetingelse 8, da højresiden er lig med "+ numberFormat4(+hs8)+ 
                                                ", resourcen i bibetingelse 8 er fuldt udnyttet.\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x8)?0:numberFormat4(LPstringDUAL.x8)) +", en ændring af højresiden på 1 enhed i bibetingelse 8, giver en ændring på netop skyggeprisen i Z-værdien. Bemærk ændringen i skyggeprisen, gælder ikke nødvendigvis i begge retninger og muligvis kun i et begrænset interval."

                                                :"Resourcen i bibetingelse 8 er ikke fuldt udnyttet, der er et slack på: "+ numberFormat4(+hs8)+ " - " +numberFormat4(+chs8)+
                                                " = "+ numberFormat4(+hs8-chs8)
                                                +"\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x8)?0:numberFormat4(LPstringDUAL.x8))+", en ændring af højresiden på 1 enhed i bibetingelse 8, giver derfor ingen ændring i Z-værdien.")

                                                }   
                                                </td>                           
                                    </tr>
                                }
                                { bibetingelser > 8 &&
                                    <tr>
                                        
                                        <td>Bibetingelse 9</td>
                                        <td>
                                            {bibet9}                                                                              
                                        </td>             
                                        <td>
                                        {
                                                (fx91) + "X\u2081 + " 
                                                + (fx92) + "X\u2082 "
                                                + (variable > 2 ? " + " + (fx93) + "X\u2083" : '')
                                                + (variable > 3 ? " + " + (fx94) + "X\u2084" : '')
                                                + (variable > 4 ? " + " + (fx95) + "X\u2085" : '')
                                                + (variable > 5 ? " + " + (fx96) + "X\u2086" : '')
                                                + (variable > 6 ? " + " + (fx97) + "X\u2087" : '')
                                                + (variable > 7 ? " + " + (fx98) + "X\u2088" : '')
                                                + " = " 
                                                + (fx91) + "·"+(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1)+ " + ") 
                                                + (fx92) + "·" + (isNaN(LPstring2.x2)?0:numberFormat4(LPstring2.x2))
                                                + (variable > 2 ?  " + "+ (fx93) + "·" + (isNaN(LPstring2.x3)?0:numberFormat4(LPstring2.x3)+ " + ") : '')
                                                + (variable > 3 ? " + " + (fx94) + "·" + (isNaN(LPstring2.x4)?0:numberFormat4(LPstring2.x4)+ " + ") : '')
                                                + (variable > 4 ? " + " + (fx95) + "·" + (isNaN(LPstring2.x5)?0:numberFormat4(LPstring2.x5)+ " + ") : '')
                                                + (variable > 5 ? " + " + (fx96) + "·" + (isNaN(LPstring2.x6)?0:numberFormat4(LPstring2.x6)+ " + ") : '')
                                                + (variable > 6 ? " + " + (fx97)  + "·" + (isNaN(LPstring2.x7)?0:numberFormat4(LPstring2.x7)+ " + ") : '')
                                                + (variable > 7 ? " + " + (fx98)  + "·" + (isNaN(LPstring2.x8)?0:numberFormat4(LPstring2.x8)+ " + ") : '')
                                                + " = " 
                                                + chs9+ "\n"+
                                                (+chs9===+hs9 ?  "Slack er lig med " + numberFormat4(+chs9) + " - " + numberFormat4(+hs9) + 
                                                " = 0. Der er intet slack i bibetingelse 9, da højresiden er lig med "+ numberFormat4(+hs9)+ 
                                                ", resourcen i bibetingelse 9 er fuldt udnyttet.\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x9)?0:numberFormat4(LPstringDUAL.x9)) +", en ændring af højresiden på 1 enhed i bibetingelse 9, giver en ændring på netop skyggeprisen i Z-værdien. Bemærk ændringen i skyggeprisen, gælder ikke nødvendigvis i begge retninger og muligvis kun i et begrænset interval."

                                                :"Resourcen i bibetingelse 9 er ikke fuldt udnyttet, der er et slack på: "+ numberFormat4(+hs9)+ " - " +numberFormat4(+chs9)+
                                                " = "+ numberFormat4(+hs9-chs9)
                                                +"\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x9)?0:numberFormat4(LPstringDUAL.x9))+", en ændring af højresiden på 1 enhed i bibetingelse 9, giver derfor ingen ændring i Z-værdien.")

                                                }   
                                                </td>                 
                                    </tr>
                                }
                                 { bibetingelser > 9 &&
                                    <tr>
                                        
                                        <td>Bibetingelse 10</td>
                                        <td>
                                            {bibet10}                                                                              
                                        </td>  
                                        <td>
                                        {
                                                (fx101) + "X\u2081 + " 
                                                + (fx102) + "X\u2082 "
                                                + (variable > 2 ? " + " + (fx103) + "X\u2083" : '')
                                                + (variable > 3 ? " + " + (fx104) + "X\u2084" : '')
                                                + (variable > 4 ? " + " + (fx105) + "X\u2085" : '')
                                                + (variable > 5 ? " + " + (fx106) + "X\u2086" : '')
                                                + (variable > 6 ? " + " + (fx107) + "X\u2087" : '')
                                                + (variable > 7 ? " + " + (fx108) + "X\u2088" : '')
                                                + " = " 
                                                + (fx101) + "·"+(isNaN(LPstring2.x1)?0:numberFormat4(LPstring2.x1)+ " + ") 
                                                + (fx102) + "·" + (isNaN(LPstring2.x2)?0:numberFormat4(LPstring2.x2))
                                                + (variable > 2 ?  " + "+ (fx103) + "·" + (isNaN(LPstring2.x3)?0:numberFormat4(LPstring2.x3)+ " + ") : '')
                                                + (variable > 3 ? " + " + (fx104) + "·" + (isNaN(LPstring2.x4)?0:numberFormat4(LPstring2.x4)+ " + ") : '')
                                                + (variable > 4 ? " + " + (fx105) + "·" + (isNaN(LPstring2.x5)?0:numberFormat4(LPstring2.x5)+ " + ") : '')
                                                + (variable > 5 ? " + " + (fx106) + "·" + (isNaN(LPstring2.x6)?0:numberFormat4(LPstring2.x6)+ " + ") : '')
                                                + (variable > 6 ? " + " + (fx107)  + "·" + (isNaN(LPstring2.x7)?0:numberFormat4(LPstring2.x7)+ " + ") : '')
                                                + (variable > 7 ? " + " + (fx108)  + "·" + (isNaN(LPstring2.x8)?0:numberFormat4(LPstring2.x8)+ " + ") : '')
                                                + " = " 
                                                + chs10+ "\n"+
                                                (+chs10===+hs10 ?  "Slack er lig med " + numberFormat4(+chs10) + " - " + numberFormat4(+hs10) + 
                                                " = 0. Der er intet slack i bibetingelse 10, da højresiden er lig med "+ numberFormat4(+hs10)+ 
                                                ", resourcen i bibetingelse 10 er fuldt udnyttet.\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x10)?0:numberFormat4(LPstringDUAL.x10)) +", en ændring af højresiden på 1 enhed i bibetingelse 10, giver en ændring på netop skyggeprisen i Z-værdien. Bemærk ændringen i skyggeprisen, gælder ikke nødvendigvis i begge retninger og muligvis kun i et begrænset interval."

                                                :"Resourcen i bibetingelse 10 er ikke fuldt udnyttet, der er et slack på: "+ numberFormat4(+hs10)+ " - " +numberFormat4(+chs10)+
                                                " = "+ numberFormat4(+chs10-hs10)
                                                +"\nSkyggeprisen bliver "+(isNaN(LPstringDUAL.x10)?0:numberFormat4(LPstringDUAL.x10))+", en ændring af højresiden på 1 enhed i bibetingelse 10, giver derfor ingen ændring i Z-værdien.")

                                                }   
                                                </td>                                       
                                    </tr>
                                }


                                </span>
                            </tbody>
                        </small>
                    </table>
                </div>
            </Container>


           

                </div >
                );
            }

            // var feasible = LPstring2.feasible
            // var bounded = LPstring2.bounded
            // var x1opt = (isNaN(LPstring2.x1)?0:LPstring2.x1)
            // var x2opt = (isNaN(LPstring2.x2)?0:LPstring2.x2)
            // var x3opt = LPstring2.x3
            // var x4opt = LPstring2.x4
            // var x5opt = LPstring2.x5
            // var x6opt = LPstring2.x6
            // var x7opt = LPstring2.x7
            // var x8opt = LPstring2.x8