import React from 'react';
import PropTypes from "prop-types";
import ForecastSummary from './forcast-summary';

import '../styles/forecast-summaries.css'

const ForecastSummaries = props => {
    const { forecasts, onForecastSelect } = props;

    return (
        <div className="forecast-summaries">
            {
                forecasts.map(forecast => (
                    <ForecastSummary
                        key={forecast.date}
                        date={forecast.date}
                        description={forecast.description}
                        icon={forecast.icon}
                        temperature={forecast.temperature.max}
                        onSelect={onForecastSelect}
                    />
                ))
            }

        </div>
    );
};
ForecastSummaries.propTypes = {
    forecasts: PropTypes.array.isRequired,

}
export default ForecastSummaries;
