import Check from "../containers/Checks/Check/Check";

const initialState = {
    checks: [],
    checkId: 0,
    initChecks: []
}
const reducer = (state = initialState, action) => {
    // console.log(state.checks[state.checkId - 1])
    switch (action.type) {
        case 'ADD_CHECK':
        let newChecks = state.checks;
        // newChecks = newChecks.push({ date: new Date(), id: state.checkId, members: action.check });
        // newChecks.splice(2, 1)
        newChecks.push({ date: new Date(), id: state.checkId, members: action.check });
        

        // newChecks[state.checkId].members=null;
        
        // // newChecks.push('adf')
        console.log(newChecks);
        console.log(state.checks)
        // newArray.
            return {
                ...state,
                // checks: state.checks.concat({ date: new Date(), id: state.checkId, members: action.check }),
                checks: newChecks,
                checkId: state.checkId + 1,
            }

        case 'ADD_MEMBER':
            // console.log(state.checkId-1)
            // console.log(state.checks[state.checkId-1])
            const newArray = state.checks;
            newArray[state.checkId-1].members.push({ dish: action.member });
            console.log(newArray[state.checkId-1])
            return {
                ...state,
                checks: newArray
                // checks: remappedChecks,
            }
    };
    return state;
};

export default reducer;