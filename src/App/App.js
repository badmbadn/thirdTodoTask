import React, {Component} from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import './App.css'

export default class App extends Component {

    maxId = 3
    state = {
        data: [
            {descr:'Завершенная задача',id:0,done:false},
            {descr:'Editin task',id:1,done:false},
            {descr:'Активная задача',id:2,done:false},
        ],
        filter:''               
    }

    onToggle = (id) => {
        
        this.setState(({data}) => {
            const res = data.map(item => (item.id === id ? { ...item, done:!item.done} : item))
            return {
                data:res
            }
        })
    }

    createTodoItem(descr) {
        return {      
            descr,
            id:this.maxId++,
            done:false,   
        }
      }

    addItem = (text) => {

        const newItem = this.createTodoItem(text)
        this.setState(({data}) => {
            const newData = [...data,newItem]

            return {
                data:newData
            }
        })
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => ({ data:data.filter((item) => item.id !== id)}))   
    }
    
    onFilterChange = (filter) => {
        this.setState({filter})
    }

    filter(items, filter) {
        switch(filter) {
         case 'all':
           return items;
         case 'active':
           return items.filter((item) => !item.done);
         case 'completed':
           return items.filter((item) => item.done) ;
         default:return items;
        }
     }
     
    deleteCompletedItem = () => {
        this.setState(({data}) => {
            const res = [...data].filter(el => !el.done)

            return {
                data:res
            }
        })
    }

    render () {
        const {data,filter} = this.state;
        const visibleItems = this.filter(data,filter)
        const todoCount = data.filter(el => !el.done).length
        return (
            <section className="todoapp">
                <Header addItem = {this.addItem}/>
                <section  className="main">
                    <TaskList
                    dataTasks={visibleItems} 
                    onDeleted = {this.deleteItem}
                    onToggle = {this.onToggle}
                    
                    />
                    <Footer filter={filter} 
                            onFilterChange = {this.onFilterChange}
                            deleteCompletedItem = {this.deleteCompletedItem}
                            todoCount = {todoCount}
                    />
                </section>
            </section>
        )
    }
}


