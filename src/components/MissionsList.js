/* eslint-disable no-unused-vars, no-lone-blocks, max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../Redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  if (missions.length === 0) {
    dispatch(fetchMissions());
  }
  return (
    <div className="col-12 row justify-content-center py-3">
      <div className="col-12 d-none d-md-flex row">
        <div className="col-2 border border-end-0 border-secondary">Mission</div>
        <div className="col-6 border border-end-0 border-secondary">Description</div>
        <div className="col-2 border border-end-0 border-secondary">Status</div>
        <div className="col-2 border border-secondary" />
      </div>
      {missions.map((e) => (<Mission key={e.id} id={e.id} description={e.description} mission_name={e.mission_name} />))}
    </div>
  );
};

export default Missions;
