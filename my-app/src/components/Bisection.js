import React, { Component } from "react";
import { evaluate } from "mathjs";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const mainDiv = {
  display: "flex",
  width: "100%",
  margin: "0 auto",
};

const Div = {
  width: "100%",
  margin: "0 auto",
};

class Bisection extends Component{
    
  CalBisection(){
    const y = document.getElementById("Inputfx").value;
    const Xl = document.getElementById("Inputxl").value;
    const Xr = document.getElementById("Inputxr").value;
    const xl = parseFloat(Xl);
    const xr = parseFloat(Xr);
    let scope;
    let yr, xm, ym;

    xm = (xl + xr) / 2;
    scope = { x: xr };
    yr = evaluate(y, scope);
    scope = { x: xm };
    ym = evaluate(y, scope);

    while (Math.abs(ym) >= 0.000001) {
      if (ym * yr > 0) {
        xr = xm;
      } else {
        xl = xm;
      }
      xm = (xl + xr) / 2;
      scope = { x: xm };
      ym = evaluate(y, scope);
    }
    document.getElementById("ans").innerHTML = xm;
  }

  render() {
    return (
      <div>
        <div style={mainDiv}>
          <div style={Div}>
            <div>
              <Form.Control id="Inputfx" type="text" placeholder="input f(x)" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
              <br />
              <Form.Control id="Inputxl" type="number" placeholder="input xl" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
              <br />
              <Form.Control id="Inputxr" type="number" placeholder="input xr" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
              <br />
              <Button onClick={this.CalBisection} style={{ width: "10", margin: "0 auto" }}> Calculate </Button>
              <br />
              <br />
              <h id="ans"></h>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bisection;
