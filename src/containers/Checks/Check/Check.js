import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import Member from './Member/Member';
import Checks from '../Checks';
// import '../../App.css';


class Check extends Component {
    render() {
        return (
            <div>
                <Route path='/check' exact render={() =>
                    <div>
                        <h1 className='App'>Check</h1>
                        <button
                            className='Add-check'
                            onClick={this.addCheckHandler}>
                            {/* <a href='/check'>Back to checks</a> */}
                            <Link to='/'>Back to checks</Link>
                            {/* Add check */}
                        </button>
                        <div className='Members-grid'>
                            <Member />
                            <Member />
                            <Member />
                        </div>

                    </div>}
                />
                <Route path='/' exact component={Checks} />
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

export default connect(MapStateToProps, MapDispatchToProps)(Check);
