/* eslint-disable camelcase, no-unused-vars */
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { id, mission_name, description } = props;
  return (
    <div className="col-12 row">
      <div className="col-3 border border-end-0 border-secondary">{mission_name}</div>
      <div className="col-5 border border-end-0 border-secondary">{description}</div>
      <div className="col-2 border border-end-0 border-secondary" />
      <div className="col-2 border border-secondary" />
    </div>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
