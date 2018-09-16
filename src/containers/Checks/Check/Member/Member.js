import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Dish from "./Dish/Dish";
import Price from './Price/Price'
// import '../../../App.css';

class Member extends Component {

  addDishHandler = () => {
    // console.log(this.props.memberId);
    const memberId = this.props.memberId;
    // console.log(memberId)
    this.props.addDishToStore(memberId);
  };

  addDishNameHandler = (event, index) => {
    const enteredValue = event.target.value;
    const memberId = this.props.memberId;
    this.props.addDishNameToStore(enteredValue, index, memberId);
    // console.log(index)
  };

  addDishPriceHandler = (event, index) => {
    const enteredValue = event.target.value;
    const memberId = this.props.memberId;
    this.props.addDishPriceToStore(enteredValue, index, memberId);
    // console.log(index)
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
      <div className="Members-grid" style={style}>
        <div className="Dishes-grid">
          {this.props.checks[this.props.checkId - 1].members[this.props.memberId].dishes.map(
            (dish, index) => {
              return (
                <div className='Dish'>
                  <div className='DishName'>
                    <Dish params={this.props.checks}
                      changed={(event) => {
                        this.addDishNameHandler(event, index)
                      }}
                      value={this.props.inputValue} />
                  </div>
                  <div className='DishPrice'>
                    <Price params={this.props.checks}
                      changed={(event) => {
                        this.addDishPriceHandler(event, index)
                      }}
                      value={this.props.inputValue} />
                  </div>
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
    // memberId: state.memberId,
    checkId: state.checkId
  };
};

const MapDispatchToProps = dispatch => {
  return {
    addDishToStore: (memberId) =>
      dispatch({ type: "ADD_DISH", dish: singleDish, memberId: memberId }),

    addDishNameToStore: (enteredValue, index, memberId) =>
      dispatch({ type: "ADD_DISH_NAME", dishName: enteredValue, dishId: index, memberId: memberId }),

    addDishPriceToStore: (enteredValue, index, memberId) =>
    dispatch({ type: "ADD_DISH_PRICE",  dishPrice: enteredValue, dishId: index, memberId: memberId })
  };
};
Member.propTypes = {
  addDishPriceToStore: PropTypes.number.isRequired
}

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Member);
