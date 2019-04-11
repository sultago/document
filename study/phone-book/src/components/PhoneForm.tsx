import React, { Component, ChangeEvent, FormEvent } from 'react';

interface PhoneFormProps {
    onCreate: (data: PhoneFormState) => void;
}

export interface PhoneFormState {
    [x: string]: string
}

class PhoneForm extends Component<PhoneFormProps, PhoneFormState> {
    state: PhoneFormState = { name: '', phone: '' }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name:'',
            phone:''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;