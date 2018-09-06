import Check from "../containers/Checks/Check/Check";

const initialState = {
    checks: [],
    checkId: 0
}
const reducer = (state = initialState, action) => {
    // console.log(state.checks[state.checkId - 1])
    switch (action.type) {
        case 'ADD_CHECK':
            return {
                ...state,
                checks: state.checks.concat({ date: new Date(), id: state.checkId, members: action.check }),
                checkId: state.checkId + 1,
            }

        case 'ADD_MEMBER':
            console.log(state.checks[0].members)
            const newArray = state.checks;
            newArray[state.checkId-1].members.push({ dish: action.member })
            return {
                ...state,
                checks: newArray
                // checks: remappedChecks,
            }
    };
    return state;
};

export default reducer;