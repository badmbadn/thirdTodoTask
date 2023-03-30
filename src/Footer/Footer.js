import React, {Component} from "react";
import TaskFilter from "../TasksFilter/TaskFilter";
import './Footer.css'


export default class Footer extends Component{

    btnStatus = [ 
        {name:'all',label:'All',id:1},
        {name:'active',label:'Active',id:2},
        {name:'completed',label:'Completed',id:3},
    ]

    render () {
        const {onFilterChange,filter,deleteCompletedItem,todoCount} = this.props;
        return (
            <footer className="footer">
                <span className="todo-count">{`${todoCount} шт.осталось`}</span>
                <TaskFilter valueBtns={this.btnStatus}
                            filter ={filter}
                            onFilterChange = {onFilterChange}/>
                <button className="clear-completed"
                        onClick={deleteCompletedItem}>
                    Очистить завершено
                </button>
            </footer>
        )
    }

    
}

