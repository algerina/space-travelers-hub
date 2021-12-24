/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { bookRocket, cancelReservation } from '../Redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();

  const {
    id, rocket_name, description, rocket_image, reserved,
  } = props;

  const rocketStatus = useSelector((state) => state.rocketReducer).filter((e) => e.id === id);

  const bookingHandler = (rocket) => {
    dispatch(bookRocket(rocket));
  };

  const cancelReservationgHandler = (rocket) => {
    dispatch(cancelReservation(rocket));
  };

  return (
    <div key={id}>
      <img src={rocket_image} alt="rocket" />

      <div>
        <h2>{rocket_name}</h2>
        <p>
          {reserved ? <span className="reserved-button">Reserved</span> : ''}
          {description}
        </p>
        {reserved ? (
          <button
            type="button"
            onClick={() => bookingHandler(id)}
            className="cancel-button"
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            onClick={() => reservationHandler(id)}
            className="reserve-button"
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

//   const rocketDisplay = useSelector((state) => state.rocketReducer).filter((e) => e.id === id);
// };

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rocket_image: Proptypes.string.isRequired,
};
export default Rocket;
