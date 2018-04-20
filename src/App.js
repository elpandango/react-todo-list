import React, {Component} from 'react';
import List from './components/List/List';
import NewItem from './components/NewItem/NewItem';

import './App.css';

class App extends Component {
    state = {
        todoList:
            [
                {id: 1, text: 'Test'},
                {id: 2, text: 'Test 2'},
                {id: 3, text: 'Test 3'}
            ],
        inputValue: null
    };

    addNewItem = () => {
        let updateTodoList = [...this.state.todoList];
        let updatedInputValue = this.state.inputValue;
        updateTodoList.push({ id: updateTodoList.length + 1, text: updatedInputValue});
        this.setState({todoList: updateTodoList});
    };

    updateInputValue = (e) => {
        this.setState({inputValue: e.target.value});
    };

    itemDeleteHandler = (id) => {
        let updateTodoList = [...this.state.todoList];
        updateTodoList.splice(id, 1);

        this.setState({todoList: updateTodoList});

    };

    render() {
        return (
            <div className="App">
                <h1>To do list</h1>
                <hr/>
                <NewItem
                    clicked={this.addNewItem}
                    inputValue={(e) => this.updateInputValue(e)}/>
                <hr/>
                <List
                    list={this.state.todoList}
                    deleted={this.itemDeleteHandler}/>
            </div>
        );
    }
}

export default App;
