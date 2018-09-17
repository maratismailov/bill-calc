import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import Member from "./Member/Member";
import Checks from "../Checks";
import { DebounceInput } from 'react-debounce-input';
// import '../../App.css';

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
    // console.log(index)
  };

  addServiceChargeHandler = (event, index) => {
    const enteredValue = event.target.value;
    const memberId = this.props.memberId;
    this.props.addServiceChargeToStore(enteredValue, index, memberId);
    // console.log(index)
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
                        <div key={member.memberId}>

                          {/* <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={event => this.setState({value: event.target.value})} /> */}


                          <DebounceInput
                            debounceTimeout={800}
                            onChange={(event) => {
                              this.addMemberNameHandler(event, index)
                            }}
                            value={this.props.value}
                            {...this.props}
                            placeholder="Member name"
                          />

                          {/* <Member params={this.props.checks} /> */}
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
                  {...this.props}
                  placeholder="Service charge"
                />
              </div>
            )}
          />
          {/* <Route path='/' exact component={Checks} /> */}
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

const singleMember = [
  {
    dishes: [
      {
        dish: "dishNameAction",

      }
    ],
    memberId: 0
  }

];

const singleCheck = [
  {
    dishes: [
      {
        dish: "dishNameAction",

      }
    ],
    memberId: 0
  }

];
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
      dispatch({ type: "ADD_MEMBER", member: singleDish }),

    calculate: () =>
      dispatch({ type: "CALCULATE" }),

    addMemberNameToStore: (enteredValue, index, memberId) =>
      dispatch({ type: 'ADD_MEMBER_NAME', memberName: enteredValue, memberId: memberId }),

    addServiceChargeToStore: (enteredValue, index, memberId) => {
      dispatch({ type: 'ADD_SERVICE_CHARGE', serviceCharge: enteredValue, memberId: memberId })
    }

  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Check);
