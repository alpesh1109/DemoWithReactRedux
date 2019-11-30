export const simpleAction = (email,password) => dispatch => {
    var userdata = [];    
    userdata.push({"email":email,"password":password}); 
    
    
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: userdata
    })
   }