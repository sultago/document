import React, { Component } from "react";
import PhoneInfo from './PhoneInfo';
import { Information } from '../App';

interface PhoneInfoListProp {
    data: Information[],
    onRemove: (id:number) => void,
    onUpdate: (id:number, data:Information) => void
}

class PhoneInfoList extends Component<PhoneInfoListProp> {
    static defaultProps : PhoneInfoListProp = {data: [], onRemove: () => {}, onUpdate: () => {}};
    
    shouldComponentUpdate(nextProps:PhoneInfoListProp, nextState:any) {
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('Render PhoneInfoList');
        const {data} = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info} onRemove={this.props.onRemove} onUpdate={this.props.onUpdate}/>)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;