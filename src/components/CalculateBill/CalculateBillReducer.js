import { CALCULATE } from './CalculateBillAction';
import calculateElectric from './calculate';
const initialState = {
    Electric: {
        old: '0',
        unit: [1678, 1734, 2014, 2536, 2834, 2927],
        limit: [50, 50, 100, 100, 100, 100],
    },
    Water: {
        old: '0',
        unitPrice: '',
    },
    Price: undefined,
}
const calculateBillReducer = (state = initialState, action) => {
    switch (action.type) {
        case CALCULATE: {
            const electric = {};
            electric.used = parseInt(action.data.electric, 10) - parseInt(state.Electric.old, 10);
            electric.price = calculateElectric(electric.used, state.Electric.unit, state.Electric.limit);
            const water = {};
            water.used = parseInt(action.data.water, 10) - parseInt(state.Water.old, 10);
            water.price = water.used * action.data.unitPrice;
            return {
                ...state, Electric: { ...state.Electric, old: action.data.electric }, Water: { old: action.data.water, unitPrice: action.data.unitPrice }, Price: { electric, water }
            };
        }
        default:
            return state;
    }
}

export default calculateBillReducer;