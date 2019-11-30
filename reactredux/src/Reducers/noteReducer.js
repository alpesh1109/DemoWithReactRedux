const initialState = {
    notedata: []
}


export default (state = initialState, action) => {
    switch (action.type) {
     case 'ADDNOTE_ACTION':
      return {
        ...state,
        notedata: action.payload
      }
      
     default:
      return state
    }
   }