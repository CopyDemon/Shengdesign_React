import {combineReducers} from 'redux';
// import data js
import skillsReducer from './home_data/skills_reducer'

const REDUX_ROOT = combineReducers({
    skillsReducer
})

export default REDUX_ROOT;