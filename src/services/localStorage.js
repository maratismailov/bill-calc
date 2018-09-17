export const loadState = (stateName = null) => {
  try {
    const serializedState = localStorage.getItem(stateName || 'reduxState')
    if (serializedState === null) {
      return undefined
    }
    const newState = JSON.parse(serializedState)
    let stateAge = null
    if (newState.ts) {
      stateAge = Math.floor(Date.now() / 1000) - newState.ts
      delete (newState.ts)
    }
    // If state is older than 7200 seconds (2 hours), then do not return it
    return stateAge && stateAge < 7200 ? newState : undefined
  } catch (err) {
    return undefined
  }
}

export const saveState = (state, stateName = null) => {
  try {
    const theState = state
    theState.ts = Math.floor(Date.now() / 1000)
    const serializedState = JSON.stringify(state)
    localStorage.setItem(stateName || 'reduxState', serializedState)
  } catch (err) {
    console.error('REDUX STATE SAVING ERROR: ', err)
  }
}