import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import calculateBillReducer from '../../screen/bill/CalculateBill/CalculateBillReducer';
import authenticationReducer from './authenticationReducer';
import storage from 'redux-persist/lib/storage';

const calculateBillConfig = {
    key: 'bill',
    storage,
}
const authenticationConfig = {
    key: 'authentication',
    storage,
    blacklist: ['isAuthenticating', 'error']
}

const rootReducer = combineReducers({
    calculateBillReducer: persistReducer(calculateBillConfig, calculateBillReducer),
    authenticationReducer: persistReducer(authenticationConfig, authenticationReducer),
})

export default rootReducer;