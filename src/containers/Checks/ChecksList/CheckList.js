import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import Member from "../Check/Member/Member"
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
          path="/"
          exact
          render={() => (
            <div>
              <div className="Members-grid">
                {this.props.checks[this.props.checkId - 1].members.map(
                  strMembers => {
                    return (
                      <div key={strMembers.membersId}>
                        <Member params={this.props.checks} />
                        <h>{strMembers.memberId}</h>
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
