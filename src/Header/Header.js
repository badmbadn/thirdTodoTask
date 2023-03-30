import React,{Component} from "react";

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import './Header.css'

export default class Header extends Component {

    render() {
        return (
            <header className="header">
                <h1>Дела</h1>
                <NewTaskForm addItem = {this.props.addItem } />
            </header> 
        )
    }
    
}

