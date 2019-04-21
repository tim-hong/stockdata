import './Chart.css';
import React from 'react';
import * as d3 from 'd3';
import {debounce} from 'debounce';
import quandl from '../../apis/quandl';
import {connect} from 'react-redux';



class Chart extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {previousTicker: this.props.ticker, previousStart: this.props.start, previousEnd: this.props.end, data: [], width: window.innerWidth, height: window.innerHeight, previousWidth: window.innerWidth, previousHeight: window.innerHeight};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', debounce(this.updateWindowDimensions, 1000));
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    
    render() {
        this.getTickerData(this.state.previousTicker,this.state.previousStart, this.state.previousEnd, this.state.previousWidth, this.state.previousHeight, this.props.ticker, this.props.start, this.props.end, this.state.width, this.state.height);
        let text = (this.props.ticker) ? "Closing Prices for: " + this.props.ticker : "Enter a ticker start (and hit enter in the input bar)";
        return (
            <h1>{text}</h1>
        )

    }

    getTickerData = async (previousTicker, previousStart, previousEnd, previousWidth, previousHeight, ticker, start, end, width, height) => {
        if(ticker && ((ticker !== previousTicker) || (start !== previousStart) || (end !== previousEnd) || (previousWidth !== width) || (previousHeight !== height))) {
            const props = {"ticker": ticker, "api_key": "jpSK4_2GpyEo2xcMRxhv", "qopts.columns":"date,close,volume"};
            if(start) props["date.gte"] = start;
            if(end) props["date.lte"] = end;
            const response = await quandl.get('/PRICES.json', {params: props});
            this.setState({data: response.data, previousTicker: this.props.ticker, previousStart: this.props.start, previousEnd: this.props.end, previousWidth: width, previousHeight: height})
            this.renderChart('close');
            //this.renderChart('volume');
        }
    }

    renderChart = (choice) => {
        let type = (choice === 'close') ? 1 : 2;
        var margin = {top: 100, right: 100, bottom: 100, left: 100};
        let height = this.state.height / 2;
        let width = this.state.width *.8;
        let parseTime = d3.timeParse("%Y-%m-%d");
        let x = d3.scaleTime().range([0, width]);
        let y = d3.scaleLinear().range([height, 0]);
        var valueline = d3.line()
                            .x(function(d) { return x(d[0]); })
                            .y(function(d) { return y(d[1]); });
        d3.select("#svg").select("svg").remove();
        var svg = d3.select("#svg").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
        let data = this.state.data.datatable.data.map( (x) => {
            return [parseTime(x[0]), x[type]]
        });
        // Scale the range of the data
        x.domain(d3.extent(data, function(d) { return d[0]; }));
        y.domain([0, d3.max(data, function(d) { return d[1]; })]);

        // Add the valueline path.
        svg.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", valueline);

        // Add the X Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // Add the Y Axis
        svg.append("g")
            .call(d3.axisLeft(y));
    }
}



const mapStateToProps = (state) => {
    return {ticker: state.selectedTicker, start: state.startDate, end: state.endDate}
}

export default connect(mapStateToProps)(Chart);