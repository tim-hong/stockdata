import './SearchBar.css'
import React from 'react';
import {connect} from 'react-redux';
import {selectTicker, selectKey} from '../../actions';

class SearchBar extends React.Component {
    state = { term: '', key: '' };
    onFormSubmit = (event) => {
        event.preventDefault();
        if(this.props.ticker !== this.state.term) {
            this.props.selectTicker(this.state.term);
        }
    }

    render() {
        return (
            <div className="Bar">
                <div className="SearchBar">
                    <form onSubmit={this.onFormSubmit}>
                        <h3>Search Ticker Symbol</h3>
                        <input
                            type="text"
                            value={this.state.term} 
                            onChange={ e => this.setState({term: e.target.value})}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {ticker: state.selectedTicker};
}

export default connect(mapStateToProps, {selectTicker, selectKey})(SearchBar);