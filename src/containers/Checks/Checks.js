import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Check from "./Check/Check";
import ChecksList from "./ChecksList/ChecksList";
import OldCheck from '../../components/OldCheck/OldCheck';

// var id = 0;

class Checks extends Component {
  addCheckHandler = id => {
    this.props.addCheckToStore(this.singleCheck);
  };

  passOldCheckIndex = index => {
    this.props.passOldCheckIndexToStore(index);
    console.log(index)
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


{/* onClick={this.passOldCheckIndex}

passOldCheckIndex = (e) => {
  console.log(e.target);
} */}
        <Route
          path="/"
          exact
          render={() => (
            <div>
              {this.props.checks.map((check, index) => {
                return (
                  // <Link to={`/taco/${taco.name}`}>{taco.name}</Link>
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
        {/* <Link to={{ pathname: '/route', state: { foo: 'bar'} }}>My route</Link>
Then you can access the state object from within your component:

const {foo} = props.location.state

console.log(foo) // "bar" */}

        {/* <Route
  exact
  path='/'
  render={(props) => <LawsList {...props} anotherProp={value} />}
/> */}

        {/* <Route
  path='/dashboard'
  render={(props) => <Dashboard {...props} isAuthed={true} />}
/> */}
        {/* <Route
          path="/OldCheck"
          exact
          render={(props) => <OldCheck  />}
        /> */}


        <Route
          path="/OldCheck"
          exact
          render={(props) => (
            <div>
              <Link to="/">
                <button type="button" className="Add-check">
                  Back to checks
                 </button>
              </Link>
             
                  <div >
                    <Link to="/OldCheck">
                      <div>
                        <OldCheck {...props} date= {this.props.checks[0].date}/>
                      </div>
                    </Link>
                  </div>
              
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
    memberSum: 0,
    memberName: 'name'
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
    addCheckToStore: () => dispatch({ type: "ADD_CHECK", check: singleCheck }),
    passOldCheckIndexToStore: (index) => dispatch({ type: "OLD_CHECK", OldCheckIndex: index })
  };
};

export default withRouter(
  connect(
    MapStateToProps,
    MapDispatchToProps
  )(Checks)
);
