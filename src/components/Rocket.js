/* eslint-disable camelcase, no-unused-vars, react/prop-types, react/jsx-no-undef, no-undef */

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import './rocket.css';
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
    <div className="rocketsWrapper">
      <img src={rocket_image} className="rocketImg" alt="rocket-one" />
      <div className="wrapper">
        <h2 className="rocketName">{rocket_name}</h2>
        <div className="description" id="description">
          {reserved && <span className="reserved">Reserved</span>}

          {description}
        </div>
        {reserved ? (
          <button
            id={id}
            className="cancelBtn"
            type="button"
            onClick={() => {
              dispatch(cancelReservation(id));
            }}
          >
            Cancel Reserve
          </button>
        ) : (
          <button
            id={id}
            className="reserveBtn"
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
