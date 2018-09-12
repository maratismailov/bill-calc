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
              <button className="Add-check">
                <Link to="/">Back to checks</Link>
              </button>
              <button className="Add-check" onClick={this.addMemberHandler}>
                Add member
              </button>
              <div className="Members-grid">
                {this.props.checks[this.props.checkId - 1].members.map(
                  member => {
                    return (
                      <div key={member.membersId}>
                        <Member params={this.props.checks} />
                        <div>{member.memberId}</div>
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

const singleMember = "dishNameAction";

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
      dispatch({ type: "ADD_MEMBER", member: singleMember })
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Check);
