import React from "react";
import PropTypes from "prop-types"
import moment from "moment";
import WeatherIcon from 'react-icons-weather';

import '../styles/forecast-summary.css'

const ForecastSummary = props => {
    const { date, icon, temperature, description, onSelect } = props;
    return (
        <div className="forecast-summary">
            <div className="date" data-testid="date-id">
                <span >{moment(date).format('ddd Do MMM')}</span>
            </div>
            <div className="icon" data-testid="icon-id">
                <WeatherIcon name="owm" iconId={icon} />
            </div>
            <div>
                <span className="temperature" data-testid="temperature-id">{temperature}&deg;C</span>
            </div>
            <div>
                <span className="description" data-testid="description-id">{`${description}`}</span>
            </div>
            <div>
                <button onClick={() => onSelect(date)}>More details</button>
            </div>

        </div>
    );
}
ForecastSummary.propTypes = {
    forecasts: PropTypes.shape({
        date: PropTypes.number.isRequired,
        temperature: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,
        onSelect: PropTypes.string.isRequired,

    })
};

export default ForecastSummary;