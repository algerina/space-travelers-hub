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

  //   const rocketStatus = useSelector((state) => state.rocketReducer).filter((e) => e.id === id);

  //   const bookingHandler = (rocket) => {
  //     dispatch(bookRocket(rocket));
  //   };

  //   const cancelReservationgHandler = (rocket) => {
  //     dispatch(cancelReservation(rocket));
  //   };

  return (
    <div>
      {/* {flicker_image.map((rocket) => (
        <Item key={rocket}>
          // <img src={rocket} alt="rocket-one" />
        </Item>
      ))} */}
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

//   const rocketDisplay = useSelector((state) => state.rocketReducer).filter((e) => e.id === id);
// };

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rocket_image: PropTypes.string.isRequired,
};
export default Rocket;
