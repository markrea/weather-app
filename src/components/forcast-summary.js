import React from "react";
import PropTypes from "prop-types"

const ForecastSummary = props => (
    <div>
        <span className="date" data-testid="date-id">{`${props.date}`}</span>
        <br />
        <span className="icon" data-testid="icon-id">{`${props.icon}`}</span>
        <br />
        <span className="temperature" data-testid="temperature-id">{`${props.temperature}°C`}</span>
        <br />
        <span className="description" data-testid="description-id">{`${props.description}`}</span>
       
    </div>
);

/*ForecastSummary.propTypes ={
    date: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
*/
export default ForecastSummary;