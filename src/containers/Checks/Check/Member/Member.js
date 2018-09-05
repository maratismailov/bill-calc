import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dish from './Dish/Dish';
// import '../../../App.css';



class Member extends Component {
    render() {
        let style = {
            display: 'grid',
            // gridGap: '8px',
            /* grid-template-rows: 50fr, 30fr; */
            /* grid-template-columns: 200px, 200px; */
            // gridTemplateAreas:
            // "'Dish1 Dish2 Dish3'"  
            
            
          }
        return (
            <div className = 'Dishes-grid' style = {style}>
                 <div className= 'Dish1'>
                 <Dish/>
                 </div>
                 {/* <div className= 'Dish2'>
                 <Dish/>
                 </div>
                 <div className= 'Dish3'>
                 <Dish/>
                 </div> */}
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

    };
};

export default connect(MapStateToProps, MapDispatchToProps)(Member);
