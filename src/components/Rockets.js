import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, rocketReducer } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    if (rocket.length === 0) dispatch(fetchRockets());
  }, []);

  return <div>Book your Rocket</div>;
};

export default Rockets;
