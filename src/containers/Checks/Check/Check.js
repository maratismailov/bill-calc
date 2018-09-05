import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import Member from './Member/Member';
import Checks from '../Checks';
// import '../../App.css';


class Check extends Component {

    addMemberHandler = () => {
        this.props.addMemberToStore(this.check);
    }

    render() {
        return (
            <div>
                <Route path='/check' exact render={() =>
                    <div>
                        <h1 className='App'>Check</h1>
                        <button
                            className='Add-check'
                            // onClick={this.addCheckHandler}
                        >
                        
                            {/* <a href='/check'>Back to checks</a> */}
                            <Link to='/'>Back to checks</Link>
                            {/* Add check */}
                        </button>

                        <button
                            className='Add-check'
                            onClick={this.addMemberHandler}
                        >
                        
                            {/* <a href='/check'>Back to checks</a> */}
                            Add member
                            {/* Add check */}
                        </button>
                        <div className='Members-grid'>
                            {this.props.check.map(() => {
                                return (
                                    <div>
                                        <Member params={this.props.member} />
                                    </div>
                                );
                            })}
                        </div>

                    </div>}
                />
                {/* <Route path='/' exact component={Checks} /> */}
            </div>


        );
    }
}

const MapStateToProps = state => {
    return {
        member: state.member,
        check: state.check,

    };
};

const MapDispatchToProps = dispatch => {
    return {
        addMemberToStore: () => dispatch({ type: 'ADD_MEMBER' })
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(Check);
