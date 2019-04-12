import React, { Component, ChangeEvent } from 'react';
import PhoneForm, { PhoneFormState } from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
// import logo from './logo.svg';
// import './App.css';

export interface Information {
  id?: number,
  name?: string,
  phone?: string
}

interface AppProps {}
interface AppState {
  informations: Information[],
  keyword: string
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
    ],
    keyword: ''
  }

  handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    this.setState({
      keyword: e.target.value
    });
  }

  handleCreate = (data: PhoneFormState) => {
    const { informations } = this.state;
    this.setState({
      informations: informations.concat({id: this.id++, ...data})
    });
  }

  handleRemove = (id:number) => {
    this.setState({
      informations: this.state.informations.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id:number, data:Information) => {
    this.setState(({informations}) => ({
      informations: informations.map(
        info => id === info.id
          ? {...info, ...data}
          : info
      )
    }));
  }

  render() {
    const { informations } = this.state;
    const filteredList = informations.filter(
      info => (info.name || '').indexOf(this.state.keyword) !== -1
    );

    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <p>
          <input
            placeholder="검색 할 이름일 입력하세요.."
            onChange={this.handleChange}
            value={this.state.keyword}
          />
        </p>
        <hr />
        <PhoneInfoList data={filteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
