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
            <div key={this.props.checkId}>
                <Route path='/check' exact render={() =>
                    <div>
                        <h1 className='App'>Check</h1>
                        <button
                            className='Add-check'>
                            <Link to='/'>Back to checks</Link>
                        </button>
                        <button
                            className='Add-check'
                            onClick={this.addMemberHandler}>
                            Add member
                        </button>
                        <div className='Members-grid'>
                            {this.props.check.map((index) => {
                                return (
                                    <div key={index}>
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

const singleMember = [
    {
        dish: 'dishName'
    }

]

const MapStateToProps = state => {
    return {
        member: state.member,
        check: state.check,
        checkId: state.checkId
    };
};

const MapDispatchToProps = dispatch => {
    return {
        addMemberToStore: () => dispatch({ type: 'ADD_MEMBER', member: singleMember })
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(Check);
