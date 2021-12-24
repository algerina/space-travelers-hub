/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './ProfileListElement.css';

const ProfileListElement = (props) => {
  const { mission_name } = props;

  return (
    <h5 className="border-bottom-0 m-0 py-4">{mission_name}</h5>
  );
};

ProfileListElement.propTypes = {
  mission_name: PropTypes.string.isRequired,
};

export default ProfileListElement;
