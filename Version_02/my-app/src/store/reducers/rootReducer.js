import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineeducers} from 'redux'

const rootReducer = combineeducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer
