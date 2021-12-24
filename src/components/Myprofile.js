/* eslint-disable camelcase, max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import ProfileListElement from './ProfileListElement';

const Myprofile = () => {
  const missionStatus = useSelector((state) => state.missionsReducer).filter((e) => e.reserved);
  const rockets = useSelector((state) => state.rocketReducer);

  return (
    <div>
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

      <div>
        <h2>My Rockets</h2>
        {rockets.Rockets.map((rocket) => {
          const { rocket_name, id, reserved } = rocket;
          if (reserved) {
            return (
              <h3 key={id}>
                {rocket_name}
              </h3>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Myprofile;
