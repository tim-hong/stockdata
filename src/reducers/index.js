import {combineReducers} from 'redux';

const selectedTickerReducer = (selectedTicker = '', action) => {
    switch(action.type) {
        case 'TICKER_SELECTED': 
            return action.payload;
        default:
            return selectedTicker;
    }
}

const selectedKeyReducer = (selectedKey = '', action) => {
    switch(action.type) {
        case 'KEY_SELECTED': 
            return action.payload;
        default:
            return selectedKey;
    }
}

const selectedStartDateReducer = (selectedDate = null, action) => {
    switch(action.type) {
        case 'STARTDATE_SELECTED':
            return action.payload;
        default:
            return selectedDate;
    }
}

const selectedEndDateReducer = (selectedDate = null, action) => {
    switch(action.type) {
        case 'ENDDATE_SELECTED':
            return action.payload;
        default:
            return selectedDate;
    }
}

export default combineReducers({
    selectedTicker: selectedTickerReducer,
    selectedKey: selectedKeyReducer,
    startDate: selectedStartDateReducer,
    endDate: selectedEndDateReducer
})