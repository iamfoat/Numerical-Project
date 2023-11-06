import React ,{ Component } from "react";
import { evaluate } from "mathjs";
import { Button, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const mainDiv = {
    display: "flex",
    width: "100%",
    margin: "0 auto",
};

const Div = {
    display: "flex",
    margin: "0 auto",
};

class Spline extends Component{

    input(){
        var n = parseFloat(document.getElementById("Inputn").value);
        var input = "";

        for(var i=0;i<n;i++){
            // input += "<input id=input"+i" type='number' placeholder='a"+(i+1)" ' style='width:50px;margin:5px;' >"
        }
        document.getElementById("Inputn").innerHTML = input;
    }

    calLinear(){

    }

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <div>
                            <Form.Control id="Inputn" placeolder="Input n" style={{width:"20%", margin:"0%"}}></Form.Control>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Spline;