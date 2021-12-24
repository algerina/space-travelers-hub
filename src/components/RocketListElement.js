/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './ProfileListElement.css';

const RocketListElement = (props) => {
  const { rocket_name } = props;

  return (
    <h5 className="border-bottom-0 m-0 py-4">{rocket_name}</h5>
  );
};

RocketListElement.propTypes = {
  rocket_name: PropTypes.string.isRequired,
};

export default RocketListElement;
