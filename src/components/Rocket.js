/* eslint-disable camelcase, no-unused-vars, react/prop-types, react/jsx-no-undef, no-undef */

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { bookRocket, cancelReservation } from '../Redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();

  const {
    id,
    rocket_name,
    description,
    rocket_image,
    reserved,
  } = props;

  return (
    <div>
      <div>
        <img src={rocket_image} alt="rocket-one" />
        <h2>{rocket_name}</h2>
        <p>
          {reserved && <span>Reserved</span>}
          {description}
        </p>
        {reserved ? (
          <button
            id={id}
            type="button"
            onClick={() => {
              console.log(id);
              dispatch(cancelReservation(id));
            }}
          >
            Cancel Reserve
          </button>
        ) : (
          <button
            id={id}
            type="button"
            onClick={() => {
              dispatch(bookRocket(id));
            }}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rocket_image: PropTypes.string.isRequired,
};
export default Rocket;
