import React, { Component } from 'react';
import Profile from './components/Profile';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <Profile name="talsu" job="engineer" />
        <Counter />
        <TodoList />
      </div>
    );
  }
}

export default App;
