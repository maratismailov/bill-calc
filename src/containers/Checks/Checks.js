import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Check from './Check/Check';


class Checks extends Component {

    addCheckHandler = () => {
        this.props.addCheckToStore()
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
                <Route path='/check' exact component={Check}  />

                {this.props.checks.map(() => {
                    return (
                        <div>
                            {/* <Check params={this.props.check} /> */}
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
        check: state.check

    };
};

const MapDispatchToProps = dispatch => {
    return {
        error: () => dispatch({ type: 'IS_ERROR' }),
        addCheckToStore: () => dispatch({ type: 'ADD_CHECK' })

    };
};

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Checks));
