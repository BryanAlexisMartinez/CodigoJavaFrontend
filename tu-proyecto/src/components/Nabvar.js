import React, { Component } from "react";
import {BrowserRouter as Link } from 'react-router-dom';
import "./styles/navbar.css";

class NavBar extends Component{
    render(){
        return (
            <nav>
            <div class="logo">
                <a href="/">Almacenamiento de codigo</a>
            </div>
            <ul class="nav-links">

                <li>
                <a href="/">CodeEditor</a>
                </li>

                <li>
                <a href="/codeEditorSin">CodeEditor Sin</a>
                </li>

            </ul>
        </nav>
        );
    }
}

export default NavBar;