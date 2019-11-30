export const noteAction = (notedata) => dispatch => {
    //var notedata = [];    
    // notedata.push({"title":title,"body":body}); 
    
    dispatch({
     type: 'ADDNOTE_ACTION',
     payload: notedata
    })
   }