import React, { Component } from "react";

function CoolButton(props) {
    const {className} = props; 

    const whichClass = (classBtn) => {
        var classbutton = "button"+ " " + className;

        if(classBtn.isPrimary) {
            classbutton = classbutton + " " + "is-primary";
        }

        if(classBtn.isSuccess) {
            classbutton = classbutton + " " + "is-success";
        }

        if(classBtn.isDanger) {
            classbutton = classbutton + " " + "is-danger";
        }

        return classbutton;
    }

    return (
        <button className={whichClass(props)}>{props.children}</button>
    );
}


export default CoolButton;