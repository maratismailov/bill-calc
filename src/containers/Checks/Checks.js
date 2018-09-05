import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Check from './Check/Check';

var id = 0;


class Checks extends Component {

    addCheckHandler = (id) => {
        this.props.addCheckToStore(this.check);
        id++;
    }

    render() {
        
        return (
            <div>
                <Route path='/' exact render={() =>
                    <div>
                        <h1 className='App'>Checks</h1>
                        <button
                            className='Add-check'
                            onClick={this.addCheckHandler}>
                            {/* <a href='/check'>Add check</a> */}
                            <Link to='/check'>Add check</Link>
                            {/* Add check */}
                        </button>
                    </div>} />
                {/* <Route path='/check' exact component={Check}  /> */}

                {this.props.checks.map((index) => {
                    return (
                        <div key={index}>
                            <Check params={this.props.check} />
                        </div>
                    );
                })}
                {/* <Check/> */}
            </div>

        );
    }
}

const MapStateToProps = state => {
    return {
        checks: state.checks,
        check: state.check,
        members: state.members

    };
};

const MapDispatchToProps = dispatch => {
    return {
        addCheckToStore: (id) => dispatch({ type: 'ADD_CHECK', payload: id})

    };
};

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Checks));
