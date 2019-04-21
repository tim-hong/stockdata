import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import DateSelector from './DateSelector/DateSelector';
import Chart from './Chart/Chart';
const App = () => {
    return (
        <div className="app">
            <SearchBar />
            <DateSelector />
            <Chart />
            <div id="svg"></div>
            
        </div>
    );
}

export default App;