import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dish from './Dish/Dish';
import '../../../App.css';

class Member extends Component {
    render() {
        return (
            <div>
                 <Dish classname='Checks-grid'/>
                 <Dish/>
                 <Dish/>
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

export default connect(MapStateToProps, MapDispatchToProps)(Member);
