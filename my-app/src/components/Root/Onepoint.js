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

class OnePoint extends Component{

    
    calOnePoint(){
        var x0 = parseFloat(document.getElementById("Inputx0").value);
        var fx = document.getElementById("Inputfx").value;
        var x1 = evaluate(fx,{x:x0});

        while(Math.abs(((x1-x0)/x1)*100)>=0.000001){
            x0 = x1;
            x1 = evaluate(fx,{x:x0});
        }
        document.getElementById("ans").innerHTML = x1;
    }

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <br />
                        <div>
                        <h1>Root Of Equation : One-Point Iteration</h1>
                        <br />
                        <Form.Control id="Inputfx" type="text" placeholder="input Equation" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Form.Control id="Inputx0" type="Number" placeholder="input X0" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Button onClick={this.calOnePoint} style={{ width: "10", margin: "0 auto" }}> Calculate </Button>
                        <br />
                        <span id="ans"></span>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}
export default OnePoint;