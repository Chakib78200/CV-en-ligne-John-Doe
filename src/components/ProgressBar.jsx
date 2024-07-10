import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProgressBar.css';

const ProgressBar = ({ skill, percentage, color }) => {
    return (
        <div className="progress-bar-container">
            <div className="skill">{skill} {percentage}%</div>
            <div className="progress">
                <div
                    className="progress-bar"
                    style={{ width: `${percentage}%`, backgroundColor: color }}
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100">
                </div>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    skill: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};

export default ProgressBar;
