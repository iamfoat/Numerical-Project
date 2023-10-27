import React, { Component } from "react";
import { evaluate } from "mathjs";
import { Button, FormControl } from "react-bootstrap";
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

class NewtonRaphson extends Component{
    calNewton(){
        var y = document.getElementById("fx").value;
        
        var x0 = parseFloat(document.getElementById("x0").value);
        var x1 = x0 + evaluate(y, {x:x0});
        while(Math.abs(((x1-x0)/x1)*100)>=0.000001){
          x0 = x1;
          x1 = x0 + evaluate(y, {x:x0});
        }
        document.getElementById("ans").innerHTML = x1;
        
    }
    render(){
        return(
            <div>
                <div style={mainDiv}>
                  <div style={Div}>
                    <div>
                      <h1>Newton Raphson</h1>
                      <Form.Control id="fx" type="text" placeholder="Input f(x)" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                      <br />
                      <Form.Control id="x0" type="Number" placeholder="Input x0" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                      <br />
                      <Button onClick={this.calNewton} style={{ width: "10", margin: "0 auto" }}> Calculate </Button>
                      <br />
                      <h id="ans"></h>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}
export default NewtonRaphson;