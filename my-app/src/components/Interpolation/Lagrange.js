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

class Lagrange extends Component{

    
    CalLinear(){
        var x = [parseFloat(document.getElementById("Inputx1").value),]
        var X1 = parseFloat(document.getElementById("Inputx1").value);
        var Y1 = parseFloat(document.getElementById("Inputy1").value);
        var X2 = parseFloat(document.getElementById("Inputx2").value);
        var Y2 = parseFloat(document.getElementById("Inputy2").value);
        var Xval = parseFloat(document.getElementById("Inputxval").value);
        var l0,l1,y;
        l0 = (X2-Xval)/(X2-X1);
        l1 = (X1-Xval)/(X1-X2);
        var fx = l0*Y1+l1*Y2;
        document.getElementById("ans").innerHTML = fx;
    }

    CalQuadratic(){
        var x = [parseFloat(document.getElementById("Inputx1").value),parseFloat(document.getElementById("Inputx2").value),parseFloat(document.getElementById("Inputx3").value)];
        var y = [parseFloat(document.getElementById("Inputy1").value),parseFloat(document.getElementById("Inputy2").value),parseFloat(document.getElementById("Inputy3").value)];
        var Xval = parseFloat(document.getElementById("Inputxval").value);
        
        var L = [];
        var ans = 0;
        for (var i = 0; i < x.length; i++) {
            var sum = 1;
            for (var j = 0; j < x.length; j++) {
                if (j == i) {
                    continue;
                }
                sum *= (x[j] - Xval) / (x[j] - x[i]);

            }
            L[i] = sum * y[i];
        }
        for (var i = 0; i < x.length; i++) {
            ans += L[i];
        }
        document.getElementById("ans").innerHTML = ans;

    }

    CalPolynomial(){
        var x = [parseFloat(document.getElementById("Inputx1").value),parseFloat(document.getElementById("Inputx2").value),parseFloat(document.getElementById("Inputx3").value)
                ,parseFloat(document.getElementById("Inputx4").value),parseFloat(document.getElementById("Inputx5").value)];
        var y = [parseFloat(document.getElementById("Inputy1").value),parseFloat(document.getElementById("Inputy2").value),parseFloat(document.getElementById("Inputy3").value)
                ,parseFloat(document.getElementById("Inputy4").value),parseFloat(document.getElementById("Inputy5").value)];
        var Xval = parseFloat(document.getElementById("Inputxval").value);

        var L = [];
        var ans = 0;
        for (var i = 0; i < x.length; i++) {
            var sum = 1;
            for (var j = 0; j < x.length; j++) {
                if (j == i) {
                    continue;
                }
                sum *= (x[j] - Xval) / (x[j] - x[i]);

            }
            L[i] = sum * y[i];
        }
        for (var i = 0; i < x.length; i++) {
            ans += L[i];
        }
        document.getElementById("ans").innerHTML = ans;

    }

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <div>
                        <br />
            
                        <Form.Control id="Inputx1" type="Number" placeholder="input X1" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <Form.Control id="Inputy1" type="Number" placeholder="input Y1" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Form.Control id="Inputx2" type="Number" placeholder="input X2" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <Form.Control id="Inputy2" type="Number" placeholder="input Y2" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Form.Control id="Inputx3" type="Number" placeholder="input X3" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <Form.Control id="Inputy3" type="Number" placeholder="input Y3" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Form.Control id="Inputx4" type="Number" placeholder="input X4" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <Form.Control id="Inputy4" type="Number" placeholder="input Y4" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Form.Control id="Inputx5" type="Number" placeholder="input X5" style={{ width: "20%", margin: "0 auto" }}></Form.Control>                        
                        <Form.Control id="Inputy5" type="Number" placeholder="input Y5" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Form.Control id="Inputxval" type="Number" placeholder="input X value" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Button onClick={this.CalLinear} style={{ width: "10", margin: "0 auto" }}> Linear </Button>
                        <Button onClick={this.CalQuadratic} style={{ width: "10", margin: "0 auto" }}> Quadratic </Button>
                        <Button onClick={this.CalPolynomial} style={{ width: "10", margin: "0 auto" }}> Polynomial </Button>
                        <br />
                        <br />
                        <h id="ans"></h>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Lagrange;