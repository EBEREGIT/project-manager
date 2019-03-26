export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFireStore} ) => {
        // adding a document to the project collection in the database
        const fireStore = getFireStore();
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: 'Ebere',
            authorLastName: 'Plenty',
            authorId: 4152,
            createdAt: new Date()
        }).then(() => {
            // dispatch CREATE-PROJECT action (success)
            dispatch({ type: 'CREATE-PROJECT', project});
        }).catch((err) => {
            // dispatch CREATE-PROJECT-ERROR action (failure)
            dispatch({ type: 'CREATE-PROJECT-ERROR', err });
        })

        
    }
}