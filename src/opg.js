import React from "react";
// import Toggle from "./ToggleRenderProps";
// import ReactPlayer from "react-player";
// import { FormCheckbox } from "shards-react";
// import { MDBContainer } from "mdbreact";

// import { Row, Col, FormControl, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
// import { Row, Col, FormControl } from "react-bootstrap";

// import { MDBInput, MDBFormInline, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import "./styles.css";

import "katex/dist/katex.min.css";



import Container from "react-bootstrap/Container";



export function opg() {
  // const [a, seta] = useState(+(-1.25).toFixed(2));
  // const [b, setb] = useState(+(10).toFixed(2));

  // var x;
  // var dataoms = [];
  // for (var i = 0; i < 10; i += 0.1) {
  //   dataoms.push([x, fun(x)]);
  // }

  // function fun(x) {
  //   return a * x * x + b * x; // or other function
  // }

  

  return (
    <div>
      <br></br>


      <Container fluid className="p-0">
        <div class="p-3 mb-0 bg-white text-black">
          <div class="card">
            <div class="card-body">
      <Table striped bordered hover>
  <thead>
    <tr>
      
      
      <th colSpan="2"><h4>Opgaver Basis optimering</h4></th>
      {/* <th colSpan="3">Last Name</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td colSpan="2">
      Fina er en fintech virksomhed der leverer finansielle serviceydelser til andre virksomheder.<br></br>
        Man har et produkt Sorting der hjælper virksomheder med posteringer i regnskabet.
      Fina har beregnet at de variable omkostninger pr. stk er 40,- kr.<br></br>
      Nu sælges Sorting til 100,- <br></br>
      Man har vha. markedsundersøgelser vurderet at pris- afsætningsfunktionen pr år er:<br></br>
      P= -0,01X+240<br></br>
      Hvor X er den årlige afsætning og P er prisen.<br></br>
      Besvar følgende 13 spørgsmål: <br></br>
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>Hvor mange stk. afsættes nu ved prisen 100,-?</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Hvad er omsætningen nu ved prisen 100,-?</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Hvad er forskriften for GROMK?</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Hvad er forskriften for VE?</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Hvad er forskriften for de totale variable omkostninger VO eller TVO?</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Hvad bliver de totale variable omkostninger VO eller TVO nu ved prisen 100,-?</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Hvad er dækningsbidraget DB nu ved prisen 100,-?</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Hvad er priselasticiteten ved prisen 100,-?</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Hvad er det maksimale dækningsbidrag DB pr. år Fina kan opnå på Sorting?</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Hvad er forskriften for GROMS?</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Hvad er priselasticiteten ved den pris, der giver det maksimale dækningsbidrag?</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Fina planlægger en reklamekampagne, der vil øge den afsætningen med 25% ved alle priser, det første år. Der forventes ingen effekt de efterfølgende år.<br></br>
      Hvad bliver det nye maksimale dækningsbidrag, hvis kampagnen gennemføres?
      </td>
    </tr>
    <tr>
      <td>13</td>
      <td>
      Reklamekampagnen koster 310.000,- bør den gennemføres?
      </td>
    </tr>
  </tbody>
</Table>
</div>
</div>
</div>
</Container>


<Container fluid className="p-0">
        <div class="p-3 mb-0 bg-white text-black">
          <div class="card">
            <div class="card-body">
      <Table striped bordered hover>
  <thead>
    <tr>
      
      
      <th colSpan="2"><h4>Løsningsforslag Basis optimering</h4></th>
      {/* <th colSpan="3">Last Name</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td colSpan="2">
      Fina er en fintech virksomhed der leverer finansielle serviceydelser til andre virksomheder.<br></br>
        Man har et produkt Sorting der hjælper virksomheder med posteringer i regnskabet.
      Fina har beregnet at de variable omkostninger pr. stk er 40,- kr.<br></br>
      Nu sælges Sorting til 100,- <br></br>
      Man har vha. markedsundersøgelser vurderet at pris- afsætningsfunktionen pr år er:<br></br>
      P= -0,01X+240<br></br>
      Hvor X er den årlige afsætning og P er prisen.<br></br>
      Besvar følgende 13 spørgsmål: <br></br>
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>Hvor mange stk. afsættes nu ved prisen 100,-?<br/><i>
      100 = -0,01X+240<br/>
      0,01X = 240 - 100<br/>
      0,01X = 140<br/>
      100*0,01X = 140*100<br/>
      X = 14000<br/>
      Der afsættes 14.000 stk. pr år<br/></i>
      </td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Hvad er omsætningen nu ved prisen 100,-?
      <br/><i>
      Omsætningen er 100*14000=1.400.000,-
      </i>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Hvad er forskriften for GROMK?
      <br/><i>
      GROMK=40
      </i>
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td>Hvad er forskriften for VE?
      <br/><i>
      VE=40
      </i>
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>Hvad er forskriften for de totale variable omkostninger VO eller TVO?
      <br/><i>
      VO=40X
      </i>
      </td>
    </tr>
    <tr>
      <td>6</td>
      <td>Hvad bliver de totale variable omkostninger VO eller TVO nu ved prisen 100,-?
      <br/><i>
      VO=40*14000=560.000
      </i>
      </td>
    </tr>
    <tr>
      <td>7</td>
      <td>Hvad er dækningsbidraget DB nu ved prisen 100,-?
      <br/><i>
      DB=1.400.000-560.000=840.000
      </i>
      </td>
    </tr>
    <tr>
      <td>8</td>
      <td>Hvad er priselasticiteten ved prisen 100,-?
      <br/><i>
      e<sub>p</sub> = -nedre/øvre = -p/(b-p) = -gul/orange = -100/140 =-0,7143
      </i>
      </td>
    </tr>
    <tr>
      <td>9</td>
      <td>Hvad er det maksimale dækningsbidrag DB pr. år Fina kan opnå på Sorting?
      <br/><i>
      Vi kan finde den optimale afsætning Xᵒᵖᵗ ved at sætte GROMS lig med GROMK:<br/>
       GROMS = GROMK ⇔<br/> -0,02X + 240 = 0X + 40 ⇔<br/> -0,02X - 0X = 40 - 240 ⇔<br/> -0,02X = -200 ⇔<br/> X = -200/-0,02 ⇔<br/> X = 10.000<br/>
      Den optimale afsætning Xᵒᵖᵗ er 10.000 stk. Afsætningen angiver det totale salg af varen i stk.<br/>
      Optimal afsætning Xᵒᵖᵗ = 10.000 stk. er den afsætning, der maksimerer dækningsbidraget DB.<br/>
      DB = 10.000*(140-40) = 1.000.000,-

      </i>
      </td>
    </tr>
    <tr>
      <td>10</td>
      <td>Hvad er forskriften for GROMS?
      <br/><i>
      GROMS = -0,02X + 240
      </i>
      </td>
    </tr>
    <tr>
      <td>11</td>
      <td>Hvad er priselasticiteten ved den pris, der giver det maksimale dækningsbidrag?
      <br/><i>
      e<sub>p</sub> = -nedre/øvre = -p/(b-p) = -gul/orange = -140/100 =-1,4
      </i>
      </td>
    </tr>
    <tr>
      <td>12</td>
      <td>Fina planlægger en reklamekampagne, der vil øge den afsætningen med 25% ved alle priser, det første år. Der forventes ingen effekt de efterfølgende år.<br></br>
      Hvad bliver det nye maksimale dækningsbidrag, hvis kampagnen gennemføres?
      <br/><i>
      Vi kan finde den optimale afsætning Xᵒᵖᵗ ved at sætte GROMS lig med GROMK:<br/>
       GROMS = GROMK ⇔<br/> -0,016X + 240 = 0X + 40 ⇔<br/> -0,016X - 0X = 40 - 240 ⇔<br/> -0,016X = -200 ⇔<br/>
        X = -200/-0,016 ⇔<br/> X = 12.500<br/>
      Den optimale afsætning Xᵒᵖᵗ er 12.500 stk. Afsætningen angiver det totale salg af varen i stk.<br/>
      Optimal afsætning Xᵒᵖᵗ = 12.500 stk. er den afsætning, der maksimerer dækningsbidraget DB.<br/>
      DB = 12.500*(140-40) = 1.250.000,-
      </i>
      </td>
    </tr>
    <tr>
      <td>13</td>
      <td>
      Reklamekampagnen koster 310.000,- bør den gennemføres?
      <br/><i>
        Nej da DB kun øges med 250.000,- er reklamekampagnen ikke rentabel.
      </i>
      </td>
    </tr>
  </tbody>
</Table>
</div>
</div>
</div>
</Container>

<Container fluid className="p-0">

        <div class="p-3 mb-0 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <h3>Video løsningsforslag</h3>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="demo"
                  className="embed-responsive-item"
                  src="https://player.vimeo.com/video/517177715"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>

      
      
      <br />

      <br />
    </div>
  );
}
