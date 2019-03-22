export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFireStore} ) => {
        // make async call

        // dispatch action
        dispatch({ type: 'CREATE-PROJECT', project})
    }
}