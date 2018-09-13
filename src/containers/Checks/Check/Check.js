import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import Member from "./Member/Member";
import Checks from "../Checks";
// import '../../App.css';

class Check extends Component {
  addMemberHandler = () => {
    this.props.addMemberToStore(this.check);
  };

  render() {
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
              <button className="Add-check" onClick={this.addMemberHandler}>
                Add member
              </button>
              <div className="Members-grid">
                {this.props.checks[this.props.checkId - 1].members.map(
                  member => {
                    return (
                      <div key={member.memberId}>
                        <div>Member {member.memberId}</div>
                        <Member params={this.props.checks} />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          )}
        />
        {/* <Route path='/' exact component={Checks} /> */}
      </div>
    );
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
      dispatch({ type: "ADD_MEMBER", member: singleDish })
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Check);
