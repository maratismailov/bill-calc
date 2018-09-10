import Check from "../containers/Checks/Check/Check";

const initialState = {
    checks: [],
    checkId: 0,
    initChecks: [],
    memberId: 0
}
const reducer = (state = initialState, action) => {
    // console.log(state.checks[state.checkId - 1])
    switch (action.type) {
        case 'ADD_CHECK':
            const newChecks = [...state.checks];
            // newChecks[state.checkId].members = [...state.checks[state.checkId].members]
            // newChecks = newChecks.concat({ date: new Date(), id: state.checkId, members: action.check });
            // newChecks.splice(2, 1)
            newChecks.push({ date: new Date(), id: state.checkId, members: action.check });



            const remappedChecks = state.checks.map((checks, index) => {
                if (index === state.checkId) {
                    const remappedMembersTemp = state.checks[state.checkId].members.map((members, index) => {
                        if (index === state.memberId) {
                            return {
                                ...members, dish: { ...members.dish, dish: action.member }
                            };
                        }
                        return members;
                    })
                    checks = remappedMembersTemp;
                    return {
                        ...checks,
                        members: { ...checks.members, members: action.check, }
                    };
                }
                return checks;
            })
            remappedChecks.push({ date: new Date(), id: state.checkId, members: action.check });

            // newArray.
            return {
                ...state,
                // checks: state.checks.concat({ date: new Date(), id: state.checkId, members: action.check }),
                checks: remappedChecks,
                checkId: state.checkId + 1,
            }

        case 'ADD_MEMBER':
            // console.log(state.checkId-1)
            // console.log(state.checks[state.checkId-1])

            // const newArray = [...state.checks];
            // newArray[state.checkId - 1].members.push({ dish: action.member, memberId: state.memberId });
            // console.log(newArray[state.checkId - 1].members)

            const remappedMembers = state.checks.map((checks, index) => {
                if (index === state.checkId) {
                    const remappedMembersTemp = state.checks[state.checkId].members.map((members, index) => {
                        if (index === state.memberId) {
                            return {
                                ...members, dish: { ...members.dish, dish: action.member }
                            };
                        }
                        return members;
                    })
                    checks = remappedMembersTemp;
                };
                return checks;
            })
            console.log(state.checks)
            remappedMembers[state.checkId - 1].members.push({ dish: action.member, memberId: state.memberId })
            return {
                ...state,
                memberId: state.memberId + 1,
                checks: remappedMembers,

                // checks: remappedChecks,
            }
    };
    return state;
};

export default reducer;