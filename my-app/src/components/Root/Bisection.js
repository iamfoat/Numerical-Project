import React, { Component } from "react";
import { evaluate } from "mathjs";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import './overall.css';

const mainDiv = {
  display: "flex",
  width: "100%",
  margin: "0 auto",
};

const Div = {
  width: "100%",
  margin: "0 auto",
};

class Bisection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: "",
      result: null,
      check: "",
      tableData: [],
    };
  }

  CalBisection = () => {
    var equation = document.getElementById("fx").value;
    var xl = parseFloat(document.getElementById("xl").value);
    var xr = parseFloat(document.getElementById("xr").value);
    var scope;
    var yr, xm, ym;

    if (xl !== 0 || xr !== 0) {
      var roundData = [];
      xm = (xl + xr) / 2;
      scope = { x: xr };
      yr = evaluate(equation, scope);
      scope = { x: xm };
      ym = evaluate(equation, scope);

      while (Math.abs(ym) >= 0.000001) {
        if (ym * yr > 0) {
          xr = xm;
        } else {
          xl = xm;
        }
        xm = (xl + xr) / 2;
        scope = { x: xm };
        ym = evaluate(equation, scope);

        roundData.push({
          round: roundData.length + 1,
          xl: xl,
          xr: xr,
          xm: xm,
          ym: ym,
        });
      }
      
      var y = equation.replace(/x/g, `(${xm})`);
      var checkfinal = evaluate(y);      
      this.setState({ equation: y, result: xm, check: `${y} = ${xm}`,tableData: roundData });
      this.setState({ equation: y, result: xm, check: `${y} = ${checkfinal}` });

      document.getElementById("ans").innerHTML = xm;
    }
  };

  render() {
    return (
      <div>
        <div style={mainDiv}>
          <div style={Div}>
            <div>
              <h1> Root Of Equation : Bisection </h1>
              <Form.Control id="fx" type="text" placeholder="input f(x)" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
              <br />
              <Form.Control id="xl" type="number" placeholder="input xl" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
              <br />
              <Form.Control id="xr" type="number" placeholder="input xr" style={{ width: "20%", margin: "0 auto" }}></Form.Control>

              <br />
              <br />
              <Button class="btn" onClick={this.CalBisection} style={{ width: "10", margin: "0 auto" }}> Calculate </Button>
              <br />
              <br />
              <h id="ans"></h>
              <br />
              <br />
              <div>{this.state.check}</div>
              <table>
    <thead>
      <tr>
        <th>Round</th>
        <th>xl</th>
        <th>xr</th>
        <th>xm</th>
        <th>ym</th>
      </tr>
    </thead>
    <tbody>
      {this.state.tableData.map((data, index) => (
        <tr key={index}>
          <td>{data.round}</td>
          <td>{data.xl}</td>
          <td>{data.xr}</td>
          <td>{data.xm}</td>
          <td>{data.ym}</td>
        </tr>
      ))}
    </tbody>
  </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Bisection;

