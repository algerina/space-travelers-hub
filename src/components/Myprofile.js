import React from 'react';
import { useSelector } from 'react-redux';
import ProfileListElement from './ProfileListElement';

const Myprofile = () => {
  const missionStatus = useSelector((state) => state.missionsReducer).filter((e) => e.reserved);

  return (
    <>
      <div className="col-12 col-md-6 row me-md-1">
        <h3>My Missions</h3>
        {missionStatus.map((e) => <ProfileListElement key={e.id} mission_name={e.mission_name} />)}
      </div>
      <div className="col-12 col-md-6 row ">
        <h3>My Rockets</h3>
        {missionStatus.map((e) => <ProfileListElement key={e.id} mission_name={e.mission_name} />)}
      </div>
    </>
  );
};

export default Myprofile;
