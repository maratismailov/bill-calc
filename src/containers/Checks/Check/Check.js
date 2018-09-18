import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import Member from "./Member/Member";
import Checks from "../Checks";
import { DebounceInput } from 'react-debounce-input';
import { addMemberNameToStore, addServiceChargeToStore, addMemberToStore, calculate } from '../../../actions/index'

class Check extends Component {

  addMemberHandler = () => {
    this.props.addMemberToStore(this.check);
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

  render() {
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
                  <button type="button" className="Add-check">
                    Back to checks
                  </button>
                </Link>
                <div className="Members-grid">
                  {this.props.checks[this.props.checkId - 1].members.map(
                    (member, index) => {
                      return (
                        <div key={index}>
                          <DebounceInput
                            debounceTimeout={800}
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
                <button className="Add-check" onClick={this.calculateHandler}>
                  Calculate
                </button>
                <input
                  type='number'
                  onChange={(event) => {
                    this.addServiceChargeHandler(event)
                  }}
                  value={this.props.value}
                  placeholder="Service charge"
                />
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

const singleDish = "dishNameAction";

const MapStateToProps = state => {
  return {
    member: state.member,
    checks: state.checks,
    checkId: state.checkId,
    memberId: state.memberId
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
      dispatch(addServiceChargeToStore(enteredValue, memberId))
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Check);
