import React, { Component } from "react";

import FormField from "./FormField.js";

import CoolButton from "./CoolButton.js";

import "./App.css";

class App extends Component {
    render() {
        return ( 
            <main>
                <header>
                    <nav className="navbar is-transparent">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="#0">
                                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                            </a>
                            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample"></div>
                        </div>

                        <div id="navbarExampleTransparentExample" className="navbar-menu">
                            <div className="navbar-start">
                            <a className="navbar-item" href="#0">
                                Home
                            </a>
                            </div>
                        </div>

                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="field is-grouped">
                                        <p className="control">
                                            <a className="bd-tw-button button" href="#0">
                                            <span>
                                                Login
                                            </span>
                                            </a>
                                        </p>
                                        <p className="control">
                                            <a className="button is-primary" href="#0">
                                            <span>
                                                Signup
                                            </span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </nav>
                </header>

                <section id="form-section">
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </section>

                <section>
                    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                    <CoolButton isSmall isSuccess>Button 2</CoolButton>
                </section>

            </main>
        );
    }
}

export default App;