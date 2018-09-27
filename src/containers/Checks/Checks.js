import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Check from "./Check/Check";
import ChecksList from "./ChecksList/ChecksList";
import OldCheck from '../../components/OldCheck/OldCheck';
import { passOldCheckIndexToStore, addCheckToStore } from '../../actions/index'

class Checks extends Component {
  addCheckHandler = id => {
    this.props.addCheckToStore(this.singleCheck);
  };

  passOldCheckIndex = index => {
    this.props.passOldCheckIndexToStore(index);
    console.log(index)
  };

  render() {
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
                    <Link to={'/OldCheck'} >
                      <button className="CheckList" onClick={() => this.passOldCheckIndex(index)}>
                        <ChecksList date={this.props.checks[index].date.toLocaleString('ru-RU')} />
                      </button>
                    </Link>
                  </div>
                );
              })}

              <button type="button" className="Add-check" onClick={() => localStorage.clear()}>
                Purge state
              </button>
            </div>
          )}
        />


        <Route
          path="/OldCheck"
          exact
          render={(props) => (
            <div>
              <Link to="/">
                <button type="button" className='Back-to-checks'>
                  Back to checks
                </button>
              </Link>

              <div >
                <OldCheck {...props} date={this.props.checks[0].date} />
              </div>

            </div>
          )}
        />

      </div>
    );
  }
}

const singleCheck = [
  {
    dishes: [
      {
        dish: '',
        price: '',
        showDelete: false
      }
    ],
    // collectiveDishes: [

    // ],
    memberId: 0,
    memberSum: 0,
    memberName: '',
    // collectiveChecked: [
    //   {
    //     checked: true
    //   }
    // ]
  }

];

const collectiveDishes = [
  // {
  //   collectiveDishName: '',
  //   collectiveDishPrice: ''
  // }
]

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
    // addCheckToStore: () => dispatch({ type: "ADD_CHECK", check: singleCheck }),
    addCheckToStore: () => dispatch(addCheckToStore(singleCheck, collectiveDishes)),
    // passOldCheckIndexToStore: (index) => dispatch({ type: "OLD_CHECK", OldCheckIndex: index }),
    // toggleTodo: id => dispatch(toggleTodo(id)),
    passOldCheckIndexToStore: index => dispatch(passOldCheckIndexToStore(index)),
  };
};

export default withRouter(
  connect(
    MapStateToProps,
    MapDispatchToProps
  )(Checks)
);
