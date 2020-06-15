import React from 'react';
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = props => (
    <div className="forecast-details">
        <div className="date" data-testid="date-id">
            <span>{moment(props.forecasts.date).format("ddd Do MMM")}</span>
        </div>
        <div className="minTemperature" data-testid="minTemperature-id">
            <span>{props.forecasts.temperature.min}&deg;C</span>
        </div>
        <div className="maxTemperature" data-testid="maxTemperature-id">
            <span>{props.forecasts.temperature.max}&deg;C</span>
        </div>
        <div className="humidity" data-testid="humidity-id">
            <span>{props.forecasts.humidity}</span>
        </div>
        <div className="windSpeed" data-testid="windSpeed-id">
            <span>{props.forecasts.wind.speed}mph</span>
        </div>
        <div className="windDirection" data-testid="windDirection-id">
            <span>{props.forecasts.wind.direction}</span>
        </div>
    </div>
);

ForecastDetails.propTypes = {
    forecasts: PropTypes.shape({
        date: PropTypes.string.isRequired,
        temperature: PropTypes.object.isRequired,
        humidity: PropTypes.string.isRequired,
        wind: PropTypes.object.isRequired,
    }),
};

export default ForecastDetails;