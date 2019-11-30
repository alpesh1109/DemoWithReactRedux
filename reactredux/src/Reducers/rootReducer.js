import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import noteReducer from './noteReducer';



export default combineReducers({
    user:simpleReducer,
    noted:noteReducer
});