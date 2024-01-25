import React, { Component } from "react";
import { evaluate } from "mathjs";
import { Button } from "react-bootstrap";
import Chart from "react-apexcharts";
import Form from "react-bootstrap/Form";
import axios from "axios";


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
      chartData: {
        series: [],
        options: {
          chart: {
            id: "bisection-chart",
          },
          xaxis: {
            iter: [],
          },
        },
      },
    };
  }
  getstartdata = () => {
    axios.get("http://localhost:3001")
    .then(res => {
      const data = res.data;
      console.log(data);
      this.setState({ xl: res.data.xl });
      this.setState({ xr: res.data.xr });
      this.setState({ E: res.data.equation });
      console.log("XL: " + res.data.xl + "XR" + res.data + "func" + res.data.func);
    });
  };

  CalBisection = () => {
    var equation = document.getElementById("fx").value;
    var xl = parseFloat(document.getElementById("xl").value);
    var xr = parseFloat(document.getElementById("xr").value);
    var yr, xm, ym;

    if (xl !== 0 || xr !== 0) {
      var roundData = [];
      xm = (xl + xr) / 2;
      yr = evaluate(equation, { x: xr });
      ym = evaluate(equation, { x: xm });

      while (Math.abs(ym) >= 0.000001) {
        if (ym * yr > 0) {
          xr = xm;
        } else {
          xl = xm;
        }
        xm = (xl + xr) / 2;
        ym = evaluate(equation, { x: xm });

        roundData.push({
          round: roundData.length + 1,
          xl: xl,
          xr: xr,
          xm: xm,
        });
      }
        const dataa = roundData.map((data) => data.xm);
        const iterr = roundData.map((data) => data.round);

        const chartData = {
          series: [
            {
              name: "xm",
              data: dataa,
            },
          ],
          options: {
            chart: {
              id: "bisection-chart",
            },
            xaxis: {
              iterr: iterr,
            },
          },
        };
        

      var y = equation.replace(/x/g, `(${xm})`);
      var checkfinal = evaluate(y);      
      this.setState({
        equation: y,
        result: xm,
        check: `${y} = ${xm}`,
        tableData: roundData,
        chartData: chartData,
      });
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
              <h1> Bisection </h1>
              <Form.Control id="fx" type="text" placeholder="input f(x)" ></Form.Control>
              <br />
              <Form.Control id="xl" type="number" placeholder="input xl" ></Form.Control>
              <br />
              <Form.Control id="xr" type="number" placeholder="input xr" ></Form.Control>
              <br />
              <Button class="btn" onClick={this.CalBisection} > Calculate </Button>
              <br />
              <h id="ans"></h>
              <br />
              <div>{this.state.check}</div>
              <br />
              <Button onClick={this.getstartdata}>API</Button>
              <table>
              <thead>
                <tr>
                  <th>Iteration</th>
                  <th>xl</th>
                  <th>xr</th>
                  <th>xm</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.round}</td>
                  <td>{data.xl}</td>
                  <td>{data.xr}</td>
                  <td>{data.xm}</td>
                </tr>
                ))}
              </tbody>
             </table>
             <Chart
              options={this.state.chartData.options}
              series={this.state.chartData.series}
              type="line"
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Bisection;