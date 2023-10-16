import React, { useState } from "react";
import { Button, Container, Form , Table} from "react-bootstrap";

const Linear = () => {
  const CalLinear = (xval,x1,y1,x2,y2) => {
    const l0 = (x2-xval)/(x2-x1);
    const l1 = (x1-xval)/(x1-x2);
    const fx = l0*y1+l1*y2;
    sety(fx);
  };

//   const print = () =>{
//     console.log(data)
//     setl0(data.map((x)=>x.l0));
//     setl1(data.map((x)=>x.l1));
//     return(
//         <Container>
//             <Table striped bordered hover variant="dark">
//                 <thead>
//                     <tr>
//                         <th width="30%">L0</th>
//                         <th width="30%">L1</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((element, index)=>{
//                         return  (
//                         <tr key={index}>
//                             <td>{element.l0}</td>
//                             <td>{element.l1}</td>
//                         </tr>)
//                     })}
//                 </tbody>
//             </Table>
//         </Container>
       
//     );
// }
// const data =[];
// const [valuel0, setl0] = useState([]);
// const [valuel1, setl1] = useState([]);
 
// const [html, setHtml] = useState(null);
  const [xvalue, setxvalue] = useState(0);
  const [y, sety] = useState(0);
  const [x1, setx1] = useState(0);
  const [x2, setx2] = useState(0);
  const [y1, sety1] = useState(0);
  const [y2, sety2] = useState(0);

  const inputxvalue = (event) => {
    setxvalue(event.target.value);
  };

  const inputx1 = (event) => {
    setx1(event.target.value);
  };

  const inputy1 = (event) => {
    sety1(event.target.value);
  };

  const inputx2 = (event) => {
    setx2(event.target.value);
  };

  const inputy2 = (event) => {
    sety2(event.target.value);
  };

  const calculateRoot = () => {
    const x1Value = parseFloat(x1);
    const x2Value = parseFloat(x2);
    const y1Value = parseFloat(y1);
    const y2Value = parseFloat(y2);

    CalLinear(xvalue, x1Value, y1Value, x2Value, y2Value);
    // setHtml(print());

    // console.log(valuel0)
    // console.log(valuel1)
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Input xvalue</Form.Label>
          <input type="text" id="xvalue" value={xvalue} onChange={inputxvalue} style={{ width: "10%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input X1</Form.Label>
          <input type="number" id="x1" onChange={inputx1} style={{ width: "10%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input Y1</Form.Label>
          <input type="number" id="y1" onChange={inputy1} style={{ width: "10%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input X2</Form.Label>
          <input type="number" id="x2" onChange={inputx2} style={{ width: "10%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input Y2</Form.Label>
          <input type="number" id="y2" onChange={inputy2} style={{ width: "10%", margin: "0 auto" }} className="form-control"></input>
        </Form.Group>
        <Button variant="dark" onClick={calculateRoot}>
          Calculate
        </Button>
      </Form>
      <br></br>
      <h5>Answer = {y}</h5>
    </Container>
  );
};

export default Linear;