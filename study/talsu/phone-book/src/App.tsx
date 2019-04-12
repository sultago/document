import React, { Component } from 'react';
import PhoneForm, { PhoneFormState } from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
// import logo from './logo.svg';
// import './App.css';

export interface Information {
  id: number,
  name: string,
  phone: string
}

interface AppProps {}
interface AppState {
  informations: Information[]
}

class App extends Component<AppProps, AppState> {
  id: number = 2
  state: AppState = {
    informations: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }

  handleCreate = (data: PhoneFormState) => {
    const { informations } = this.state;
    this.setState({
      informations: informations.concat({id: this.id++, name: data.name, phone: data.phone})
    });
  }

  handleRemove = (id:number) => {
    this.setState({
      informations: this.state.informations.filter(info => info.id !== id)
    })
  }

  render() {
    const { informations } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={this.state.informations} onRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;
