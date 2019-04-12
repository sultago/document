import React, { Component, ChangeEvent } from 'react';
import { Information } from '../App';

interface PhoneInfoProps { 
    info: Information, 
    onRemove: (id:number) => void
    onUpdate: (id:number, data:Information) => void
}

interface PhoneInfoState {[x:string]:any}

class PhoneInfo extends Component<PhoneInfoProps, PhoneInfoState> {
    static defaultProps: PhoneInfoProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        },
        onRemove: () => {},
        onUpdate: () => {}
    }

    state = {
        editing: false,
        name: '',
        phone: '',
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id || 0);
    }

    handleToggleEdit = () => {
        this.setState(({editing}) => ({editing:!editing}))
    }

    handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    
    componentDidUpdate(prevProps:PhoneInfoProps, prevState:PhoneInfoState) {
        if (!prevState.editing && this.state.editing) {
            this.setState({
                name: this.props.info.name,
                phone: this.props.info.phone
            })
        }

        if (prevState.editing && !this.state.editing) {
            this.props.onUpdate(this.props.info.id || 0, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    shouldComponentUpdate(nextProps:PhoneInfoProps, nextState:PhoneInfoState) {
        if (!this.state.editing
            && !nextState.editing
            && nextProps.info === this.props.info) {
            return false;
        }

        return true;
    }

    render() {
        console.log(`Render PhoneInfo ${this.props.info.id}`);

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }

        if (this.state.editing) {
            return (
                <div style={style}>
                    <div>
                        <input 
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }


        const { name, phone, id } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
                
            </div>
        );
    }
}

export default PhoneInfo