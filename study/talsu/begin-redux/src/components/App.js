import React, { Component } from 'react';
import AppTemplate from './AppTemplate';
import CounterContainer from 'containers/CounterContainer';
import TodoContainer from 'containers/TodosContainer';

class App extends Component {
  render() {
    return (
      <AppTemplate
        counter={<CounterContainer />}
        todos={<TodoContainer />}
      />
    );
  }
}

export default App;
