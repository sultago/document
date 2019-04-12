import React, { Component, ChangeEvent, FormEvent } from 'react';
import TodoItem from './TodoItem';

interface Props {}

interface TodoItemData {
    id: number;
    text: string;
    done: boolean;
}

interface State {
    todoItems: TodoItemData[];
    input: string;
}

class TodoList extends Component<Props, State> {
    id: number = 0;
    state: State = {
        todoItems: [],
        input: ''  
    };

    onToggle = (id: number): void => {
        this.setState(({todoItems}) => ({
            todoItems: todoItems.map(item => item.id === id ? {...item, done: !item.done } : item)
        }));
    }

    onRemove = (id: number): void => {
        this.setState(({todoItems}) => ({
            todoItems: todoItems.filter(item => item.id !== id)
        }));
    }

    onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({input: e.target.value});
    }

    onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        
        this.setState(({todoItems, input}) => ({
            input: '',
            todoItems: todoItems.concat({
                id: this.id++,
                text: input,
                done: false
            })
        }));
    }

    render() {
        const todoItemList = this.state.todoItems.map(todo => (
            <TodoItem 
                key={todo.id}
                done={todo.done}
                onToggle={() => this.onToggle(todo.id)}
                onRemove={() => this.onRemove(todo.id)}
                text={todo.text}
            />
        ));

        return (
            <div>
                <h1>오늘 뭐하지?</h1>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} value={this.state.input} />
                    <button type="submit">추가하기</button>
                </form>
                <ul>
                    {todoItemList}
                </ul>
            </div>
        );
    }
}

export default TodoList;