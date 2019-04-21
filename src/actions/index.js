

export const selectTicker = (ticker) => {
    return {
        type: 'TICKER_SELECTED',
        payload: ticker
    };
};

export const selectKey= (key) => {
    return {
        type: 'KEY_SELECTED',
        payload: key
    };
};
export const selectDate = (date, dateType) => {
    return {
        type: dateType,
        payload: date
    };
};

