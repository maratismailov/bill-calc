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

      const remappedChecks = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          return {
            ...check,
            members: [...check.members]
          };
        }
        return check;
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
      const remappedMembers = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          return {
            ...check,
            members: [
              ...check.members,
              {
                dish: action.member,
                memberId: state.memberId
              }
            ]
          };
        }
        return check;
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
