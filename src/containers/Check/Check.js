import React, { Component } from 'react';
import { connect } from 'react-redux';
import Member from './Member/Member';
// import '../../App.css';


class Check extends Component {
    render() {
        return (
            <div className='Members-grid'>
                 <Member/>
                 <Member/>
                 <Member/>
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
