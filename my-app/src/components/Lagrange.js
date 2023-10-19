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
        var X1 = document.getElementById("Inputx1").value;
        var Y1 = document.getElementById("Inputy1").value;
        var X2 = document.getElementById("Inputx2").value;
        var Y2 = document.getElementById("Inputy2").value;
        var Xval = document.getElementById("Inputxval").value;
    }

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <div>
                        <Form.Control id="Inputxval" type="Number" placeholder="input X value" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Form.Control id="Inputx1" type="Number" placeholder="input X1" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Form.Control id="Inputy1" type="Number" placeholder="input Y1" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Form.Control id="Inputx2" type="Number" placeholder="input X2" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        <Form.Control id="Inputy2" type="Number" placeholder="input Y2" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
                        <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}