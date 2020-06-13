import React from "react";
import PropTypes from "prop-types"

const ForecastSummary = props => (
    <div>
        <span className="date">{`${props.date}`}</span>
        <br />
        <span className="icon">{`${props.icon}`}</span>
        <br />
        <span className="temperature">{`${props.temperature}°C`}</span>
        <br />
        <span className="description">{`${props.description}`}</span>
       
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