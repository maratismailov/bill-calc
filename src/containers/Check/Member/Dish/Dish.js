import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dish extends Component {
    render() {
        return (
            <div>
                 <input
                    onChange={this.props.changed}
                    value={this.props.value}
                    {...this.props}
                    placeholder='Name'
                />
                <input
                    onChange={this.props.changed}
                    value={this.props.value}
                    {...this.props}
                    placeholder='Amount'
                />
            </div>

        );
    }
}

const MapStateToProps = state => {
    return {

    };
};

const MapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(MapStateToProps, MapDispatchToProps)(Dish);
