import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Check from './Check/Check';

var id = 0;


class Checks extends Component {

    // addCheckHandler = (id) => {
    //     this.props.addCheckToStore(this.singleCheck);
    //     id++;
    // }

    render() {
        return (
            <div>
                <Route path='/' exact render={() =>
                    <div>
                        <h1 className='App'>Checks</h1>
                        <button
                            className='Add-check'
                            onClick={this.props.onAddCheckToStore}>
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

const singleCheck = [
    {
        member: [
            {
                dish: 'dishName'
            }
        ]
            
    }
]

const MapStateToProps = state => {
    return {
        checks: state.checks,
        check: state.check,
        members: state.members,
        checkId: state.checkId

    };
};

const MapDispatchToProps = dispatch => {
    return {
        onAddCheckToStore: () => dispatch({ type: 'ADD_CHECK', check: singleCheck})

    };
};

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Checks));
