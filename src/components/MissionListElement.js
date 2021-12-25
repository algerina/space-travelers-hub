/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './ProfileListElement.css';

const MissionListElement = (props) => {
  const { mission_name } = props;

  return (
    <h5 className="col-12 border-bottom-0 m-0 py-4">{mission_name}</h5>
  );
};

MissionListElement.propTypes = {
  mission_name: PropTypes.string.isRequired,
};

export default MissionListElement;
