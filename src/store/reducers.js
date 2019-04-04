import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import calculateBillReducer from '../components/Bill/CalculateBill/CalculateBillReducer';
import storage from 'redux-persist/lib/storage';

const calculateBillConfig = {
    key: 'bill',
    storage,
}

const rootReducer = combineReducers({
    calculateBillReducer: persistReducer(calculateBillConfig, calculateBillReducer)
})

export default rootReducer;