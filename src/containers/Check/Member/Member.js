import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dish from './Dish/Dish';
// import '../../../App.css';

class Member extends Component {
    render() {
        return (
            <div className='Dishes-grid'>
                 <div className= 'Dish1'>
                 <Dish/>
                 </div>
                 <div className= 'Dish2'>
                 <Dish/>
                 </div>
                 <div className= 'Dish3'>
                 <Dish/>
                 </div>
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
