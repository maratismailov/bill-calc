import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Check from "./Check/Check";
import ChecksList from "./ChecksList/ChecksList";

// var id = 0;

class Checks extends Component {
  addCheckHandler = id => {
    this.props.addCheckToStore(this.singleCheck);
    console.log(this.props.checks[this.props.checkId - 1]);
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
              <Link to="/check">
                <button type="button" className="Add-check" onClick={this.addCheckHandler}>
                  Add check
                </button>
              </Link>
            </div>
          )}
        />
        {/* <Route path='/check' exact component={Check}  /> */}

        <Route
          path="/check"
          exact
          render={() => (
            <div>
              <Check params={this.props.checks} />
            </div>
          )}
        />

        <Route
          path="/"
          exact
          render={() => (
            <div>
              {this.props.checks.map((check, index) => {
                return (
                  <div key={check.id}>
                    {/* <Check params={this.props.checks} /> */}
                    <ChecksList date={this.props.checks[index].date.toLocaleString('ru-RU')} />
                  </div>
                );
              })}
            </div>
          )}
        />
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
  {
    dishes: [
      {
        dish: "dishNameAction",
        price: 0

      }
    ],
    memberId: 0,
    memberSum: 0
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
    addCheckToStore: () => dispatch({ type: "ADD_CHECK", check: singleCheck })
  };
};

export default withRouter(
  connect(
    MapStateToProps,
    MapDispatchToProps
  )(Checks)
);
