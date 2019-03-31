import { CALCULATE } from './CalculateBillAction';
import calculateElectric from './calculate';
const initialState = {
    data: [],
};
const calculateBillReducer = (state = initialState, action) => {
    switch (action.type) {
        case CALCULATE: {
            const oldValue = state.data.length > 0 ? state.data[state.data.length - 1] : undefined;

            const electric = {};
            electric.used = parseInt(action.data.electric, 10) - (oldValue ? parseInt(oldValue.Electric, 10) : 0);
            electric.price = calculateElectric(electric.used);
            
            const water = {};
            water.used = parseInt(action.data.water, 10) - (oldValue ? parseInt(oldValue.Water.value, 10) : 0);
            water.price = water.used * action.data.unitPrice;
            const totalPrice = electric.price * 1.1 + water.price;
            return {
                ...state,
                data: state.data.concat({
                    Month: action.data.month,
                    Year: action.data.year,
                    Electric: action.data.electric,
                    Water: { value: action.data.water, unitPrice: action.data.unitPrice },
                    Price: { electric, water, totalPrice }
                })
            }
        }
        default:
            return state;
    }
}

export default calculateBillReducer;