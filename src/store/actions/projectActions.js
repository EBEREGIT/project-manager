export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call

        // dispatch action
        dispatch({ type: 'CREATE-PROJECT', project})
    }
}