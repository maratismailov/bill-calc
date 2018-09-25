import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import Member from "./Member/Member";
import Checks from "../Checks";
import { DebounceInput } from 'react-debounce-input';
import { addMemberNameToStore, addServiceChargeToStore, addMemberToStore, addCollectiveDishToStore, addCollectiveDishNameToStore, addCollectiveDishPriceToStore, calculate } from '../../../actions/index'

class Check extends Component {

  addMemberHandler = () => {
    this.props.addMemberToStore(this.check);
  };

  addCollectiveDish = () => {
    this.props.addCollectiveDishToStore(this.check);
  };

  calculateHandler = () => {
    this.props.calculate(this.check);
  };

  addMemberNameHandler = (event, index) => {
    const enteredValue = event.target.value;
    const memberId = this.props.memberId;
    this.props.addMemberNameToStore(enteredValue, index, memberId);
  };

  addServiceChargeHandler = (event, index) => {
    const enteredValue = event.target.value;
    const memberId = this.props.memberId;
    this.props.addServiceChargeToStore(enteredValue, index, memberId);
  };

  addCollectiveDishNameHandler = (event, index) => {
    const enteredValue = event.target.value;
    // const memberId = this.props.memberId;
    this.props.addCollectiveDishNameToStore(enteredValue, index);
  };

  addCollectiveDishPriceHandler = (event, index) => {
    const enteredValue = event.target.value;
    // const memberId = this.props.memberId;
    this.props.addCollectiveDishPriceToStore(enteredValue, index);
  };

  render() {
    // if (this.props.checks[this.props.checkId-1].collectiveDishes.length>=1){
    //   // this.props.collectiveDishes = this.props.checks[this.props.checkId-1].collectiveDishes
    // }
    // else {

    // }
    if (this.props.checks.length > 0) {
      return (
        <div>
          <Route
            path="/check"
            exact
            render={() => (
              <div>
                <h1 className="App">Check</h1>
                <Link to="/">
                  <button type="button" className="Back-to-checks">
                    Back to checks
                  </button>
                </Link>
                <div className='Check'>
                  {this.props.checks[this.props.checkId - 1].members.map(
                    (member, index) => {
                      return (
                        <div key={index}>
                          <DebounceInput className='DishName'
                            debounceTimeout={800}
                            value={member.memberName}
                            onChange={(event) => {
                              this.addMemberNameHandler(event, index)
                            }}
                            placeholder="Member name"
                          />

                          <Member params={this.props.checks} memberId={index} />
                          <div>
                            {member.memberSum}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>

                <button className="Add-check" onClick={this.addMemberHandler}>
                  Add member
                </button>

                

                <div>
                  {(() => {
                    switch (this.props.checks[this.props.checkId - 1].collectiveDishes.length) {
                      case 0: return '';
                      default: return (
                        <div className="Dishes-grid">
                          {this.props.checks[this.props.checkId - 1].collectiveDishes.map(
                            (dish, index) => {
                              return (
                                <div key={index} className='Dish'>
                                  <div >
                                    <DebounceInput className='DishName'
                                      debounceTimeout={800}
                                      value={dish.collectiveDishName}
                                      onChange={(event) => {
                                        this.addCollectiveDishNameHandler(event, index)
                                      }}

                                      placeholder="Name"
                                    />
                                  </div>
                                  <div >
                                    <input className='DishPrice'
                                      type='number'
                                      onInput={(event) => {
                                        this.addCollectiveDishPriceHandler(event, index)
                                      }}
                                      value={dish.collectiveDishPrice}
                                      placeholder="Price"
                                    />
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      )
                    }
                  })()
                  }
                </div>
                <button className="Back-to-checks" onClick={this.addCollectiveDish}>
                  Add collective dish
                </button>
                <br></br>



                <button className="Add-check" onClick={this.calculateHandler}>
                  Calculate
                </button>
                <input className='Input'
                  type='number'
                  onChange={(event) => {
                    this.addServiceChargeHandler(event)
                  }}
                  value={this.props.checks[this.props.checkId - 1].serviceCharge}
                  placeholder="Service charge"
                />
                
                <div>
                  Total Sum: {this.props.checks[this.props.checkId - 1].checkTotalSum}
                </div>
              </div>
            )}
          />
        </div>
      );
    }
    return (
      <div>
        <Link to="/">
          <button type="button" className="Add-check">
            Back to checks
          </button>
        </Link>
      </div>
    )
  }
}

const singleDish = '';

const MapStateToProps = state => {
  return {
    member: state.member,
    checks: state.checks,
    checkId: state.checkId,
    memberId: state.memberId,
    checkTotalSum: state.checkTotalSum,
    collectiveDishes: state.collectiveDishes
  };
};

const MapDispatchToProps = dispatch => {
  return {
    addMemberToStore: () =>
      dispatch(addMemberToStore(singleDish)),

    calculate: () =>
      dispatch(calculate()),

    addMemberNameToStore: (enteredValue, memberId) =>
      dispatch(addMemberNameToStore(enteredValue, memberId)),

    addServiceChargeToStore: (enteredValue, memberId) =>
      dispatch(addServiceChargeToStore(enteredValue, memberId)),

    addCollectiveDishToStore: () =>
      dispatch(addCollectiveDishToStore(singleDish)),

    addCollectiveDishNameToStore: (enteredValue, index, memberId) =>
      dispatch(addCollectiveDishNameToStore(enteredValue, index, memberId)),

    addCollectiveDishPriceToStore: (enteredValue, index, memberId) =>
      dispatch(addCollectiveDishPriceToStore(enteredValue, index, memberId))
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Check);
