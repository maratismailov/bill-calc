import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Check from "./Check/Check";
import CheckList from "./ChecksList/CheckList";

// var id = 0;

class Checks extends Component {
  addCheckHandler = id => {
    this.props.onAddCheckToStore(this.singleCheck);
    console.log(this.props.checks[this.props.checkId-1])
  };

  render() {
    // this.props.checks[0] &&
    // console.log(this.props.checks[0].id);
    return (
      <div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <h1 className="App">Checks</h1>
              <button className="Add-check" onClick={this.addCheckHandler}>
                <Link to="/check">Add check</Link>
                {/* Add check */}
              </button>
            </div>
          )}
        />
        {/* <Route path='/check' exact component={Check}  /> */}

        {this.props.checks.map(strChecks => {
          return (
            <div key={strChecks.id}>
              <Check params={this.props.checks[this.props.checkId]} />
             {/* {this.props.checks[this.props.checkId]} */}
            </div>
          );
        })}
        {/* <Check/> */}
      </div>
    );
  }
}

// const singleCheck = [
//     {
//         member: [
//             {
//                 dish: 'dishName0'
//             }
//         ]

//     }
// ]

const singleCheck = [
  // {
  //     member: [{ dish: 'dishName1' }]
  // }
  {
    dish: "dishNameAction",
    memberId: 0
  }
];

const MapStateToProps = state => {
  return {
    checks: state.checks,
    check: state.check,
    members: state.members,
    checkId: state.checkId,
    memberId: state.memberId
  };
};

const MapDispatchToProps = dispatch => {
  return {
    onAddCheckToStore: () => dispatch({ type: "ADD_CHECK", check: singleCheck })
  };
};

export default withRouter(
  connect(
    MapStateToProps,
    MapDispatchToProps
  )(Checks)
);
