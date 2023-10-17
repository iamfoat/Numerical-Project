import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto"
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

class Bisection extends Component{
        var y = document.getElementById("Inputfx").value;
        var xl = document.getElementById("Inputxl").value;
        var xr = document.getElementById("Inputxr").value;
        var yl = pow(xl,4)-13;
        var yr = pow(xr,4)-13;
        var x1 = (xl*yr-xr*yl) / (yr-yl);
        var yx1 = pow(x1,4)-13;

    Calbisection
    render(){
        return(
            <div>
            <div style={mainDiv}>
                <div style={Div}>
                <div>
                    <Form.Control id="Inputfx" type="text" placeholder="input f(x)" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                    <br/>
                    <Form.Control id="Inputxl" type="number" placeholder="input xl" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                    <br/>
                    <Form.Control id="Inputxr" type="number" placeholder="input xr" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                    <br/>
            
                    </div>


                </div>
            </div>
            </div>
        )   
    }
}