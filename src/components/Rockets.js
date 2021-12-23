import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../Redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  }, []);

  return <div>Book your Rocket</div>;
};

export default Rockets;
