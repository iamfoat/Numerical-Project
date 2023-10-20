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

class Newton extends Component{
    CalLinear(){
        var X1 = parseFloat(document.getElementById("Inputx1").value);
        var Y1 = parseFloat(document.getElementById("Inputy1").value);
        var X2 = parseFloat(document.getElementById("Inputx2").value);
        var Y2 = parseFloat(document.getElementById("Inputy2").value);
        var Xval = parseFloat(document.getElementById("Inputxval").value);
        var c0,c1,y;
        c0 = Y1;
        c1 = (Y2-Y1)/(X2-X1);
        y = c0+c1*(Xval-X1);
        document.getElementById("ans").innerHTML = y;
    }

    CalQuadratic(){
        var X1 = parseFloat(document.getElementById("Inputx1").value);
        var Y1 = parseFloat(document.getElementById("Inputy1").value);
        var X2 = parseFloat(document.getElementById("Inputx2").value);
        var Y2 = parseFloat(document.getElementById("Inputy2").value);
        var X3 = parseFloat(document.getElementById("Inputx3").value);
        var Y3 = parseFloat(document.getElementById("Inputy3").value);
        var Xval = parseFloat(document.getElementById("Inputxval").value);
        var c0,c1,c2,y;

        c0 = Y1;
        c1 = (Y2-Y1)/(X2-X1);
        c2 = (((Y3-Y1)/(X3-X1))-((Y2-Y1)/(X2-X1)))/(X3-X1);

        y = c0+c1*(Xval-X1)+c2*(Xval-X1)*(Xval-X2);
        document.getElementById("ans").innerHTML = y;

    }

    CalPolynomial(){
        var x = [parseFloat(document.getElementById("Inputx1").value),parseFloat(document.getElementById("Inputx2").value),parseFloat(document.getElementById("Inputx3").value)
                ,parseFloat(document.getElementById("Inputx4").value),parseFloat(document.getElementById("Inputx5").value)];
                
        var y = [parseFloat(document.getElementById("Inputy1").value),parseFloat(document.getElementById("Inputy2").value),parseFloat(document.getElementById("Inputy3").value)
                ,parseFloat(document.getElementById("Inputy4").value),parseFloat(document.getElementById("Inputy5").value)];

        var Xval = parseFloat(document.getElementById("Inputxval").value);

   
    }



   
    

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <div>
                        <Button onClick={this.CalLinear} style={{ width: "10", margin: "0 auto" }}> Linear </Button>
                        <Button onClick={this.CalLinear} style={{ width: "10", margin: "0 auto" }}> Quadratic </Button>
                        <Button onClick={this.CalLinear} style={{ width: "10", margin: "0 auto" }}> Polynomial </Button>
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
                        <Button onClick={this.CalLinear} style={{ width: "10", margin: "0 auto" }}> Calculate </Button>
                         <br />
                        <br />
                        <span id="ans"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newton;