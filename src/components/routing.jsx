import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Scenes/Home/home";
import PrintSelectedItems from "./PrintWindow/printSelectedItems";

const Routing = (props) => {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/cPrintSelectedItems' component={PrintSelectedItems}/>
            </div>
        </Router>
    )
}

export default Routing
