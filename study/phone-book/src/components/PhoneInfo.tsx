import React, { Component } from 'react';
import { Information } from '../App';

interface PhoneInfoProps { 
    info: Information, 
    onRemove: (id:number) => void
}

class PhoneInfo extends Component<PhoneInfoProps> {
    static defaultProps: PhoneInfoProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        },
        onRemove: () => {}
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }

        const { name, phone, id } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo