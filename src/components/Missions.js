/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../Redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  // dispatch(fetchMissions());
  if (missions.length === 0) {
    dispatch(fetchMissions());
  }
  return (
    <div>Choose your mission</div>
  );
};

export default Missions;
