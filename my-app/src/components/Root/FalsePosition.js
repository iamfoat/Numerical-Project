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

  class FalsePosition extends Component{

    
    CalFalse(){
        var xl = parseFloat(document.getElementById("Inputxl").value);
        var xr = parseFloat(document.getElementById("Inputxr").value);
        var y = document.getElementById("Inputfx").value;
        var yl,yr,x1,yx1;

    
        yl = evaluate(y,{x:xl})
        yr = evaluate(y,{x:xr});

        x1 = (xl*xr-xr*yl)/(yr-yl);
        yx1 = evaluate(y,{x:x1});

        while(Math.abs(yx1)>=0.000001){
            if(yx1*yr > 0){
                xr = x1;
            }
            else{
                xl = x1;
            }
            x1 = (xl*xr-xr*yl)/(yr-yl);

            yx1 = evaluate(y,{x:x1});
        }
        document.getElementById("ans").innerHTML = x1;

    }

    render(){
        return(
        <div>
        <div style={mainDiv}>
          <div style={Div}>
            <div>
            <h1> Root Of Equation : False Position </h1>
              <Form.Control id="Inputfx" type="text" placeholder="input f(x)" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
              <br />
              <Form.Control id="Inputxl" type="number" placeholder="input xl" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
              <br />
              <Form.Control id="Inputxr" type="number" placeholder="input xr" style={{ width: "20%", margin: "0 auto" }}></Form.Control>
              <br />
              <Button onClick={this.CalFalse} style={{ width: "10", margin: "0 auto" }}> Calculate </Button>
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
  export default FalsePosition;