import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Polynomial = () =>{
    const CalPolynomial = (xval,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5) => {
        const l1 = (x2-xval)*(x3-xval)*(x4-xval)*(x5-xval)/((x2-x1)*(x3-x1)*(x4-x1)*(x5-x1));
        const l2 = (x1-xval)*(x3-xval)*(x4-xval)*(x5-xval)/((x1-x2)*(x3-x2)*(x4-x2)*(x5-x2));
        const l3 = (x1-xval)*(x2-xval)*(x4-xval)*(x5-xval)/((x1-x3)*(x2-x3)*(x4-x3)*(x5-x3));
        const l4 = (x1-xval)*(x2-xval)*(x3-xval)*(x5-xval)/((x1-x4)*(x2-x4)*(x3-x4)*(x5-x4));
        const l5 = (x1-xval)*(x2-xval)*(x3-xval)*(x4-xval)/((x1-x5)*(x2-x5)*(x3-x5)*(x4-x5));
        const fx = l1*y1+l2*y2+l3*y3+l4*y4+l5*y5;
        sety(fx);
    };

    const[xvalue,setxvalue] = useState(0);
    const[y,sety] = useState(0);
    const[x1,setx1] = useState(0);
    const[x2,setx2] = useState(0);
    const[x3,setx3] = useState(0);
    const[x4,setx4] = useState(0);    
    const[x5,setx5] = useState(0);
    const[y1,sety1] = useState(0);
    const[y2,sety2] = useState(0);
    const[y3,sety3] = useState(0);
    const[y4,sety4] = useState(0);
    const[y5,sety5] = useState(0);

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

    const inputx3 = (event) => {
        setx3(event.target.value);
    };
    
    const inputy3 = (event) => {
        sety3(event.target.value);
    };
    const inputx4 = (event) => {
        setx4(event.target.value);
    };
    
    const inputy4 = (event) => {
        sety4(event.target.value);
    };
    const inputx5 = (event) => {
        setx5(event.target.value);
    };
    
    const inputy5 = (event) => {
        sety5(event.target.value);
    };

    const calculateRoot = () => {
        const x1value = parseFloat(x1);
        const x2value = parseFloat(x2);
        const x3value = parseFloat(x3);
        const x4value = parseFloat(x4);
        const x5value = parseFloat(x5);
        const y1value = parseFloat(y1);
        const y2value = parseFloat(y2);
        const y3value = parseFloat(y3);
        const y4value = parseFloat(y4);
        const y5value = parseFloat(y5);
    
        CalPolynomial(xvalue,x1value,y1value,x2value,y2value,x3value,y3value,x4value,y4value,x5value,y5value);
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
              <Form.Label>Input X3</Form.Label>
              <input type="number" id="x3" onChange={inputx3} style={{ width: "10%", margin: "0 auto" }} className="form-control"></input>
              <Form.Label>Input Y3</Form.Label>
              <input type="number" id="y3" onChange={inputy3} style={{ width: "10%", margin: "0 auto" }} className="form-control"></input>
              <Form.Label>Input X4</Form.Label>
              <input type="number" id="x4" onChange={inputx4} style={{ width: "10%", margin: "0 auto" }} className="form-control"></input>
              <Form.Label>Input Y4</Form.Label>
              <input type="number" id="y4" onChange={inputy4} style={{ width: "10%", margin: "0 auto" }} className="form-control"></input>
              <Form.Label>Input X5</Form.Label>
              <input type="number" id="x4" onChange={inputx5} style={{ width: "10%", margin: "0 auto" }} className="form-control"></input>
              <Form.Label>Input Y5</Form.Label>
              <input type="number" id="y4" onChange={inputy5} style={{ width: "10%", margin: "0 auto" }} className="form-control"></input>
            
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
export default Polynomial;