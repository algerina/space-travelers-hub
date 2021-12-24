import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';

import { fetchRockets } from '../Redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (rockets.length === 0) dispatch(fetchRockets());
  // }, []);

  if (rockets.length === 0) {
    dispatch(fetchRockets());
  }

  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket
          id={rocket.id}
          key={rocket.id}
          rocket_image={rocket.rocket_image}
          rocket_name={rocket.rocket_name}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
