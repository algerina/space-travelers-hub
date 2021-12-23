/* eslint-disable camelcase, no-unused-vars */
import PropTypes from 'prop-types';
import './Mission.css';

const Mission = (props) => {
  const { id, mission_name, description } = props;
  return (
    <div className="col-12 row mission-container my-1 no-md-margin-y">
      <div className="col-12 col-md-2 border border-md-top-0 border-bottom-0 border-secondary no-border-1 bold-letter">{mission_name}</div>
      <div className="col-12 col-md-6 border border-secondary no-border-1">{description}</div>
      <div className="col-6 col-md-2 border border-end-0 border-top-0 border-secondary hstack justify-content-center">
        <span className="membership-status d-none">NOT A MEMBER</span>
        <span className="membership-status-active ">ACTIVE MEMBER</span>
      </div>
      <div className="col-6 col-md-2 border border-top-0 border-secondary hstack justify-content-center py-1">
        <button className="join-mission-button d-none" type="button">Join Mission!</button>
        <button className="leave-mission-button" type="button">Join Mission!</button>
      </div>
    </div>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
