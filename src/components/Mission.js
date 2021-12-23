/* eslint-disable camelcase, no-unused-vars */
import PropTypes from 'prop-types';
import './mission.css';

const Mission = (props) => {
  const { id, mission_name, description } = props;
  return (
    <div className="col-12 row my-1 no-md-margin-y">
      <div className="col-12 col-md-2 border border-md-top-0 border-bottom-0 border-secondary no-border-1">{mission_name}</div>
      <div className="col-12 col-md-6 border border-secondary no-border-1">{description}</div>
      <div className="col-6 col-md-2 border border-end-0 border-top-0 border-secondary">button</div>
      <div className="col-6 col-md-2 border border-top-0 border-secondary">button</div>
    </div>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
