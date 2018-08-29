import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Check from '../Check/Check';


class Checks extends Component {
    render() {
        return (
            <div>
                <Route path='/' exact render={() => <h1 className='App'>Checks</h1>} />
                <button className='Add-check'>
                    Add check
                </button>
                <Check className='App'/>
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

export default connect(MapStateToProps, MapDispatchToProps)(Checks);
