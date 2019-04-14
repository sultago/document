// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {
    handleIncrement = () => {
        this.props.CounterActions.increment();
    }

    handleDecrement = () => {
        this.props.CounterActions.decrement();
    }

    render() {
        return (
            <Counter
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                number={this.props.number}
            />
        );
    }
}

const mapStateToProps = (state) => ({ number: state.counter.number });
const mapDispatchToProps = (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);