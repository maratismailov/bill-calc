import React, { Component } from "react";
import { connect } from "react-redux";
import { DebounceInput } from 'react-debounce-input';

class Member extends Component {

  addDishHandler = () => {
    const memberId = this.props.memberId;
    this.props.addDishToStore(memberId);
  };

  addDishNameHandler = (event, index) => {
    const enteredValue = event.target.value;
    const memberId = this.props.memberId;
    this.props.addDishNameToStore(enteredValue, index, memberId);
  };

  addDishPriceHandler = (event, index) => {
    const enteredValue = event.target.value;
    const memberId = this.props.memberId;
    this.props.addDishPriceToStore(enteredValue, index, memberId);
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
                <div key={index} className='Dish'>
                  <div className='DishName'>
                    <div>
                      <DebounceInput
                        debounceTimeout={800}
                        onChange={(event) => {
                          this.addDishNameHandler(event, index)
                        }}

                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className='DishPrice'>
                    <input
                      type='number'
                      onInput={(event) => {
                        this.addDishPriceHandler(event, index)
                      }}
                      placeholder="Price"
                    />
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
      dispatch({ type: "ADD_DISH_PRICE", dishPrice: enteredValue, dishId: index, memberId: memberId })
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Member);
