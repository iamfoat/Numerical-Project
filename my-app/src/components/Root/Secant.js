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

class Secant extends Component{
    calSecant(){
        var y = document.getElementById("fx").value;
        var x0 = parseFloat(document.getElementById("x0").value);
        var x1 = parseFloat(document.getElementById("x1").value);

        var y0 = evaluate(y,{x:x0});
        var y1 = evaluate(y,{x:x1});
        var x2 = x0 - (y0*(x0 - x1)) / (y0 - y1);

        while(Math.abs((x2-x1)/x2)*100>=0.00001){
            x0 = x1;
            x1 = x2;
            y0 = evaluate(y,{x:x0});
            y1 = evaluate(y,{x:x1});
            x2 = x0 - (y0*(x0 - x1)) / (y0 - y1);
        }
        document.getElementById("ans").innerHTML = x2;

    }

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <div>
                            <Form.Control id="fx" type="text" placeholder="Input f(x)" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                            <br />
                            <Form.Control id="x0" type="Number" placeholder="Input x0" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                            <br />
                            <Form.Control id="x1" type="Number" placeholder="Input x1" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                            <br />
                            <Button onClick={this.calSecant} style={{ width: "10", margin: "0 auto" }}> Calculate </Button>
                            <br />

                            <h id="ans"></h>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Secant;