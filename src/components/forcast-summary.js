import React from "react";
import PropTypes from "prop-types"
import moment from "moment";
import WeatherIcon from 'react-icons-weather';

const ForecastSummary = props => (
    <div className ="forecast-summary">
        <div className="date" data-testid="date-id">
            <span >{moment(props.date).format('ddd Do MMM')}</span>
        </div>
        <div className="icon" data-testid="icon-id">
  <WeatherIcon name="owm" iconId={props.icon} />
</div>
        <div>
            <span className="temperature" data-testid="temperature-id">{props.temperature}&deg;C</span>
        </div>
        <div>
            <span className="description" data-testid="description-id">{`${props.description}`}</span>
        </div>

    </div>
);

ForecastSummary.propTypes = {
    forecasts: PropTypes.shape({
        date: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,
    })
};

export default ForecastSummary;