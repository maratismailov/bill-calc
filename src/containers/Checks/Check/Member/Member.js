import React, { Component } from "react";
import { connect } from "react-redux";
import Dish from "./Dish/Dish";
// import '../../../App.css';

class Member extends Component {

  addDishHandler = () => {
    this.props.addDishToStore(this.check);
  };

  render() {
    let style = {
      display: "grid"
      // gridGap: '8px',
      /* grid-template-rows: 50fr, 30fr; */
      /* grid-template-columns: 200px, 200px; */
      // gridTemplateAreas:
      // "'Dish1 Dish2 Dish3'"
    };
    return (
      <div className="Dishes-grid" style={style}>
        <div className="Members-grid">
          {this.props.checks[this.props.checkId - 1].members[this.props.memberId - 1].dishes.map(
            () => {
              return (
                <div >
                  <Dish params={this.props.checks} />
                </div>
              )
            })
          }
        </div>
        <button className='Add-dish' onClick={this.addDishHandler}>
          add dish
        </button>
      </div>
    );
  }
}

const singleDish = "dishNameAction";

const MapStateToProps = state => {
  return {
    checks: state.checks,
    check: state.check,
    member: state.member,
    memberId: state.memberId,
    checkId: state.checkId
  };
};

const MapDispatchToProps = dispatch => {
  return {
    addDishToStore: () =>
      dispatch({ type: "ADD_DISH", dish: singleDish })
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Member);
