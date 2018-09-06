const initialState = {
    // checks: [],
    checks: [
        {
            date: 'init',
            id: 'initId',
            member: [
                {
                    dish: 'dishName0'
                }
            ]

        }
    ],
    // check: [],
    // members: [],
    // member: [],
    checkId: 0
}
const reducer = (state = initialState, action) => {
    // console.log(state.checks[state.checkId - 1])
    switch (action.type) {
        case 'ADD_CHECK':
            return {
                ...state,
                checks: state.checks.concat({ date: new Date(), id: state.checkId, member: action.check }),
                // checks: state.checks.concat({date: new Date(), id: state.checkId}, action.check),

                // checks: action.check,
                checkId: state.checkId + 1,
            }

        case 'ADD_MEMBER':


            const remappedChecks = state.checks.map((checks, index) => {
                if (index === 0) {
                    return {
                        ...checks.member,
                        member: action.member,
                    };
                }
                return checks;
            })
            return {
                ...state,
                checks: remappedChecks,
            }

        // return {
        // ...state,
        // ...state.checks,
        // ...state.checks[state.checkId-1].check,
        // checks: state.checks[state.checkId-1]&& state.checks[state.checkId-1].check && state.checks[state.checkId-1].member.concat({member: action.member})
        // checks: state.checks[0].check.concat({member: action.member}),
        // checks: state.checks[state.checkId-1].check.concat({member: action.member}),
        // checks: state.checks[state.checkId-1].member.concat({dish: action.member}),
        // }

    };
    return state;
};

export default reducer;