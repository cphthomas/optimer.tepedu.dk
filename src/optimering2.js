import React, { useState, useEffect, useRef } from 'react';
import Toggle from './ToggleRenderProps';
import { Row, Col, Button, Alert } from 'react-bootstrap';
import 'chartjs-plugin-annotation';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './styles.css';
import {
  numberFormat1,
  numberFormat2,
  numberFormat3,
  numberFormat4,
  //numberFormat5,
  //numberFormat6,
} from './lib'; //ændrer til komma og pct + DKK
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import 'bootstrap/dist/css/bootstrap.min.css';

// import "katex/dist/katex.min.css";
// import { BlockMath } from "react-katex";
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/annotations')(Highcharts);
require('highcharts/highcharts-more')(Highcharts);

export function optimering2() {
  var [a, seta] = useState(+(-1).toFixed(2)); //?
  var [aop, setaop] = useState(+(-0.5).toFixed(2));
  var [bop, setbop] = useState(+(100).toFixed(2));
  var [aned, setaned] = useState(+(-1).toFixed(2));
  var [bned, setbned] = useState(+(125).toFixed(2));
  var [knækmængde, setknækmængde] = useState(+Infinity);
  const [ordre, setordre] = useState(+(20).toFixed(2));
  const [ordrepris, setordrepris] = useState(+(64).toFixed(2));
  var [ordremængde, setordremængde] = useState(+Infinity);
  const [b, setb] = useState(+(100).toFixed(2));
  const [ag, setag] = useState(+(0.5).toFixed(2));
  const [bg, setbg] = useState(+(50).toFixed(2));
  const [gskift, setgskift] = useState(+Infinity);
  const [ag2, setag2] = useState(+(0).toFixed(2));
  const [bg2, setbg2] = useState(+(0).toFixed(2));
  const [kap, setkap] = useState(+Infinity);
  const [reklame, setreklame] = useState(+(0).toFixed(2));
  const [showAlert, setShowAlert] = useState(false);
  const alertRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (alertRef.current && !alertRef.current.contains(event.target)) {
        setShowAlert(false);
      }
    };

    if (showAlert) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAlert]);

  var knækpris = aop * knækmængde + bop;

  var knækgromsop = 2 * aop * knækmængde + bop;
  var knækgromsned = 2 * aned * knækmængde + bned;
  var oxsecond = 0;  // Add declaration here

  if (reklame !== 0) {
    var audenreklame = a;
    a = a / (1 + reklame / 100);
    var reklamenævner = +100 + +reklame;
    var reklamenævnerdecimal = (+100 + +reklame) / 100;
  }
  var maxx, maxy;
  if (knækmængde === Infinity && ordremængde === Infinity) {
    if (+a === 0) {
        // Handle Perfect competition (P=b)
        if (kap !== Infinity) {
            maxx = kap * 1.1; // Base maxx on capacity
        } else {
             // Estimate intersection of P=b and GROMK1 for scaling, or use default
            let x_intersect_1 = ag !== 0 ? (b - bg) / ag : Infinity;
            maxx = x_intersect_1 > 0 && x_intersect_1 !== Infinity ? x_intersect_1 * 1.5 : 200;
        }
        // Calculate GROMK at maxx for maxy scaling
        let gromk_at_maxx;
        if (gskift === Infinity || maxx <= gskift) {
            gromk_at_maxx = ag * maxx + bg;
        } else {
             // Consider GROMK2 if gskift is relevant and maxx exceeds it
             gromk_at_maxx = ag2 * maxx + bg2;
        }
         maxy = Math.max(b, gromk_at_maxx) * 1.1; // Base maxy on price (b) and GROMK
         maxy = Math.max(maxy, b * 1.2, 10); // Ensure y-axis shows price level + margin, min 10
    } else {
        // Original logic for a !== 0
        maxx = -b / a; // P=0 intercept
        // Calculate GROMK at maxx for maxy scaling
        let gromk_at_maxx;
         if (gskift === Infinity || maxx <= gskift) {
            gromk_at_maxx = ag * maxx + bg;
        } else {
             gromk_at_maxx = ag2 * maxx + bg2;
        }
        maxy = Math.max(b, gromk_at_maxx) * 1.1; // Base maxy on P intercept and GROMK
        maxy = Math.max(maxy, 10); // Ensure minimum y-axis
    }
  } else { // Cases with knækmængde or ordremængde
    if (ordremængde !== Infinity) {
       if (+a === 0) {
           // Perfect competition (P=b) with ordre
           if (kap !== Infinity) {
                maxx = kap * 1.1; // Base on capacity
            } else {
                maxx = 200; // Default maxx if no capacity
            }
            // Calculate GROMK at maxx for maxy scaling
            let gromk_at_maxx;
             if (gskift === Infinity || maxx <= gskift) {
                 gromk_at_maxx = ag * maxx + bg;
             } else {
                 gromk_at_maxx = ag2 * maxx + bg2;
             }
            maxy = Math.max(b, ordrepris, gromk_at_maxx) * 1.1; // Base on b, ordrepris, GROMK
            maxy = Math.max(maxy, 10); // Ensure minimum y-axis
       } else {
            // Original logic for ordremængde !== Infinity and a !== 0
            maxx = -b / a + +ordre; // P=0 intercept plus ordre quantity
            // Calculate GROMK at maxx for maxy scaling
             let gromk_at_maxx;
             if (gskift === Infinity || maxx <= gskift) {
                 gromk_at_maxx = ag * maxx + bg;
             } else {
                 gromk_at_maxx = ag2 * maxx + bg2;
             }
             maxy = Math.max(b, ordrepris, gromk_at_maxx) * 1.1; // Base on b, ordrepris, GROMK
             maxy = Math.max(maxy, 10); // Ensure minimum y-axis
       }
    } else { // knækmængde !== Infinity (oligopoly case, doesn't depend on 'a')
      maxx = -bned / aned; // Uses Pned=0 intercept
       // Calculate GROMK at maxx for maxy scaling
       let gromk_at_maxx;
       if (gskift === Infinity || maxx <= gskift) {
           gromk_at_maxx = ag * maxx + bg;
       } else {
           gromk_at_maxx = ag2 * maxx + bg2;
       }
       maxy = Math.max(bop, bned, gromk_at_maxx) * 1.1; // Base on bop, bned, GROMK
       maxy = Math.max(maxy, 10); // Ensure minimum y-axis
    }
  }
  // Ensure maxx is at least slightly positive
  maxx = Math.max(maxx > 0 ? maxx : 10, 10);

  var ordreknæk1 = (+ordrepris - b) / (2 * a);
  var oxfirst, ox1;
  if (knækmængde === Infinity && ordremængde === Infinity) {
    if (a === 0) {
      // For perfect competition (a=0)
      if (gskift === Infinity) {
        // Only one GROMK curve
        ox1 = Math.min(Math.max(0, (b - bg) / ag), kap);
      } else {
        // Two GROMK curves - find valid intersections
        let valid_x = [];
        
        // Check GROMK1 intersection if price is above or equal to GROMK1
        if (b >= bg) {
          let x = (b - bg) / ag;
          if (x >= 0 && x <= gskift) {
            valid_x.push(x);
          }
        }
        
        // Check GROMK2 intersection if price is above or equal to GROMK2
        if (b >= bg2) {
          let x = (b - bg2) / ag2;
          if (x > gskift) {
            valid_x.push(x);
          }
        }
        
        // If no valid intersections but price is above GROMK1 at gskift,
        // use gskift as optimal quantity
        if (valid_x.length === 0 && b >= ag * gskift + bg) {
          valid_x.push(gskift);
        }
        
        // Choose the largest valid intersection point, but respect capacity limit
        ox1 = valid_x.length > 0 ? Math.min(Math.max(...valid_x), kap) : 0;
      }
      oxfirst = ox1;
    } else {
      // Original logic for a ≠ 0
      oxfirst = Math.max(0, (bg - b) / (2 * a - ag));
      ox1 = Math.max(0, Math.min(2 * a < ag ? (bg - b) / (2 * a - ag) : kap, gskift, (-0.5 * b) / a, +kap));
    }
  }
  if (ordremængde !== Infinity) {
    oxfirst = Math.max(0, (bg - b) / (2 * a - ag));
    ox1 = Math.max(
      0,
      Math.min(
        (bg - b) / (2 * a - ag) <= ordreknæk1 ? (+bg - b) / (2 * a - ag) : +kap,

        (bg - b) / (2 * a - ag) > ordreknæk1 && (b - 2 * a * ordremængde - bg) / (ag - 2 * a) <= ordreknæk1 + +ordre
          ? (ordrepris - bg) / ag
          : +kap,

        (b - 2 * a * ordremængde - bg) / (ag - 2 * a) > +ordreknæk1 + +ordre
          ? (b - 2 * a * +ordre - bg) / (ag - 2 * a)
          : +kap,
        -(b - 2 * a * ordre) / (2 * a),
        gskift,

        +kap
      )
    );
  }

  if (+knækmængde !== Infinity && ordremængde === Infinity) {
    if (ag * +knækmængde + bg > +knækgromsop) {
      oxfirst = Math.max(0, (bg - +bop) / (2 * +aop - ag));
      ox1 = Math.max(0, Math.min((bg - +bop) / (2 * +aop - ag), (-0.5 * bop) / aop, +gskift, +kap));
    } else {
      if (ag * knækmængde + bg < knækgromsned && ordremængde === Infinity) {
        oxfirst = Math.max(0, (bg - bned) / (2 * aned - ag));
        ox1 = Math.max(
          0,
          Math.min(
            2 * aned < +ag ? (bg - +bned) / (2 * aned - ag) : +kap,
            Math.max(knækmængde, (-0.5 * bned) / aned),
            gskift,
            +kap
          )
        );
      } else {
        ox1 = Math.max(0, Math.min(knækmængde, (-0.5 * bop) / aop, gskift, +kap));
      }
    }
  }

  var ox2;
  if (gskift < Infinity) {
    if (knækmængde === Infinity) {
      if (a === 0) {
        // For perfect competition with two GROMK curves
        ox2 = Math.max(0, (b - bg2) / ag2);  // Intersection of P=b and GROMK2
        oxsecond = ox2;  // Remove var keyword since it's already declared
      } else {
        ox2 = Math.max(0, Math.min(2 * a < +ag2 ? (bg2 - b) / (2 * a - ag2) : +kap, -b / (2 * a), +kap));
        oxsecond = (bg2 - b) / (2 * a - ag2);
      }
    }
    if (knækmængde !== Infinity) {
      if (
        (bg2 - bned) / (2 * aned - ag2) > knækmængde &&
        (bg2 - bned) / (2 * aned - ag2) > gskift &&
        (bg2 - bned) / (2 * aned - ag2) <= (-0.5 * bned) / aned
      ) {
        ox2 = Math.max(
          0,
          Math.min(
            (bg2 - bned) / (2 * aned - ag2),
            -bned / (2 * aned),

            +kap
          )
        );
      } else {
        if (ag2 * knækmængde + bg2 <= knækgromsop && ag2 * knækmængde + bg2 >= knækgromsned) {
          ox2 = knækmængde;
        } else {
          if ((bg2 - bned) / (2 * aned - ag2) < knækmængde) {
            ox2 = Math.max(
              0,
              Math.min(
                (bg2 - bop) / (2 * aop - ag2),

                +kap
              )
            );
          } else {
            ox2 = 0;
          }
        }
      }
    }

    if (ordremængde !== Infinity) {
      if ((bg2 - b) / (2 * a - ag2) <= ordreknæk1) {
        ox2 = Math.max(0, Math.min((bg2 - b) / (2 * a - ag2), -b / (2 * a), +kap));
      }
      if ((bg2 - b) / (2 * a - ag2) > +ordreknæk1 && (+ordrepris - bg2) / ag2 <= +ordreknæk1 + +ordre) {
        ox2 = (+ordrepris - bg2) / ag2;
      }
      if ((b - 2 * a * ordre - bg2) / (ag2 - 2 * a) > +ordreknæk1 + +ordre) {
        ox2 = Math.max(0, Math.min((b - 2 * a * ordre - bg2) / (ag2 - 2 * a), -(b - 2 * a * ordre) / (2 * a), +kap));
      }
    }
  } else {
    ox2 = 0;
  }
  var tvo1, tr1, tvo2, tr2, op1, op2, op;
  op2 = -Infinity;
  tr2 = -Infinity;
  tvo2 = Infinity;
  if (gskift !== Infinity) {
    if (ox1 <= gskift) {
      tvo1 = (0.5 * ag * ox1 + bg) * ox1;
    }
    if (ox1 === gskift) {
      tvo1 = (0.5 * ag * gskift + bg) * gskift;
    }
    if (ox2 < gskift) {
      tvo2 = Infinity;
    }

    if (ox1 > gskift) {
      tvo1 = Infinity;
    }
    if (ox2 > gskift) {
      if (knækmængde === Infinity) {
        if (a === 0) {
          op2 = b;  // Price is constant in perfect competition
          tr2 = b * ox2;  // Total revenue
        } else {
          op2 = a * ox2 + b;
          tr2 = op2 * ox2;
        }
      }
      tvo2 = gskift * (0.5 * ag * gskift + bg) + (ox2 - gskift) * (0.5 * ag2 * ox2 + 0.5 * ag2 * gskift + bg2);
    }
  } else {
    tvo1 = (0.5 * ag * ox1 + bg) * ox1;
  }

  if (knækmængde !== Infinity) {
    if (ox1 <= knækmængde) {
      op1 = aop * ox1 + bop;
      tr1 = op1 * ox1;
    }
    if (ox2 <= knækmængde) {
      op2 = aop * ox2 + bop;
      tr2 = op2 * ox2;
    }
    if (ox1 > knækmængde) {
      op1 = aned * ox1 + bned;
      tr1 = op1 * ox1;
    }
    if (ox2 > knækmængde) {
      op2 = aned * ox2 + bned;
      tr2 = op2 * ox2;
    }
  }
  if (ordremængde !== Infinity && knækmængde === Infinity) {
    if (ox1 <= ordreknæk1) {
      op1 = a * ox1 + b;
      tr1 = op1 * ox1;
    }
    if (ox1 > +ordreknæk1 && ox1 < +ordreknæk1 + +ordre) {
      op1 = ordrepris;
      tr1 = ordreknæk1 * (a * ordreknæk1 + b) + ordrepris * (ox1 - ordreknæk1);
    }
    if (ox1 >= +ordreknæk1 + +ordre) {
      op1 = a * (ox1 - ordre) + b;
      tr1 = op1 * (ox1 - ordre) + ordrepris * ordre;
    }

    //########## Her skal skrives hvad ox2 op2 etc husk kun hvis knækmængde <

    // if (ox2 <= knækmængde) {
    //   op2 = aop * ox2 + bop;
    //   tr2 = op2 * ox2;
    // }

    // if (ox2 > knækmængde) {
    //   op2 = aned * ox2 + bned;
    //   tr2 = op2 * ox2;
    // }
  }

  if (ordremængde !== Infinity && gskift < Infinity) {
    if (ox2 <= ordreknæk1) {
      op2 = a * ox2 + b;
      tr2 = op2 * ox2;
    }
    if (ox2 > +ordreknæk1 && ox2 < +ordreknæk1 + +ordre) {
      op2 = ordrepris;
      tr2 = ordreknæk1 * (a * ordreknæk1 + b) + ordrepris * (ox2 - ordreknæk1);
    }
    if (ox2 >= +ordreknæk1 + +ordre) {
      op2 = a * (ox2 - ordre) + b;
      tr2 = op2 * (ox2 - ordre) + ordrepris * ordre;
    }

    //########## Her skal skrives hvad ox2 op2 etc husk kun hvis knækmængde <

    // if (ox2 <= knækmængde) {
    //   op2 = aop * ox2 + bop;
    //   tr2 = op2 * ox2;
    // }

    // if (ox2 > knækmængde) {
    //   op2 = aned * ox2 + bned;
    //   tr2 = op2 * ox2;
    // }
  }

  if (knækmængde === Infinity && ordremængde === Infinity) {
    if (a === 0) {
      op1 = b;  // Price is constant in perfect competition
      tr1 = b * ox1;  // Total revenue
      tvo1 = (0.5 * ag * ox1 + bg) * ox1;  // Total variable cost for GROMK1
    } else {
      op1 = a * ox1 + b;
      tr1 = op1 * ox1;
    }
  }
  var dbfinal, tr, tvo, ox;
  var db1 = tr1 - tvo1;
  var db2;
  if (knækmængde < Infinity || gskift < Infinity) {
    db2 = tr2 - tvo2;
  } else {
    db2 = -Infinity;
  }
  if (db1 >= db2) {
    ox = ox1;
    op = op1;
    dbfinal = db1;
    tvo = tvo1;
    tr = tr1;
  } else {
    ox = ox2;
    op = op2;
    dbfinal = db2;
    tvo = tvo2;
    tr = tr2;
  }
  var ove = tvo / ox;

  // ################################################################################################################################################################

  var outside1;
  if ((b - bg) / (ag - 2 * a) < 0 || (b - bg) / (ag - 2 * a) > gskift) {
    outside1 = true;
  } else {
    outside1 = false;
  }

  var outside2;
  if (oxsecond < gskift || oxsecond > (0.5 * -b) / a) {
    outside2 = true;
  } else {
    outside2 = false;
  }

  var gromkdata, gromknavn;
  if (gskift < Infinity) {
    if (a === 0) {
      // For perfect competition, extend to a reasonable x-value
      let max_x = Math.max(maxx, 2 * Math.max(ox1, ox2));
      gromkdata = [
        [0, bg],
        [+gskift, ag * +gskift + bg],
        [gskift, ag2 * gskift + bg2],
        [max_x, ag2 * max_x + bg2],
      ];
    } else {
      gromkdata = [
        [0, bg],
        [+gskift, ag * +gskift + bg],
        [gskift, ag2 * gskift + bg2],
        [Math.max((-bned * 2) / +aned, (-b * 2) / a), ag2 * Math.max((-bned * 2) / +aned, (-b * 2) / a) + bg2],
      ];
    }
  } else {
    if (a === 0) {
      // For perfect competition with one GROMK curve
      let max_x = Math.max(maxx, 2 * ox1);
      gromkdata = [
        [0, bg],
        [max_x, ag * max_x + bg]
      ];
    } else {
      gromkdata = [
        [0, bg],
        [Math.max((-bned * 2) / +aned, (-b * 2) / a), ag * Math.max((-bned * 2) / +aned, (-b * 2) / a) + bg],
      ];
    }
  }
  gromknavn = 'GROMK';

  var skær2;
  if (ox1 > 0 && ox1 < Infinity && ox1 !== gskift && ox2 > 0 && ox2 < Infinity) {
    skær2 = 1;
  } else {
    skær2 = 0;
  }
  // var tvo;
  // gskift === Infinity
  //   ? (tvo = ove * ox)
  //   : ox < gskift
  //   ? (tvo = (ox * (ag * ox + bg + bg)) / 2)
  //   : (tvo =
  //       (gskift * (ag * gskift + bg + bg)) / 2 +
  //       (ox - gskift) * ((ag2 * gskift + bg2 + ag2 * ox + bg2) / 2));

  var optimalx = ox.toFixed(2);
  var optimalp = op; //rettes op.toFixed(2)

  var avcligning;
  if (ag !== 0) {
    avcligning = numberFormat4(0.5 * ag).concat('X + ', bg);
  } else {
    avcligning = bg;
  }

  var gromkligning;
  if (ag !== 0) {
    gromkligning = numberFormat4(ag).concat('X + ', bg);
  } else {
    gromkligning = bg;
  }

  var gromkligning2;
  if (ag2 !== 0) {
    gromkligning2 = numberFormat4(ag2).concat('X + ', bg2);
  } else {
    gromkligning2 = bg2;
  }

  var gromkligningkort;
  if (ag !== 0) {
    gromkligningkort = '';
  } else {
    gromkligningkort = ' = ' + bg;
  }

  var tvoligning2;
  if (ag !== 0) {
    tvoligning2 = '';
  } else {
    tvoligning2 = ' = ' + bg + 'X';
  }

  var knækgroms;
  if (knækgromsned > 0) {
    knækgroms = [
      [0, +bop],
      [knækmængde, knækgromsop],
      [knækmængde, knækgromsned],
      [(-0.5 * bned) / aned, 0],
    ];
  } else {
    knækgroms = [
      [0, +bop],
      [knækmængde, knækgromsop],
      [knækmængde, knækgromsned],
    ];
  }

  var optionshighcharts = {
    title: {
      text:
        'P\u1D52\u1D56\u1D57=' +
        numberFormat1(op) +
        ' X\u1D52\u1D56\u1D57=' +
        numberFormat3(ox) +
        ' stk. DB\u1D52\u1D56\u1D57=' +
        numberFormat1(dbfinal),
    },
    exporting: {
      buttons: {
        contextButton: {
          menuItems: [
            'viewFullscreen',
            'separator',
            // "downloadPNG",
            'downloadPDF',
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
          // backgroundColor: "rgba(255,255,255,1)",
          // backgroundColor: "rgba(252, 255, 197, 1)",
          // verticalAlign: "top",
          padding: 2,

          style: {
            fontSize: '0.6em',
          },
        },
        labels: [
          {
            // align: "left",
            point: {
              xAxis: 0,
              yAxis: 0,
              x: Math.min(0.5 * +ox1, 0.5 * +gskift),
              y: +ag * Math.min(0.5 * +ox1, 0.5 * +gskift) + bg,
            },
            text: gromknavn + '=' + gromkligning,
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: 'red',
            style: { color: 'white' },
          },
          {
            point: {
              xAxis: 0,
              yAxis: 0,
              x: Math.max((gskift + -bned / aned) / 2, (gskift + -b / a) / 2),
              y: (+ag2 * Math.max((gskift + -bned / aned) / 2, (gskift + -b / a) / 2)) / 2 + bg2,
            },
            text: 'GROMK\u2082=' + gromkligning2,
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: 'red',
            style: { color: 'white' },
          },
        ],
      },
      {
        labelOptions: {
          shape: 'connector',
          align: 'right',
          justify: false,
          crop: true,
          style: {
            fontSize: '0.8em',
            textOutline: '0px white',
          },
        },
        labels: [
          {
            point: {
              xAxis: 0,
              yAxis: 0,
              x: ox,
              y: 0,
            },
            text: 'X\u1D52\u1D56\u1D57<br>' + numberFormat3(ox) + ' stk.',
          },
        ],
      },
    ],
    xAxis: {
      title: {
        text: 'Afsætning',
      },
      gridLineWidth: 1,
      min: 0,
      max: maxx,
      labels: {
        format: '{value} stk.',
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      min: 0,
      max: maxy,
      labels: {
        format: '{value} DKK.',
      },
    },
    series: [
      {
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 3,
        },
        name: 'Optimal P',
        data: [[ox.toFixed(2), +op]], //ret op.toFixed(2)
      },

      {
        type: 'line',
        color: 'red',

        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
        },
        name: 'GROMK',
        data: gromkdata,
      },

      {
        type: 'line',
        color: 'black',
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
        },
        dashStyle: 'ShortDot',
        name: 'Optimal P',
        data: [
          [0, +op],
          [+ox.toFixed(2), +op], //ret op.toFixed(2)
        ],
      },
      {
        type: 'line',
        color: 'black',
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
        },
        dashStyle: 'ShortDot',
        name: 'Optimal X',
        data: [
          [+ox.toFixed(2), +op], //ret op.toFixed(2)
          [+ox.toFixed(2), 0],
        ],
      },
    ],
  };

  if (gskift === Infinity && knækmængde === Infinity && ordremængde === Infinity) {
    // Plot VE curve
    optionshighcharts.series.push({
      type: 'line',
      color: 'grey',
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
      },
      name: 'VE',
      data: [
        [0, bg], // Start at (0, bg)
        // End at (maxx, VE(maxx))
        [maxx, 0.5 * ag * maxx + bg], // Use calculated maxx
      ],
    });

    // Remove the potentially confusing GROMS=GROMK intersection line
    // optionshighcharts.series.push({
    //   type: 'line',
    //   color: 'black',
    //   dashStyle: 'ShortDot',
    //   marker: {
    //     enabled: false,
    //     symbol: 'circle',
    //     radius: 2,
    //   },
    //   name: 'GROMS=GROMK',
    //   data: [
    //     [0, ag * oxfirst + bg],
    //     [oxfirst, ag * oxfirst + bg],
    //   ],
    // });

    // Update VE annotation position
    optionshighcharts.annotations.push({
      labelOptions: {
        padding: 2,
        style: {
          fontSize: '0.6em',
        },
      },
      labels: [
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            // Position annotation towards the end of the VE line
            x: maxx * 0.9, // Use calculated maxx
            y: 0.5 * ag * (maxx * 0.9) + bg, // Calculate y based on x
          },
          text: 'VE=' + avcligning,
          borderWidth: 0,
          borderColor: 'grey',
          backgroundColor: 'grey',
          style: { color: 'white' },
        },
      ],
    });
  }
  //Kapacitetlinje

  optionshighcharts.series.push({
    type: 'line',
    dashStyle: 'Solid',
    color: 'orange',
    marker: {
      enabled: false,
      symbol: 'circle',
      radius: 0,
    },
    name: 'Kapacitet',
    data: [
      [+kap, 0],
      [+kap, b],
    ],
  });
  optionshighcharts.annotations.push({
    labelOptions: {
      padding: 2,
      style: {
        fontSize: '0.6em',
      },
    },
    labels: [
      {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: +kap,
          y: b * 0.9,
        },
        text: 'Kapacitet ' + +kap + ' Stk.',
        borderWidth: 0,
        // borderColor: "red",
        backgroundColor: 'orange',
        style: { color: 'black' },
      },
    ],
  });

  if (+reklame !== 0 && knækmængde === Infinity && ordremængde === Infinity) {
    optionshighcharts.series.push({
      id: 'series-22312',
      type: 'line',
      color: 'lightgrey',
      dashStyle: 'ShortDot',
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
      },
      name: 'Før afsætningsændring',
      data: [
        [0, b],
        [-b / (a * (1 + reklame / 100)), 0],
      ],
    });
    optionshighcharts.annotations.push({
      id: 'anno-2',
      labelOptions: {
        padding: 2,
        style: {
          fontSize: '0.6em',
        },
      },
      labels: [
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: -b / (2 * a * (1 + reklame / 100)),
            y: (a * (1 + reklame / 100) * -b) / (2 * a * (1 + reklame / 100)) + b,
          },
          text: 'Før<br /> ændring',
          borderWidth: 0,
          borderColor: 'lightgrey',
          backgroundColor: 'lightgrey',
          style: { color: 'black' },
        },
      ],
    });
  }

  //Kapacitetlinje
  if (+knækmængde !== Infinity) {
    optionshighcharts.series.push({
      type: 'line',
      color: 'green',
      dashStyle: 'Solid',
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
      },
      name: 'P',
      data: [
        [0, +bop],
        [knækmængde, knækpris],
        [-bned / aned, 0],
      ],
    });
    optionshighcharts.annotations.push({
      labelOptions: {
        padding: 2,
        style: {
          fontSize: '0.6em',
        },
      },
      labels: [
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: knækmængde / 2,
            y: aop * (knækmængde / 2) + bop,
          },
          text: 'P\u006F\u0070 = ' + aop + 'X + ' + bop,
          borderWidth: 0,
          borderColor: 'green',
          backgroundColor: 'green',
          style: { color: 'white' },
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: (knækmængde + -bned / aned) / 2,
            y: aned * ((knækmængde + -bned / aned) / 2) + bned,
          },
          text: 'P\u006E\u0065\u0064 = ' + aned + 'X + ' + bned,
          borderWidth: 0,
          borderColor: 'green',
          backgroundColor: 'green',
          style: { color: 'white' },
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: knækmængde / 2,
            y: 2 * aop * (knækmængde / 2) + bop,
          },
          text: 'GROMS\u006F\u0070 = ' + 2 * aop + 'X + ' + bop,
          borderWidth: 0,
          borderColor: 'lightgreen',
          backgroundColor: 'lightgreen',
          style: { color: 'black' },
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: (knækmængde + (-0.5 * bned) / aned) / 2,
            y: 2 * aned * ((knækmængde + (-0.5 * bned) / aned) / 2) + bned,
          },
          text: 'GROMS\u006E\u0065\u0064 = ' + 2 * aned + 'X + ' + bned,
          borderWidth: 0,
          borderColor: 'lightgreen',
          backgroundColor: 'lightgreen',
          style: { color: 'black' },
        },
      ],
    });
    optionshighcharts.series.push({
      type: 'line',
      dashStyle: 'Solid',
      color: 'lightgreen',
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
      },
      name: 'GROMS',
      data: knækgroms,
    });
  }

  if (ordremængde === Infinity) {
    optionshighcharts.annotations.push({
      labels: [
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 0,
            y: op,
          },
          text: 'P\u1D52\u1D56\u1D57<br>' + numberFormat1(op),
          shape: 'connector',
          style: { color: 'black', fontSize: '0.8em' },
        },
      ],
    });
  }

  if (knækmængde === Infinity && ordremængde === Infinity) {
    // Plot P and GROMS curves
    if (+a === 0) {
      // Case: Perfect Competition (a=0 => P=b, GROMS=b)
      optionshighcharts.series.push({
        type: 'line',
        dashStyle: 'Solid',
        color: 'green',
        marker: { enabled: false },
        name: 'P = GROMS = b',
        data: [
          [0, b],
          [maxx, b], // Use calculated maxx
        ],
      });

      // Add GROMK curves for perfect competition
      if (gskift !== Infinity) {
        // First GROMK curve (before gskift)
        optionshighcharts.series.push({
          type: 'line',
          color: 'red',
          marker: { enabled: false },
          name: 'GROMK1',
          data: [
            [0, bg],
            [gskift, ag * gskift + bg],
          ],
        });

        // Second GROMK curve (after gskift)
        optionshighcharts.series.push({
          type: 'line',
          color: 'red',
          marker: { enabled: false },
          name: 'GROMK2',
          data: [
            [gskift, ag2 * gskift + bg2],
            [maxx, ag2 * maxx + bg2],
          ],
        });

        // Add annotations for P=b and both GROMK curves
        optionshighcharts.annotations.push({
          labelOptions: { padding: 2, style: { fontSize: '0.6em' } },
          labels: [
            {
              point: { xAxis: 0, yAxis: 0, x: maxx * 0.9, y: b * 1.05 },
              text: 'P = GROMS = ' + numberFormat4(b),
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'green',
              style: { color: 'white' },
            },
            {
              point: { xAxis: 0, yAxis: 0, x: gskift * 0.5, y: (ag * gskift * 0.5 + bg) * 1.05 },
              text: 'GROMK1 = ' + numberFormat4(ag) + 'X + ' + numberFormat4(bg),
              borderWidth: 0,
              backgroundColor: 'red',
              style: { color: 'white' },
            },
            {
              point: { xAxis: 0, yAxis: 0, x: (gskift + maxx) * 0.5, y: (ag2 * (gskift + maxx) * 0.5 + bg2) * 1.05 },
              text: 'GROMK2 = ' + numberFormat4(ag2) + 'X + ' + numberFormat4(bg2),
              borderWidth: 0,
              backgroundColor: 'red',
              style: { color: 'white' },
            },
          ],
        });
      } else {
        // Single GROMK curve
        optionshighcharts.series.push({
          type: 'line',
          color: 'red',
          marker: { enabled: false },
          name: 'GROMK',
          data: [
            [0, bg],
            [maxx, ag * maxx + bg],
          ],
        });

        // Add annotations for P=b and GROMK
        optionshighcharts.annotations.push({
          labelOptions: { padding: 2, style: { fontSize: '0.6em' } },
          labels: [
            {
              point: { xAxis: 0, yAxis: 0, x: maxx * 0.9, y: b * 1.05 },
              text: 'P = GROMS = ' + numberFormat4(b),
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'green',
              style: { color: 'white' },
            },
            {
              point: { xAxis: 0, yAxis: 0, x: maxx * 0.8, y: (ag * maxx * 0.8 + bg) * 1.05 },
              text: 'GROMK = ' + numberFormat4(ag) + 'X + ' + numberFormat4(bg),
              borderWidth: 0,
              backgroundColor: 'red',
              style: { color: 'white' },
            },
          ],
        });
      }
    } else {
      // Case: Imperfect Competition (a != 0)
      optionshighcharts.series.push({
        type: 'line',
        dashStyle: 'Solid',
        color: 'lightgreen',
        marker: { enabled: false },
        name: 'GROMS',
        data: [
          [0, b],
          // Plot until GROMS hits 0 or reaches maxx
          [Math.min(maxx, (-0.5 * b) / a > 0 ? (-0.5*b)/a : maxx), Math.max(0, 2 * a * Math.min(maxx, (-0.5 * b) / a > 0 ? (-0.5*b)/a : maxx) + b)],
        ],
      });
      optionshighcharts.series.push({
        type: 'line',
        dashStyle: 'Solid',
        color: 'green',
        marker: { enabled: false },
        name: 'P',
        data: [
          [0, b],
           // Plot until P hits 0 or reaches maxx
          [Math.min(maxx, (-b / a) > 0 ? (-b/a) : maxx), Math.max(0, a * Math.min(maxx, (-b / a) > 0 ? (-b/a) : maxx) + b)],
        ],
      });

      optionshighcharts.annotations.push({
        labelOptions: { padding: 2, style: { fontSize: '0.6em' } },
        labels: [
          {
            point: { xAxis: 0, yAxis: 0, x: Math.min(maxx, (-0.5 * b) / a > 0 ? (-0.5*b)/a : maxx) * 0.8, y: (2 * a * Math.min(maxx, (-0.5 * b) / a > 0 ? (-0.5*b)/a : maxx) * 0.8 + b) * 1.05 }, // Adjusted position
            text: 'GROMS=' + numberFormat4(2 * a) + 'X+' + numberFormat4(b),
            borderWidth: 0,
            backgroundColor: 'lightgreen',
            style: { color: 'black' },
            borderRadius: 5,
          },
          {
            point: { xAxis: 0, yAxis: 0, x: Math.min(maxx, (-b / a) > 0 ? (-b/a) : maxx) * 0.9, y: (a * Math.min(maxx, (-b / a) > 0 ? (-b/a) : maxx) * 0.9 + b) * 1.05 }, // Adjusted position
            text: 'P=' + numberFormat4(a) + 'X+' + numberFormat4(b),
            borderWidth: 1,
            borderColor: 'green',
            backgroundColor: 'green',
            style: { color: 'white' },
          },
        ],
      });
    }
  }

  if (+ordremængde !== Infinity) {
    optionshighcharts.series.push({
      type: 'line',
      dashStyle: 'Solid',
      color: 'lightgreen',
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
      },
      name: 'GROMS før ordre',
      data: [
        [0, +b],
        [+ordreknæk1, +ordrepris],
        // [+ordreknæk1 + +ordremængde, +ordrepris],
        // [+ordremængde + -b / (2 * a), 0],
      ],
    });
    optionshighcharts.series.push({
      type: 'line',
      color: 'yellow',
      dashStyle: 'Solid',
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
      },
      name: 'GROMS ordre',
      data: [
        [+ordreknæk1, +ordrepris],
        [+ordreknæk1 + +ordremængde, +ordrepris],
      ],
    });
    optionshighcharts.series.push({
      type: 'line',
      color: 'green',
      dashStyle: 'Solid',
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
      },
      name: 'P før ordre',
      data: [
        [0, b],
        [+ordreknæk1, a * +ordreknæk1 + b],
      ],
    });

    optionshighcharts.series.push({
      type: 'line',
      color: 'green',
      dashStyle: 'Solid',
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
      },
      name: 'P efter ordre',
      data: [
        [+ordreknæk1 + +ordre, a * +ordreknæk1 + b],
        [-b / a + +ordre, 0],
      ],
    });

    optionshighcharts.series.push({
      type: 'line',
      color: 'lightgreen',
      dashStyle: 'Solid',
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
      },
      name: 'GROMS efter ordre',
      data: [
        [+ordreknæk1 + +ordremængde, +ordrepris],
        [+ordremængde + -b / (2 * a), 0],
      ],
    });

    optionshighcharts.series.push({
      type: 'line',
      dashStyle: 'ShortDot',
      color: 'lightgreen',
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
      },
      name: 'GROMS uden ordre',
      data: [
        [0, b],
        [-b / (2 * a), 0],
      ],
    });

    optionshighcharts.annotations.push({
      labelOptions: {
        padding: 2,
        style: {
          fontSize: '0.6em',
        },
      },
      labels: [
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: (+ordremængde + +ordreknæk1 + +ordreknæk1) / 2,
            y: +ordrepris,
          },
          text: 'Ordre på ' + +ordre + ' Stk. af ' + numberFormat1(+ordrepris),
          borderWidth: 0,
          // borderColor: "red",
          backgroundColor: 'yellow',
          style: { color: 'black' },
        },

        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: +ordreknæk1 * 0.8,
            y: 2 * a * (+ordreknæk1 * 0.8) + b,
          },
          text: 'Groms\u2071\u207F\u1D48\u1D49\u207F=' + numberFormat2(2 * +a) + 'X + ' + numberFormat2(+b),
          borderWidth: 0,
          borderColor: 'lightgreen',
          backgroundColor: 'lightgreen',
          style: { color: 'black' },
        },

        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: +ordreknæk1 * 0.8,
            y: a * (+ordreknæk1 * 0.8) + b,
          },
          text: 'P\u2071\u207F\u1D48\u1D49\u207F=' + numberFormat2(+a) + 'X + ' + numberFormat2(+b),
          borderWidth: 0,
          borderColor: 'green',
          backgroundColor: 'green',
          style: { color: 'white' },
        },

        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: (+ordreknæk1 + +ordre) * 1.2,
            y: 2 * a * (+ordreknæk1 + +ordre) * 1.2 + b + ordre * 2 * -a,
            // y: 50,
          },
          text:
            'Groms\u1D49\u1da0\u1D57\u1D49\u02B3=' + numberFormat2(2 * +a) + 'X + ' + numberFormat2(b + ordre * 2 * -a),
          borderWidth: 0,
          borderColor: 'lightgreen',
          backgroundColor: 'lightgreen',
          style: { color: 'black' },
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: (+ordreknæk1 + +ordre) * 1.2,
            y: a * (+ordreknæk1 + +ordre) * 1.2 + b + ordre * -a,
            // y: 50,
          },
          text: 'P\u1D49\u1da0\u1D57\u1D49\u02B3=' + numberFormat2(+a) + 'X + ' + numberFormat2(b + ordre * -a),
          borderWidth: 0,
          borderColor: 'green',
          backgroundColor: 'green',
          style: { color: 'white' },
        },
      ],
    });
    if (ox > +ordreknæk1 && ox < +ordreknæk1 + +ordre) {
      optionshighcharts.annotations.push({
        labels: [
          {
            point: {
              xAxis: 0,
              yAxis: 0,
              x: 0,
              y: a * ordreknæk1 + b,
            },
            text: 'P\u1D52\u1D56\u1D57 markedet<br>' + numberFormat1(a * ordreknæk1 + b),
            shape: 'connector',
            style: { color: 'black', fontSize: '0.8em' },
          },
        ],
      });
      optionshighcharts.series.push({
        type: 'line',
        dashStyle: 'ShortDot',
        color: 'black',
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
        },
        name: 'Optimal P markedet',
        data: [
          [ordreknæk1, a * ordreknæk1 + b],
          [0, a * ordreknæk1 + b],
        ],
      });
      optionshighcharts.annotations.push({
        labels: [
          {
            point: {
              xAxis: 0,
              yAxis: 0,
              x: ordreknæk1,
              y: 0,
            },
            text: 'X\u1D52\u1D56\u1D57 markedet<br>' + numberFormat2(ordreknæk1) + ' stk.',
            shape: 'connector',
            style: { color: 'black', fontSize: '0.8em' },
          },
        ],
      });

      optionshighcharts.series.push({
        type: 'line',
        dashStyle: 'ShortDot',
        color: 'black',
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
        },
        name: 'X\u1D52\u1D56\u1D57 markedet',
        data: [
          [ordreknæk1, 0],
          [ordreknæk1, a * ordreknæk1 + b],
        ],
      });
    }

    if (ox > +ordreknæk1) {
      optionshighcharts.annotations.push({
        labels: [
          {
            point: {
              xAxis: 0,
              yAxis: 0,
              x: 0,
              y: ordrepris,
            },
            text: 'P\u1D52\u1D56\u1D57 ordre<br>' + numberFormat1(ordrepris),
            shape: 'connector',
            style: { color: 'black', fontSize: '0.8em' },
          },
        ],
      });
    }

    if (ox < +ordreknæk1) {
      optionshighcharts.annotations.push({
        labels: [
          {
            point: {
              xAxis: 0,
              yAxis: 0,
              x: 0,
              y: a * ox + b,
            },
            text: 'P\u1D52\u1D56\u1D57 markedet<br>' + numberFormat1(a * ox + b),
            shape: 'connector',
            style: { color: 'black', fontSize: '0.8em' },
          },
        ],
      });
    }

    if (ox >= +ordreknæk1 + +ordre) {
      optionshighcharts.annotations.push({
        labelOptions: {
          padding: 2,
          style: {
            fontSize: '0.8em',
          },
        },
        labels: [
          {
            point: {
              xAxis: 0,
              yAxis: 0,
              x: 0,
              y: a * (ox - ordremængde) + b,
            },
            text: 'P\u1D52\u1D56\u1D57 markedet<br>' + numberFormat1(a * (ox - ordremængde) + b),
            shape: 'connector',
            style: { color: 'black', fontSize: '0.8em' },
          },

          {
            point: {
              xAxis: 0,
              yAxis: 0,
              x: 0,
              y: +ordrepris,
            },
            text: 'P\u1D52\u1D56\u1D57 ordre<br>' + numberFormat1(+ordrepris),
            align: 'right',
            borderWidth: 0,
            borderColor: '',
            backgroundColor: '',
            style: { color: 'black' },
          },
        ],
      });
      optionshighcharts.series.push({
        type: 'line',
        dashStyle: 'ShortDot',
        color: 'black',
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
        },
        name: 'P markedet',
        data: [
          [0, ordrepris],
          [ordreknæk1, ordrepris],
        ],
      });
    }
  }

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
          <h3>Optimering</h3>
          <h5>Maksimering af dækningsbidrag</h5>
          <h5>Bestem optimal pris, afsætning og dækningsbidrag</h5>
          {/* ox1={ox1} <br></br>
          ox2={ox2} <br></br>
          ox={ox} <br></br>
          db1={db1} <br></br>
          db2={db2} <br></br>
          dbfinal={dbfinal} <br></br> */}
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body"></div>

            <Container>
              <div class="p-3 mb-2 mt-0 bg-white">
                {ordremængde === Infinity && (
                  <Toggle
                    // {...(aop < aned &&
                    //   alert("Bemærk " + aop + " er mindre end " + aned))}
                    render={({ on, toggle }) => (
                      <div>
                        {on && (
                          <>
                            <Form>
                              <h5>
                                Prisforøgelse P<sub>op</sub> = a<sub>op</sub>X+b
                                <sub>op</sub> = {aop}X+{bop}
                              </h5>
                              <Row>
                                <Col>
                                  <InputGroup size="sm">
                                    <Form.Control
                                      type="number"
                                      step={0.01}
                                      precision={0}
                                      mobile={true}
                                      value={aop}
                                      onChange={(e) => setaop(e.target.value)}
                                      aria-describedby="inputGroupAppend"
                                      placeholder="0"
                                    />
                                    <InputGroup.Append>
                                      <InputGroup.Text inputGroup-sizing-sm id="basic-addon2">
                                        a<sub>op</sub>
                                      </InputGroup.Text>
                                    </InputGroup.Append>
                                  </InputGroup>
                                  <Form.Text className="text-muted">
                                    Hældningskoefficienten: a<sub>op</sub>
                                  </Form.Text>
                                </Col>
                                <Col>
                                  <InputGroup size="sm">
                                    <Form.Control
                                      type="number"
                                      min="0"
                                      step={1}
                                      precision={0}
                                      mobile={true}
                                      value={bop}
                                      onChange={(e) => setbop(Math.abs(e.target.value))}
                                      aria-describedby="inputGroupAppend"
                                      placeholder="0"
                                    />
                                    <InputGroup.Append>
                                      <InputGroup.Text id="basic-addon2">
                                        b<sub>op</sub>
                                      </InputGroup.Text>
                                    </InputGroup.Append>
                                  </InputGroup>
                                  <Form.Text className="text-muted">
                                    Skæringen med y-aksen: b<sub>op</sub>
                                  </Form.Text>
                                </Col>
                              </Row>
                              <h5>
                                Prisnedsættelse P<sub>ned</sub> = a<sub>ned</sub>
                                X+b
                                <sub>ned</sub> = {aned}X+{bned}
                              </h5>
                              <Row>
                                <Col>
                                  <InputGroup size="sm">
                                    <Form.Control
                                      type="number"
                                      step={0.01}
                                      precision={0}
                                      mobile={true}
                                      value={aned}
                                      onChange={(e) => setaned(e.target.value)}
                                      aria-describedby="inputGroupAppend"
                                      placeholder="0"
                                    />
                                    <InputGroup.Append>
                                      <InputGroup.Text inputGroup-sizing-sm id="basic-addon2">
                                        a<sub>ned</sub>
                                      </InputGroup.Text>
                                    </InputGroup.Append>
                                  </InputGroup>
                                  <Form.Text className="text-muted">
                                    Hældningskoefficienten: a<sub>ned</sub>
                                  </Form.Text>
                                </Col>
                                <Col>
                                  <InputGroup size="sm">
                                    <Form.Control
                                      type="number"
                                      min="0"
                                      step={1}
                                      precision={0}
                                      mobile={true}
                                      value={bned}
                                      onChange={(e) => setbned(Math.abs(e.target.value))}
                                      aria-describedby="inputGroupAppend"
                                      placeholder="0"
                                    />
                                    <InputGroup.Append>
                                      <InputGroup.Text id="basic-addon2">
                                        b<sub>ned</sub>
                                      </InputGroup.Text>
                                    </InputGroup.Append>
                                  </InputGroup>
                                  <Form.Text className="text-muted">
                                    Skæringen med y-aksen: b<sub>ned</sub>
                                  </Form.Text>
                                </Col>
                              </Row>
                            </Form>
                          </>
                        )}
                        {!on && (
                          <>
                            <h5>
                              Prisafsætningsfunktionen P = aX+b = {numberFormat4(a)}X+{b}
                            </h5>

                            <Form>
                              <Row>
                                <Col>
                                  <InputGroup size="sm">
                                    {/* <InputGroup.Prepend>
                          <InputGroup.Text size="sm">i boks før input</InputGroup.Text>
                        </InputGroup.Prepend> */}
                                    <Form.Control
                                      type="number"
                                      step={0.01}
                                      precision={0}
                                      mobile={true}
                                      value={a}
                                      onChange={(e) => {
                                        const value = e.target.value;
                                        if (value === '') {
                                          seta('');
                                        } else {
                                          const numValue = parseFloat(value);
                                          if (numValue > 0) {
                                            setShowAlert(true);
                                            seta('');
                                          } else {
                                            seta(numValue);
                                          }
                                        }
                                      }}
                                      placeholder="0"
                                    />
                                    <InputGroup.Append>
                                      <InputGroup.Text inputGroup-sizing-sm id="basic-addon2">
                                        a
                                      </InputGroup.Text>
                                    </InputGroup.Append>
                                  </InputGroup>
                                  {showAlert && (
                                    <Alert 
                                      ref={alertRef}
                                      variant="danger" 
                                      style={{ 
                                        backgroundColor: 'rgba(220, 53, 69, 0.2)',
                                        border: '1px solid rgba(220, 53, 69, 0.3)',
                                        color: '#721c24',
                                        marginTop: '5px'
                                      }}
                                    >
                                      Pas på hældningskoefficienten for P er aldrig positiv
                                    </Alert>
                                  )}
                                  <Form.Text className="text-muted">Hældningskoefficienten: a</Form.Text>
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
                                      value={b}
                                      onChange={(e) => setb(Math.abs(e.target.value))}
                                      placeholder="0"
                                    />
                                    <InputGroup.Append>
                                      <InputGroup.Text id="basic-addon2">b</InputGroup.Text>
                                    </InputGroup.Append>
                                  </InputGroup>
                                  <Form.Text className="text-muted">Skæringen med y-aksen: b</Form.Text>
                                </Col>
                              </Row>
                            </Form>
                          </>
                        )}
                        <Button size="sm" onClick={toggle}>
                          {on && 'Fjern Oligopol'}
                          {!on && 'Oligopol'}
                        </Button>
                        {!on && setaop(-0.5)}
                        {!on && setbop(100)}
                        {!on && setaned(-1)}
                        {!on && setbned(125)}
                        {on && setb(100)}
                        {on && seta(-1)}
                        {/* {on && setb(100)} */}
                        {/* {on && setag(0)} */}
                        {/* {on && setbg(40)} */}
                        {/* {on && setag(0.5)} */}
                        {/* {!on && setbg(50)} */}
                        {!on && setknækmængde(Infinity)}
                        {on && setknækmængde((bned - bop) / (aop - aned))}
                      </div>
                    )}
                  />
                )}
                {knækmængde === Infinity && (
                  <Toggle
                    // {...(aop < aned &&
                    //   alert("Bemærk " + aop + " er mindre end " + aned))}
                    render={({ on, toggle }) => (
                      <div>
                        {on && (
                          <>
                            <Form>
                              <h5>
                                Prisafsætningsfunktionen P = aX+b = {a}X+{b}
                              </h5>
                              <Row>
                                <Col>
                                  <InputGroup size="sm">
                                    <Form.Control
                                      type="number"
                                      step={0.01}
                                      precision={0}
                                      mobile={true}
                                      value={a}
                                      onChange={(e) => seta(e.target.value)}
                                      aria-describedby="inputGroupAppend"
                                      placeholder="0"
                                    />
                                    <InputGroup.Append>
                                      <InputGroup.Text inputGroup-sizing-sm id="basic-addon2">
                                        a
                                      </InputGroup.Text>
                                    </InputGroup.Append>
                                  </InputGroup>
                                  <Form.Text className="text-muted">Hældningskoefficienten: a</Form.Text>
                                </Col>
                                <Col>
                                  <InputGroup size="sm">
                                    <Form.Control
                                      type="number"
                                      min="0"
                                      step={1}
                                      precision={0}
                                      mobile={true}
                                      value={b}
                                      onChange={(e) => setb(Math.abs(e.target.value))}
                                      aria-describedby="inputGroupAppend"
                                      placeholder="0"
                                    />
                                    <InputGroup.Append>
                                      <InputGroup.Text id="basic-addon2">
                                        b<sub>op</sub>
                                      </InputGroup.Text>
                                    </InputGroup.Append>
                                  </InputGroup>
                                  <Form.Text className="text-muted">Skæringen med y-aksen: b</Form.Text>
                                </Col>
                              </Row>
                              <h5>
                                Ordrestørrelse på {ordre} stk. til pris {ordrepris} DKK.
                              </h5>
                              <Row>
                                <Col>
                                  <InputGroup size="sm">
                                    <Form.Control
                                      type="number"
                                      step={1}
                                      precision={0}
                                      mobile={true}
                                      value={+ordre}
                                      onChange={(e) => setordre(e.target.value)}
                                      aria-describedby="inputGroupAppend"
                                      placeholder="0"
                                    />
                                    <InputGroup.Append>
                                      <InputGroup.Text inputGroup-sizing-sm id="basic-addon31">
                                        stk.
                                      </InputGroup.Text>
                                    </InputGroup.Append>
                                  </InputGroup>
                                  <Form.Text className="text-muted">Ordrestørrelse i stk.</Form.Text>
                                </Col>
                                <Col>
                                  <InputGroup size="sm">
                                    <Form.Control
                                      type="number"
                                      min="0"
                                      step={1}
                                      precision={0}
                                      mobile={true}
                                      value={+ordrepris}
                                      onChange={(e) => setordrepris(Math.abs(e.target.value))}
                                      aria-describedby="inputGroupAppend"
                                      placeholder="0"
                                    />
                                    <InputGroup.Append>
                                      <InputGroup.Text id="basic-addon2">DKK.</InputGroup.Text>
                                    </InputGroup.Append>
                                  </InputGroup>
                                  <Form.Text className="text-muted">Pris pr. stk.</Form.Text>
                                </Col>
                              </Row>
                            </Form>
                          </>
                        )}

                        <Button size="sm" onClick={toggle}>
                          {on && 'Fjern Ordre'}
                          {!on && 'Ordre'}
                        </Button>
                        {/* {!on && setordre(10)} */}
                        {/* {!on && setordrepris(40)} */}

                        {!on && setordre(20)}
                        {!on && setordrepris(64)}
                        {!on && setordremængde(Infinity)}
                        {on && setordremængde(ordre)}
                        {/* {on && setb(120)} */}
                        {/* {on && setag(0)} */}
                        {/* {on && setbg(40)} */}

                        {/* {!on && setbg === 20} */}
                        {/* {(!on && [bg, setbg] = useState(+(1).toFixed(2)))} */}
                        {/* {!on && setknækmængde(Infinity)}
                      {on && setknækmængde((bned - bop) / (aop - aned))} */}
                      </div>
                    )}
                  />
                )}
                <br />

                <h5>
                  {gskift === +Infinity && 'Grænseomkostningerne GROMK = aX+b = '}
                  {gskift < +Infinity && 'Først GROMK\u2081 = a\u2081X+b\u2081 = '}
                  {gromkligning}
                </h5>

                <Form>
                  <Row>
                    <Col>
                      <InputGroup size="sm">
                        {/* <InputGroup.Prepend>
                          <InputGroup.Text size="sm">i boks før input</InputGroup.Text>
                          </InputGroup.Prepend> */}
                        <Form.Control
                          type="number"
                          step={0.01}
                          precision={0}
                          mobile={true}
                          value={ag}
                          onChange={(e) => setag(e.target.value)}
                          aria-describedby="inputGroupAppend"
                          placeholder="0"
                        />
                        <InputGroup.Append>
                          <InputGroup.Text inputGroup-sizing-sm id="basic-addon2">
                            a
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <Form.Text className="text-muted">Hældningskoefficienten: a</Form.Text>
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
                          value={bg}
                          onChange={(e) => setbg(Math.abs(e.target.value))}
                          aria-describedby="inputGroupAppend"
                          placeholder="0"
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">b</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <Form.Text className="text-muted">Skæringen med y-aksen: b</Form.Text>
                    </Col>
                  </Row>
                </Form>
                <br />
                <Form>
                  <Row>
                    <Col>
                      <Toggle
                        render={({ on, toggle }) => (
                          <div>
                            {on && (
                              <>
                                <h5>Skift mellem GROMK funktioner</h5>
                                <Form>
                                  <Row>
                                    <Col sm="6">
                                      <InputGroup size="sm">
                                        <Form.Control
                                          type="number"
                                          step={1}
                                          precision={0}
                                          mobile={true}
                                          value={gskift}
                                          onChange={(e) => setgskift(Math.abs(e.target.value))}
                                          aria-describedby="inputGroupAppend"
                                          placeholder=""
                                        />
                                        <InputGroup.Append>
                                          <InputGroup.Text inputGroup-sizing-sm id="basic-addon2">
                                            X
                                          </InputGroup.Text>
                                        </InputGroup.Append>
                                      </InputGroup>
                                      <Form.Text className="text-muted">X-værdi ved GROMK skift</Form.Text>
                                    </Col>
                                  </Row>
                                </Form>
                                <h5>
                                  Fortsat GROMK₂ = a₂X+b₂ = {ag2}X+{bg2}
                                </h5>
                                <Form>
                                  <Row>
                                    <Col>
                                      <InputGroup size="sm">
                                        <Form.Control
                                          type="number"
                                          step={0.01}
                                          precision={0}
                                          mobile={true}
                                          value={ag2}
                                          onChange={(e) => setag2(e.target.value)}
                                          aria-describedby="inputGroupAppend"
                                          placeholder="0"
                                        />
                                        <InputGroup.Append>
                                          <InputGroup.Text inputGroup-sizing-sm id="basic-addon2">
                                            a<sub>2</sub>
                                          </InputGroup.Text>
                                        </InputGroup.Append>
                                      </InputGroup>
                                      <Form.Text className="text-muted">
                                        Hældningskoefficienten: a<sub>2</sub>
                                      </Form.Text>
                                    </Col>
                                    <Col>
                                      <InputGroup size="sm">
                                        <Form.Control
                                          type="number"
                                          min="0"
                                          step={1}
                                          precision={0}
                                          mobile={true}
                                          value={bg2}
                                          onChange={(e) => setbg2(Math.abs(e.target.value))}
                                          aria-describedby="inputGroupAppend"
                                          placeholder="0"
                                        />
                                        <InputGroup.Append>
                                          <InputGroup.Text id="basic-addon2">
                                            b<sub>2</sub>
                                          </InputGroup.Text>
                                        </InputGroup.Append>
                                      </InputGroup>
                                      <Form.Text className="text-muted">
                                        Skæringen med y-aksen: b<sub>2</sub>
                                      </Form.Text>
                                    </Col>
                                  </Row>
                                </Form>
                              </>
                            )}
                            <Button size="sm" onClick={toggle}>
                              {on && '1 GROMK funktion'}
                              {!on && '2 GROMK funktioner'}
                            </Button>
                            {!on && setgskift(Infinity)}
                            {!on && setag2(0)}
                            {!on && setbg2(0)}
                          </div>
                        )}
                      />
                      <Toggle
                        render={({ on, toggle }) => (
                          <div>
                            {on && (
                              <>
                                <h5>Kapacitetsbegrænsning</h5>
                                <Form>
                                  <Row>
                                    <Col sm="6">
                                      <InputGroup size="sm">
                                        <Form.Control
                                          type="number"
                                          min="0"
                                          step={1}
                                          precision={0}
                                          mobile={true}
                                          value={+kap}
                                          onChange={(e) => setkap(Math.abs(e.target.value))}
                                          aria-describedby="inputGroupAppend"
                                          placeholder=""
                                        />
                                        <InputGroup.Append>
                                          <InputGroup.Text inputGroup-sizing-sm id="basic-addon2">
                                            stk.
                                          </InputGroup.Text>
                                        </InputGroup.Append>
                                      </InputGroup>
                                      <Form.Text className="text-muted">Begrænset kapacitet i stk.</Form.Text>
                                    </Col>
                                  </Row>
                                </Form>
                              </>
                            )}
                            <Button size="sm" onClick={toggle}>
                              {on && 'Ingen kapacitetsbegrænsning'}
                              {!on && 'Kapacitetsbegrænsning'}
                            </Button>
                            {!on && setkap(Infinity)}
                          </div>
                        )}
                      />

                      {knækmængde === Infinity && ordremængde === Infinity && (
                        <Toggle
                          render={({ on, toggle }) => (
                            <div>
                              {on && (
                                <>
                                  <h5>Afsætningsændring i procent</h5>
                                  <Form>
                                    <Row>
                                      <Col sm="6">
                                        <InputGroup size="sm">
                                          <Form.Control
                                            type="number"
                                            min="-99"
                                            step={1}
                                            precision={0}
                                            mobile={true}
                                            value={reklame}
                                            onChange={(e) => setreklame(e.target.value)}
                                            aria-describedby="inputGroupAppend"
                                            placeholder="0"
                                          />
                                          <InputGroup.Append>
                                            <InputGroup.Text inputGroup-sizing-sm id="basic-addon2">
                                              %
                                            </InputGroup.Text>
                                          </InputGroup.Append>
                                        </InputGroup>
                                        <Form.Text className="text-muted">
                                          Procentvis ændring i afsætning ved alle priser
                                        </Form.Text>
                                      </Col>
                                    </Row>
                                  </Form>
                                </>
                              )}
                              <Button size="sm" onClick={toggle}>
                                {on && 'Ingen afsætningsændring'}
                                {!on && 'Afsætningsændring'}
                              </Button>
                              {!on && setreklame(0)}
                            </div>
                          )}
                        />
                      )}
                    </Col>
                  </Row>
                  <br />
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
                      {+ordremængde === Infinity && +knækmængde === Infinity && numberFormat4(a).concat('X+', b)}
                      {+ordremængde !== Infinity &&
                        numberFormat2(+a) +
                          'X + ' +
                          numberFormat2(+b) +
                          '\nFor X mindre end ' +
                          +ordreknæk1 +
                          ' stk.\n' +
                          +ordrepris +
                          '\nFor X mellem ' +
                          +ordreknæk1 +
                          ' og ' +
                          numberFormat4(+ordreknæk1 + +ordre) +
                          ' stk.\n' +
                          numberFormat2(+a) +
                          'X + ' +
                          numberFormat2(+b - a * +ordre) +
                          '\nFor X større end ' +
                          numberFormat4(+ordreknæk1 + +ordre) +
                          ' stk.\n'}
                    </td>
                    <td>
                      {a === 0 ? (
                        <div>
                          Under fuldkommen konkurrence er prisen konstant og lig med GROMS (P = GROMS = {b})
                        </div>
                      ) : (
                        <div>
                          P er pris- afsætningsfunktionen. P angiver hvilken pris P, man skal sætte for at afsætte mængden X stk.
                          {+ordremængde !== Infinity &&
                            '\n\nPris- afsætningsfunktionen er stykvis lineær, fra afsætning 0 stk. til ' +
                              +ordreknæk1 +
                              ' stk. er forskriften:\nP = ' +
                              numberFormat2(+a) +
                              'X + ' +
                              numberFormat2(+b) +
                              '\nVi kan finde det første knæk på pris- afsætningsfunktionen ved at sætte GROMS lig med ordreprisen\n' +
                              numberFormat4(2 * a).concat(
                                'X + ',
                                numberFormat4(b),
                                ' = ',
                                ordrepris,
                                ' \u21D4\n ',
                                numberFormat4(2 * a),
                                'X = ',
                                numberFormat4(ordrepris),
                                numberFormat4(-b),
                                ' \u21D4\n X = ',
                                numberFormat4(ordrepris - b),
                                '/',
                                numberFormat4(2 * a),
                                ' \u21D4\n X = ',
                                numberFormat4((ordrepris - b) / (2 * a))
                              ) +
                              '\nDet næste linjestykke med afsætningen fra ' +
                              +ordreknæk1 +
                              ' stk. til ' +
                              numberFormat2(+ordreknæk1 + +ordremængde) +
                              ' stk. er vandret da ordren afsættes til samme pris så pris- afsætningsfunktionen bliver:\nP = ' +
                              +ordrepris +
                              '\nNår hele ordren er fyldt ved afsætningen ' +
                              numberFormat2(+ordreknæk1 + +ordremængde) +
                              ' stk. bliver prisafsætningsfunktionen: \nP = aX + b - a·ordrestørrelse = ' +
                              numberFormat2(+a) +
                              'X + ' +
                              numberFormat2(+b) +
                              ' + ' +
                              numberFormat2(-a) +
                              ' · ' +
                              numberFormat2(+ordre) +
                              ' = ' +
                              numberFormat2(+a) +
                              'X + ' +
                              numberFormat2(+b - a * +ordre)}
                          {+reklame !== 0 &&
                            '\n\nAfsætningen ændres med ' +
                              reklame +
                              '% ved alle priser. Vi får derfor en ny pris- afsætningsfunktion, der har samme skæring med X-aksen b: ' +
                              b +
                              '. Hældningen a=' +
                              audenreklame +
                              ' skal divideres med 100 '}
                          {+reklame < 0 && reklame}
                          {+reklame > 0 && '+ ' + reklame}
                          {+reklame !== 0 &&
                            '% = ' +
                              reklamenævner +
                              '% = ' +
                              numberFormat4(reklamenævnerdecimal) +
                              ' Udregningen bliver:\n'}
                          {+reklame !== 0 &&
                            numberFormat4(audenreklame) +
                              '/' +
                              numberFormat4(reklamenævnerdecimal) +
                              ' = ' +
                              numberFormat4(+a)}
                        </div>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>GROMS</td>
                    <td>MR</td>
                    <td>
                      {+ordremængde === Infinity && +knækmængde === Infinity && numberFormat4(2 * a).concat('X+', b)}
                      {+ordremængde !== Infinity &&
                        numberFormat2(2 * +a) +
                          'X + ' +
                          numberFormat2(+b) +
                          '\nFor X mindre end ' +
                          numberFormat4(+ordreknæk1) +
                          ' stk.\n' +
                          +ordrepris +
                          '\nFor X mellem ' +
                          +ordreknæk1 +
                          ' og ' +
                          numberFormat4(+ordreknæk1 + +ordre) +
                          ' stk.\n' +
                          numberFormat2(2 * +a) +
                          'X + ' +
                          numberFormat2(+b - a * +ordre) +
                          '\nFor X større end ' +
                          numberFormat4(+ordreknæk1 + +ordre) +
                          ' stk.\n'}
                    </td>

                    <td>
                      GROMS er grænseomsætningen. GROMS angiver hvor meget omsætningen vokser ved en given afsætning X,
                      når der afsættes et stk. mere. GROMS er omsætningen differentieret.
                      <br />
                      <br />
                      {+ordremængde === Infinity &&
                        +knækmængde === Infinity &&
                        'Når P er lineær, kan vi hurtigt finde GROMS som P med den dobbelte hældning:\n' +
                          'GROMS = 2·' +
                          numberFormat4(a).concat('X+', b) +
                          ' = ' +
                          numberFormat4(2 * a).concat('X+', b)}
                      {+ordremængde !== Infinity &&
                        'GROMS er stykvis lineær, inden ordren fra afsætning 0 stk. til ' +
                          +ordreknæk1 +
                          ' stk. er forskriften:\nGROMS = 2·' +
                          numberFormat2(+a) +
                          'X + ' +
                          numberFormat2(+b) +
                          ' = ' +
                          numberFormat2(2 * +a) +
                          'X + ' +
                          numberFormat2(+b) +
                          '\nDet næste linjestykke med afsætningen fra ' +
                          +ordreknæk1 +
                          ' stk. til ' +
                          numberFormat2(+ordreknæk1 + +ordremængde) +
                          ' stk. er vandret da ordren afsættes til samme pris så pris- afsætningsfunktionen bliver:\nGROMS = ' +
                          +ordrepris +
                          '\nEfter ordren ved afsætning større end ' +
                          numberFormat2(+ordreknæk1 + +ordremængde) +
                          ' stk. bliver GROMS, P = ' +
                          numberFormat2(+a) +
                          'X + ' +
                          numberFormat2(+b - a * +ordre) +
                          ' med den dobbelte hældning.\nGROMS = ' +
                          numberFormat2(2 * +a) +
                          'X + ' +
                          numberFormat2(+b - a * +ordre)}
                    </td>
                  </tr>

                  <tr>
                    <td>GROMK</td>
                    <td>MC</td>

                    <td>
                      {gromkligning}

                      {+gskift < Infinity &&
                        '\nFor X mellem 0 og ' +
                          gskift +
                          '.\n\n' +
                          numberFormat4(ag2) +
                          'X + ' +
                          numberFormat4(bg2) +
                          '\nFor X mindst ' +
                          gskift +
                          '.'}
                    </td>
                    <td>
                      GROMK er grænseomkostningerne. GROMK angiver hvor meget omkostningerne vokser ved en given
                      afsætning X, når der afsættes et stk mere. GROMK kan findes ved af differentiere de totale
                      variable omkostninger TVO eller de totale omkostninger TO. <br />
                      {+gskift === Infinity &&
                        '\nEr VE lineær og kendt kan vi hurtigt finde GROMK som VE med den dobbelte hældning.\n GROMK = 2 · ' +
                          numberFormat4(ag * 0.5) +
                          'X + ' +
                          bg +
                          ' = ' +
                          numberFormat4(ag) +
                          'X + ' +
                          bg +
                          gromkligningkort}
                      {+gskift < Infinity &&
                        '\nGROMK\u2081 = ' +
                          numberFormat4(ag) +
                          'X + ' +
                          numberFormat4(bg) +
                          '\n' +
                          'For afsætning X mellem 0 og ' +
                          gskift +
                          ' stk.\n\nGROMK\u2082 = ' +
                          numberFormat4(ag2) +
                          'X + ' +
                          numberFormat4(bg2) +
                          '\n' +
                          'For afsætning X mindst ' +
                          gskift +
                          ' stk.'}
                    </td>
                  </tr>

                  <tr>
                    <td>VE</td>
                    <td>AVC</td>
                    <td>{+gskift === Infinity && avcligning}</td>

                    <td>
                      {+gskift === Infinity &&
                        'VE er de variable enhedsomkostninger (AVC betyder average variable costs). VE angiver de gennemsnitlige variable ' +
                          'omkostninger pr. stk.\nKender man GROMK, og er GROMK en lineær funktion, kan VE hurtigt findes som GROMK med den halve hældning:\n' +
                          'VE = 0,5·' +
                          numberFormat4(ag) +
                          'X+' +
                          bg +
                          ' = ' +
                          numberFormat4(0.5 * ag) +
                          'X+' +
                          numberFormat4(bg)}
                      {+gskift < Infinity &&
                        'Da GROMK funktionen er stykvis lineær, bliver VE funktionen en stykvis lineær og ikke-lineær funktion'}
                    </td>
                  </tr>

                  <tr>
                    <td>Omsætning</td>
                    <td>TR</td>
                    <td>
                      {+ordremængde === Infinity &&
                        +knækmængde === Infinity &&
                        numberFormat4(a) + 'X\u00B2 + ' + numberFormat4(b) + 'X'}
                    </td>

                    <td>
                      {+ordremængde === Infinity &&
                        +knækmængde === Infinity &&
                        'Omsætning bestemmes som pris gange afsætning, når prisafsætningsfunktionen er lineær, bliver omsætningsfunktionen et andetgradspolynomium. Funktionen for omsætningen bliver:\n' +
                          'Omsætning = P · X = (aX + b) · X = (' +
                          numberFormat4(a).concat('X + ', numberFormat4(b)) +
                          ')·X =' +
                          numberFormat4(a).concat('X·X + ', numberFormat4(b), 'X = ') +
                          numberFormat4(a) +
                          'X\u00B2 + ' +
                          numberFormat4(b) +
                          'X'}
                      {!(+ordremængde === Infinity && +knækmængde === Infinity) &&
                        'Da pris- afsætningsfunktionen er stykvis lineær, bliver den generelle forskrift for omsætningen avanceret, denne er her udeladt.'}
                    </td>
                  </tr>

                  <tr>
                    <td>TVO</td>
                    <td>TVC</td>
                    <td>{+gskift === Infinity && numberFormat4(0.5 * ag) + 'X\u00B2 + ' + numberFormat4(bg) + 'X'}</td>

                    <td>
                      {+gskift === Infinity &&
                        'TVO Totale variable omkostninger kan bestemmes som VE gange afsætning, når VE er lineær, bliver TVO et andetgradspolynomium.\nFunktionen for TVO bliver: TVO = VE · X = (aX + b) · X = (' +
                          numberFormat4(0.5 * ag) +
                          'X + ' +
                          numberFormat4(bg) +
                          ')·X =' +
                          numberFormat4(0.5 * ag) +
                          'X·X + ' +
                          numberFormat4(bg) +
                          'X = ' +
                          numberFormat4(0.5 * ag) +
                          'X\u00B2 + ' +
                          numberFormat4(bg) +
                          'X' +
                          tvoligning2}
                      {+gskift < Infinity &&
                        'Da GROMK funktionen er stykvis lineær, bliver forskriften TVO funktionen avanceret, den er her udeladt'}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        X<sup>opt</sup>
                        <br />
                        eller
                        <br />M<sup>opt</sup>
                      </div>
                    </td>
                    <td>
                      <div>
                        X<sup>opt</sup>
                        <br />
                        eller
                        <br />X<sup>opt</sup>
                      </div>
                    </td>
                    <td>{numberFormat4(optimalx)} stk.</td>

                    <td>
                      {+ordremængde === Infinity &&
                        +knækmængde === Infinity &&
                        (gskift === Infinity
                          ? 'Vi kan finde den optimale afsætning X\u1D52\u1D56\u1D57 ved at sætte GROMS lig med GROMK:\nGROMS = GROMK \u21D4\n' +
                            numberFormat4(2 * a) +
                            'X + ' +
                            numberFormat4(b) +
                            ' = ' +
                            numberFormat4(ag) +
                            'X + ' +
                            numberFormat4(bg) +
                            ' \u21D4\n' +
                            numberFormat4(2 * a) +
                            'X - ' +
                            numberFormat4(ag) +
                            'X = ' +
                            numberFormat4(bg) +
                            ' - ' +
                            numberFormat4(b) +
                            ' \u21D4\n' +
                            numberFormat4(2 * a - ag) +
                            'X = ' +
                            numberFormat4(bg - b) +
                            ' \u21D4\n' +
                            'X = ' +
                            numberFormat4(bg - b) +
                            '/' +
                            numberFormat4(2 * a - ag) +
                            ' \u21D4\n' +
                            'X = ' +
                            numberFormat4((b - bg) / (ag - 2 * a)) +
                            '\n'
                          : 'Under fuldkommen konkurrence (a = 0) med to GROMK funktioner:\n\n' +
                            'GROMK₁ = ' + numberFormat4(ag) + 'X + ' + numberFormat4(bg) + ' for X ≤ ' + gskift + '\n' +
                            'GROMK₂ = ' + numberFormat4(ag2) + 'X + ' + numberFormat4(bg2) + ' for X > ' + gskift + '\n\n' +
                            'Når a = 0 er GROMS = P = ' + numberFormat4(b) + '\n\n' +
                            'Vi finder skæringspunkterne mellem GROMS og GROMK:\n\n' +
                            'For GROMK₁:\n' + numberFormat4(b) + ' = ' + numberFormat4(ag) + 'X + ' + numberFormat4(bg) + '\n' +
                            'X₁ = ' + numberFormat4((b - bg) / ag) + ' stk.\n\n' +
                            'For GROMK₂:\n' + numberFormat4(b) + ' = ' + numberFormat4(ag2) + 'X + ' + numberFormat4(bg2) + '\n' +
                            'X₂ = ' + numberFormat4((b - bg2) / ag2) + ' stk.\n\n' +
                            'Den optimale afsætning er det største gyldige skæringspunkt, hvor:\n' +
                            '1) X₁ er gyldig hvis X₁ ≤ ' + gskift + ' og GROMS > GROMK₁\n' +
                            '2) X₂ er gyldig hvis X₂ > ' + gskift + ' og GROMS > GROMK₂\n\n' +
                            'I dette tilfælde er den optimale afsætning ' + numberFormat4(optimalx) + ' stk.')}
                      {outside1 &&
                        outside2 &&
                        ox === 0 &&
                        +ordremængde === Infinity &&
                        +knækmængde === Infinity &&
                        '\nDet er bedst slet ikke at afsætte ingen af GROMK kurverne skærer GROMS hvor GROMK kurverne er definerede. Enhver afsætning vil resultere i et negativt dækningsbidrag.\n'}
                      {!outside1 &&
                        outside2 &&
                        dbfinal > 0 &&
                        +ordremængde === Infinity &&
                        +knækmængde === Infinity &&
                        '\nDen optimale afsætning X\u1D52\u1D56\u1D57 findes hvor GROMK\u2081 skærer GROMS ved afsætningen ' +
                          numberFormat4(+oxfirst) +
                          ' stk.\n'}
                      {outside1 &&
                        !outside2 &&
                        dbfinal > 0 &&
                        +ordremængde === Infinity &&
                        +knækmængde === Infinity &&
                        '\nDen optimale afsætning X\u1D52\u1D56\u1D57 findes hvor GROMK\u2082 skærer GROMS ved afsætningen ' +
                          numberFormat4(+oxsecond) +
                          ' stk.\n'}

                      {outside1 &&
                        outside2 &&
                        gskift === ox &&
                        dbfinal > 0 &&
                        +ordremængde === Infinity &&
                        +knækmængde === Infinity &&
                        '\nDen optimale afsætning X\u1D52\u1D56\u1D57 findes, hvor GROMS skærer GROMK kurven i skiftet mellem GROMK\u2081 og GROMK\u2082, dvs. ved afsætningen  ' +
                          numberFormat4(ox) +
                          ' stk.\n'}
                      {!outside1 &&
                        !outside2 &&
                        dbfinal > 0 &&
                        gskift !== Infinity &&
                        +ordremængde === Infinity &&
                        +knækmængde === Infinity &&
                        '\nDer kan være optimal afsætning X\u1D52\u1D56\u1D57 både hvor GROMK\u2081 skærer GROMS ved ' +
                          numberFormat4(+oxfirst) +
                          ' stk. og GROMK\u2082 skærer GROMS ved afsætningen ' +
                          numberFormat4(+oxsecond) +
                          ' stk. for at bestemme den afsætning, der maksimerer afsætningen, kan man se på figuren ovenfor, eller bestemme dækningsbidrag ved de 2 afsætninger.\n'}
                      {!outside1 &&
                        !outside2 &&
                        dbfinal <= 0 &&
                        +ordremængde === Infinity &&
                        +knækmængde === Infinity &&
                        '\nGROMK\u2081 skærer GROMS ved ' +
                          numberFormat4(+oxsecond) +
                          ' stk. og GROMK\u2082 skærer GROMS ved afsætningen ' +
                          numberFormat4(+oxfirst) +
                          ' stk., men dækningsbidraget bliver negativt så man bør ikke afsætte.\n'}

                      {+ordremængde !== Infinity &&
                        'Man bestemmer hvor GROMK skærer de 3 GROMS linjestykker (2 lysegrønne linjestykker for GROMS markedet og det vandrette gule linjestykke for GROMS ordre), er en skæring mellem GROMK og et GROMS linjestykke, hvor GROMS linjestykket er defineret, er afsætningen her den optimale.\n'}
                      {+ordremængde !== Infinity &&
                        ox < ordreknæk1 &&
                        +kap !== +ox &&
                        'Grænseomkostningerne GROMK er så høje at GROMK skærer GROMS før ordren på det første stykke af GROMS kurven.\nDet kan derfor ikke betale sig at levere noget af ordren på ' +
                          +ordre +
                          ' stk. til ' +
                          numberFormat1(+ordrepris) +
                          '\n'}
                      {+ordremængde !== Infinity &&
                        ox > ordreknæk1 &&
                        ox < ordreknæk1 + ordre &&
                        +kap !== +ox &&
                        'GROMK skærer GROMS på den vandrette gule ordredel, derfor leveres ' +
                          numberFormat4(+ox - ordreknæk1) +
                          ' stk. af ordren.\nPå markedet skal der afsættes ' +
                          numberFormat2(+ordreknæk1) +
                          ' stk.\n'}
                      {+ordremængde !== Infinity &&
                        ox > ordreknæk1 + ordre &&
                        +kap !== +ox &&
                        'GROMK skærer først GROMS kurven efter hele ordren bør leveres.\nDen fulde ordre på ' +
                          numberFormat4(+ordremængde) +
                          ' stk. skal leveres.\nPå markedet skal der afsættes ' +
                          numberFormat2(+ox - ordremængde) +
                          ' stk.\n'}
                      {+ordremængde !== Infinity &&
                        skær2 === 1 &&
                        +kap !== +ox &&
                        '\nBemærk GROMK kurven skærer GROMS kurven både ved ' +
                          numberFormat4(ox1) +
                          ' stk. og ' +
                          numberFormat4(ox2) +
                          ' stk. Vi bestemmer DB ved begge afsætninger, afsætningen på ' +
                          numberFormat4(ox) +
                          ' stk. har det højeste DB.\n'}

                      {+ordremængde !== Infinity &&
                        ox < ordreknæk1 &&
                        +kap === +ox &&
                        'Det kan ikke betale sig at levere noget af ordren på ' +
                          +ordre +
                          ' stk. til ' +
                          numberFormat1(+ordrepris) +
                          '\n'}
                      {+ordremængde !== Infinity &&
                        ox > ordreknæk1 &&
                        ox < ordreknæk1 + ordre &&
                        +kap === +ox &&
                        'Der leveres ' +
                          numberFormat4(+ox - ordreknæk1) +
                          ' stk. af ordren.\nPå markedet skal der afsættes ' +
                          numberFormat2(+ordreknæk1) +
                          ' stk.\n'}
                      {+ordremængde !== Infinity &&
                        ox > ordreknæk1 + ordre &&
                        +kap === +ox &&
                        'Hele ordren bør leveres. Den fulde ordre på ' +
                          numberFormat4(+ordremængde) +
                          ' stk. skal leveres.\nPå markedet skal der afsættes ' +
                          numberFormat2(+ox - ordremængde) +
                          ' stk.\n'}
                      {+ordremængde !== Infinity &&
                        skær2 === 1 &&
                        +kap === +ox &&
                        '\nBemærk GROMK kurven skærer GROMS kurven både ved ' +
                          numberFormat4(ox1) +
                          ' stk. og ' +
                          numberFormat4(ox2) +
                          ' stk.\nVi bestemmer DB ved begge afsætninger, afsætningen på ' +
                          numberFormat4(ox) +
                          ' stk. har det højeste DB.\n'}

                      {+knækmængde !== Infinity &&
                        'Man bestemmer hvor GROMK skærer de 3 lysegrønne GROMS linjestykker, er skæringen hvor GROMS linjestykket er defineret, er afsætningen her den optimale.\n\n'}

                      {+knækmængde !== Infinity &&
                        skær2 === 1 &&
                        +kap !== +ox &&
                        +kap !== +ox &&
                        '\nBemærk GROMK kurven skærer GROMS kurven både ved ' +
                          numberFormat4(ox1) +
                          ' stk. og ' +
                          numberFormat4(ox2) +
                          ' stk. Vi bestemmer DB ved begge afsætninger, afsætningen på ' +
                          numberFormat4(ox) +
                          ' stk. har det højeste DB.\n'}

                      {+knækmængde !== Infinity &&
                        +ox < +knækmængde &&
                        +kap !== +ox &&
                        'GROMK skærer GROMS før det lodrette lysegrønne linjestykke, hvor pris- afsætningsfunktionen har et knæk. Den optimale afsætning på ' +
                          numberFormat4(+ox) +
                          ' stk. er således mindre end afsætningen ' +
                          numberFormat4(knækmængde) +
                          ' stk. ved det lodrette GROMS fald. Man skal således sætte prisen højere end oligopolprisen ' +
                          numberFormat1(knækpris) +
                          '\n'}
                      {+knækmængde !== Infinity &&
                        +ox === +knækmængde &&
                        +kap !== +ox &&
                        'GROMK skærer GROMS på det lodrette lysegrønne linjestykke, hvor pris- afsætningsfunktionen har et knæk. Det betyder den optimale afsætning findes ved knækmængden ' +
                          numberFormat4(+ox) +
                          ' stk. Man skal således sætte prisen til oligopolprisen ' +
                          numberFormat1(knækpris) +
                          '\n'}
                      {+knækmængde !== Infinity &&
                        +ox > +knækmængde &&
                        +kap !== +ox &&
                        'GROMK skærer GROMS efter det lodrette lysegrønne linjestykke. Det betyder den optimale afsætning bliver højere end knækmængden ' +
                          numberFormat4(+ox) +
                          ' stk. Man skal således sætte prisen lavere end oligopolprisen ' +
                          numberFormat1(knækpris) +
                          '\n'}

                      {+knækmængde !== Infinity &&
                        '\nSættes prisen op fra oligopolprisen ' +
                          knækpris +
                          ' DKK. bliver priselasticiteten ' +
                          numberFormat2(-knækpris / (+bop - knækpris)) +
                          '\nSættes prisen ned fra oligopolprisen ' +
                          knækpris +
                          ' DKK. bliver priselasticiteten ' +
                          numberFormat2(-knækpris / (+bned - knækpris)) +
                          '\nDette er som forventet, da konkurrenterne ikke følger med ved prisforøgelser, medfører øgede priser større afsætningsfald, end afsætningsforøgelsen ved prisnedsættelser, hvor konkurrenterne også sænker deres priser.'}

                      {+kap === +ox &&
                        'Bemærk der er begrænset kapacitet på ' +
                          kap +
                          ' stk. derfor bliver den optimale mængde lig med kapacitetsbegrænsningen.\n'}

                      {'\nDen optimale afsætning X\u1D52\u1D56\u1D57 er ' +
                        numberFormat4(ox) +
                        ' stk.' +
                        '\nAfsætningen angiver det totale salg af varen i stk. Optimal afsætning X\u1D52\u1D56\u1D57 = ' +
                        numberFormat4(+optimalx) +
                        ' stk. er den afsætning, der maksimerer dækningsbidraget DB.'}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        P<sup>opt</sup>
                      </div>
                    </td>
                    <td>
                      <div>
                        P<sup>opt</sup>
                      </div>
                    </td>
                    <td>
                      {ordremængde === Infinity && numberFormat1(optimalp)}
                      {ordremængde !== Infinity && ox < ordreknæk1 && numberFormat1(optimalp) + ' på markedet.'}
                      {ordremængde !== Infinity &&
                        ox > ordreknæk1 &&
                        ox < +ordre + +ordreknæk1 &&
                        numberFormat1(a * ordreknæk1 + b) + ' på markedet\n' + numberFormat1(ordrepris) + ' på ordren'}
                      {ordremængde !== Infinity &&
                        ox > +ordre + +ordreknæk1 &&
                        numberFormat1(a * (ox - ordre) + b) +
                          ' på markedet\n' +
                          numberFormat1(ordrepris) +
                          ' på ordren'}
                    </td>

                    <td>
                      Vi kender nu den optimale afsætning {'X\u1D52\u1D56\u1D57'} og kan ved at indsætte afsætningen i
                      pris- afsætningsfunktionen, bestemme hvilken pris vi skal tage for netop at afsætte den optimale
                      mængde {'X\u1D52\u1D56\u1D57'}:
                      <br />
                      {+knækmængde === Infinity &&
                        +ordremængde === Infinity &&
                        'P\u1D52\u1D56\u1D57 = ' +
                          numberFormat4(a).concat(' · ', numberFormat4(optimalx), ' + ', b) +
                          ' = ' +
                          numberFormat1(optimalp) +
                          '\nPriselasticiteten ved den optimale pris P\u1D52\u1D56\u1D57 er ' +
                          numberFormat2(-optimalp / (b - optimalp))}
                      {+knækmængde !== Infinity &&
                        +ox < +knækmængde &&
                        'P\u1D52\u1D56\u1D57 = ' +
                          numberFormat4(aop).concat(' · ', numberFormat4(ox), ' + ', bop) +
                          ' = ' +
                          numberFormat1(optimalp)}
                      {+knækmængde !== Infinity &&
                        +ox === +knækmængde &&
                        'Bemærk da GROMK skærer GROMS i det lodrette fald er P\u1D52\u1D56\u1D57 = ' +
                          numberFormat1(knækpris) +
                          ' dvs. lig med prisen i knækket på pris- afsætningsfunktionen.'}
                      {+knækmængde !== Infinity &&
                        +ox > +knækmængde &&
                        +ox < (2 * -bned) / aned &&
                        'P\u1D52\u1D56\u1D57 = ' +
                          numberFormat4(aned).concat(' · ', numberFormat4(ox), ' + ', bned) +
                          ' = ' +
                          numberFormat1(optimalp)}
                      {ordremængde !== Infinity &&
                        ox < ordreknæk1 &&
                        'P\u1D52\u1D56\u1D57 = ' +
                          numberFormat2(a) +
                          '·' +
                          numberFormat2(ox) +
                          ' + ' +
                          numberFormat2(b) +
                          ' = ' +
                          numberFormat1(optimalp) +
                          ' på markedet.'}
                      {ordremængde !== Infinity &&
                        ox > ordreknæk1 &&
                        ox < +ordre + +ordreknæk1 &&
                        'P\u1D52\u1D56\u1D57 = ' +
                          numberFormat2(a) +
                          '·' +
                          numberFormat2(ordreknæk1) +
                          ' + ' +
                          numberFormat2(b) +
                          ' = ' +
                          numberFormat1(a * ordreknæk1 + b) +
                          ' på markedet\nP\u1D52\u1D56\u1D57 = ' +
                          numberFormat1(ordrepris) +
                          ' på ordren'}
                      {ordremængde !== Infinity &&
                        ox > +ordre + +ordreknæk1 &&
                        'P\u1D52\u1D56\u1D57 = ' +
                          numberFormat2(a) +
                          '·' +
                          numberFormat2(ox - ordre) +
                          ' + ' +
                          numberFormat2(b) +
                          ' = ' +
                          numberFormat1(a * (ox - ordre) + b) +
                          ' på markedet\nP\u1D52\u1D56\u1D57 = ' +
                          numberFormat1(ordrepris) +
                          ' på ordren'}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        VE<sup>opt</sup>
                      </div>
                    </td>
                    <td>
                      <div>
                        AVC<sup>opt</sup>
                      </div>
                    </td>
                    <td>{numberFormat1(tvo / ox)}</td>

                    <td>
                      {gskift === Infinity
                        ? 'Vi kan indsætte den optimale afsætning X\u1D52\u1D56\u1D57 i ' +
                          'funktionen for VE, og bestemme de gennemsnitlige variable omkostninger:\n' +
                          'VE\u1D52\u1D56\u1D57 = ' +
                          numberFormat4(0.5 * ag).concat(' · ', numberFormat4(optimalx), ' + ', bg) +
                          ' = ' +
                          numberFormat1(0.5 * ag * optimalx + bg)
                        : 'Da der er knæk på GROMK kurven er det VE funktionen stykvis lineær og ikke-lineær, derfor kan vi hurtigere alternativt udregne VE\u1D52\u1D56\u1D57 ved at dividere TVO\u1D52\u1D56\u1D57 med X\u1D52\u1D56\u1D57' +
                          '\nVE\u1D52\u1D56\u1D57 = TVO\u1D52\u1D56\u1D57/X\u1D52\u1D56\u1D57 = ' +
                          numberFormat4(tvo) +
                          '/' +
                          numberFormat4(ox) +
                          ' = ' +
                          numberFormat1(tvo / ox)}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        Omsætning<sup>opt</sup>
                      </div>
                    </td>
                    <td>
                      <div>
                        TR<sup>opt</sup>
                      </div>
                    </td>

                    <td>
                      {ordremængde === Infinity && numberFormat1(optimalp * optimalx)}
                      {ordremængde !== Infinity && ox < ordreknæk1 && numberFormat1(optimalp * optimalx)}
                      {ordremængde !== Infinity &&
                        ox > ordreknæk1 &&
                        ox < +ordre + +ordreknæk1 &&
                        numberFormat1((a * ordreknæk1 + b) * ordreknæk1 + (ox - ordreknæk1) * ordrepris)}
                      {ordremængde !== Infinity &&
                        ox > +ordre + +ordreknæk1 &&
                        numberFormat1((a * (ox - ordre) + b) * (ox - ordre) + ordre * ordrepris)}
                    </td>

                    <td>
                      {ordremængde === Infinity &&
                        'Omsætningen angiver det totale salg af varen i kroner. Man ' +
                          'kan indsætte den optimale afsætning i funktionen for ' +
                          'omsætning ovenfor, eller man kan gange optimal pris ' +
                          'P\u1D52\u1D56\u1D57 og afsætning X\u1D52\u1D56\u1D57:\n' +
                          'Omsætning\u1D52\u1D56\u1D57 = P\u1D52\u1D56\u1D57 · X\u1D52\u1D56\u1D57 = ' +
                          numberFormat4(optimalp) +
                          ' · ' +
                          numberFormat4(optimalx) +
                          ' = ' +
                          numberFormat1(optimalp * optimalx)}

                      {ordremængde !== Infinity &&
                        ox < ordreknæk1 &&
                        'P\u1D52\u1D56\u1D57 · X\u1D52\u1D56\u1D57 = ' +
                          numberFormat4(optimalp) +
                          ' · ' +
                          numberFormat4(optimalx) +
                          ' = ' +
                          numberFormat1(optimalp * optimalx) +
                          '\nAl omsætning er på markedet, der leveres ikke noget af ordren'}

                      {ordremængde !== Infinity &&
                        ox > ordreknæk1 &&
                        ox < +ordre + +ordreknæk1 &&
                        'Omsætningen består af både omsætning på markedet og omsætning fra levering af ordren.\nPå markedet bliver omsætningen:\nP\u1D52\u1D56\u1D57 · X\u1D52\u1D56\u1D57 = ' +
                          numberFormat2(a * ordreknæk1 + b) +
                          '·' +
                          numberFormat2(ordreknæk1) +
                          ' = ' +
                          numberFormat1((a * ordreknæk1 + b) * ordreknæk1) +
                          '\nOmsætningen på ordren bliver:\nP\u1D52\u1D56\u1D57 · X\u1D52\u1D56\u1D57 = ' +
                          numberFormat2(ordrepris) +
                          '·' +
                          numberFormat2(ox - ordreknæk1) +
                          ' = ' +
                          numberFormat1((ox - ordreknæk1) * ordrepris) +
                          '\nDen samlede omsætning bliver:\n' +
                          numberFormat2((a * ordreknæk1 + b) * ordreknæk1) +
                          ' + ' +
                          numberFormat2((ox - ordreknæk1) * ordrepris) +
                          ' = ' +
                          numberFormat1((a * ordreknæk1 + b) * ordreknæk1 + (ox - ordreknæk1) * ordrepris)}

                      {ordremængde !== Infinity &&
                        ox > +ordre + +ordreknæk1 &&
                        'Omsætningen består af både omsætning på markedet og omsætning fra levering af ordren.\nPå markedet bliver omsætningen:\nP\u1D52\u1D56\u1D57 · X\u1D52\u1D56\u1D57 = ' +
                          numberFormat2(a * (ox - ordre) + b) +
                          '·' +
                          numberFormat2(ox - ordre) +
                          ' = ' +
                          numberFormat1((a * (ox - ordre) + b) * (ox - ordre)) +
                          '\nOmsætningen på ordren bliver:\nP\u1D52\u1D56\u1D57 · X\u1D52\u1D56\u1D57 = ' +
                          numberFormat2(ordrepris) +
                          '·' +
                          numberFormat2(ordre) +
                          ' = ' +
                          numberFormat1(ordre * ordrepris) +
                          '\nDen samlede omsætning bliver:\n' +
                          numberFormat2((a * (ox - ordre) + b) * (ox - ordre)) +
                          ' + ' +
                          numberFormat2(ordre * ordrepris) +
                          ' = ' +
                          numberFormat1((a * (ox - ordre) + b) * (ox - ordre) + ordre * ordrepris)}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        TVO<sup>opt</sup>
                      </div>
                    </td>
                    <td>
                      <div>
                        TVC<sup>opt</sup>
                      </div>
                    </td>
                    <td>
                      {gskift !== Infinity
                        ? ox < gskift
                          ? numberFormat1((ox * (ag * ox + bg + bg)) / 2)
                          : numberFormat1(
                              (gskift * (ag * gskift + bg + bg)) / 2 +
                                (ox - gskift) * ((ag2 * gskift + bg2 + ag2 * ox + bg2) / 2)
                            )
                        : numberFormat1((0.5 * ag * ox + bg) * ox)}
                    </td>
                    <td>
                      {/* <b>{xneg}</b> */}
                      {gskift === Infinity &&
                        'TVO angiver de totale variable omkostninger i kroner. Man kan indsætte den optimale afsætning i funktionen for TVO ovenfor, eller man kan gange optimal VE og afsætning:\n' +
                          'TVO\u1D52\u1D56\u1D57 = VE\u1D52\u1D56\u1D57 · X\u1D52\u1D56\u1D57 = ' +
                          numberFormat4(ove) +
                          '·' +
                          numberFormat4(ox) +
                          ' = ' +
                          numberFormat1(ove * ox)}
                      {gskift !== Infinity
                        ? ox <= gskift
                          ? 'For at finde de totale variable omkostninger kan vi beregne arealet under GROMK\u2081 fra afsætning 0 til ' +
                            numberFormat4(ox) +
                            '\nVi kan bestemme arealet som længde ' +
                            numberFormat4(ox) +
                            ' - ' +
                            0 +
                            ' = ' +
                            numberFormat4(ox - 0) +
                            ' gange gennemsnitshøjde = (' +
                            numberFormat4(ag * ox + bg) +
                            ' + ' +
                            numberFormat4(bg) +
                            ')/2 = ' +
                            numberFormat4((ag * ox + bg + bg) / 2) +
                            '\nTVO = ' +
                            numberFormat4(ox - 0) +
                            ' · ' +
                            numberFormat4((ag * ox + bg + bg) / 2) +
                            ' = ' +
                            numberFormat4((ox * (ag * ox + bg + bg)) / 2) +
                            ' DKK'
                          : 'For at finde de totale variable omkostninger kan vi beregne arealerne under GROMK\u2081 fra afsætning 0 til ' +
                            numberFormat4(gskift) +
                            ' og GROMK\u2082 fra afsætning ' +
                            numberFormat4(gskift) +
                            ' til ' +
                            numberFormat4(ox) +
                            '\nVi kan bestemme arealet under GROMK\u2081 som længde ' +
                            numberFormat4(gskift) +
                            ' - ' +
                            0 +
                            ' = ' +
                            numberFormat4(gskift - 0) +
                            ' gange gennemsnitshøjde = (' +
                            numberFormat4(ag * gskift + bg) +
                            ' + ' +
                            numberFormat4(bg) +
                            ')/2 = ' +
                            numberFormat4((ag * gskift + bg + bg) / 2) +
                            '\nTVO\u2081 = ' +
                            numberFormat4(gskift - 0) +
                            ' · ' +
                            numberFormat4((ag * gskift + bg + bg) / 2) +
                            ' = ' +
                            numberFormat4((gskift * (ag * gskift + bg + bg)) / 2) +
                            ' DKK' +
                            '\nVi kan herefter bestemme arealet under GROMK\u2082 som længde ' +
                            numberFormat4(ox) +
                            ' - ' +
                            numberFormat4(gskift) +
                            ' = ' +
                            numberFormat4(ox - gskift) +
                            ' gange gennemsnitshøjde = (' +
                            numberFormat4(ag2 * gskift + bg2) +
                            ' + ' +
                            numberFormat4(ag2 * ox + bg2) +
                            ')/2 = ' +
                            numberFormat4((ag2 * gskift + bg2 + ag2 * ox + bg2) / 2) +
                            '\nTVO\u2082 = ' +
                            numberFormat4(ox - gskift) +
                            ' · ' +
                            numberFormat4((ag2 * gskift + bg2 + ag2 * ox + bg2) / 2) +
                            ' = ' +
                            numberFormat4((ox - gskift) * ((ag2 * gskift + bg2 + ag2 * ox + bg2) / 2)) +
                            ' DKK' +
                            '\nVi kan nu bestemme de samlede totale variable omkostninger\nTVO\u1D52\u1D56\u1D57 = TVO\u2081 + TVO\u2082 = ' +
                            numberFormat4((gskift * (ag * gskift + bg + bg)) / 2) +
                            ' + ' +
                            numberFormat4((ox - gskift) * ((ag2 * gskift + bg2 + ag2 * ox + bg2) / 2)) +
                            ' = ' +
                            numberFormat1(
                              (gskift * (ag * gskift + bg + bg)) / 2 +
                                (ox - gskift) * ((ag2 * gskift + bg2 + ag2 * ox + bg2) / 2)
                            )
                        : ''}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        DB<sup>opt</sup>
                      </div>
                    </td>
                    <td>
                      <div>
                        Gross Profit<sup>opt</sup>
                      </div>
                    </td>
                    <td>{numberFormat1(dbfinal)}</td>

                    <td>
                      {'Dækningsbidraget er omsætningen minus de totale variable omkostninger. Dækningsbidraget benyttes til at dække faste omkostninger og profit.\n' +
                        'DB\u1D52\u1D56\u1D57 = Omsætning\u1D52\u1D56\u1D57 - TVO\u1D52\u1D56\u1D57 =\n' +
                        numberFormat4(tr) +
                        ' - ' +
                        numberFormat4(tvo) +
                        ' = ' +
                        numberFormat1(dbfinal)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      e<sub>p</sub>
                    </td>
                    <td>
                      e<sub>p</sub>
                    </td>
                    <td>
                      {+knækmængde === Infinity && numberFormat4(-optimalp / (b - optimalp))}
                      {+knækmængde !== Infinity &&
                        +knækpris > +optimalp &&
                        numberFormat4(-optimalp / (bned - optimalp))}
                      {+knækmængde !== Infinity && +knækpris < +optimalp && numberFormat4(-optimalp / (bop - optimalp))}
                      {+knækmængde !== Infinity && +knækpris === +optimalp && (
                        <div>
                          {numberFormat4(-optimalp / (bop - optimalp))}
                          <br></br>
                          og
                          <br></br>
                          {numberFormat4(-optimalp / (bned - optimalp))}
                        </div>
                      )}
                    </td>
                    <td>
                      {a === 0 ? (
                        <div>
                          Under fuldkommen konkurrence (a=0) kan vi ikke beregne priselasticiteten, da den ville være -uendelig. Dette skyldes at prisen er konstant og lig med GROMS, så en minimal prisændring ville medføre en uendelig stor procentvis ændring i afsætningen.
                        </div>
                      ) : (
                        <>
                          {+knækmængde === Infinity && (
                            <div>
                              Priselasticiteten ved den optimale pris {numberFormat4(optimalp)}
                              {ordremængde !== Infinity && ' på markedet'}, angiver hvor meget afsætningen falder/stiger i
                              procent, når prisen øges/sænkes med 1 procent. En priselasticitet på{' '}
                              {numberFormat4(-optimalp / (b - optimalp))}, betyder altså at hvis man sænker prisen med 1%
                              øges afsætningen med {numberFormat4(-optimalp / (b - optimalp))}
                              %.
                              <br />
                              Man kan beregne priselasticiteten på flere måder, du kan se flere detaljer i under fanen P og
                              priselasticitet. En hurtig måde at beregne punktpriselasticiteten e<sub>p</sub> på er:
                              <br />e<sub>p</sub> = -nedre/øvre = -p/(b-p) = {numberFormat4(-optimalp)}/ ({numberFormat4(b)}
                              {numberFormat4(-optimalp)})= {numberFormat4(-optimalp)}/{numberFormat4(b - optimalp)} =
                              {numberFormat4(-optimalp / (b - optimalp))}
                              <br />
                              <br />
                              Priselasticiteten antager praktisk taget altid negative værdier, ofte undlades minus i
                              lærebøger. Når omsætningen er maksimal (Ved P = {numberFormat4(b / 2)}), er priselasticiteten
                              -1, vi siger der er enhedselasticitet eller unielasticitet.
                              <br />
                              Er prisen {ordremængde !== Infinity && 'på markedet'} højere end {numberFormat4(b / 2)} er
                              elasticiteten mindre end -1, vi siger så at priselasticiteten er elastisk.
                              <br />
                              Er prisen {ordremængde !== Infinity && 'på markedet'} lavere end {numberFormat4(b / 2)} er
                              elasticiteten mellem -1 og 0, vi siger så at priselasticiteten er uelastisk. <br></br>
                            </div>
                          )}
                          {+knækmængde !== Infinity && +knækpris < +optimalp && (
                            <div>
                              Den optimale pris er {numberFormat4(optimalp)}, hvilket er højere end knækprisen{' '}
                              {numberFormat4(knækpris)}, vi skal altså beregne priselasticiteten ud fra at p<sub>op</sub>,
                              hvor oligopolisten sætter salgsprisen højere end knækprisen
                              <br></br>
                              Priselasticiteten ved den optimale pris beregnes som:
                              <br></br>e<sub>p</sub> = -nedre/øvre = -p/(b<sub>op</sub>-p) = {numberFormat4(-optimalp)}/(
                              {numberFormat4(bop)} - {numberFormat4(optimalp)}) ={' '}
                              {numberFormat4(-optimalp / (bop - optimalp))}
                              <br></br>En priselasticitet på {numberFormat4(-optimalp / (bop - optimalp))}, betyder altså at
                              hvis man sænker prisen med 1% øges afsætningen med{' '}
                              {numberFormat4(optimalp / (bop - optimalp))}
                              %.<br></br>
                            </div>
                          )}
                          {+knækmængde !== Infinity && +knækpris > +optimalp && (
                            <div>
                              'Den optimale pris er {numberFormat4(optimalp)}, hvilket er lavere end knækprisen{' '}
                              {numberFormat4(knækpris)}, vi skal altså beregne priselasticiteten ud fra at p<sub>ned</sub>,{' '}
                              hvor oligopolisten sætter salgsprisen lavere end knækprisen
                              <br></br>
                              Priselasticiteten ved den optimale pris beregnes som:
                              <br></br>e<sub>p</sub> = -nedre/øvre = -p/(b<sub>ned</sub>-p) = {numberFormat4(-optimalp)}/(
                              {numberFormat4(bned)} - {numberFormat4(optimalp)}) ={' '}
                              {numberFormat4(-optimalp / (bned - optimalp))}
                              <br></br>En priselasticitet på {numberFormat4(-optimalp / (bned - optimalp))}, betyder altså
                              at hvis man sænker prisen med 1% øges afsætningen med{' '}
                              {numberFormat4(optimalp / (bned - optimalp))}
                              %.<br></br>
                            </div>
                          )}

                          {+knækmængde !== Infinity && (
                            <div>
                              Sættes prisen op fra oligopolprisen {knækpris}. bliver priselasticiteten{' '}
                              {numberFormat2(-knækpris / (+bop - knækpris))}.<br></br>Sættes prisen ned fra oligopolprisen
                              knækpris DKK. bliver priselasticiteten {numberFormat2(-knækpris / (+bned - knækpris))}.
                              <br></br>Dette er som forventet, da konkurrenterne ikke følger med ved prisforøgelser,
                              medfører øgede priser større afsætningsfald, end afsætningsforøgelsen ved prisnedsættelser,
                              hvor konkurrenterne også sænker deres priser.'
                            </div>
                          )}
                        </>
                      )}
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
