import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import Member from "./Member/Member";
import Checks from "../Checks";
// import '../../App.css';

class Check extends Component {

  // constructor(props) {
  //   super(props);
  //   this.props.AddCheckToStore(this.singleCheck);
  //  }

  //  UNSAFE_componentWillMount() {
  //   this.props.AddCheckToStore(this.singleCheck);
  //  }

  // componentDidMount() {
  //   this.props.AddCheckToStore(this.singleCheck);
  //   console.log(this.props.checks[this.props.checkId - 1]);
  // }

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
              <div className="Members-grid">
                {this.props.checks[this.props.checkId - 1].members.map(
                  (member, index) => {
                    return (
                      <div key={member.memberId}>

                        <input
                          onChange={this.props.changed}
                          value={this.props.value}
                          {...this.props}
                          placeholder="Member name"
                        />

                        {/* <Member params={this.props.checks} /> */}
                        <Member params={this.props.checks} memberId={index} />
                      </div>
                    );
                  }
                )}
              </div>
              <button className="Add-check" onClick={this.addMemberHandler}>
                Add member
              </button>
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

    AddCheckToStore: () =>
      dispatch({ type: "ADD_CHECK", check: singleCheck })

  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Check);
