const remappedChecks = state.checks.map((members, index) => {
  if (index === 0) {
    return {
      ...members,
      members: {
        ...check.members,
        member: action.member
      }
    };
  }
  return check;
});
return {
  ...state,
  checks: remappedChecks
};



const remappedChecks = state.checks.map((checks, index) => {
    if (index === state.checkId) {
      const remappedMembersTemp = state.checks[state.checkId].members.map(
        (members, index) => {
          if (index === state.memberId) {
            return {
              ...members,
              dish: { ...members.dish, dish: action.member }
            };
          }
          return remappedMembersTemp;
        }
      );
      checks = remappedMembersTemp;
      return {
        ...checks,
        members: { ...checks.members, members: action.check }
      };
    }
    return remappedChecks;
  });