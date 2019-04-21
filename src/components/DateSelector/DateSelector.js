import './DateSelector.css';
import React from 'react';
import DatePicker from 'react-date-picker';
import {connect} from 'react-redux';
import {selectDate} from '../../actions';

class DateSelector  extends React.Component {
    render() {
        return(
            <div className="DateSelector">
                <div className="startDate">
                        <h3>Start Date</h3>
                        <DatePicker
                             onChange={date => this.props.selectDate(date, 'STARTDATE_SELECTED')}
                            value={this.props.startDate}
                        />
                </div>
                <div className="endDate">
                        <h3>End Date</h3>
                        <DatePicker
                             onChange={date => this.props.selectDate(date, 'ENDDATE_SELECTED')}
                            value={this.props.endDate}
                        />
                </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { startDate: state.startDate, endDate: state.endDate }
};

export default connect(mapStateToProps, {selectDate})(DateSelector);