import Check from "../containers/Checks/Check/Check";

const initialState = {
  checks: [],
  checkId: 0,
  initChecks: [],
  memberId: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHECK":
      // const remappedChecks = JSON.parse(JSON.stringify(state.checks));

      const remappedChecks = state.checks.map((checks, index) => {
        const remappedMembersTemp = state.checks[index].members.map(members => {
          return {
            ...members
          };
        });
        return {
          ...checks
        };
      });

      remappedChecks.push({
        date: new Date(),
        id: state.checkId,
        members: action.check
      });
      return {
        ...state,
        checks: remappedChecks,
        checkId: state.checkId + 1
      };

    case "ADD_MEMBER":
      // const remappedMembers = JSON.parse(JSON.stringify(state.checks));
      const remappedMembers = state.checks.map((checks, index) => {
        const remappedMembersTemp = state.checks[index].members.map(members => {
          return {
            ...members
          };
        });
        return {
          ...checks
        };
      });
      remappedMembers[state.checkId - 1].members.push({
        dish: action.member,
        memberId: state.memberId
      });

      return {
        ...state,
        memberId: state.memberId + 1,
        checks: remappedMembers
      };
  }
  return state;
};

export default reducer;
