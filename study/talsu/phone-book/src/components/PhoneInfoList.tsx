import React, { Component } from "react";
import PhoneInfo from './PhoneInfo';
import { Information } from '../App';

interface PhoneInfoListProp {
    data: Information[]
    onRemove: (id:number) => void
}

class PhoneInfoList extends Component<PhoneInfoListProp> {
    static defaultProps : PhoneInfoListProp = {data: [], onRemove: () => {}};

    render() {
        const {data} = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info} onRemove={this.props.onRemove}/>)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;