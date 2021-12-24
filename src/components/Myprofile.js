/* eslint-disable camelcase, max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import RocketListElement from './RocketListElement';
import MissionListElement from './MissionListElement';

const Myprofile = () => {
  const missionStatus = useSelector((state) => state.missionsReducer).filter((e) => e.reserved);
  const rocketStatus = useSelector((state) => state.rocketReducer).filter((e) => e.reserved);
  return (
    <>
      <div className="col-12 col-md-6 row me-md-1">
        <h3>My Missions</h3>
        {missionStatus.map((e) => <MissionListElement key={e.id} mission_name={e.mission_name} />)}
      </div>
      <div className="col-12 col-md-6 row ">
        <h3>My Rockets</h3>
        {rocketStatus.map((e) => <RocketListElement key={e.id} rocket_name={e.rocket_name} />)}
      </div>
    </>
  );
};
export default Myprofile;
